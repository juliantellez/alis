#!/bin/bash
set -e

docker tag -f "$APP:latest" "$DOCKER_IMAGE_TAG"
docker push "$DOCKER_IMAGE_TAG"
