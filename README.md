# Multilingual, Next.js template

**Demo**: https://multillingual-nextjs-template.now.sh/

You have a message to get it out there and you want to communicate it to a global audience. You need the website that will host it to be fast, multilingual, SEO optimized and ready to be easily styled. You also don't need your template to be over-engineered with complex solutions like Redux. Then this is the template for you.

Inspired by this blog post:
https://medium.com/swlh/how-to-build-a-multilingual-website-in-next-js-2924eeb462bc

And built out of necessity in the [pandemic days](https://en.wikipedia.org/wiki/2019%E2%80%9320_coronavirus_pandemic) to communicate essential information to a global audience, fast.

## Technologies used

- Next.js
- Material-UI
- Styled-Components
- Airtable

## Getting started

**tl;dr** If you don't care about integrating with Airtable to manage translations then remote `npm run download-translations` from `package.json` and run:

```
npm install
npm run dev

```

If you do, read on.

The template is setup to integrate with [Airtable]() to download translations. If you don't want to interface with airtable then remove the `npm run download-translations` command from `"dev": "npm run download-translations && next",` in package.json. This way the template won't try to download the translations from Airtable. You can provide the translations to the application yourself manually by entering them in the `src/translations/translations.json` file.

If you wanted to have a similar Airtable setup, then you need to enter your Airtable API secrets inside the .env file. (just rename the `.env.example` to be `.env` and enter your values there.)

Here is how the Airtable translations file looks like:

![airtable translation file](https://i.imgur.com/pZRcn9O.png)

After that, run:

```

npm install
npm run dev

```

## Reference

- Checkout out the `DECISION_LOG.md` to see the reasonings for some of the decisions in this template.

- Uses [this](https://github.com/mui-org/material-ui/tree/master/examples/nextjs-with-typescript) example to integrate the `MaterialUI` library.

- Uses [this](https://github.com/mui-org/material-ui/tree/master/examples/with-styled-components) example to integrate the `Styled Components` library.

- [This](https://medium.com/javascript-in-plain-english/ssr-with-next-js-styled-components-and-material-ui-b1e88ac11dfa) is a pretty good article on how to make `styled-components` and `Material-UI` play nice with each other in Next.js.

```

```
