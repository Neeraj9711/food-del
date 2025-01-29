pipeline {
    agent any  // This means the pipeline will run on any available agent.

    environment {
        NODE_ENV = 'production'  // Example environment variable
    }

    stages {
        // Stage 1: Install dependencies
        stage('Install Dependencies') {
            steps {
                script {
                    // Checkout your project repository from SCM
                    // This will be done automatically by Jenkins in the "Pipeline from SCM" setup
                    echo 'Installing dependencies...'
                    bat 'npm install'  // Run npm install to install dependencies using Windows batch
                }
            }
        }

        // Stage 2: Run Tests
        stage('Run Tests') {
            steps {
                echo 'Running tests...'
                bat 'npm test'  // Run tests using Windows batch command
            }
        }

        // Stage 3: Build the project
        stage('Build') {
            steps {
                echo 'Building the project...'
                bat 'npm run build'  // Example build command for a Node.js app using Windows batch
            }
        }

        // Stage 4: Deploy (example stage)
        stage('Deploy') {
            steps {
                echo 'Deploying the app...'
                // Add your deployment command here
                bat './deploy.bat'  // Example: Deploy script (use bat command for Windows)
            }
        }
    }

    post {
        success {
            echo 'Pipeline succeeded!'
        }
        failure {
            echo 'Pipeline failed!'
        }
        always {
            echo 'This always runs!'
        }
    }
}
