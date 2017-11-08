## **Working with Libraries**
# Class 13: Add Local Storage to Your Vote Tracker; UI/UX Concepts

[Schedule](#schedule) | [Announcements](#announcements) | [Objectives](#learning-objectives) | [Notes](#notes) | [Readings](#readings)


<hr></hr>

### Schedule
1. Announcements
1. Code review
1. LocalStorage
1. UI/UX

### Announcements
* Quiz 7 due tonight night and Quiz 8 due tomorrow night!
    * Quiz 7 involves writing code and therefore does not have unlimited retakes
* Project week teams:
    * apple
        * Charlie
        * Alissa
        * Jack
        * Carmen
    * watermelon
        * Katlyn
        * Charlz
        * Brance
    * bomb
        * Liz
        * Zack
        * Richard
        * Jacob
    * Brainstorm/talk with each other this afternoon/tmrw
        * At some point before Monday, create a team organization in GitHub
        * Add everyone as members
        * **Note:** you will also have to add each person to the actual project repo as a collaborator.
    * Tmrw afternoon, talk with SJ and Haley about **2 ideas**
        * We will greenlight one of the ideas so you can do more brainstorming over the weekend.
    * A project proposal (in your project's README) is due Monday with the following info:
        * Team name and members
        * Project pitch: What's the problem domain/what are you trying to solve or create?
        * What models will you need? What properties and methods do you think you'll need?
        * Wireframes for **each** page of your website
        * A list of features designated as MVP or Stretch goals
* Project week technical requirements!
    * **CLEAN CODE** with proper indentation and passing our class eslint file
    * Uses Object Oriented Programming to model appropriate entities
    * Global variables and functions are kept to a minimum
    * Responds to user events
    * Data persists between page reloads

## Learning Objectives
- Store, retrieve, and access data stored in using the browser's local storage.
- Store and use data using JSON syntax and structure.

## Notes
* UI and UX
    * UI and UX decisions will be driven by
        * how you want your user to feel when using your product
            * confused?
            * successful?
            * in control?
            * serious?
            * playful?
        * what your goal for the user is
            * log a crap ton of hours in your app?
            * gain understanding around a topic?
            * sign up for an email list?
            * visit a brick and mortar shop?
        * research
            * user interviews
                * watch people using your app, without telling them what to do. 
                * watch people using your app, given a specific task - what do they try? why?
    * user interface
        * how the user can interact with the web page
        * goal of ui:
            - easy to use
            - easy to understand
            - effective for the end-goal (or product)
        * [goodui.org](http://www.goodui.org/)
        * remember those ol' alerts? [sweet alert](http://www.javascripting.com/view/sweetalert)
        * [5 examples we can learn from](https://www.interaction-design.org/literature/article/bad-design-vs-good-design-5-examples-we-can-learn-frombad-design-vs-good-design-5-examples-we-can-learn-from-130706)
    * user experience
        * how the interactions and more affect the user's perception and experience
        * goal of ux:
            * influence user's perception of brand/product
        * encompasses many, many things:
            - onboarding
            - branding
            - content
            - ui
            - and more!
        * [user onboarding teardowns](https://www.useronboard.com/onboarding-teardowns/)
        * [badux](http://badux.tumblr.com/)
    * common practices you've seen in the wild
        - hamburger menu
            - pro: hides menu
            - con: hides menu, also not 100% intuitive
            - [example](https://theoutline.com/)
        - # of items in navigation
            - keep it between 5-7
            - [example](https://wordpress.com/)
            - [example - too many options](https://www.usatoday.com/)
        - links should look like links, or at least different from standard text
            - otherwise, why would you click?
            - [example](http://www.goodui.org/)
        - email sign up pop ups
          - show on switching to tab
          - show as little pop up on bottom
        - logging in with social media
        - hotkeys!!!
            - often forgotten as part of UI
            - [example](https://workflowy.com/)
* local storage
    * what is persistance?
    * why isn't our data persistent?
    * localStorage = built in browser storage
        * where is our data stored?
        * **ONLY SAVES STRINGS**
            * how do we convert arrays or objects into strings?
            * how do we convert strings into arrays of objects?
        * **IS LOCAL!**
        * how to save to localStorage
        * how to get from localStorage
<hr></hr>

## Readings

**Read this article on local storage**

- [Read this article on local storage](http://diveintohtml5.info/storage.html)
- Local storage is the gateway to understanding basic concepts of persistence

