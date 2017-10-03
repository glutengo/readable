# Frontend
This is the frontend code of the application, which was completely written by me. The UI was built using react material, check it out at http://www.material-ui.com. 

## Getting Started
To start the application, npm and nodejs need to be present on your machine. Check out https://www.npmjs.com/ and https://nodejs.org to get the latest versions of the two. 

Only two very small steps are required to start the application when npm and node are installed. Make sure you install all required libraries by running the following command in the root folder of this repository.

npm install

When everything is downloaded and installed, stay in the same directory run the following command to get the application running.

npm start

That's it! You can now access the web application in your web browser via this url:

http://localhost:3000 

## Features
The app consists of three pages, which the user can access.

### Home
The home view displays all posts. Users can add new posts via a dialog. Users can sort the posts by votescore or submission date/time. Users can also edit delete posts. Users can down- or upvote posts.

### Category
The category view is identical to the home view except posts are filtered by the chosen category.

### Post Details
In the post details view, the user can see all the details for a post. Apart from submission date, author, votescore, down-/upvote functionality, all comments for the post are displayed. Comments can also be added, edited or deleted here.

## Code
```
+--public/    
 |-- index.html - Template file
 |-- favicon.ico - React Icon
+-- src/
 +-- actions/
  |-- index.js All redux actions
 +-- components/ All react components.
  +-- Comment - Collection of subcomponents to help build components to reflect a comment.
   |-- CommentActions.js - Component which ties together some actions for comments (upvote, downvote, delete, edit).
   |-- CommentList.js - Contains a header with sort functionality and a list of comments.
   |-- CommentListItem.js - Representation of a comment inside a list.
   |-- EditComment.js - Form for editing a comment or adding a new one.
   |-- EditCommentDialog.js - Wraps the EditComment component into a material UI dialog.
  +-- Post - Collection of subcomponents to help build components to reflect a post.
   |-- CommentCount.js - Representation of the number of comments for a post.
   |-- EditPost.js - Form for editing a post or adding a new one.
   |-- EditPostDialog.js - Wraps the EditPost component into a material UI dialog. 
   |-- PostActions.js - Component which ties together some actions for posts (upvote, downvote, delete, edit).
   |-- PostDetails.js - Post details view
   |-- PostList.js - Contains a header with sort functionality and a list of posts.
   |-- PostListItem.js - Representation of a post inside a list.
  |-- App.js - App component. Contains the app bar and the routing information.
  |-- CategoryNavigation.js - Category navigation component. Built with material UI tabs.
  |-- Home.js - Used for home view and category view. Lists posts and allows changing the category as well as adding new posts
  |-- VoteScore.js - Small component to display the votescore of a comment or post 
 +-- config/
   |-- Some config options (e.g. sort options)
 +-- reducers/
  |-- index.js All redux reducers
 +-- util/ - Util javascripts
  |-- BackendAPI.js - A JavaScript API for the provided Udacity backend.
 |-- index.js - Bootstrap file to create redux store and start react application
 |-- index.css - Global styles
|-- .gitignore 
|-- README.MD - This README file.
|-- package.json - npm package manager file.
```

# create-react-app

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). More information on how to perform common tasks can be found [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
