# Github Repositories Search
## Purpose

Create a one page application that searches Github repositories by repository names following good UX principles using [React Typescript](https://reactjs.org/), [Styled Components](https://styled-components.com/) and the official [ GitHub V4 API](https://docs.github.com/en/graphql).  
  
The solution is bundled via [Vite](https://vitejs.dev/) to fasten the building time and enable hot-swap.  

The application allows the user to search for repositories with allowed Github symbols and returns the search results. The user can then access the repository via a link. 
You can check the deployed application [here](https://whimsical-begonia-ad4077.netlify.app/)  

## Future Improvements

- Adding a user search functionality in which the user can look through users profiles 
- Adding a pagination for repositories
- Implementing tests
- Isolating the components and integrate them through StoryBook 
- Improve the responsiveness for mobile users 

## Requirements
* [Node.js](https://nodejs.org/en/) version 14.20.0 or above

## Build project
```
$ git clone https://github.com/Kozatoo/Github-search-app.git
$ cd Github-search-app
$ npm install
```
Before running the project you need to create a `.env` file in the project directory that contains this environment variable:

```
VITE_GITHUB_ACCESS_TOKEN='your github access token'
```
If you don't know how to get your personal access token, here is a [tutorial](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) for that

## Available Scripts

In the project directory, you can simply run:

```
npm start
```

Runs the app in the development mode.\
Open [http://localhost:5173/](http://127.0.0.1:5173/) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console since it's implemented with typescript.


## Feedback

For a first React experience, I learned a lot of things about React, its components and its general philosophy.  
  
Unfortunately , due to the project's size, I could't exercise the reusability of the components nor use React in a certain complexity level