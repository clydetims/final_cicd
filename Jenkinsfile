pipeline {
    agent any

    triggers {
        githubPush()
    }

    tools {
        nodejs "NodeJS" // Ensure this name matches your Jenkins Global Tool Configuration
    }


    parameters {
        choice(name: 'ENVIRONMENT', choices: ['DEV', 'QA', 'PROD'], description: 'Select the environment for deployment')
    }

    environment {
        DOCKER_IMAGE = "realtime-app"
        DEV_PORT = "3001"
        QA_PORT = "3002"
        PROD_PORT = "3003"
    }

    stages {
        stage('Prepare Environment') {
            steps {
                script {
                    // Determine the target environment early based on parameters or job name fallback
                    env.TARGET_ENV = params.ENVIRONMENT ?: (env.JOB_NAME.contains('QA') ? 'QA' : (env.JOB_NAME.contains('PROD') ? 'PROD' : 'DEV'))
                    echo "Target Environment: ${env.TARGET_ENV}"
                }
            }
        }

        stage('Checkout') {
            steps {
                echo "Pulling latest code from repository..."
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo "Installing npm dependencies..."
                sh 'npm install'
            }
        }

        stage('Run Unit Tests') {
            steps {
                echo "Executing unit tests..."
                sh 'npm test'
            }
        }

        stage('Build Docker Image') {
            steps {
                echo "Building Docker image for ${env.TARGET_ENV}..."
                sh "docker build -t ${env.DOCKER_IMAGE}:${env.TARGET_ENV.toLowerCase()} ."
            }
        }

        stage('Deploy to Environment') {
            steps {
                script {
                    def port = ""
                    def containerName = ""
                    
                    if (env.TARGET_ENV == 'DEV') {
                        port = DEV_PORT
                        containerName = "realtime-app-dev"
                    } else if (env.TARGET_ENV == 'QA') {
                        port = QA_PORT
                        containerName = "realtime-app-qa"
                    } else if (env.TARGET_ENV == 'PROD') {
                        port = PROD_PORT
                        containerName = "realtime-app-prod"
                    }

                    echo "Deploying to ${env.TARGET_ENV} environment on port ${port}..."

                    // Stop and remove existing container if it exists
                    sh "docker stop ${containerName} || true"
                    sh "docker rm ${containerName} || true"

                    // Run new container
                    sh "docker run -d --name ${containerName} -p ${port}:3000 ${env.DOCKER_IMAGE}:${env.TARGET_ENV.toLowerCase()}"
                }
            }
        }
    }


    post {
        success {
            echo "Deployment successful!"
        }
        failure {
            echo "Deployment failed. Please check Jenkins logs."
        }
    }
}

