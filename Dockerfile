FROM node:20.11.0-bookworm-slim
WORKDIR /app

COPY package*.json ./
RUN npm ci
COPY . .

# make node user as owner for /app dir
RUN chown -R node.node /app

#change user to node
USER node

RUN npm run build

EXPOSE 4000

CMD [ "node", "dist/bin/www.js" ]