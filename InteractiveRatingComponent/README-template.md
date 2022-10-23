# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./screenshot.jpg)
InteractiveRatingComponent/Screenshot Form.png
InteractiveRatingComponent/Screenshot Thank You.png

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

Steps that I went through for mobile first design:

1. Center the rating form inside container.
2. Display form > \* in grid layout.
3. Use radio input to create rating numbers as they will allow one selection at a time.
4. Remove radio default appearance and style it again as per design.
5. Show labels inside radio.
6. Apply Javascript logic steps 1- 7.
7. Style form elements as per style guide.
8. Create thank you container and its elements in html.
9. Keep thank you container display as none and set all other styling.
10. Use all children element of thank you container as template literal in javascript.

Javascript logic

1. Add eventlistener to form that listens to submit button of form.
2. Prevent default refresh of page upon clicking submit button.
3. On selection of radio button- keep the bg as --color-neutral-lighter.
4. Show color-white label and orange background of input of radio which is selected.
5. Show color-white label on not selected radio.
6. On Hovering over radios after selecting one radio- step 4 still remain in effect.
7. Show thank you card upon submitting form and hide form.
8. show thank you container element as output: by setting disply as grid.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

```html

```

```css
/* How to hide radio button and keep label only */
input[type="radio"] {
  opacity: 0;
}
or input[type="radio"] {
  appearance: none;
}
/* how to show label inside radio */
label {
  position: absolute;
  top: 15px;
  transform: translateX(15px);
  color: var(--color-secondary);
  cursor: pointer;
}
```

```js
/* How to show color-white label and orange background of input of radio which is selected */
const options = document.querySelectorAll(".rating-numbers > div >input");
optionList.map((option) => {
  option.nextSibling.style.color = "rgb(151, 150, 150)";
  option.addEventListener("click", () => {
    let notCheckedOptionList = optionList.filter(
      (option) => option.checked !== true
    );

    let checkedOption = optionList.filter((option) => option.checked == true);

    if (option.checked == true) {
      //   console.log(notCheckedOptionList);
      console.log(checkedOption[0].value);
      checkedOption.map((option) => {
        option.style.background = "hsl(25, 97%, 53%)";
        option.nextSibling.style.color = "white";
      });

      notCheckedOptionList.map((option) => {
        option.style.background = "hsl(218, 13%, 24%)";
        option.nextSibling.style.color = "rgb(151, 150, 150)";
      });
    }
  });
});
// If you miss e.preventDefault()- the console will not show submit and refresh the page.
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("submit");
});

// how to get input data of the form--> check
- [Example resource 1]
form.addEventListener("submit", (event) => {
  const data = new FormData(form);
  let output = "";
  for (const entry of data) {
    output = `${output}${entry[0]}=${entry[1]}\r`;
  };
  log.innerText = output;
  event.preventDefault();
}, false);

// very important -hovering effect
function setOrangeWhite_afterMouseLeave(object) {
  object.addEventListener("mouseleave", (e) => {
    e.target.nextSibling.style.color = "white";
    e.target.style.background = "hsl(25, 97%, 53%)";
  });
}
...
 checkedOption.map((option) => {
        setOrangeWhite_afterMouseLeave(option);
       ...
      });
```

### Useful resources

- [Example resource 1](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio) - This helped me to loop over the input data of the form and then use them in rendering page.
- [Example resource 2](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onmouseenter_addeventlistener) - This helps me to manipulate element using mousevents.

## Author

- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
