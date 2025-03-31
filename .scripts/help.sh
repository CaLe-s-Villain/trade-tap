#!/bin/bash

cat << EOF

Available root scripts:

dev             - Start both client and server concurrently
test            - Run tests in both workspaces (Vitest)
lint            - Lint both workspaces (ESLint)
lint:fix        - Auto-fix lint issues in both workspaces
format          - Format all files with Prettier
format:check    - Check formatting without writing changes
cypress:run     - Run Cypress E2E tests from root
cypress:open    - Open Cypress test runner GUI
docker:dev      - Start containers in detached mode (with rebuild)
docker:dev:debug- Start containers in foreground (with rebuild)
docker:down     - Stop and remove containers and volumes
docker:reset    - Full teardown and restart of Docker environment
setup           - Install deps and initialize Husky
scripts:help    - Show this help message

EOF