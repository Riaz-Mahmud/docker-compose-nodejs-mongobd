# LAMP stack built with Docker Composer for Node.js PHP MongoDB MongoExpress Redis

A basic LAMP stack environment built using Docker Compose. It consists of the following:

- NodeJs
- MongoDB
- MongoDB Express
- PHP
- Redis

## Installation

- Clone this repository on your local computer
- configure .env as needed
- copy your nodejs app to the www/backend folder
- copy your frontend app to the www/frontend folder
- Run the `docker-compose up -d`.

```shell
git clone https://github.com/Riaz-Mahmud/docker-nodejs-mongobd-php-mongoExpress-redis.git
cd docker-compose-nodejs-mongobd
// modify .env as needed
docker compose up -d
docker ps // check if all containers are running
// visit localhost
```

Your project is now ready!! You can access it via `http://localhost`.

## Versions

- NodeJs latest
- MongoDB latest
- MongoDB Express latest
- PHP latest
- Redis latest

You can also change the version of a specific service you want by simply editing the `.env` file at the root of this project and changing the version number of the service you want to use.


## Docker Compose Files

- `docker-compose.yml` - The primary docker compose file. It consists of all the services needed for setting up the LAMP stack environment.


## Configuration and Usage

Please read from the official docker documentation for more configuration and usage [Docker Compose](https://docs.docker.com/compose/).

## License

The MIT License (MIT). Please see [License File](LICENSE) for more information.
