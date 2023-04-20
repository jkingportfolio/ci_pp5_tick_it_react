# Tick It
Developer: Jamie King

![Mockup image](docs/readme/am-i-responsive.png)

[View live website](https://tick-it-app-pp5.herokuapp.com/)


## Table of Contents
  1. [About](#about)
  2. [Project Goals](#project-goals)
  3. [User Experience](#user-experience)
      1. [Target Audience](#target-audience)
      2. [User Requirements and Expectations](#user-requirements-and-expectations)
      3. [User Stories](#user-stories)
      4. [Site Owner Stories](#site-owner-stories)
  4. [Technical Design](#technical-design)
      1. [Agile Design](#agile-design)
      2. [CRUD Functionality](#crud-functionality)
      3. [Colours](#colours)
      4. [Fonts](#fonts)
      5. [Wireframes](#wireframes)
  5. [Technologies Used](#technologies-used)
      1. [Coding Languages](#coding-languages)
      2. [Frameworks and Tools](#frameworks-and-tools)
      3. [Libraries](#libraries)
  6. [Front-End](#front-end)
      1. [React](#react)
  7. [Back-End API](#back-end-api)
      1. [Django REST Framework](#django-rest-framework)
  8. [Features](#features)
  9. [Future features / improvements](#future-features--improvements)
  10. [Validation](#validation)
      1. [HTML](#html-validation)
      2. [CSS](#css-validation)
      3. [JSX](#jsx-validation)
      4. [Chrome Dev Tools Lighthouse](#chrome-dev-tools-lighthouse-validation)
      5. [WAVE Validation](#wave-validation)
  11. [Testing](#testing)
      1. [Device Testing](#device-testing)
      2. [Browser Compatibility](#browser-compatibility)
      3. [Manual Testing](#manual-testing)
      4. [Automated Testing](#automated-testing)
  12. [Bugs](#bugs)
  13. [Deployment](#deployment)
      1. [Heroku](#heroku)
      2. [Forking GitHub Repo](#forking-the-github-repository)
      3. [Clone a GitHub Repo](#clone-a-github-repository)
  14. [Credits](#credits)
      1. [Tutorial](#tutorials)
      2. [Code](#code)
      3. [Literature](#literature)
      4. [Misc](#misc)
  15. [Acknowledgements](#acknowledgements)


## About

The Tick It web app has been developed to provide user's the chance to create and carry out tasks online.

## Project Goals

The goal for this project was to build a productivity platform in which users can create tasks where other users who feel they can help, can carry out the work as described in the task detail. Tasks can be assigned to members and packs can also be created to group tasks together.


The key functionality aspects:

- The site to have be simple and use intuitive navigation across all pages
- User authentication
- User interaction via tasks, comments and packs
- User's to have their own profiles with brief description, profile image and tab group consisting of their owned tasks, packs and other users tasks which they have been assigned
- CRUD functionality for task, comments, packs and their profile
- Tasks filtering by keyword search, new tasks and high priority tasks
- Responsiveness to allow pleasant usage of the app across a range of devices woth varying display sizes


## User Experience

### Target Audience

- People who would like help with completing a task
- People who would like to keep track of outstanding tasks they may have
- People who are looking for some tasks to help others with


### User Requirements and Expectations

- A great site which provides a high level of interactiveness between users
- Links and functions to act as expected
- Notification to provide feedback on expected function outcomes
- Simple "to the point" content that a user can easily digest
- Accessibility for impaired users
- Responsiveness to allow pleasant use across devices of different screen sizes 



### User Stories

1. As a new user, I can register an account with Tick It so that I can become a member and use the app as intended.
2. As a user, I can use the navigation bar so that I can seamlessly navigate around the app.
3. As a user, I can see visual indicators for example of having watched / unwatched a task so that I can tell what my status of watching is.
4. As a user, I can watch and unwatch tasks so that I can keep up to date with that particular task via a filtered list.
5. As a user, I can view a list of my watched tasks so that I can focus on content I wish to view.
6. As a user, I can use the search bar on the Task list section so that I can find particular tasks easier.
7. As a user, I can delete my tasks so that I can permanently remove tasks I do not wish to keep.
8. As a user, I can edit my tasks so that I can correct spelling mistakes or I may have entered into the task information fields.
9. As a user, I can view task comments so that I can obtain more information on the task in question.
10. As a user, I can comment on other tasks so that I can interact with other users.
11. As a user, I can edit or delete my comment on a task incase of input error.
12. As a user, I can manage my tasks so that I can add, edit or delete posts as needed.
13. As a user, I can request a password so that I can log back into my account if I have forgotten my password.
14. As a user, I can log in so that I can access my account, view my profile, tasks and other user's tasks.
15. As a user, I can log out so that other users using the same device cannot access my account.
16. As a user, I can have a profile page so that I and other users can view my list of tasks, packs and assigned tasks.
17. As a user, I can update my profile so that my profile can stay up to date with my latest information.
18. As a user, I can add a profile picture so that other members can easily recognize my tasks or comments.
19. As a user, I can view the Home Page so that I can understand what the website is about, create an account or log in.
20. As a user, I can display basic info on my profile page so that other members can learn more about me.
21. As a user, I can search for tasks via a task bar so that I can specific tasks based on those keywords.
22. As a user, I can fill in a contact form so that I can enquire about issues I may have regarding the app.
23. As a user, I can receive feedback so that I can confirm whether the contact form submission was successful or not.
24. As a user, I can scroll through the latest tasks on the app so that I can find new tasks to complete.
25. As a user, I can browse a list of user accounts so that I can view that particular account.

### Site Owner Stories

26. As the site owner, I would want to validate users' data entries on sign up so that users can create a log in which meets the requirements.
27. As the site owner, I would want to ensure only logged in users can post from their account and edit their profile so that data privacy is ensured.
28. As the site owner, I would want to have the ability to remove posts so that I can keep the app clean and friendly.
29. As the site owner, I would want the site to be fully responsive so that users can use it across multiple devices and create a good user experience.
30. As the site owner, I would want to use the app search function so that I can search for particular tasks by their title.
31. As the site owner, I would want a 404 error page so that users do not have to use the back navigation button if an error occurs.
 


##### Back to [top](#tick-it)


## Technical Design

### Agile Design

An Agile approach to creating this app has been applied. GitHub's projects was used to track user stories and implement ideas based on their level of importance for allowing use of the app with no loss of functionality or user experience. Three categories were created indicating their level of importance, those were:
- MUST HAVE
- SHOULD HAVE
- COULD HAVE

By using AGILE methodology in this project I was able to deliver a site which had all required functionality and some more. Due to the time limit on this project I was not able to incorporate all initial listed features, but this is where an AGILE approach is great for app design. The project displays this by having User stories in the Done section and the ones which decided to be left for future put in the future implementation.

The GitHub project can be found [here](https://github.com/users/jkingportfolio/projects/9)

### CRUD Functionality

Tick It handles data with full CRUD Functionality:
<br>
- Create -  Users can create, account, profile, tasks, comment, and watch objects.
- Read - Users can view the tasks of other users and also the profiles of these users.
- Update - Users can update their profile, password, posted tasks and watch status of tasks via the interactive forms and buttons on the site.
- Delete - Users can delete tasks, comments and watch objects via the interactive buttons on the site.

### Colours

The colour scheme for this application was kept minimal with a monochromatic theme kept in mind. 

<details>
<summary>Colours</summary>
<img src="docs/readme/colours.png">
</details>


### Fonts

Google Fonts were implemented on the website. 'Josefin Sans' with a back up of sans-serif was decided as the ideal font for the site.

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

### Coding Languages

- HTML
- CSS
- Javascript
  - React (17.0.2)

### Frameworks and Tools

- [Axios](https://axios-http.com/docs/intro) - axios were used for promise-based HTTP. Justification: I used axios to send API requests from the React project to the API and avoid any CORS errors when sending cookies.
- [JWT](https://jwt.io/) - library to decode out JSON Web token. Justification: I used JWT to  from the browser when the user refreshes token expires or the user logs out.
- [React 17](https://17.reactjs.org/) - JavaScript library for building user interfaces
- [React-Bootstrap 1.6.3](https://) - Justification: I used Bootstrap React library for UI components, styling and responsiveness.
- [React Infinite Scroll](https://www.npmjs.com/package/react-infinite-scroll-component) - Justification: I used this component to load content (tasks/comments) automatically as the user scrolls towards the bottom of the page without having to jump to next/previous page.
- [React Router](https://v5.reactrouter.com/web/guides/quick-start) - Justification: I used this library to enable navigation between views of components and to have the ability to control what is presented to the user based on the URL they have accessed in the browser. 
- [React ChartJS2](https://react-chartjs-2.js.org/) - Justification: used for producing the doughnut chart on the main page. 
- [React Multi Select Component](https://www.npmjs.com/package/react-multi-select-component) - Justification: I used this component to have the ability to select multiple tasks to assign to a pack.

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

### Libraries

#### Installed Libraries

| Package       | Version        |
| ------------- | ------------- |
| axios |1.3.4 |
| bootstrap | 4.6.0 |
| jwt-decode | 3.1.2 |
| react-bootstrap | 1.6.3 |
| react-chartjs-2 | 3.0.4 |
| react-dom | 17.0.2 |
| react-infinite-scroll-component |6.1.0 |
| react-multi-select-component | 4.3.4|
| react-router-dom | 5.3.0 |
| react-scripts | 5.0.1 |
| react-scroll | 1.8.9|


##### Back to [top](#tick-it)


## Front-End

### React

The React.js framework is an open-source JavaScript framework and library developed by Facebook. It's used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript  

I used React for this application for several reasons:

 - Flexibility – Due to having a modular structure React code is easier to maintain compared to other front-end frameworks.

 - Speed – Creating sites/apps with React significantly increases the page loading speed as the entire page does not require to refresh and reload all components. Components are updated dynamically thus reducing the wait and load times, which affects user experience.

 - React Bootstrap - When used for styling and responsiveness React Bootstrap is a great choice as it comes with ready-to-use React built components thus taking away alot of need to create commonly used code from scratch.

- It is the most widely used library for developing social networking and media content applications - Sites such as Meta (formerly Facebook), Instagram, Netflix, Airbnb are all made with React.

- Reusability of components – Components can be created and re used throught the app with no need to re write code for the same features.

There were various components created and reused across this application.

- `<Asset />` - multi purpose component, used to display a range of items due to being passed props. Those include a loading gif, image with source and alt attribute or a message consisting of a paragraph.


- `<Avatar />` - resuable component, used to display the relevant user profile picture. This component uses props which can specify the source of the image and also its size, an example of this components re-use ability is the image size on the profile page being bigger than that of the one in the Nav Bar yet it is the same component and source image used.

- `<DropDown />` - resuable component, used to display the three dots option button based on the required rights of the user and the item in question for example if a user is on their own profile the drop down to edit the profile will appear, however this will not be the case when viewing other users profile pages. 

- `<HighPriorityTasks />` - specific component, used to display a filtered result of all task with the priority status of HIGH.

- `<NavBar />` - resuable component, used for easy navigation of the site. This component is re usable as it will display different icons based on a users logged in status. If no user is logged in a log in, sign up and contact icon will be available however if a user is currently logged in, the full range of icons will be available apart from log in.

- `<PageNotFound />` - specific component, used to display a 404 page made up of an image file and return home button for when the page does not exist.

- `<PasswordCriteria />` - re-usable component, used to display the validation criteria needed for a valid password entry.

- `<ScrollToTop />` - specific component, used to produce a button that will show when the user reaches the bottom of the page, this will allow the user to quickly return to the top of the page without the need for scrolling.

- `<TaskCompleteFilter />` - specific component, used to display a filtered result of all task with the complete status of incomplete or in-progress.

- `<TaskDoughnutChart />` - specific component, used to display a doughnut chart of all tasks completion status providing an easy visual indication of the tasks status.

- `<TaskStatusTable />` - specific component, used to display a numbered table of all tasks completion status providing an easy visual indication of the tasks status.

## Back-End API

### Django REST Framework

The API for this Front-End application was built with the Django REST Framework. The repository with a README file for the DRF Back-End can be found [here](https://github.com/jkingportfolio/CI_PP5_Tick_It_drf_api).

##### Back to [top](#tick-it)


## Features

In its entirety the website consists of a variety of features across the many site pages as listed below.

### Authentication

Authentication is a feature of the Tick It site, users will have to be authenticated whilst attempting to log in or else they will not be able to use any functionality of the site or view any information that Tick It users have posted.

<details>
<summary>Authentication image</summary>
<img src="docs/features/authentication.png">
</details>

- Covered in user stories: 1, 14, 27

### Log In

Log in is a feature of the Tick It site this allows users to log in and view content relevant to their profiles, this feature also controls security and rights of the site with it requiring authentication

<details>
<summary>Log In image</summary>
<img src="docs/features/login.png">
</details>

- Covered in user stories: 14

### Log Out

Log Out is a feature of the Tick It site this will give users the ability to log out of their profile providing a level of security if using the same device as others.

<details>
<summary>Log Out image</summary>
<img src="docs/features/log-out.png">
</details>

- Covered in user stories: 15

### Sign Up

Sign Up is a feature of the Tick It site this will give users the ability to create an account and get involved in the site and use its features. 

<details>
<summary>Sign Up image</summary>
<img src="docs/features/sign-up.png">
</details>

- Covered in user stories: 1

### Home page

Home page is a feature of the Tick It site users will gain an understanding of what the site is about if not logged in and if logged in will be shown various information which is of high priority.

<details>
<summary>Home page image</summary>
<img src="docs/features/home-page.png">
</details>

- Covered in user stories: 19

### Nav Bar

Nav Bar is a feature of the Tick It site giving users the ability to seamlessly navigate the site 

<details>
<summary>Nav Bar image</summary>
<img src="docs/features/nav-bar.png">
</details>

- Covered in user stories: 2

### Profile Section

Profile Section is a feature of the Tick It site giving users some personality on the platform and also grouping all their relevant information in one central point.  

<details>
<summary>Profile Section image</summary>
<img src="docs/features/profile-section.png">
</details>

- Covered in user stories: 16

### Edit Profile

Edit Profile is a feature of the Tick It site giving users the ability to update their profile with their latest information 

<details>
<summary>Edit Profile image</summary>
<img src="docs/features/edit-profile-1.png">
<img src="docs/features/edit-profile-2.png">
</details>

- Covered in user stories: 17 & 18

### Change Password

Change Password is a feature of the Tick It site giving users the ability to change their password if they so desire. 

<details>
<summary>Change Password image</summary>
<img src="docs/features/change-password-1.png">
<img src="docs/features/change-password-2.png">
</details>

- Covered in user stories: 13

### Create task

Create task is a feature of the Tick It site giving users the ability to perform the main functionality of the site which is to create a task based from a form.

<details>
<summary>Create task image</summary>
<img src="docs/features/create-task-1.png">
<img src="docs/features/create-task-2.png">
<img src="docs/features/create-task-3.png">
<img src="docs/features/create-task-4.png">
<img src="docs/features/create-task-5.png">
</details>

- Covered in user stories: 12

### Delete task

Delete task is a feature of the Tick It site giving users the ability to delete their owned tasks at their will. 

<details>
<summary>Delete task image</summary>
<img src="docs/features/delete-task.png">
</details>

- Covered in user stories: 7, 12, 28

### Edit task

Edit task is a feature of the Tick It site giving users the ability to edit their owned tasks at their will via a form.  

<details>
<summary>Edit task image</summary>
<img src="docs/features/edit-task.png">
</details>

- Covered in user stories: 8, 12

### Task comment

Task comment is a feature of the Tick It site giving users the ability to read or create comments on tasks.

<details>
<summary>Task comment image</summary>
<img src="docs/features/task-comment.png">
</details>

- Covered in user stories: 9

### Create task comment

Create task comment is a feature of the Tick It site giving users the ability to create comments on tasks. This will then display in order of time create and have the users profile image and username next to it. 

<details>
<summary>Create task comment image</summary>
<img src="docs/features/create-task-comment.png">
</details>

- Covered in user stories: 10

### Edit task comment

Edit task comment is a feature of the Tick It site giving users the ability to edit comments that they own and posted themselves.

<details>
<summary>Edit task comment image</summary>
<img src="docs/features/edit-task-comment.png">
</details>

- Covered in user stories: 11

### Delete task comment

Delete task comment is a feature of the Tick It site giving users the ability to delete comments that they own.

<details>
<summary>Delete task comment image</summary>
<img src="docs/features/delete-task-comment.png">
</details>

- Covered in user stories: 11, 28


### Task list

Task list is a feature of the Tick It site giving users the ability to view all tasks that have been created on the app.

<details>
<summary>Task list image</summary>
<img src="docs/features/tasks-list.png">
</details>

- Covered in user stories: 21, 24

### Task Search

Task Search is a feature of the Tick It site giving users the ability to search for tasks or users via a keyword query search bar. 

<details>
<summary>Task Search image</summary>
<img src="docs/features/search-bar-1.png">
<img src="docs/features/search-bar-2.png">
</details>

- Covered in user stories: 21, 30

### Watch / Unwatch task

Watch / Unwatch task is a feature of the Tick It site giving users the ability to watch and unwatch tasks which if watched will be displayed in the users watched list, giving the user a means for keeping track of specific tasks. 

<details>
<summary>Watch / Unwatch task image</summary>
<img src="docs/features/watch-task-1.png">
<img src="docs/features/watch-task-2.png">
<img src="docs/features/watch-task-3.png">
</details>

- Covered in user stories: 4

### Watch / Unwatch button

Watch / Unwatch button is a feature of the Tick It site giving users the ability to add or remove a watch object to a specific task.

<details>
<summary>Watch / Unwatch button image</summary>
<img src="docs/features/watch-task-1.png">
<img src="docs/features/watch-task-2.png">
<img src="docs/features/watch-task-3.png">
</details>

- Covered in user stories: 3, 4


### Watched list

Watched list is a feature of the Tick It site giving users the ability to view all of their watched tasks in one central place.

<details>
<summary>Watched list image</summary>
<img src="docs/features/watched-list.png">
</details>

- Covered in user stories: 5

### Input Validation

Input Validation is a feature of the Tick It used throughout the site for form inputs. 

<details>
<summary>Input Validation image</summary>
<img src="docs/features/input-validation.png">
</details>

- Covered in user stories: 1, 14, 26

### Task Count

Task Count is a feature of the Tick It site giving users the ability to display the total amount of tasks they have created and display it on their profile page. 

<details>
<summary>Task Count image</summary>
<img src="docs/features/task-count.png">
</details>

- Covered in user stories: 17

### Create Pack

Create Pack is a feature of the Tick It site giving users the ability to add task to a pack, thus grouping relevant tasks together in one central location.

<details>
<summary>Create Pack image</summary>
<img src="docs/features/create-pack-1.png">
<img src="docs/features/create-pack-2.png">
</details>

- Covered in user stories: ??

### Edit Pack

Edit Pack is a feature of the Tick It site giving users the ability to add or remove tasks from the pack and also update the title and pack description via a form.

<details>
<summary>Edit Pack image</summary>
<img src="docs/features/edit-pack-1.png">
<img src="docs/features/edit-pack-2.png">
</details>

- Covered in user stories: ??

### Delete Pack

Delete Pack is a feature of the Tick It site giving users the ability to delete an owner pack.

<details>
<summary>Delete Pack image</summary>
<img src="docs/features/delete-pack-1.png">
<img src="docs/features/delete-pack-2.png">
</details>

- Covered in user stories: ??

### Responsiveness

Responsiveness is a feature which can be seen through the Tick It site giving users the ability to view the site on various display sizes whilst still having an enojoyable user experience.

<details>
<summary>Responsiveness image</summary>
<img src="docs/features/responsiveness-1.png">
<img src="docs/features/responsiveness-2.png">
</details>

- Covered in user stories: 29

### Search Bar

Search Bar is a feature of the Tick It site giving users the ability to search for tasks or users based on key word input. 

<details>
<summary>Search Bar image</summary>
<img src="docs/features/search-bar-1.png">
<img src="docs/features/search-bar-2.png">
</details>

- Covered in user stories: 29

### Contact

Contact is a feature of the Tick It site giving users the ability to contact the site admin for any reason such as log in issues, reporting a comment or a general enquiry.

<details>
<summary>Contact image</summary>
<img src="docs/features/contact.png">
</details>

- Covered in user stories: 22

### Error pages

Error pages is a feature of the Tick It site which will display a 404 error page and allow the user to easily navigate back to the site.

<details>
<summary>Error pages image</summary>
<img src="docs/features/404.png">
</details>

- Covered in user stories: 31

### Site Feedback

Site Feedback is a feature of the Tick It site which will presented to users at various times in the form of successful html pages and modal messages.

<details>
<summary>Site Feedback image</summary>
<img src="docs/features/feedback-1.png">
<img src="docs/features/feedback-2.png">
</details>

- Covered in user stories: 23

### Users list

Users list is a feature of the Tick It site giving users the ability to view all users signed up to the site.

<details>
<summary>Users list image</summary>
<img src="docs/features/user-list.png">
</details>

- Covered in user stories: 25



## Future features / improvements

Although alot of effort was put into this project, due to time constraints there is still room for finer refactoring of code and additional functionality / features to implement to the site. 

- Password recovery
  - Forgotten password option to recover access to the account via email
- Account creation via socials
  - Allow user authentication with already existing accounts, e.g. LinkedIn, Google, etc. 
- A notifications feature
  - A feature to have notifications related to tasks you are invovled in / own and if their completion status has been updated.
- Involvement specific edit rights
  - Users to be able to make specific edits to a task dependant on their write rights. For example a user who is assigned a task could set it completion status to complete but wouldnt be allowed to edit the task body text or due date.

##### Back to [top](#tick-it)


## Validation 

### HTML Validation

The W3C Markup Validation Service was used to validate the HTML of the website. No errors were identified. 

<details><summary>Main page (not logged in)</summary> 
<img src="docs/validation/html-validation-main-page.png"> 
</details>

<details><summary>Main page (logged in user)</summary> 
<img src="docs/validation/html-validation-main-page-auth.png"> 
</details> 

<details><summary>Signup page</summary> 
<img src="docs/validation/html-validation-signup-page.png"> 
</details>

<details><summary>Login page</summary> 
<img src="docs/validation/html-validation-login-page.png"> 
</details>

<details><summary>Tasks page</summary>
<img src="docs/validation/html-validation-tasks-page.png">
</details>

<details><summary>Task create page</summary>
<img src="docs/validation/html-validation-task-create-page.png">
</details>

<details><summary>Task detail page</summary>
<img src="docs/validation/html-validation-task-detail-page.png">
</details>

<details><summary>Watched page</summary>
<img src="docs/validation/html-validation-watched-page.png">
</details>

<details><summary>Pack page</summary>
<img src="docs/validation/html-validation-packs-page.png">
</details>

<details><summary>Pack create page</summary>
<img src="docs/validation/html-validation-pack-create-page.png">
</details>

<details><summary>Pack detail page</summary>
<img src="docs/validation/html-validation-pack-detail-page.png">
</details>

<details><summary>Contact page</summary>
<img src="docs/validation/html-validation-contact-page.png">
</details>

<details><summary>Users page</summary>
<img src="docs/validation/html-validation-users-page.png">
</details>

<details><summary>Profile page</summary>
<img src="docs/validation/html-validation-profile-page.png">
</details>

<details><summary>404 page</summary>
<img src="docs/validation/html-validation-404-page.png">
</details>


### CSS Validation

The W3C Jigsaw CSS Validation Service was used to validate the CSS of the website. All CSS modules pass the validation with no errors.

<details><summary>App.module.css</summary> 
<img src="docs/validation/css-validation-app.png"> 
</details> 

<details><summary>Asset.module.css</summary> 
<img src="docs/validation/css-validation-asset.png"> 
</details>

<details><summary>Avatar.module.css</summary> 
<img src="docs/validation/css-validation-avatar.png"> 
</details>

<details><summary>Comment.module.css</summary> 
<img src="docs/validation/css-validation-comment.png"> 
</details>

<details><summary>CommentForm.module.css</summary> 
<img src="docs/validation/css-validation-comment-form.png"> 
</details>

<details><summary>CredentialsForm.module.css</summary> 
<img src="docs/validation/css-validation-credentials-form.png"> 
</details>

<details><summary>Dashboard.module.css</summary> 
<img src="docs/validation/css-validation-dashboard.png"> 
</details>

<details><summary>DropdDown.module.css</summary> 
<img src="docs/validation/css-validation-dropdown.png"> 
</details>

<details><summary>DropdDown.module.css</summary> 
<img src="docs/validation/css-validation-index.png"> 
</details>

<details><summary>LandingPage.module.css</summary> 
<img src="docs/validation/css-validation-landing-page.png"> 
</details>

<details><summary>NavBar.module.css</summary> 
<img src="docs/validation/css-validation-nav-bar.png"> 
</details>

<details><summary>Pack.module.css</summary> 
<img src="docs/validation/css-validation-pack.png"> 
</details>

<details><summary>PackCreateEditForm.module.css</summary> 
<img src="docs/validation/css-validation-pack-create-edit-form.png"> 
</details>

<details><summary>PackListings.module.css</summary> 
<img src="docs/validation/css-validation-pack-listings.png"> 
</details>

<details><summary>ProfilePage.module.css</summary> 
<img src="docs/validation/css-validation-profile-page.png"> 
</details>

<details><summary>ScrollToTop.module.css</summary> 
<img src="docs/validation/css-validation-scroll-to-top.png"> 
</details>

<details><summary>SearchBar.module.css</summary> 
<img src="docs/validation/css-validation-search-bar.png"> 
</details>

<details><summary>Task.module.css</summary> 
<img src="docs/validation/css-validation-task.png"> 
</details>

<details><summary>TaskListings.module.css</summary> 
<img src="docs/validation/css-validation-tasks-listings.png"> 
</details>

<details><summary>UserProfiles.module.css</summary> 
<img src="docs/validation/css-validation-user-profiles.png"> 
</details>


### ESLint JavaScript / JSX Validation 

All JavaScript files were validated using ESLint JavaScript validator. All files passed however there were some rules that needed to be set in the eslintrc.js file as described below:

`"rules": {
        "react/prop-types": 0,
        "react/no-children-prop": "off",
        "react/display-name": "off"
    }`

  - `"react/prop-types": 0` was used to suppress the errors relating to prop-types
  - `"react/no-children-prop": "off"` was used to suppress the errors related to the Infinit Scroll component using children={} 
  - `"react/display-name": "off"` was used to suppress the need for a component display name 

### Chrome Dev Tools Lighthouse Validation

Lighthouse was used to test the performance, accessibility, best practice and SEO of the site. The validation was done for both desktop & mobile.  

#### Desktop 
<details><summary>Results</summary>

<details><summary>Main page (not logged in)</summary> 
<img src="docs/validation/desktop-lighthouse-validation-main-page.png"> 
</details>

<details><summary>Main page (logged in user)</summary> 
<img src="docs/validation/desktop-lighthouse-validation-main-page-auth.png"> 
</details> 

<details><summary>Signup page</summary> 
<img src="docs/validation/desktop-lighthouse-validation-signup-page.png"> 
</details>

<details><summary>Login page</summary> 
<img src="docs/validation/desktop-lighthouse-validation-login-page.png"> 
</details>

<details><summary>Tasks page</summary>
<img src="docs/validation/desktop-lighthouse-validation-tasks-page.png">
</details>

<details><summary>Task create page</summary>
<img src="docs/validation/desktop-lighthouse-validation-task-create-page.png">
</details>

<details><summary>Task detail page</summary>
<img src="docs/validation/desktop-lighthouse-validation-task-detail-page.png">
</details>

<details><summary>Watched page</summary>
<img src="docs/validation/desktop-lighthouse-validation-watched-page.png">
</details>

<details><summary>Pack page</summary>
<img src="docs/validation/desktop-lighthouse-validation-packs-page.png">
</details>

<details><summary>Pack create page</summary>
<img src="docs/validation/desktop-lighthouse-validation-pack-create-page.png">
</details>

<details><summary>Pack detail page</summary>
<img src="docs/validation/desktop-lighthouse-validation-pack-detail-page.png">
</details>

<details><summary>Contact page</summary>
<img src="docs/validation/desktop-lighthouse-validation-contact-page.png">
</details>

<details><summary>Users page</summary>
<img src="docs/validation/desktop-lighthouse-validation-users-page.png">
</details>

<details><summary>Profile page</summary>
<img src="docs/validation/desktop-lighthouse-validation-profile-page.png">
</details>

<details><summary>404 page</summary>
<img src="docs/validation/desktop-lighthouse-validation-404-page.png">
</details>
</details>



#### Mobile 

<details><summary>Results</summary>

<details><summary>Main page (not logged in)</summary> 
<img src="docs/validation/mobile-lighthouse-validation-main-page.png"> 
</details>

<details><summary>Main page (logged in user)</summary> 
<img src="docs/validation/mobile-lighthouse-validation-main-page-auth.png"> 
</details> 

<details><summary>Signup page</summary> 
<img src="docs/validation/mobile-lighthouse-validation-signup-page.png"> 
</details>

<details><summary>Login page</summary> 
<img src="docs/validation/mobile-lighthouse-validation-login-page.png"> 
</details>

<details><summary>Tasks page</summary>
<img src="docs/validation/mobile-lighthouse-validation-tasks-page.png">
</details>

<details><summary>Task create page</summary>
<img src="docs/validation/mobile-lighthouse-validation-task-create-page.png">
</details>

<details><summary>Task detail page</summary>
<img src="docs/validation/mobile-lighthouse-validation-task-detail-page.png">
</details>

<details><summary>Watched page</summary>
<img src="docs/validation/mobile-lighthouse-validation-watched-page.png">
</details>

<details><summary>Pack page</summary>
<img src="docs/validation/mobile-lighthouse-validation-packs-page.png">
</details>

<details><summary>Pack create page</summary>
<img src="docs/validation/mobile-lighthouse-validation-pack-create-page.png">
</details>

<details><summary>Pack detail page</summary>
<img src="docs/validation/mobile-lighthouse-validation-pack-detail-page.png">
</details>

<details><summary>Contact page</summary>
<img src="docs/validation/mobile-lighthouse-validation-contact-page.png">
</details>

<details><summary>Users page</summary>
<img src="docs/validation/mobile-lighthouse-validation-users-page.png">
</details>

<details><summary>Profile page</summary>
<img src="docs/validation/mobile-lighthouse-validation-profile-page.png">
</details>

<details><summary>404 page</summary>
<img src="docs/validation/mobile-lighthouse-validation-404-page.png">
</details>
</details>




### Wave Validation

The WAVE WebAIM web accessibility evaluation tool was used to test the websites accessibility.
There were a few errors related to missing labels and contrast issues on buttons. These errors were rectified.

<details><summary>Main page (not logged in)</summary> 
<img src="docs/validation/wave-validation-main-page.png"> 
</details>

<details><summary>Main page (logged in user)</summary> 
<img src="docs/validation/wave-validation-main-page.png"> 
</details> 

<details><summary>Signup page</summary> 
<img src="docs/validation/wave-validation-signup-page.png"> 
</details>

<details><summary>Login page</summary> 
<img src="docs/validation/wave-validation-login-page.png"> 
</details>

<details><summary>Tasks page</summary>
<img src="docs/validation/wave-validation-tasks-page.png">
</details>

<details><summary>Task create page</summary>
<img src="docs/validation/wave-validation-task-create-page.png">
</details>

<details><summary>Task detail page</summary>
<img src="docs/validation/wave-validation-task-detail-page.png">
</details>

<details><summary>Watched page</summary>
<img src="docs/validation/wave-validation-watched-page.png">
</details>

<details><summary>Pack page</summary>
<img src="docs/validation/wave-validation-packs-page.png">
</details>

<details><summary>Pack create page</summary>
<img src="docs/validation/wave-validation-pack-create-page.png">
</details>

<details><summary>Pack detail page</summary>
<img src="docs/validation/wave-validation-pack-detail-page.png">
</details>

<details><summary>Contact page</summary>
<img src="docs/validation/wave-validation-contact-page.png">
</details>

<details><summary>Users page</summary>
<img src="docs/validation/wave-validation-users-page.png">
</details>

<details><summary>Profile page</summary>
<img src="docs/validation/wave-validation-profile-page.png">
</details>

<details><summary>404 page</summary>
<img src="docs/validation/wave-validation-404-page.png">
</details>



##### Back to [top](#tick-it)


## Testing

### Device Testing

This site was tested on the following devices:
- Windows 10 PC with a 24" MSI Curved gaming monitor
- Raspberry Pi 4 with a 24" MSI Curved gaming monitor
- Xiaomi Redmi Note 10 Pro

### Browser compatibility

The website was tested on the following web browsers:
- Google Chrome (Version 112.0.5615.121)
- DuckDuckGo
 
### Manual testing

<summary>See Testing User Stories</summary>

#### Testing User Stories - Users

To avoid unnecessary repetition of images, only the feature being referred to will have screenshots. Information on how to navigate to the feature referred to will be described within its relevant table reference. 

1. As a new user, I can register an account with Tick It so that I can become a member and use the app as intended. 

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
|  Authentication  | Navigate to the sign up page, fill in the required fields and submit the sign up form  | An account which requires authentication will be created upon a successful account creation  | Works as expected |
|  Sign Up  |  Navigate to the sign up page, fill in the required fields and submit the sign up form |  User to navigate to the sign up page, enter all required fields and upon account creation be redirected to the log in page | Works as expected |
|  Input Validation  | Enter values into the sign up form fields  | Fields requiring input will be validated and make the user aware if any validation errors occur  | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/1-xxxxxx-1.png">
</details>

2. As a user, I can use the navigation bar so that I can seamlessly navigate around the app. 

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
|  Nav Bar  | Locate the nav bar located at the top of each page and select the relevant link, if on smaller devices click on the burger dropdown button to access the same icons / links  | User to be able to find the nav bar located at the top of each page and use to navigate their way through the site  | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/2-xxxxxx-1.png">
</details>

3. As a user, I can see visual indicators for example of having watched / unwatched a task so that I can tell what my status of watching is.

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
|  Watched / Unwatched button  | Navigate to the task list page or a page detail page, the Watch / Unwatch status button will be located in the bottom right corner indicating if the task is watched or not by the current user  | Watch icon to update dependant on the status of if a currently signed in user has a watch relationship with the task object  | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/3-xxxxxx-1.png">
</details>

4. As a user, I can watch and unwatch tasks so that I can keep up to date with that particular task via a filtered list. 

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
|  Watch / Unwatch task  | Navigate to the task list page or a page detail page, the Watch / Unwatch status button will be located in the bottom right corner indicating if the task is watched or not by the current user  | Watch icon to update dependant on the status of if a currently signed in user has a watch relationship with the task object  | Works as expected |
|  Watched / Unwatched button  | Navigate to the task list page or a page detail page, the Watch / Unwatch status button will be located in the bottom right, click on the icon to watch / unwatch a task  | Watch icon to update dependant on the status of if a currently signed in user has a watch relationship with the task object  |Works as expected  |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/4-xxxxxx-1.png">
</details>

5. As a user, I can view a list of my watched tasks so that I can focus on content I wish to view. 

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
|  Watched list  | Navigate to the watched list page via the link in the nav bar. View the list of currently watched tasks.  | User to be presented with the list of all their currently watched task   | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/5-xxxxxx-1.png">
</details>

6. As a user, I can use the search bar on the Task list section so that I can find particular tasks easier. 

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
| Search Bar   | Navigate to the task lists page via the icon / link in the nav bar. At the top of the page find the search bar, enter desired characters / keywords and be shown the results.   | Users to be presented with a list of relevant tasks based on their search query and if there is no results a no results found image will display. | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/6-xxxxxx-1.png">
</details>

7. As a user, I can delete my tasks so that I can permanently remove tasks I do not wish to keep. 

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
|  Delete Task  | Navigate to the task in questions task detail page, click on the 3 dots icon located in top right corner and click on the delete button to delete the task  | User to click the delete button and the task to be deleted from the database  | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/7-xxxxxx-1.png">
</details>

8. As a user, I can edit my tasks so that I can correct spelling mistakes or I may have entered into the task information fields.

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
|  Edit Task  | Navigate to the task in questions task detail page, click on the 3 dots icon located in top right corner and click on the edit button to be taken to the edit task form. Enter relevant values into fields and click on save or cancel to cancel the current edit  | User to click the edit button and the task edit form to be displayed in which the user can update the tasks information  | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/8-xxxxxx-1.png">
</details>

9. As a user, I can view task comments so that I can obtain more information on the task in question. 

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
|  Task Comment  | Navigate to a task by means of the tasks list or a users profile task list. Click on a task to view the task detail page. Scroll to bottom and the comment section for that particular task will be displayed  | User to be able to view their own and other users comments on the currently displayed task.  | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/9-xxxxxx-1.png">
</details>

10. As a user, I can comment on other tasks so that I can interact with other users. 

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
|  Create task comment  | Navigate to a task by means of the tasks list or a users profile task list. Click on a task to view the task detail page. Scroll to bottom and the comment section for that particular task will be displayed . Enter comment into the comment box and click post to add the comment | User to be able to post a comment that will show their name, profile image and how long ago the comment was posted  | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/10-xxxxxx-1.png">
</details>

11. As a user, I can edit or delete my comment on a task incase of input error. 

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
|  Edit task comment  | Navigate to a task by means of the tasks list or a users profile task list. Click on a task to view the task detail page. Scroll to bottom and the comment section for that particular task will be displayed . Find the comment you wish to edit and click on the three dots icon. Enter updated comment and click save  | User to be able to edit and update their owned comments  | Works as expected |
|  Delete task comment  |  Navigate to a task by means of the tasks list or a users profile task list. Click on a task to view the task detail page. Scroll to bottom and the comment section for that particular task will be displayed . Find the comment you wish to delete and click on the three dots icon. Click on the delete button to delete the comment | User to be able to edit and update their owned comments  | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/11-xxxxxx-1.png">
</details>

12. As a user, I can manage my tasks so that I can add, edit or delete posts as needed. 

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
|  Create task  | Click on the Create task button which is located at the top of the task list page or from your own profile. Fill in the form with the relevant information into the form fields and click save.  | User to be able to successfully create a task which will be added to the database and all relevant pages on the site  | Works as expected |
|  Delete task  | Navigate to the task detail page by click on the relevant task on the task list, or from a users profile. Click on the 3 dots icon in the top right corner of the task. Click on the delete button  | User to click the delete button and the task to be deleted from the database  | Works as expected |
|  Edit task  | Navigate to the task in questions task detail page, click on the 3 dots icon located in top right corner and click on the edit button to be taken to the edit task form. Enter relevant values into fields and click on save or cancel to cancel the current edit  | User to click the edit button and the task edit form to be displayed in which the user can update the tasks information  | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/12-xxxxxx-1.png">
</details>

13. As a user, I can request a password so that I can log back into my account if I have forgotten my password. 

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
|  Change Password  | Navigate to the profile page by clicking on the profile button on the nav bar or the icon of posted by avatar on a task. Click the 3 dots icon in the top right corner of the profile. Click on edit profile, from the edit profile form click on the change password button. Enter new password and confirm password then submit.  | User should be able to update their password and be presented with a modal to confirm on successfull update | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/13-xxxxxx-1.png">
</details>

14. As a user, I can log in so that I can access my account, view my profile, tasks and other user's tasks. 

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
|  Authentication  | Navigate to the log in page, fill in the required fields and submit form to login  | User log in credentials to be authenticated against the database and granted access if valid  | Works as expected |
|  Log in  | Navigate to the log in page, fill in the required fields and submit form to login  | User log in credentials to be authenticated against the database and granted access if valid  | Works as expected  |
|  Input validation  | From the log in page enter information to the username and password fields  |  User to be informed if entered values to not meet validation criteria | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/14-xxxxxx-1.png">
</details>

15. As a user, I can log out so that other users using the same device cannot access my account. 

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
|  Log out  | From the nav bar click on the log out icon  | User to be successfully logged out and return to the home page  | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/15-xxxxxx-1.png">
</details>

16. As a user, I can have a profile page so that I and other users can view my list of tasks, packs and assigned tasks.

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
|  Profile section  | Sign up to the site and then navigate to the profile page from the nav bar  | User to be presented with their profile page which displays all relevant information of the user  | Works as expected |
|  Profile tabs  | Navigate to the profile page. Using the tabs click on each one to display the desired information such as tasks, packs and assigned items.  | User to be able to view all information related to their profile and prescence on the site.  | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/16-xxxxxx-1.png">
</details>

17. As a user, I can update my profile so that my profile can stay up to date with my latest information. 

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
|  Edit Profile  | Navigate to the users profile by clicking on the profile icon on the nav bar. Click on the 3 dots icon in the top right corner. Click on edit profile button. Enter new values for fields and click submit  | Users profile to be updated with values entered to form fields.  | Works as expected |
|  Task count  | Navigate to the users profile by clicking on the profile icon on the nav bar. View the task count located in the middle of the profile information panel  | Users to be provided with the currently viewed profiles task count  | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/17-xxxxxx-1.png">
</details>

18. As a user, I can add a profile picture so that other members can easily recognize my tasks or comments.

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
| Edit profile   | Navigate to the users profile by clicking on the profile icon on the nav bar. Click on the 3 dots icon in the top right corner. Click on edit profile button. add image by clickon on the chose file button. Once image has been selected click save button  | User to have the ability to update their profile image to whatever they select from their drive  | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/18-xxxxxx-1.png">
</details>

19. As a user, I can view the Home Page so that I can understand what the website is about, create an account or log in. 

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
|  Home page  | navigate to the Tick It site in your internet browser. View the landing page.  | User to view the landing page and be able to understand what the website is about  | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/19-xxxxxx-1.png">
</details>

20. As a user, I can display basic info on my profile page so that other members can learn more about me. 

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
| Profile section   | Navigate to the users profile by clicking on the profile icon on the nav bar. Click on the 3 dots icon in the top right corner. Click on edit profile button. Enter new values for fields and click submit  | Users profile to be updated with values entered to form fields.  |Works as expected  |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/20-xxxxxx-1.png">
</details>

21. As a user, I can search for tasks via a task bar so that I can specific tasks based on those keywords. 

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
| Task list   | When logged in, navigate to the task lists page from the nav bar. Scroll down the page to view all tasks that are on that database  |   | Works as expected |
| Task search   | When logged in, navigate to the task lists page from the nav bar. Use the search bar at the top of the page to search for tasks based on words, letter or numbers  | User to be able to query the database for specific tasks based on their search criteria  | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/21-xxxxxx-1.png">
</details>

22. As a user, I can fill in a contact form so that I can enquire about issues I may have regarding the app. 

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
|  Contact  | Click on the Contact icon from the nav bar which is available to annonymous and authenticated users. Enter the relevant information to the form fields and click on submit  | Users and visitors to the site to have the ability to post a contact query and be presented with feedback on successful posting of query  | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/22-xxxxxx-1.png">
</details>

23. As a user, I can receive feedback so that I can confirm whether the contact form submission was successful or not.

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
|  Site feedback  |   |   | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/23-xxxxxx-1.png">
</details>

24. As a user, I can scroll through the latest tasks on the app so that I can find new tasks to complete.

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
|  Task list  | Log in and navigate to the task list page by clicking on the task list icon in the nav bar. Scroll the list of tasks.  | Users to be able to scroll through all tasks that are on the database  | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/24-xxxxxx-1.png">
</details>

25. As a user, I can browse a list of user accounts so that I can view that particular account. 

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
|  Users list  | Log in and from the nav bar click on the users icon. View the list of all users on the platform  | Users to be able to view a list of all users on the platform and also use the search bar to help aid finding users  | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/25-xxxxxx-1.png">
</details>

#### Testing User Stories - Site Owner

26. As the site owner, I would want to validate users' data entries on sign up so that users can create a log in which meets the requirements.

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
| Input validation   | Navigate to the Tick It site. Click on the log in icon in the nav bar. Enter username and password to the relevant fields.   | User input to be validated again the database and signed in if valid and presented with error messages relevant to the validation failing  | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/26-xxxxxx-1.png">
</details>

27. As the site owner, I would want to ensure only logged in users can post from their account and edit their profile so that data privacy is ensured. 

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
| Authentication   | Create code which authenticates if the current user is the owner of items within the site prior to allowing them to edit or delete such items  | Users can only edit or delete tasks and packs they own or their own profile and not others  | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/27-xxxxxx-1.png">
</details>

28. As the site owner, I would want to have the ability to remove posts so that I can keep the app clean and friendly. 

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
|  Delete task  | Access the task objects in the back end API with Djangos admin panel and delete the neccessary tasks  | Admin to have the ability to delete any database task  | Works as expected |
|  Delete task comment  |  Access the comment objects in the back end API with Djangos admin panel and delete the neccessary comments | Admin to have the ability to delete any database comment  | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/28-xxxxxx-1.png">
</details>

29. As the site owner, I would want the site to be fully responsive so that users can use it across multiple devices and create a good user experience. 

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
|  Responsiveness  | Use the site on a range of devices and screen sizes  | Users will have a pleasant and enjoyable experience on the website regardless of their screen or device size  | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/29-xxxxxx-1.png">
</details>

30. As the site owner, I would want to use the app search function so that I can search for particular tasks by their title.

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
|  Task search  |When logged in, navigate to the task lists page from the nav bar. Use the search bar at the top of the page to search for tasks based on words, letter or numbers  | User to be able to query the database for specific tasks based on their search criteria | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/30-xxxxxx-1.png">
</details>

31. As the site owner, I would want a 404 error page so that users do not have to use the back navigation button if an error occurs.

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
|  Site feedback  | Navigate to any page that does not exist  | User to be presented with 404 error page and a button to return home  | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/31-xxxxxx-1.png">
</details>



### Automated testing



##### Back to [top](#tick-it)


## Bugs

| **Bug** | **Fix** |
| ------- | ------- |
| Pack not submitting the tasks array to the database | Although the database has been created in such way to accept a list of taks, it didnt seem to work when passing a list of task id's in the form. Tests were conducted which proved that a single entry could be entered, i decided to try and create a for loop to pass in each task to the pack one a time and this acheived the desired outcome |
| Task edit form wont submit if due_date is not set a value | Update due_date to be an empty string and a conditional if statement was placed in the form append which checked if due_date was left empty or null and if true it wouldnt append this field. This fixed the issue as the field in the database has blank and null set to True |
| Profile list only displaying the first 10 results in Infinite Scroll | fetchMoreData was properly implemented  |
| assigned to tasks wouldnt display in the assigned to tab | A filter was added that would filter tasks based on if the assigned_to id matched that of the profile owners |
| Tab active colour would revert to the default | Documentation for react bootstrap didnt mention that the css has to be over written by using activeClassName proprty. Once this was used the issue was resolved |
| Searching for tasks if the single letter Y is entered, tasks with a title that only includes a number will be displayed | I could not work out why this was the case therefore this has had to be left in as a known bug |


##### Back to [top](#tick-it)


## Deployment

### Heroku

This project was deployed to [Heroku](https://www.heroku.com) in the project's early stages to allow continual responsive testing. This was achieved via the following steps:

The website was deployed with Heroku by following these steps:

1. Use the "pip freeze -> requiremnts.txt" command in the terminal to save any libraries that need to be installed in the file.
2. The app uses Cloudinary to host the post images therefore a Cloudinary account will be required. 
3. Log in to [Cloudinary](https://cloudinary.com/) or create an account for free.
4. Navigate to the Dashboard on Cloudinary
<details>
<summary>Screenshot</summary>
<img src="docs/deployment/cloudinary-dashboard.png">
</details>

5. Copy and store the value of the 'API Environment Variable" beginning at cloudinary:// until the end, this will be used in the Heroku Config Vars. 
6. The app also uses ElephantSQL to host the database
7. Log in to [ElephantSQL](https://www.elephantsql.com/) or create an account for free.
8. Click on Create a new instance
<details>
<summary>Screenshot</summary>
<img src="docs/deployment/elephant-sql-instance.png">
</details>

9. Set up your plan. Give the 'plan' the desired name, select the Tiny Turtle (free) plan and leave tags blank.
<details>
<summary>Screenshot</summary>
<img src="docs/deployment/elephant-sql-plan.png">
</details>

10. Select the region and choose the nearest data centre to your location.
<details>
<summary>Screenshot</summary>
<img src="docs/deployment/elephant-sql-region.png">
</details>

11. Click 'review' and if happy with the details presented click on the create instance button.
<details>
<summary>Screenshot</summary>
<img src="docs/deployment/elephant-sql-create.png">
</details>

12. From the instances section click on the instance with the name that was just created.
13. Get the ElephantSQL database URL from the instance details page and copy, this will be used in the Heroku Config Vars
<details>
<summary>Screenshot</summary>
<img src="docs/deployment/elephant-sql-url.png">
</details>

14. Navigate to https://www.heroku.com/ and login or create an account. 
15. Click the "new" button in the upper right corner and select "create new app".
<details>
<summary>Screenshot</summary>
<img src="docs/deployment/new-app.png">
</details>

16. Choose an app name and your region and click "Create app".
<details>
<summary>Screenshot</summary>
<img src="docs/deployment/app-name.png">
</details>

17. Reveal Config Vars and store the required config var names and values as below:

- `CLOUDINARY_URL`: *your Cloudinary URL as obtained above*
- `DATABASE_URL`: *your ElephantSQL postgres database URL as obtained above*
- `PORT`: `8000`
- `SECRET_KEY`: *your secret key*

<details>
<summary>Screenshot</summary>
<img src="docs/deployment/config-vars.png">
</details>

18. Go to the "deploy" tab and pick GitHub as a deployment method.
19. Search for a repository to connect to and select the branch you would like to build the app from.
20. If preferred, enable automatic deploys and then deploy branch.
21. Wait for the app to build and then click on the "View" link which will redirect you to the deployed link.

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