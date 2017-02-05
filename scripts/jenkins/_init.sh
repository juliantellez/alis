#!/bin/bash
set -e

SCRIPTS_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

APP="emails"
AWS_ECR="092411751800.dkr.ecr.eu-west-1.amazonaws.com"
DOCKER_IMAGE_TAG=$AWS_ECR/$APP:$BUILD_TAG

echo "[default]
aws_access_key_id = $ACCESS_KEY_ID
aws_secret_access_key = $SECRET_ACCESS_KEY" > credentials

cp "$SCRIPTS_DIR"/_dockerfile.base Dockerfile
