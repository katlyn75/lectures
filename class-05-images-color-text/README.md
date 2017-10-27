## **Week 1: Basic HTML, CSS, JS**
## Class 5: CSS Layout and Github Pages

[Schedule](#schedule) | [Announcements](#announcements) | [Objectives](#learning-objectives) | [Notes](#notes) | [Readings](#readings)

<hr></hr>

### Schedule
1. Announcements
1. Code Review
1. CSS Layout
1. HTML images and figures
1. Deploy to Github pages
1. Lab prep

### Announcements
- Quiz 3 will be published this afternoon and is due late Sunday night.
- Weekly surveys will go out via email today. Your survey responses and feedback in general are helpful and much appreciated!

### Learning Objectives 
- Publish a static webpage on GitHub by creating a gh-pages branch.
- Use HTML image, figure to add images to a webpage.
- Use HTML anchor tags to create links to other webpages.
- Style a webpage's layout, text, and images using CSS.
- Understand CSS layout principles including block, inline, normal, relative, absolute, float, and fixed.

### Notes
- Code Review: Repeat after me! for loops, functions
- CSS
	- Cascading rules
		- When do conflicting rules apply?
		- Specificity
			- id > class > element
			- https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity
		- Source order
			- user agent style sheet (Chrome's default css)
			- user style sheet (if a user has a custom plugin installed, like a scrollbar)
			- author style sheet (the CSS you as a developer write)
			- important rules in author style sheet
			- important rules in user style sheet
	- Positioning
		- document flow
		- position
			- static (default)
			- relative
			- absolute
			- fixed
			- sticky (new/experimental)
		- display
			- block
			- inline
			- flex
				- https://css-tricks.com/snippets/css/a-guide-to-flexbox/
- HTML
	- links
	- images
	- figures
- Deploy to GH Pages
	- include a `.gitignore` file
	- make a useful README.md
		- what is your project?
		- who contributed
		- if someone wanted to contribute, how can they run your code?
	- create a branch: `git checkout -b gh-pages`
	- push to github
	- visit your page: `<your-user-name>.github.io/<repo-name>`
- Lap prep
	- function practice
	- Git workflow review

<hr></hr>

### Readings

##### HTML Chapter 5: "Images"

- p.97: Choosing and storing images
- p.99: \<img> tag with 'height' and 'width' attributes
- p.101: Image alignment in text
- p.107: 3 rules for creating images
- p.109: Image formats (JPG, GIF, PNG)
- Other topics: dimensions, cropping, resolution, vector, animation, transparency, inspecting on web

##### HTML Chapter 11: "Color" (CSS)

- p.249: Foreground color
- p.250: Background color
- pp.251-52: Understanding color (excellent overview)
- p.253: Contrast
- p.254: Opacity
- p.255: HSL colors

##### HTML Chapter 12: "Text" (CSS)

- p.267: Typeface terminology
- p.269: Choosing a Typeface
- p.271: Techniques that offer a wider choice of typefaces
- pp.275-76: Type scales and sizes
- pp.279 and on: text transformations such as bold, italic, upper/lower, underline, strike, leading, spacing, alignment, indenting, drop shadow, first letter
- p.292: Attribute selectors
