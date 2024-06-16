from flask import Flask, request, jsonify, abort, g
from flask_cors import CORS
from pymongo import MongoClient
from config import Config
from auth import init_supertokens, create_supertokens_middleware, is_authenticated, \
    verify_session as supertokens_verify_session
import uuid
from supertokens_python import get_all_cors_headers
from supertokens_python.framework.flask import Middleware

init_supertokens()
app = Flask(__name__)
# create_supertokens_middleware(app)
Middleware(app)
app.config.from_object(Config)

# Initialize SuperTokens

# Create SuperTokens middleware



CORS(
    app=app,
    origins=[
        "http://localhost:3000",
        "http://localhost:3000/",
        "http://127.0.0.1:3000",
        "http://127.0.0.1:3000/",
        "http://0.0.0.0:3000",
        "http://0.0.0.0:3000/",
    ],
    supports_credentials=True,
    allow_headers=["Content-Type"] + get_all_cors_headers(),
)


# MongoDB setup
client = MongoClient(app.config['MONGO_URI'])
db = client.akkaaroti

print(Config.SUPERTOKENS_API_DOMAIN, Config.SUPERTOKENS_CONNECTION_URI)


# Health check endpoint
@app.route('/health', methods=['GET'])
def health_check():
    return jsonify({'status': 'UP', 'message': 'hello from akka roti'})


@app.route("/sessioninfo", methods=["GET"])  # type: ignore
@supertokens_verify_session()
def get_session_info():
    session_ = g.supertokens
    return jsonify(
        {
            "sessionHandle": session_.get_handle(),
            "userId": session_.get_user_id(),
            "accessTokenPayload": session_.get_access_token_payload(),
        }
    )


# # Signup endpoint
# @app.route('/auth/signup', methods=['POST'])
# def signup():
#     # SuperTokens handles user signup
#     return is_authenticated()
#
#
# # Login endpoint
# @app.route('/auth/login', methods=['POST'])
# def login():
#     # SuperTokens handles user login
#     return is_authenticated()
#


@app.route('/profile', methods=['GET', 'POST', 'PUT'])
@supertokens_verify_session()
def profile_crud():
    if request.method == 'GET':
        user_id = request.args.get('user_id')
        results = db.donations.find({"user_id": user_id})
        # if



# Donate endpoint
@app.route('/donate', methods=['POST'])
@supertokens_verify_session()
def donate():
    data = request.get_json()
    user_id = request.args.get('user_id')
    amount = data['amount']
    message = data.get('message', '')

    donation_id = str(uuid.uuid4())
    db.donations.insert_one({'_id': donation_id, 'user_id': user_id, 'amount': amount, 'message': message})

    return jsonify({'message': 'Donation successful!', 'donation_id': donation_id})


# Fetch profile endpoint
@app.route('/profile/<user_id>', methods=['GET'])
# @supertokens_verify_session()
def fetch_profile_donations(user_id):
    # user = db.users.find_one({'_id': user_id})
    # donations = db.donations.find({'user_id': user_id})
    #
    if user_id:
    # if user:
    #     user_data = {
    #         'username': user['username'],
    #         'donations': [{'amount': d['amount'], 'message': d['message']} for d in donations]
    #     }
    #     return jsonify(user_data)
        donations_dummy = [
            {
                'name': 'Alice Johnson',
                'count': 100,
                'message': 'Keep up the great work!',
            },
            {
                'name': 'Bob Brown',
                'count': 50,
                'message': 'Happy to support!'
            },
            {
                'name': 'Charlie Davis',
                'count': 75,
                'message': 'Inspiring work!'
            }
        ]
        return jsonify({'data': donations_dummy})
    else:
        return jsonify({'message': 'User not found!'}), 404


# @app.route('/profile/<user_id>/donations', methods=['GET'])
# def fetch_donations(user_id):



@app.route('/', defaults={'u_path': ''})
@app.route('/<path:u_path>')
def catch_all(u_path: str):
    abort(404)


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=8081)
