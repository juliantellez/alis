#!/bin/bash
set -e

curl -sSL http://deis.io/deis-cli/install-v2.sh | bash
chmod +x deis

ECR_TOKEN=$(aws --region eu-west-1 ecr get-authorization-token --output text | cut -f 2 | base64 -d | cut -d: -f2)
ECR_ENDPOINT=$(aws --region eu-west-1 ecr get-authorization-token --output text | cut -f 4)
docker login -u AWS -p "$ECR_TOKEN" "$ECR_ENDPOINT"

./deis login "http://deis.deis-$NODE_ENV.aliway.co" --username=jenkins --password="$DEIS_JENKINS_PASSWORD"
./deis registry:set username=AWS password="$ECR_TOKEN" -a "$APP-$NODE_ENV"
./deis builds:create "$AWS_ECR/$APP:$BUILD_TAG" -a "$APP-$NODE_ENV" || true
