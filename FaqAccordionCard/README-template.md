# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

1. Set the background gradient of the container.
2. Center the accordion card inside container.
3. Display card image and content container as grid areas : "image content"
4. create content first and style it.
5. Use detail and summary tag to create FAQs.
6. Remove triangle toggle from summary tag and add arrow down.
7. Show font weight of summary tag as bold only when dialog tag is clicked.
8. Display arrow down as arrow up when dialog tag is clicked.
9. Deal with overflow of content in mobile view.
10. Hide/ show images in different layout using visibility attribute.
11. Bring box above women-desktop img using z-index making sure to get the shadow it has.

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
/* Composition of the linear gradient line
CAUTION:
If you apply it in body-- this will give appear like background image with two colors and they are stacked on each other assuming they are stacked at 0deg and also background image repeat set as repeat.

So, always apply linear gradient in a container and it will give result.
  */
.card-container {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    var(--color-background-primary),
    var(--color-background-secondary)
  );
}

/* remove triangle from summary tag- which is simply a list-type */
Example resource 2 summary {
  list-style: none;
}
/* style the disclosure widget by setting / removind open attribute of dialog tag */

details[open] > summary {
  font-weight: bold;
}

/* to show arrow down as arrow up-- we can use transform */
details[open] > summary > i {
  transform: rotate(180deg);
  /* -webkit-transform: rotate(180deg); */
}
/* Overflow of content if we open all of the detail tag at once */
/* Use of height: auto will help */
 .accordion-card {
   ...
    height: auto;
  }
  /* Bring box above women-desktop img using z-index making sure to get the shadow it has. */
  **TODO**
```

```js
// NO JAVASCRIPT has been used to get the BONUS.
```

### Useful resources

- [Example resource 1](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient) - This helped me for setting up linear background gradient.

- [Example resource 2](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details) - This helped me to create clickable element without using javascript. In the dialog widget- you style the disclosure widget by setting /removing its open attribute.

- [Example resource 3](https://www.w3schools.com/howto/howto_css_arrows.asp) - This helped me to create arrow up.

## Author

- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
