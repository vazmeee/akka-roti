import os
from dotenv import load_dotenv

ROOT_PATH = os.path.abspath(__file__).rsplit('/', 2)[0]
ENV_PATH = os.path.join(ROOT_PATH, '.env')
load_dotenv(dotenv_path=ENV_PATH)


class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'your-secret-key'
    MONGO_URI = os.environ.get('MONGO_URI') or 'mongodb://localhost:27017/akkaaroti'
    SUPERTOKENS_CONNECTION_URI = os.environ.get('SUPERTOKENS_CONNECTION_URI') or 'https://try.supertokens.io'
    SUPERTOKENS_API_KEY = os.environ.get('SUPERTOKENS_API_KEY') or 'your-supertokens-api-key'
    SUPERTOKENS_API_DOMAIN = os.environ.get('SUPERTOKENS_API_DOMAIN') or 'http://localhost:5000'
    SUPERTOKENS_WEBSITE_DOMAIN = os.environ.get('SUPERTOKENS_WEBSITE_DOMAIN') or 'http://localhost:3000'
    GOOGLE_CLIENT_ID = os.environ.get('GOOGLE_CLIENT_ID') or '1060725074195-kmeum4crr01uirfl2op9kd5acmi9jutn.apps.googleusercontent.com'
    GOOGLE_CLIENT_SECRET = os.environ.get('GOOGLE_CLIENT_SECRET') or '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'
    GITHUB_CLIENT_ID = os.environ.get('GITHUB_CLIENT_ID') or '467101b197249757c71f'
    GITHUB_CLIENT_SECRET = os.environ.get('GITHUB_CLIENT_SECRET') or 'e97051221f4b6426e8fe8d51486396703012f5bd'
    APPLE_CLIENT_ID = os.environ.get('APPLE_CLIENT_ID') or "4398792-io.supertokens.example.service"
    APPLE_KEY_ID = os.environ.get('APPLE_KEY_ID') or "7M48Y4RYDL"
    APPLE_KEY_PRIVATE = os.environ.get('APPLE_KEY_PRIVATE') or "-----BEGIN PRIVATE KEY-----\nMIGTAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBHkwdwIBAQQgu8gXs+XYkqXD6Ala9Sf/iJXzhbwcoG5dMh1OonpdJUmgCgYIKoZIzj0DAQehRANCAASfrvlFbFCYqn3I2zeknYXLwtH30JuOKestDbSfZYxZNMqhF/OzdZFTV0zc5u5s3eN+oCWbnvl0hM+9IW0UlkdA\n-----END PRIVATE KEY-----"
    APPLE_TEAM_ID = os.environ.get('APPLE_TEAM_ID') or "YWQCXGJRJL"
    TWITTER_CLIENT_ID = os.environ.get('TWITTER_CLIENT_ID') or '4398792-WXpqVXRiazdRMGNJdEZIa3RVQXc6MTpjaQ'
    TWITTER_CLIENT_SECRET = os.environ.get('TWITTER_CLIENT_SECRET') or 'BivMbtwmcygbRLNQ0zk45yxvW246tnYnTFFq-LH39NwZMxFpdC'
