# E Commerce Database

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This is a challenge project for the UC Berkeley Extension Full-Stack Developer Bootcamp Course. The challenge requires a demonstration of code that creates and updates a `SQL` database.

The project begins with starter code, including some database seeds. The challenge requires setting up the tables for these seeds and related API routes.

There are four types of API calls (GET, PUT, POST, and DELETE), and these are used to access data in three tables used for demonstration (Product, Category, and Tag). There's a fourth table that is not accessed by the APIs but is used to tie together products and tags.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

## Installation

The first step is to copy this repo onto your computer using `git clone`.

The second step is to install a database on your computer; this project was built to work with MySQL, which can be downloaded [here](https://dev.mysql.com/downloads/installer/). In order to hide the database password, it is stored in `.env` in the root directory. You will need to store a password there (more on this below).

This project uses `express`, `mysql2`, `sequelize`, and `dotenv` packages from `npm`. Ensure you have both `node.js` and `npm` initialized in your directory, then use `npm install` to ensure the correct package is installed (a `package.json` file is included in this repo). In addition, you may wish to use an application such as [Insomnia](https://insomnia.rest/) to utilize the API's.

Your `.env` file should include code that looks like this:

```
DB_NAME='ecommerce_db'
DB_USER='[your username, for instance: root]'
DB_PW='[your password]'
```

## Usage

A video demonstrating use of the app can be found [here](https://drive.google.com/file/d/1-Z-ZI_2B5z5q8pmK0rKElwLuLjeXv5QW/view?usp=sharing).

In order to get up and running, follow these steps (as shown in the video):

1. Create a database (named `ecommerce_db`) using the MySQL command line. There is a file provided in this repo to do this which can be run from a `mysql` command line using `source db/schema.sql;`.
2. You may wish to populate the database using the seed data and code provided. This can be done by running `node seeds/index.js`.
3. Start the app using `node server.js`.
4. Then use Insomnia or another application to access the APIs.

## License

This project is licensed using MIT License

See the [LICENSE](./LICENSE) file for license rights and limitations.

## Tests

No testing files are included in this repo.

## Questions

My GitHub username is stuart-rickard; please feel free to contact me through my profile [here](https://github.com/stuart-rickard).
