# Code challenge - Show 3 images from Giphy.com

## Ground rules

The purpose of this scenario is to get an insight into your way of thinking, and to be able to discuss the technical choices and considerations you have made while developing the solution - not to have a fully finished and polished web app.

You should consider the scenario to be the start of a project - where more developers might be added later and more requirements surfaced later - not as a throwaway prototype.

You choose the tools, framework(s), libraries, etc. Push it to your github account, so we can see it.

---

## Scenario

Make a small frontend web application that can explore a data set of images.

In order to show more than 3 images the user should be able to page through the suggestions.

The proposed UI is composed of two main parts:

### A query section with:

- A text field as a search input for the topic of the query.
- A text field with text to be displayed on or below the images
- A dropdown with options for where to show the text:
  - on top of image - center top
  - on top of image - center bottom
  - below image - center

### A result section:

- Showing 3 images horizontally in desktop view, vertically on mobile.
- Navigation buttons to go next and previous on the images

---

## Data access

Documentation:  
https://developers.giphy.com/docs/api/endpoint/#search

---

## Requirements:

- Use this `api_key`: 1bkG7ky5cmw5SLyvNfElcR1iYVzs38Zq
- Use rating: `g`
- Use this image path from the `response.data`: images.downsized_medium.url
- Use this as inspiration (searching for "cat", with rating g and limit 10): https://api.giphy.com/v1/stickers/search?q=cat&limit=10&rating=g&api_key=1bkG7ky5cmw5SLyvNfElcR1iYVzs38Zq

---

## How to submit

Please upload the code for this project to GitHub, and post a link to your repository below.

The toolchain is up to you, but to save time feel free to run something like this to get started:

```bash
npx create-react-app giphy-web --template typescript
```
