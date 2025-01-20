pipeline{
    agent any
    tools{
        nodejs 'NodeJS'
    }
    environment{
        DOCKER_HUB_REPO='nithin8/devops-project'
        DOCKER_HUB_CREDENTIAL_ID='jenkins-docker'
    }
    stages{
        stage('Checkout github'){
            steps{
                echo 'Checkout github'
                git credentialsId: 'github-credentials', url: 'https://github.com/Nithin-kasturi/Devops-Project'
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
                    dockerImage=docker.build("${DOCKER_HUB_REPO}:latest")
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
                docker.withRegistry('https://registry.hub.docker.com',"${DOCKER_HUB_CREDENTIAL_ID}"){
                   dockerImage.push("latest")
                }
                }
            }
        }
        // stage('Install kubectl argocd cli'){
            
        //     steps{
        //         script{
        //             sh '''
        //             echo 'Install kubectl argocd cli'
		// 		    curl -sSL -o /usr/local/bin/argocd https://github.com/argoproj/argo-cd/releases/latest/download/argocd-linux-amd64
		// 		    chmod +x /usr/local/bin/argocd
        //             '''

        //         }
        //     }
        // }
        stage('Apply Kubernetes Manifests & Sync App with ArgoCD'){
			steps {
				script {
					kubeconfig(credentialsId: 'kubeconfig', serverUrl: 'https://192.168.49.2:8443') {
    						sh '''
						argocd login 18.204.209.207:31559 --username admin --password $(kubectl get secret -n argocd argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d) --insecure
						argocd app sync argocd-jenkins
						'''
					}	
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
