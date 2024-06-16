from supertokens_python import init, InputAppInfo, SupertokensConfig
from supertokens_python.recipe.session.framework.flask import verify_session
from supertokens_python.framework.flask import Middleware
from supertokens_python.recipe import session, thirdparty, emailpassword, dashboard, emailverification
from supertokens_python.recipe.thirdparty.provider import ProviderInput, ProviderConfig, ProviderClientConfig

from flask import jsonify, Flask
from config import Config

supertokens_config = SupertokensConfig(
    connection_uri=Config.SUPERTOKENS_CONNECTION_URI,
    api_key=Config.SUPERTOKENS_API_KEY
)

app_info = InputAppInfo(
    app_name="Supertokens",
    api_domain=Config.SUPERTOKENS_API_DOMAIN,
    website_domain=Config.SUPERTOKENS_WEBSITE_DOMAIN,
    # api_base_path='/auth'
)

google_provider_config = ProviderInput(
    config=ProviderConfig(
        third_party_id="google",
        clients=[
            ProviderClientConfig(
                client_id=Config.GOOGLE_CLIENT_ID,
                client_secret=Config.GOOGLE_CLIENT_SECRET
            ),
        ],
    ),
)

github_provider_config  = ProviderInput(
    config=ProviderConfig(
        third_party_id="github",
        clients=[
            ProviderClientConfig(
                client_id=Config.GITHUB_CLIENT_ID,
                client_secret=Config.GITHUB_CLIENT_SECRET
            ),
        ],
    ),
)

apple_provider_config = ProviderInput(
    config=ProviderConfig(
        third_party_id="apple",
        clients=[
            ProviderClientConfig(
                client_id=Config.APPLE_CLIENT_ID,
                additional_config={
                    "keyId": Config.APPLE_KEY_ID,
                    "privateKey": Config.APPLE_KEY_PRIVATE,
                    "teamId": Config.APPLE_TEAM_ID,
                },
            ),
        ],
    ),
)


twitter_provider_config = ProviderInput(
    config=ProviderConfig(
        third_party_id="twitter",
        clients=[
            ProviderClientConfig(
                client_id=Config.TWITTER_CLIENT_ID,
                client_secret=Config.TWITTER_CLIENT_SECRET
            ),
        ],
    ),
)


def init_supertokens():
    init(
        app_info=app_info,
        supertokens_config=supertokens_config,
        framework="flask",
        recipe_list=[
            session.init(),
            emailpassword.init(),
            dashboard.init(),
            emailverification.init(mode='REQUIRED'),
            thirdparty.init(
                sign_in_and_up_feature=thirdparty.SignInAndUpFeature(providers=[
                    google_provider_config,
                    github_provider_config,
                    apple_provider_config,
                    twitter_provider_config
                ])
            ),
        ]
    )


def create_supertokens_middleware(app):
    app.wsgi_app = Middleware(app)


def is_authenticated():
    return verify_session()(lambda: jsonify({'message': 'User is authenticated!'}))
