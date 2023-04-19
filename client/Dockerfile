FROM node:13-alpine

# ENV MONGO_DB_USERNAME=admin \
#     MONGO_DB_PWD=password


# set default dir so that next commands executes in /home/app dir
WORKDIR /usr/client

COPY package.json .
COPY package-lock.json .

# will execute npm install in /home/app because of WORKDIR
RUN npm install
RUN npx browserslist@latest --update-db

COPY . .

RUN npm run build

# Run the application
CMD ["sh","-c", "npm start"]