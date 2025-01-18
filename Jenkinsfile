pipeline {
    agent any

    environment {
        NODE_ENV = 'production'
    }

    tools {
        nodejs 'NodeJS-20' // Use the Node.js version configured in Jenkins
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'jenkins', url: 'https://github.com/Cloudinator/cloudinator-doc.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install --force' // or 'yarn install'
            }
        }

        stage('Update Dependencies') {
            steps {
                script {
                    updateDependencies()
                }
            }
        }

        stage('Check for TypeScript') {
            steps {
                script {
                    // Check if tsconfig.json exists
                    if (fileExists('tsconfig.json')) {
                        echo 'TypeScript detected. Installing @types/node...'
                        sh 'npm install --save-dev @types/node --force'
                    } else {
                        echo 'No TypeScript detected. Skipping @types/node installation.'
                    }
                }
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                sh 'npm run test' // or 'yarn test'
            }
        }

        stage('Deploy') {
            steps {
                sh 'npm run start' // or 'yarn start'
            }
        }
    }

    post {
        success {
            echo 'Build, test, and deploy completed successfully!'
        }
        failure {
            echo 'Pipeline failed. Check the logs for details.'
        }
        always {
            archiveArtifacts artifacts: '**/logs/*.log', allowEmptyArchive: true
        }
    }
}
