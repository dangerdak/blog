---
title: Notes on accessibility
layout: post
---

This is a collection of notes mostly from Google's [Web Fundamentals series
on
accessibility](https://developers.google.com/web/fundamentals/accessibility/),
written mostly to help me remember, and also as a reference guide. It covers
an overview of the 'three pillars' of accessibility: focus, semantics and
styling.

## Focus
For keyboard users:  
- All functionality should be available using the keyboard, and only interactive
elements should be focusable.

- When tabbing through a page, focus should move in a logical and intuitive order
(general advice is not to use CSS to change the order in which elements appear on screen).

- Try tabbing through your pages before publishing them to check that the order
makes sense, and that focus doesn't go off screen.

- Use `document.activeElement` in the console to find out which element is
  focused.

- Off-screen content should have `display: none` or `visibility: hidden` - this
will take it out of the tab sequence.

- Using tabindex greater than 0 is an anti-pattern.

- Shouldn't normally need to set tabindex. Might e.g. for custom interactive
  elements, modals, or when simulating pages in a single page app

## Semantics
Semantic markup allows assistive technologies such as screen readers to
provide the user with a useful and appropriate interface.

- Names should be provided for all non-text elements: either using visual
  labels, which are useful for all users, or if no visual label is needed
  then a text alternative.

- Screen readers announce images using their filename, unless an alt text is
  provided - this is why purely decorative images should have `alt=""`.
  Important images should have descriptive text.

- Headings can be used by screen readers for navigation. Every section of
  a page should have a heading.

- Screen readers can access a list of links on the page - so link text should
  be descriptive and useful even when out of context.

- Anchor tags should have href attributes, without which they're not tabbable.

- Buttons should be implemented using actual button tags, not anchor tags.
  Button: initiates action on the page; link: navigates to another page or
  section of the page.

- Screen readers can provide a list of landmarks, allowing users to navigate
  different areas of a page - e.g. header, nav, main, footer, article, section, aside.

## Sematics: ARIA
Where HTML semantics don't provide enough information, ARIA attributes can fill
the gap by providing extra information only to assistive technologies.
- ARIA doesn't affect behaviour, just accessibility information.

- If tabindex is used, an aria role should also be used. The list of roles is
  extensive. See [WAI-ARIA Authoring
  Practices](https://www.w3.org/TR/wai-aria-practices-1.1/) for specific info.

- ARIA attributes can specify relationships between elements which aren't clear
  from the DOM structure: e.g. parent-child (aria-owns).

- `aria-hidden` hides an element and all it's children from assistive
  technologies

- `aria-live` allows users of assistive technogolies to be notified of changes
  to an element as they happen, rather than only if their focus is currently on
  that element.

## Styling
- Focus should be visually indicated - don't remove an elements `outline`
  property without also setting the `:focus` pseudo-selector. Could set this
  along with the `:hover` selector as a general rule.

- Could use aria states as CSS selectors instead of adding additional classes
  to an element, e.g `.toggle[aria-pressed="true"] { ... }` instead of `.toggle.pressed { ... }
`. Otherwise if the state is only indicated with styling, assistive
technologies wont know about it.

- Responsive design is beneficial for users who might need to zoom in on the
  page to see it's content.

- Use the proper viewport meta tag: `<meta name="viewport"
  content="width=device-width, initial-scale=1.0">`. This tells the browser to
  fit content to the screen size. Also don't prevent zooming!

- Use `em` and `rem` for font sizes so that browser font size settings are 
  effective.

- Ensure 'touch targets' (e.g. buttons and links) are large enough on small touch screens - 48 device independent pixels (dp) as a minimum. Also that they're spaced far enough apart - at least 32dp.

- Colour contrast should be sufficient - use the [Accessibility DevTools
  extension](https://chrome.google.com/webstore/detail/accessibility-developer-t/fpkknkljclfencbdbgkenhalefipecmb) for Chrome to check this.

- Don't convey information with colour alone - this is quite common in form input validation. Instead
  use colour as a supplement.

That's it for now! I may add more detail and additional points as I read more about
it in the future.
