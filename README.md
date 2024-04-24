# Project Title
Playground

## Overview

Offering study activities, worksheet customization and small games for kids under 10.

### Problem

Playfround is a website a approperiate worksheet and study activities for my daughter, but didn't find a website with all these functions, and most these kind of websites are full with ads and popups.

### User Profile

- Children play with small games and do study activities in this app.A time limit lock is set for these games and activities to avoid spending so much time on computer.
- Parents can use the worksheet customization page to make the worksheet they need and print or download it.

### Features

1, login 
2, games - At first I will put 1 or 2 small games in this app, and will add more in the future.
3, activities - including math activity, sight word activity and some science activity
4, time lock - the screen will be locked if the user play games or activities more than 15 minites. Parents can unlock it with password.
5, worksheet customization - template will be offered to choose. For math, parent can choose number range, operator etc.

## Implementation

### Tech Stack

- React
- JavaScript
- MySQL
- Express
- Client libraries: 
    - react
    - react-router
    - axios
- Server libraries:
    - knex
    - express
    - bcrypt for password hashing

### APIs


### Sitemap

- Home page
- Game page
- Worksheet page
- Activity page
- Register
- Login

### Mockups

#### Home Page
![](home.png)


### Data


### Endpoints

**GET /user**
**POST /user**


### Auth
- JWT auth

## Roadmap

- Create client
    - react project with routes and boilerplate pages

- Create server
    - express project with routing, with placeholder 200 responses

- Create migrations

- Create seeds with sample user data

- Deploy client and server projects so all commits will be reflected in production

- Feature: Home page

- Feature: Create account
    - Implement register page + form
    - Create POST /users/register endpoint

- Feature: Login
    - Implement login page + form
    - Create POST /users/login endpoint

- Feature: Implement JWT tokens
    - Server: Update expected requests / responses on protected endpoints
    - Client: Store JWT in local storage, include JWT on axios calls

- Bug fixes

- DEMO DAY

## Nice-to-haves

