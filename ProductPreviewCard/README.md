# Frontend Mentor - Product preview card component solution

This is a solution to the [Product preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover and focus states for interactive elements

### Screenshot

Screenshot 2022-09-29 at 22-30-45 Frontend Mentor Product preview card component.png
Screenshot 2022-09-29 at 22-31-28 Frontend Mentor Product preview card component.png

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

Concept 1: Center the Media objects which is inside its container.

    1. The Flexbox way:

    .container {
            display: flex;
            align-items: center;
            justify-content: center;

            max-width: 100vw;
            height: 100vh;
    }

    source: https://dev.to/ayushmanbthakur/different-ways-to-center-a-div-in-a-webpage-5enn

    *make sure to add max-width and height to media objects.

Concept 2: Media objects--> following features are available in it:

    Stacked on Mobile, two columns on Desktop.
    The image can be on the left or right.
    The image might be small or large.
    Media Objects can be nested.
    The Media Object should clear the contents no matter which side is tallest.

source: https://developer.mozilla.org/en-US/docs/Web/CSS/Layout_cookbook/Media_objects

Concept 3: Responsive image
max-width: 100%;
height: 100%;

-->These two properties will automatically adjust the width of img to fit the screen and height remain 100% in its container : i.e class= media.

Concept 4: The clearfix Hack
If an element is taller than the element containing it, and it is floated, it will overflow outside of its container.

following code is used for most webpages:
.clearfix::after {
content: "";
clear: both;
display: table;
}
source: https://www.w3schools.com/howto/howto_css_clearfix.asp

Concept 5: CSS Variables and utility classes.

# Challenges that I faced specially:

1. Adjust height and width of the components in order to avoid overflow.
   a. use of Max-width
   b. use of height: 100%

# What can I do to improve my css:

1. Use visibility classes in HTML : So that I can hide any element based on different breakpoints.
   for example: Here I needed to hide desktop-preview.jpg at 375px and display mobile-preview.jpg.

   source: https://medium.com/codyhouse/a-new-approach-to-visibility-utility-classes-based-on-css-variables-eb1e2a01fa3b

   .is-visible {
   display: var(--display) !important;
   }

   .component {
   display: none;
   --display: flex;
   }

2. Utilities for layout: Framework like Bootstrap already has this system in place.
   https://getbootstrap.com/docs/4.0/layout/utilities-for-layout/

   a. Display utilities.
   b. Flexbox utilities.
   c. Spacing utilities.
   d. Visibility utilities.

   !important TODO: Create utilities for css to achieve DRY principle.
