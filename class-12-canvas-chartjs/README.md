## **Working with Libraries**
# Class 12: Add a Chart to Your Vote Tracker

[Schedule](#schedule) | [Announcements](#announcements) | [Objectives](#learning-objectives) | [Notes](#notes) | [Readings](#readings)

<hr></hr>

### Schedule
1. Announcements
1. Code review
1. Canvas
1. Chart.js

### Announcements
* Quiz 7 due tomorrow night! 
* Feedback
    * Shift in mindset regarding stacked modules, non-academic environment.
    * Code reviews are helpful - to break other people's code down and walk through it.
    * Sitting in on the 401 presentations: a lot of unfamiliar info, but also cool to see how much you'll learn.
    * Too many quizzes that aren't super helpful.
* Project Week Info
    * 4th week = no lectures, no labs, all project work
    * 4 teams: [3,3,3,4]
        * Assigned on **Wednesday**
    * Think of 2-3 ideas, pitch to SJ & TA's Thursday afternoon
    * Basic requirements:
        * 3 pages
        * 2 pages must take and use user input
        * Everyone must contribute to HTML, CSS, and JS
    * Example 201 projects
        * [pUpdates](https://dog-solutions.github.io/pUpdates/)
        * [Quiz](https://ohidontknow.github.io/quiz/)
        * [The Beer Buddy](https://alchemy-beer-fellows.github.io/beer-app/)
        * [turducken](https://sevfitz.github.io/turducken/login.html)
            * user: boogie, pw: jjboogz
        * [team rocket man](jchurchman.github.io/teamrocketman)
        * [memory game](https://hpats67.github.io/memory-card/)
        * [yacht-zoe](https://yachtzoes.github.io/yachtzoe_project/index.html)
        * [madlibs](http://brandon-parker.github.io/mortality/index.html)
* Questions?

## Learning Objectives
- Learn about an API and a JavaScript library by reading documentation.
- Display data in a chart using the JavaScript library Chart.js.
- Create abstract art using JavaScript and the HTML canvas element.

## Notes
* HTML Canvas element
    * used for drawing graphics such as graphs and animations
    * with JavaScript!
        * examples:
            * [rotating shape](http://raksy.dyndns.org/ico.html)
            * [list of examples](https://code.tutsplus.com/articles/21-ridiculously-impressive-html5-canvas-experiments--net-14210)
    * how to add to your HTML
        * use `height` and `width` attributes
    * methods in [the API ](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
        * `.getContext()`
        * `.fillStyle`
        * `.fillRect()`
        * `.ellipse()`
        * [find more](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D)
* Chart.js
    * adding the library to your code
    * creating a Chart
        * call the constructor `new Chart`
        * pass in data formatted in a specific way

<hr></hr>

## Readings

**Read about the \<canvas\> API**

Read the following articles on the Canvas API.

1. [Basic usage](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_usage)
2. [Drawing shapes with canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)
3. [Applying styles and colors](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors)
4. [Drawing text](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_text)

**Read this article on ChartJS**

- [Read this article on ChartJS](http://www.webdesignerdepot.com/2013/11/easily-create-stunning-animated-charts-with-chart-js/)
- Articles like this are often a good way to get an introduction to something new

**Look over the ChartJS documentation**

- [Look over the ChartJS documentation](http://www.chartjs.org/docs/)
- Students should get used to reading and deciphering documentation... and those who have outstanding writing skills can consider developing a specialty in technical writing.