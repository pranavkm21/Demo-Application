pipeline {
    agent any

    environment {
        NETLIFY_AUTH_TOKEN = 'nfp_AKtV5sPs6nXRqB87W4zJxBE8bp5BJ6yz0e63'
        NETLIFY_PRODUCTION_SITE_ID = '4789d19d-85a5-4255-925e-344d6f752298'
        NETLIFY_STAGING_SITE_ID = '95d43ee9-ed1d-4276-ae8f-169dbc51ca4b'
    }

    stages {
        stage('Checkout Code') {
            steps {
                echo 'Pulling latest code from Git...'
                git branch: 'main', url: 'git@github.com:pranavkm21/Demo-Application.git'
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
                // Uncomment the following line if you want to run lint using npx
                // sh 'npx run lint'
            }
        }

        stage('Deploy to Staging') {
            steps {
                echo 'Deploying to Staging...'
                sh 'npx netlify deploy --site $NETLIFY_STAGING_SITE_ID --auth $NETLIFY_AUTH_TOKEN --dir=dist'
            }
        }

        stage('Deploy to Production') {
            steps {
                input message: 'Approve Production Deployment?'
                echo 'Deploying to Production...'
                sh 'npx netlify deploy --site $NETLIFY_PRODUCTION_SITE_ID --auth $NETLIFY_AUTH_TOKEN --dir=dist'
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
