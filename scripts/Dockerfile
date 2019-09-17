FROM node:11.1.0-alpine

# Create app directory
RUN mkdir /app
WORKDIR /app

# Install app dependencies
COPY package.json .
COPY package-lock.json .
COPY tsconfig.json .

RUN apk add --no-cache --virtual .gyp \
        python \
        make \
        g++ \
    && npm install --production \
    && apk del .gyp

# Bundle app source
COPY ./src ./src
RUN ls -la && npm run build && rm -rf src

CMD [ "npm", "start" ]