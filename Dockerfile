FROM node:16.13.0-bullseye
USER node
WORKDIR /home/node/app
ENTRYPOINT ["npm", "run"]
CMD ["dev"]