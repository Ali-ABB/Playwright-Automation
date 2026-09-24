pipeline {
  agent any

  options {
    timestamps()
    disableConcurrentBuilds()
  }

  environment {
    CI = 'true'
    PATH = "/usr/local/bin:/opt/homebrew/bin:${env.PATH}"
  }

  stages {
    stage('Install') {
      steps {
        sh 'node -v'
        sh 'npm ci'
        sh 'npx playwright install chromium'
      }
    }

    stage('Smoke') {
      steps {
        sh 'npm run test:smoke'
      }
    }
  }

  post {
    always {
      junit allowEmptyResults: true, testResults: 'test-results/junit.xml'
      archiveArtifacts allowEmptyArchive: true, artifacts: 'playwright-report/**,test-results.json,test-results/junit.xml'
    }
  }
}
