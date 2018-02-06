pipeline {
    agent {
        docker {
            image 'juliantellez/alisportfolio' 
            args '-p 80:8000' 
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
