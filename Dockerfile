FROM node:16.13.0-bullseye
USER root
RUN ["npm", "install", "-g", "@swc/core-linux-x64-gnu"]
USER node
WORKDIR /home/node/app
CMD ["npm", "run", "dev"]