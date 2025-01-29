pipeline {
    agent any
    environment {
        // Define the target Linux server's IP and SSH user credentials
        LINUX_HOST = '16.170.251.27'
        LINUX_USER = 'ec2-user'
        SSH_KEY_PATH = 'C:/Users/neerajm/Downloads/demos.pem' // Path to your private key in OpenSSH format (adjusted)
        DIST_PATH = 'C:/ProgramData/Jenkins/.jenkins/workspace/food-del/dist' // Path to the dist folder on the Windows Jenkins agent
    }
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
        stage('Build') {
            steps {
                bat 'npm run build'
            }
        }
        stage('Archive Artifacts') {
            steps {
                archiveArtifacts artifacts: 'dist/**/*', allowEmptyArchive: true
                // Archive dist folder to make sure it's available in Jenkins
            }
        }
        stage('Deploy to Linux') {
            steps {
                script {
                    // Ensure OpenSSH-compatible key is used (convert .ppk to .pem if necessary)
                    // Copy dist folder to the Linux server using SCP
                    sh """
                    scp -i ${SSH_KEY_PATH} -r ${WORKSPACE}/dist/* ${LINUX_USER}@${LINUX_HOST}:/path/to/deployment/directory
                    """
                }
            }
        }
    }
    post {
        always {
            echo 'This always runs!'
        }
    }
}
