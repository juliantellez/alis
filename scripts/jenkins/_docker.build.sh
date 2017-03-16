#!/bin/bash
set -e

docker build -t "$APP"  --build-arg NODE_ENV="$NODE_ENV" --file Dockerfile .
