pipeline{
    agent any
    tools{
        nodejs 'NodeJS'
    }
    environment{
        DOCKER_HUB_REPO='nithin8/devops-project'
        DOCKER_HUB_CREDENTIALS_ID=''
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
                echo 'Building docker image'
            }
        }
        stage('Trivy scan'){
            steps{
                echo 'Trivy scan!!'
            }
        }
        stage('Push image to docker hub'){
            steps{
                echo 'Push image to docker hub'
            }
        }
        stage('Install kubectl argocd cli'){
            steps{
                echo 'Install kubectl argocd cli'
            }
        }
        stage('Apply kuebernets manifest & sync app with argocd'){
            steps{
                echo 'Apply kuebernets manifest & sync app with argocd'
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