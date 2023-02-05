# GitHub Member Directory

GitHub Member Directory is a web app that pulls and displays GitHub user information in cards.

## Installation

To run the web app locally:

1. Clone the repo
2. Install vite
    ```bash
    yarn add vite
    ```
3. Run app
    ```bash
    yarn dev
    ```

## Development Choices

* Only pulled 30 logins from [List users](https://docs.github.com/en/rest/users/users?apiVersion=2022-11-28#list-users) because of rate limits when requesting [Get a user](https://docs.github.com/en/rest/users/users?apiVersion=2022-11-28#get-a-user)
* Chose to clip all member details longer than 200px so that all the cards remain the same size and alignment

### Dependencies

* Vite
* ESLint
* Prettier
* Styled Components

## Additional Features

If I had more time, I would add:

* Unit tests
* Better UX design
* Cache the logins and/or member datas pulled
* User ability to retrieve a certain amount of users
