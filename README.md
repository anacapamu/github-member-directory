# GitHub Member Directory

GitHub Member Directory is a web app that pulls and displays GitHub user information in cards.

![screenshot](screenshot.png)

## Installation

To run the web app locally:

1. Clone the repo
2. cd into repo
    ```bash
    cd github-member-directory
    ```
3. Install all dependencies
    ```bash
    yarn install
    ```
    or install Vite only
    ```bash
    yarn add vite
    ```
4. Run app
    ```bash
    yarn dev
    ```

## Development Choices

* Only pulled 30 logins from [List users](https://docs.github.com/en/rest/users/users?apiVersion=2022-11-28#list-users) because of unauthorized rate limits of 60 when requesting [Get a user](https://docs.github.com/en/rest/users/users?apiVersion=2022-11-28#get-a-user)
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
* Cache the logins and/or member datas pulled to avoid rate limit issues
* Pagination includes buttons that goes straight to first or last page
* Pagination has CSS hover effect or some sort of indications that numbers are clickable
* User ability to retrieve a certain amount of users or to look up a specific user

If I had more time, I would address the following edge cases:

* Not to render members with missing username/profile link
