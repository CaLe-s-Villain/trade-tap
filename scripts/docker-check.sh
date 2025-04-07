#!/bin/bash

# Exit immediately if any command fails
set -e

# Check if Docker is running
if ! docker info >/dev/null 2>&1; then
  echo "❌ Docker is not running."
  echo "   → macOS: Start Docker Desktop"
  echo "   → Windows: Start Docker Desktop (WSL2 supported)"
  echo "   → Linux: Run 'sudo service docker start' or ensure the Docker daemon is running"
  exit 1
fi

# Check if port 5432 is in use (PostgreSQL)
if command -v lsof >/dev/null 2>&1 && lsof -i :5432 >/dev/null 2>&1; then
  echo "❌ Port 5432 is already in use."
  echo "   → You may have a local PostgreSQL instance running."
  echo "   → Stop it or update Docker Compose to use a different port."
  exit 1
fi

# Forward all args to Docker Compose
docker compose --env-file .env.docker "$@"
