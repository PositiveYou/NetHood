# NetHood

Taking back sports to the hood.

## Description

Digital platform that helps people connect, go outside and play their faivorte sports and explore new sport games, anySport, anywhere, anytime.

## Technical Structure

The platfrom is a web based application working with Django Server side & React Client side.

## Installation

Before starting make sure you have installed python 3.6.5, npm and gulp-cli globally. After that feel free to continue.

This will work on both **macOS** and **Windows**.

### To set everything up

* Clone this repository into your local machine - this will create the project-root directory.
* Create a Python `virtualenv` with Python version 3.6.5 - [Learn virturalenv](https://virtualenv.pypa.io/en/stable/userguide/).
* Navigate to project-root directory and run command `python -m pip install -r requirements.txt`.
* Run `npm install` in that directory.
* Navigate into `nethood-react`, run command `npm install`.

## Run the dev servers

### There are two ways to run this environment

* Two dev servers - React and Django.
* One dev server - Django serve the frontend.

#### React and Django

Make sure that **CORS is enabled** on the Django settings and the **python virtualenv is active**.

* Navigate into `nethood-react` and run `npm run start`.
* Navigate into `nethood` and run `python manage.py runserver`.
* Set the API_DOMAIN in the React app to be the provided domain from the python run.

#### Django serve the frontend

* Navigate into `nethood-react` and run `npm run build`.
* Navigate into project-root directory and run `gulp react-to-django`.

## Contribute

First thank you for making the world a better place to play together!
Secondly **FORK** this repository into your own kickass Github account. Pull requests can be passed only if it was **Code Reviewd** by another superstar from the team which is working on the project.

## Bibliography

Don't worry, it'll soon be fuller than your neighborhood's playgrounds.
