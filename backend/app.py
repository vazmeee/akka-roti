from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
# CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})
CORS(app)  # Apply CORS to all routes

users = {}

@app.route('/', methods=['GET'])
def _():
    if request.method == 'GET':
        return jsonify({'status':'hello from akka roti'})
    

@app.route('/api/signup', methods=['OPTIONS', 'POST'])
def signup():
    if request.method == 'OPTIONS':
        return _build_cors_preflight_response()
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    
    if email in users:
        return jsonify({"success": False, "message": "User already exists"}), 400
    
    users[email] = password
    return jsonify({"success": True, "message": "User created successfully"}), 201

@app.route('/api/login', methods=['OPTIONS', 'POST'])
def login():
    if request.method == 'OPTIONS':
        return _build_cors_preflight_response()
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    
    if email not in users or users[email] != password:
        return jsonify({"success": False, "message": "Invalid credentials"}), 400
    
    return jsonify({"success": True, "message": "Login successful"}), 200

def _build_cors_preflight_response():
    response = jsonify({'status': 'success'})
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add("Access-Control-Allow-Headers", "Content-Type")
    response.headers.add('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
    return response

@app.route('/api/test', methods=['GET', 'POST'])
def test():
    if request.method == 'POST':
        data = request.get_json()
        return jsonify({"message": "Data received", "data": data}), 200
    return jsonify({"message": "GET request successful"}), 200


if __name__ == '__main__':
    app.run(debug=True, port=8085)
