pipeline {
    agent local

    environment {
        NETLIFY_AUTH_TOKEN = credentials('nfp_AKtV5sPs6nXRqB87W4zJxBE8bp5BJ6yz0e63')
        NETLIFY_PRODUCTION_SITE_ID = '4789d19d-85a5-4255-925e-344d6f752298'
        NETLIFY_STAGING_SITE_ID = '95d43ee9-ed1d-4276-ae8f-169dbc51ca4b'
    }

    stages {
        stage('Checkout Code') {
            steps {
                echo 'Pulling latest code from Git...'
                git url: 'https://github.com/pranavkm21/Demo-Application.git', branch: 'main'
            }
        }

        stage('Build') {
            steps {
                echo 'Running build steps...'
                sh 'npm install'
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                echo 'Running lint check...'
                sh 'npm run lint'
            }
        }

        stage('Deploy to Staging') {
            steps {
                echo 'Deploying to Staging...'
                sh 'netlify deploy --site $NETLIFY_STAGING_SITE_ID --auth $NETLIFY_AUTH_TOKEN --dir=dist --prod=false'
            }
        }

        stage('Deploy to Production') {
            steps {
                input message: 'Approve Production Deployment?'
                echo 'Deploying to Production...'
                sh 'netlify deploy --site $NETLIFY_PRODUCTION_SITE_ID --auth $NETLIFY_AUTH_TOKEN --dir=dist --prod=true'
            }
        }
    }

    post {
        success {
            echo 'Pipeline executed successfully!'
        }
        failure {
            echo 'Pipeline failed!'
            
            mail to: 'admin@example.com',
                 subject: "Pipeline failed",
                 body: "The pipeline execution failed. Please check the logs for more details."
        }
    }

}
