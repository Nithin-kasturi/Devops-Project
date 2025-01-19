pipeline{
    agent any
    tools{
        nodejs 'NodeJS'
    }
    environment{
        DOCKER_HUB_REPO='nithin8/devops-project'
    }
    stages{
        stage('Checkout github'){
            steps{
                echo 'Checkout github'
                git credentialsId: 'devops-project', url: 'https://github.com/Nithin-kasturi/Devops-Project.git'
            }
        }
        stage('Install node dependencies'){
            steps{
                sh 'npm install'
            }
        }
        stage('Build docker images'){
            steps{
                script{
                    echo 'Building docker image'        
                    docker.build("${DOCKER_HUB_REPO}:latest")
                }
            }
        }
        stage('Trivy scan'){
            steps{
                script{
                    echo 'Trivy scan!!'
                    sh 'trivy --severity HIGH,CRITICAL --skip-update --no-progress image --format table -o trivy-scan-report.txt ${DOCKER_HUB_REPO}:latest'
                }

            }
        }
        stage('Push image to docker hub'){
            steps{
                script{
                echo 'Push image to docker hub'

                }
            }
        }
        stage('Install kubectl argocd cli'){
            
            steps{
                script{
                    echo 'Install kubectl argocd cli'
                }
            }
        }
        stage('Apply kuebernets manifest & sync app with argocd'){
            steps{
                script{
                    echo 'Apply kuebernets manifest & sync app with argocd'

                }
            }
        }
    }
    post{
        success{
            echo 'Build and deploy completed succesfully'
        }
        failure{
            echo 'Build & deploy failed'
        }
    }
}
