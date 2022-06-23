---
sidebar_position: 3

---

# Installing Cenit IO step by step

The best way to install Cenit IO on your server is by using docker-compose. However there is an issue we need to solve in order to enable the installation using docker, so you can use this alternative way in the meantime.

## Guide for Cenit installation on-premise

### Pre-condition

As a pre-condition, RabbitMQ must be installed. If you need to install RabbitMQ you can follow these steps: https://www.rabbitmq.com/install-debian.html

### 1- Install MongoDB

You need to install MongoDB

1. sudo apt update

2. sudo apt install -y mongodb

3. Check the service and the database:  sudo systemctl status mongodb

### 2- Install the Cenit UI Frontend

Then you need to install the frontend

1. Clone the repository at https://github.com/cenit-io/ui

2. Install it using yarn (You may use npm but we recommend to use yarn instead)

3. You need to create a config file named  .env.local  in the root directory in order to config a local backend. The file content is:

```
REACT_APP_LOCALHOST="http://127.0.0.1:3000"
REACT_APP_APP_ID="admin"
REACT_APP_CENIT_HOST="http://127.0.0.1:3001"
```

4. Start the frontend ui:  yarn start

### 2- Install the Cenit UI Backend

1. Clone the repository at https://github.com/cenit-io/cenit

2. Install Ruby 2.5.5  by using rvm  (You may use rpm but we recommend to use rvm instead)
- Install the rvm https://rvm.io/rvm/install

- Install ruby version 2.5.5: rvm install 2.5.5

- Create a cenit gemset to install all the gems: rvm gemset create cenit

- Select cenit gemset created: rvm use 2.5.5@cenit

- Install  the gem bundler needed to install the gems: gem install bundler

- Install the gems: bundle install
3. Start the backend server: rails s

### 3- Access Cenit locally

1. If you enter in the browser to localhost:3000 you will see a page like the one below

![image](https://user-images.githubusercontent.com/54523080/175377690-4ed820ee-b451-4e38-81af-c533948b1859.png)

2. If you click Admin you will see a page like the one below

![image](https://user-images.githubusercontent.com/54523080/175377873-3b68786e-79f9-4953-bc2d-72e73e4167ff.png)

3. If you click https://cenit-ui.io the browser will try to access that URL in the cloud.

![image](https://user-images.githubusercontent.com/54523080/175379470-a88ca910-807a-48ce-bb7a-dc1912a7e766.png)

So you need to create a config file named  application.yml  in the cenit/config directory in order to tell Cenit to use a local environment, not the cloud one. The file content is:

```yml
'HOMEPAGE': http://127.0.0.1:3001
'Cenit::Admin:default_uri': http://127.0.0.1:3000
```

4. Start the backend server again: rails s -p 3001

5. Start the frontend ui again:  yarn start

6. Access localhost:3000 again and you will be redirected to 127.0.01:3001, then enter Admin and select http://127.0.0.1:3000

![image](https://user-images.githubusercontent.com/54523080/175379926-ee6d2c25-9106-4c1a-8357-aa2ac4b1ecc5.png)

then you will see the Cenit UI running locally:

![image](https://user-images.githubusercontent.com/54523080/175380152-11facf78-8035-47b7-8d8a-953c668f63df.png)