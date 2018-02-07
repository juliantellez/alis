pipeline {
    agent {
        docker {
            image 'node:6.8.0' 
            args '-p 4000:8000' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
    }
}
