## Corner 1: Domain modeling
- Create a model with properties and methods for
    - an assignment grading app
    - the snake game
    - a yard sale app
- There are no right or wrong answers. This is an exercise if getting you to translate problems into object oriented information.
## Corner 2: Event Handlers
- Assuming your html has a header with the id of "easter-egg", give the header a click listener that will prompt the user for their name and then change the text of the header to their name.
```js
    // solution
    const header = document.getElementById('easter-egg');
    header.addEventListener('click',function (e) {
        const name = prompt('what is your name?');
        header.textContent = name;
    });
```
## Corner 3: Function writing
- Write a function for each letter in the alphabet that returns itself.
- Optional: in each vowel function, call all the functions for the letters that happen between it and the preceeding vowel and return all of them.
```js
// examples

    function letterA () {
        return 'a';
    }

    function letterB () {
        return 'b';
    }

    function letterC () {
        return 'c';
    }

    function letterD () {
        return 'd';
    }

    function letterE () {
        return letterA() + letterB() + letterC() + letterD() + 'e';
    }
```
## Corner 4: Expression evaluating
- Given the following, do a step by step evaluation of 'randomThing': 
    ```js
    const fun = [
        {name: 'george', occupation:'video game tester'},
        {name: 'suzan', occupation:'painter'},
        {name: 'louis', occupation:'dog'}
    ];

    const randomThing = fun[Math.floor(Math.random() * fun.length)].occupation;
    /*
    line by line solution:

    const randomThing = fun[Math.floor(Math.random() * 3)].occupation;
    const randomThing = fun[Math.floor(.1 * 3)].occupation;
    const randomThing = fun[Math.floor(.3)].occupation;
    const randomThing = fun[0].occupation;
    const randomThing = {name: 'george', occupation: 'video game tester'}.occupation; 
        // NOTE!! THE ABOVE LINE IS NOT VALID JS, but what you should be picturing in your mind
    const randomThing = 'video game tester'}
    

    */
    ```
- Write the entire line at the top of the board, then underneath evaluate each expression one by one until you reach the final value. You can decide your own value for Math.random();