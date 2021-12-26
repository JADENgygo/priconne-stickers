FROM node:16.13.0-bullseye
WORKDIR /home/node/app
USER node
CMD ["npm", "run", "dev"]