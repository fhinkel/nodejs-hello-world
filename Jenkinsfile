pipeline {
    agent { docker { image 'node:6.3' } }
    stages {
        stage('build') {
            steps {
                echo 'building....'
                sh 'npm --version'
            }
        }
        stage('deploy') {
            steps {
                echo 'deploying'   
            }
        }
    }
}
