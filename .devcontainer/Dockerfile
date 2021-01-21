ARG VARIANT=14
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:dev-${VARIANT}

RUN su node -c "umask 0002 && npm install -g http-server @vue/cli @vue/cli-service-global nuxt"
WORKDIR /app

EXPOSE 3000
