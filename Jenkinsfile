pipeline {
    agent any
    stages {
        stage('Checkout SCM') {
            steps {
                checkout scm
            }
        }
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }
        // Commenting out or removing the 'Run Tests' stage
        /*
        stage('Run Tests') {
            steps {
                echo 'Running tests...'
                bat 'npm test'
            }
        }
        */
        stage('Build') {
            steps {
                bat 'npm run build'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying the project...'
                // Your deploy commands here
            }
        }
    }
    post {
        always {
            echo 'This always runs!'
        }
    }
}
