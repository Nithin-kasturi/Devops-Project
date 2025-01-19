pipeline{
    agent any
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

                }
            }
        }
        stage('Trivy scan'){
            steps{
                script{
                    echo 'Trivy scan!!'
                
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
