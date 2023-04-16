# Tick It
Developer: Jamie King

![Mockup image](docs/readme/am-i-responsive.png)

The Tick It........ 

[View live website](https://tick-it-app-pp5.herokuapp.com/)


## Table of Contents
  - [About](#about)
  - [Project Goals](#project-goals)
  - [User Stories](#user-stories)
  - [Design](#design)
    - [Colours](#colours)
    - [Fonts](#fonts)
    - [Wireframes](#wireframes)
  - [Technologies Used](#technologies-used)
    - [Languages](#languages)
    - [Libraries, frameworks and dependencies](#libraries-frameworks-and-dependencies)
    - [Tools & Programs](#tools--programs)
  - [Front-End](#front-end)
  - [Back-End API](#back-end-api)
  - [Features](#features)
  - [Future features / improvements](#future-features--improvements)
  - [Validation](#validation)
  - [Testing](#testing)
    - [Manual testing of user stories](#manual-testing-of-user-stories)
    - [Performing tests on various devices](#performing-tests-on-various-devices)
    - [Browser compatibility](#browser-compatibility)
  - [Bugs](#bugs)
  - [Config](#config)
  - [Credits](#credits)


## About

## Project Goals

The goal for this project was to build a platform to .

The key functionality aspects:
- user authentication


## User Stories

1. As a new user, I can register an account with Tick It so that I can become a member and use the app as intended.
2. As a user, I can use the navigation bar so that I can seamlessly navigate around the app.
3. As a user, I can to see visual indicators for example of having watched / unwatched a task so that I can tell what my status of watching is.
4. As a user, I can watch and unwatch tasks so that I can keep up to date with that particular task via a filtered list.
As a user, I can view a list of my watched tasks so that I can focus on content I wish to view.
As a user, I can use the search bar on the Task list section so that I can find particular tasks easier.
5. As a user, I can delete my tasks so that I can permanently remove tasks I do not wish to keep.
6. As a user, I can edit my tasks so that I can correct spelling mistakes or I may have entered into the task information fields.
7. As a user, I can view task comments so that I can obtain more information on the task in question.
8. As a user, I can comment on other tasks so that I can interact with other users.
As a user, I can edit or delete my comment on a task incase of input error.
9. As a user, I can manage my tasks so that I can add, edit or delete posts as needed.
10. As a user, I can request a password so that I can log back into my account if I have forgotten my password.
11. As a user, I can log in so that I can access my account, view my profile, tasks and other user's tasks.
12. As a user, I can log out so that other users using the same device cannot access my account.
13. As a user, I can have a profile page so that I and other users can view my list of tasks, packs and assigned tasks.
14. As a user, I can update my profile so that my profile can stay up to date with my latest information.
15. As a user, I can add a profile picture so that other members can easily recognize my tasks or comments.
16. As a user, I can view the Home Page so that I can understand what the website is about, create an account or log in.
17. As a user, I can display basic info on my profile page so that other members can learn more about me.
18. As a user, I can search for tasks via a task bar so that I can specific tasks based on those keywords.
19. As a user, I can fill in a contact form so that I can enquire about issues I may have regarding the app.
20. As a user, I can receive feedback so that I can confirm whether the contact form submission was successful or not.
21. As a user, I can scroll through the latest tasks on the app so that I can find new tasks to complete.
22. As a user, I can browse a list of user accounts so that I can view that particular account.

## Site Owner Stories

23. As the site owner, I would want to validate users' data entries on sign up so that users can create a log in which meets the requirements.
24. As the site owner, I would want to ensure only logged in users can post from their account and edit their profile so that data privacy is ensured.
25. As the site owner, I would want to have the ability to remove posts so that I can keep the app clean and friendly.
26. As the site owner, I would want the site to be fully responsive so that users can use it across multiple devices and create a good user experience.
27. As the site owner, I would want to use the app search function so that I can search for particular tasks by their title.
28. As the site owner, I would want 404 and 500 error pages so that users do not have to use the back navigation button if an error occurs.
 


##### Back to [top](#tick-it)


## Design

### Colours

The colour scheme for this application was inspired by 

<img src="docs/readme/color-scheme-tick-it.png">

### Fonts

Google Fonts were implemented on the website. 

### Wireframes

Balsamiq was used to create wireframes of the sites pages

<details>
<summary>Wireframes</summary>
<img src="docs/wireframes/wireframe-home-not-signed-in.png">
<img src="docs/wireframes/wireframe-hopme-signed-in.png">
<img src="docs/wireframes/wireframe-sign-up.png">
<img src="docs/wireframes/wireframe-log-in.png">
<img src="docs/wireframes/wireframe-task-list.png">
<img src="docs/wireframes/wireframe-task-detail.png">
<img src="docs/wireframes/wireframe-watched-list.png">
<img src="docs/wireframes/wireframe-pack-list.png">
<img src="docs/wireframes/wireframe-pack-detail.png">
<img src="docs/wireframes/wireframe-create-task.png">
<img src="docs/wireframes/wireframe-edit-task.png">
<img src="docs/wireframes/wireframe-create-pack.png">
<img src="docs/wireframes/wireframe-edit-pack.png">
<img src="docs/wireframes/wireframe-profile.png">
<img src="docs/wireframes/wireframe-edit-profile.png">
<img src="docs/wireframes/wireframe-users.png">
<img src="docs/wireframes/wireframe-contact.png">

</details>

##### Back to [top](#tick-it)


## Technologies Used

### Languages

- HTML
- CSS
- Javascript
  - React (17.0.2)

### Libraries, frameworks and dependencies

- [Axios](https://axios-http.com/docs/intro) - axios were used for promise-based HTTP. Justification: I used axios to send API requests from the React project to the API and avoid any CORS errors when sending cookies.
- [JWT](https://jwt.io/) - library to decode out JSON Web token. Justification: I used JWT to  from the browser when the user refreshes token expires or the user logs out.
- [React 17](https://17.reactjs.org/) - JavaScript library for building user interfaces
- [React-Bootstrap 2.7.2](https://) - Justification: I used Bootstrap React library for UI components, styling and responsiveness.
- [React Infinite Scroll](https://www.npmjs.com/package/react-infinite-scroll-component) - Justification: I used this component to load content (tasks/comments) automatically as the user scrolls towards the bottom of the page without having to jump to next/previous page.
- [React Router](https://v5.reactrouter.com/web/guides/quick-start) - used for dynamic routing. Justification: I used this library to 

### Tools & Programs

- [Am I Responsive](http://ami.responsivedesign.is/) was used to create the multi-device mock-up at the top of this README.md file
- [Balsamiq](https://balsamiq.com/) to create the projects wireframes
- [Chrome dev tools](https://developers.google.com/web/tools/chrome-devtools/) was used for debugging of the code and checking site for responsiveness
- [Cloudinary](https://cloudinary.com/) to store static files
- [Font Awesome](https://fontawesome.com/) - Icons from Font Awesome were used throughout the site
- [Google Fonts](https://fonts.google.com/) - import of Inter font
- [Git](https://git-scm.com/) was used for version control within VSCode to push the code to GitHub
- [GitHub](https://github.com/) was used as a remote repository to store project code
- [Gitpod](https://gitpod.io) was used to host a virtual workspace
- Validation:
  - [WC3 Validator](https://validator.w3.org/) was used to validate the applications html
  - [Jigsaw W3 Validator](https://jigsaw.w3.org/css-validator/) was used to validate the applications css
  - [ESLint](https://eslint.org/) used to validate applications JSX code
  - [Lighthouse](https://developers.google.com/web/tools/lighthouse/) used to validate performance, accessibility, best practice and SEO of the application
  - [Wave](https://wave.webaim.org/) - used to evaluate the applications accessibility

##### Back to [top](#tick-it)


## Front-End

### React

React is..... 

I used React for this application for several reasons:
- xxx - xxxx

There were various components created and reused across this application.

- `<Asset />` - resuable component, used to ...

- `<Asset />` - resuable component, used to ...


## Back-End API

### Django REST Framework

The API for this Front-End application was built with the Django REST Framework. The repository with a README file for the DRF Back-End can be found [here](https://github.com/jkingportfolio/CI_PP5_Tick_It_drf_api).

##### Back to [top](#tick-it)


## Features

### Feature name
- Includes 
- Contains direct links to 
- User stories covered: 1, 3

<details><summary>See feature screenshot</summary>
<img src="docs/features/feature-xxxxx-page.png">
</details>


## Future features / improvements

Example of potential improvements to this project:

- Feature category
  - Additional feature description
  - Forgotten password option to recover access to the account via email
  - Allow user authentication with already existing accounts, e.g. LinkedIn, Google, etc. 
- Feature category
  - Additional feature description

##### Back to [top](#tick-it)


## Validation 

### HTML
The W3C Markup Validation Service was used to validate the HTML of the website. No errors were identified. 

<details><summary>Main page</summary> 
<img src="docs/validation/html-validation-main-page.png"> 
</details> 

<details><summary>Signup page</summary> 
<img src="docs/validation/html-validation-signup-page.png"> 
</details>

<details><summary>Login page</summary> 
<img src="docs/validation/html-validation-login-page.png"> 
</details>

<details><summary>Task page</summary>
<img src="docs/validation/html-validation-task-page.png">
</details>


### CSS

The W3C Jigsaw CSS Validation Service was used to validate the CSS of the website. All CSS modules pass the validation with no errors.

<details><summary>App.module.css</summary> 
<img src="docs/validation/css-validation-app.png"> 
</details> 


### JSX
The JSX code was validated using the ESLint utility.

<details><summary>Eslint validation for components</summary> 
<img src="docs/validation/eslint-components.png"> 
</details> 

<details><summary>Eslint validation for contexts</summary> 
<img src="docs/validation/eslint-contexts.png"> 
</details> 

<details><summary>Eslint validation for hooks</summary> 
<img src="docs/validation/eslint-hooks.png"> 
</details> 

<details><summary>Eslint validation for all pages</summary> 
<img src="docs/validation/eslint-pages.png"> 
</details> 


### Chrome Dev Tools Lighthouse 

Lighthouse was used to test the performance, accessibility, best practice and SEO of the site. The validation was done for both desktop & mobile.  

#### Desktop 

<details><summary>page</summary> 
<img src="docs/validation/lighthouse-page-desktop.png "> 
</details> 



#### Mobile 

<details><summary>page</summary> 
<img src="docs/validation/lighthouse-page-mobile.png "> 
</details> 




### Wave
The WAVE WebAIM web accessibility evaluation tool was used to test the websites accessibility.
There were a few errors related to missing labels and contrast issues on buttons. These errors were rectified.

<details><summary>Landing page</summary>
<img src="docs/validation/wave-landing-page.png">
</details>



##### Back to [top](#tick-it)


## Testing
 
### Manual testing of user stories

1. As a user, I can 

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
 |  | Works as expected |
 
<details><summary>Screenshot</summary>
<img src="docs/testing/user-stories-testing/user-story-01.png">
</details>



### Performing tests on various devices

The website was tested using 

The website was tested on the following devices:
- Device one
- Device two


### Browser compatibility

Testing has been carried out on the following browsers:
- Googe Chrome, version xxx.xxx.xxx.xxx

##### Back to [top](#tick-it)


## Bugs

| **Bug** | **Fix** |
| ------- | ------- |
|  |  |


##### Back to [top](#tick-it)


## Config

### Forking the GitHub Repository

We can make a copy of the original repository on our GitHub account to view or make changes too without affecting the original repository, this is known as forking. Forking in GitHub can be done via the following steps:

1. Navigate to www.github.com and log in.
2. Once logged in navigate to the desired [GitHub Repository](https://github.com/jkingportfolio/ci_pp5_tick_it_react) that you would like to fork.
3. At the top right corner of the page click on the fork icon.
4. There should now be a copy of your original repository in your GitHub account.

Please note if you are not a member of an organisation on GitHub then you will not be able to fork your own repository.
   
### Clone a GitHub Repository

You can make a local clone of a repository via the following steps: 

1. Navigate to www.github.com and log in.
2. Once logged in navigate to the desired [GitHub Repository](https://github.com/jkingportfolio/ci_pp5_tick_it_react) that you would like to clone.
3. Locate the code button at the top, above the repository file structure.
4. Select the preferred clone method from HTTPS. SSH or GitHub CLI then click the copy button to copy the URL to your clipboard.
5. Open Git Bash
6. Update the current working direction to the location in which you would like the clone directory to be created.
7. Type `git clone` and paste the previously copied URL at Step 4.
8. `$ clone https://github.com/jkingportfolio/ci_pp5_tick_it_react`
9. Now press enter and the local clone will be created at the desired local location

##### Back to [top](#tick-it)


## Credits

### Tutorials

- Real Python Django redirects tutorial - [The Ultimate Guide to Django Redirects](https://realpython.com/django-redirects/)


### Code

 Code from external sources were used as a basis and built on top of in this project, they are credited below:

 - 

### Literature

The use of reference books were used throughout the creation of this project and are credited below:

- Title - Author, published by 

### Misc

The source of where I learned how to produce a GitHub fork and clone was from the following pages of the GitHub Documentation. Although I did not use a fork or clone in this project it is something I hope to implement to future projects now I have the knowledge to do so.

- https://docs.github.com/en/get-started/quickstart/fork-a-repo
- https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository

Some images were used in this site and are credited below

- [Image](link) image on xxxxx page -  by [Owner](link)


## Acknowledgements

I would like to also thank the following:
- My wife and family for their support and feedback whilst doing this project
- Code Institute tutor support who helped with the many issues I had during this project.
- My Code Institute mentor Mo Shami for his guidance through this project.


[Back to Top](#tick-it)