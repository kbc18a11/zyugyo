pipeline {
    agent { dockerfile true }
    environment {
        HOME = '.'
    }
    stages {
        stage('install node modules') {
            steps {
                sh 'npm install'
                sh 'npm start &'
            }
        }
        stage('modulesTest') {
            steps {
                sh 'npx mocha ./tests/moduletest.js'
            }
        }
        stage('systemTest') {
            steps {
                sh 'npx mocha ./tests/systemtest.js'
            }
        }
    }
}
