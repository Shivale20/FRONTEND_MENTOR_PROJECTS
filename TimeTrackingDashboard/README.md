# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

Step 1: Display the optimal layout for the site depending on their device's screen size.
a. Center dashboard in body using flex.
b. Divide aside and main : childNode of container in 1:4 ratio using grid and grid-template-columns.
c. Style other elements inside aside and main tag.
d. Use media query to display optimal layout at desktop,tablet and mobile screen size.

Step 2: Dynamically create tracker box using data.json.
a. asyncFetch()--> To Fetch JSON data from data.json
b. asyncFetch().then()--> To apply renderTrackerBox() for each data using map().
c. renderTrackerBox() --> To dynamically create template of tracker box with arguments as the data coming from data.JSON
d. timeFormat() --> To show hrs for time > 1 else hr for 0 or 1.
e. hideAllTrackerbox()--> To hide all trackerBox at once using class hide.
f. Apply eventListener to all buttons which listens to hideTrackerBox().
This will hide all trackerBox and then display only desired tracker box. To Display desired tracker box- remove class hide from that only.
for example: daily button will display only daily-tracker box.
g. Dynamically add two more attributes for each tracker box by adding
"img": "images/icon-work.svg",
"background": "background-work",
in each data set of data.json.
(\*\*make sure to define class in style.css similarly for background)
such as

```css
.background-work {
  background: var(--background-work);
}
```

Step 3: Create Theme.css to create CSS variables for styling each element as per style guide.

Step 4: Create active states
a. Change fill color of icon-ellipsis.svg over hover.
-- for this we need to remove the fill attribute from svg path
-- set fill value in css like

```css
.option-icon svg path {
  transition: all 0.3s ease-in-out;
}
```

-- now change fill over hover.
b. Hovering over icon-ellipsis should disable hovering effect on its parentNode i.e tracker-info. However there is no parent selector in css.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid

## Author

- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
