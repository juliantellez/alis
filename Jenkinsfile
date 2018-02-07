pipeline {
    agent {
        docker {
            image 'node:8.4.0' 
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
