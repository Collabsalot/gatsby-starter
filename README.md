[![Issues and pull requests labeled "Status: Help wanted"](https://img.shields.io/github/labels/Collabsalot/gatsby-starter/Status%3A%20Help%20wanted?label=label)](https://github.com/Collabsalot/gatsby-starter/labels/Status%3A%20Help%20wanted)
[![Netlify build status](https://img.shields.io/netlify/d3b00a2e-01bf-4619-bd37-f37f48e0a6a6)](https://app.netlify.com/sites/gatsby-starter-collabsalot/deploys)
[![License](https://img.shields.io/github/license/Collabsalot/gatsby-starter)](./LICENSE)
[![GitHub repo size](https://img.shields.io/github/repo-size/Collabsalot/gatsby-starter)](https://shields.io/category/size)
[![GitHub code size](https://img.shields.io/github/languages/code-size/Collabsalot/gatsby-starter)](https://shields.io/category/size)

# gatsby-starter

## Features

- TypeScript
- Auto-generated types from GraphQL
- Linting with ESLint
- Formatting with Prettier

## Getting started

### Install

> Please do not fork this repository to use it as a starter, or else every time you push code, GitHub will think you want to make a pull request to this repository.

You have a few choices for installation:

1. If you'll be hosting your website's code on GitHub, just click on the "Use this template" button above, then:

    ```bash
    git clone https://github.com/[user-name]/[project-name].git
    cd [project-name]
    yarn
    ```

1. If you'll be hosting it elsewhere, or you're a traditionalist:

    ```bash
    gatsby new [project-name] https://github.com/Collabsalot/gatsby-starter.git
    cd [project-name]
    # Replace the following with whatever URL format your host uses, if not GitHub
    git remote add origin https://github.com/[user-name]/[project-name].git
    ```

1. If you prefer to keep the starter's git history intact, so that you can use git to pull in changes made to the starter:

    ```bash
    git clone https://github.com/Collabsalot/gatsby-starter.git [project-name]
    cd project-name
    git remote rename origin upstream
    git remote add origin https://[host-name]/[user-name]/[project-name].git
    ```
