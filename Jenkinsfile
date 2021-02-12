pipeline {
    agent { dockerfile true }
    environment {
        HOME = '.'
    }
    stages {
        stage('install node modules') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npx mocha ./tests/systemtest.js'
            }
        }
    }
}
