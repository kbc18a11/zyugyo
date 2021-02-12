pipeline {
    agent { dockerfile true }
    environment {
        HOME = '.'
    }
    stages {
        stage('Test') {
            steps {
                sh 'npm install'
                sh 'npx mocha ./tests/systemtest.js'
            }
        }
    }
}
