pipeline {
    agent { dockerfile true }
    environment {
        HOME = '.'
    }
    stages {
        stage('Test') {
            steps {
                sh 'npx mocha ./tests/systemtest.js'
            }
        }
    }
}
