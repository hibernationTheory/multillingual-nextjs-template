# Multilingual SSR rendered Next.js template

You have a message to get it out there, and you want to communicate it to a global audience. You need the website that will host it to be fast, multilingual, SEO optimized and ready to be easily-styled. You also don't need your template to be over-engineered with complex solutions like Redux for easily adjustability. Then this is the template for you.

Inspired by this blog post:
https://medium.com/swlh/how-to-build-a-multilingual-website-in-next-js-2924eeb462bc

And built out of necessity in the [pandemic days](https://en.wikipedia.org/wiki/2019%E2%80%9320_coronavirus_pandemic) to communicate essential information to a global audience, fast.

Check it out at: https://multillingual-nextjs-template.now.sh/en

## Getting started

// TODO explain why it is `now dev` and not `npm run dev`. (API route);
run `now dev`.

## TODO

- Fix TS issues in `_app.tsx`. And unsuppress TS errors.

## Reference

- Checkout out the `DECISION_LOG.md` to see the reasonings for some of the decisions in this template.
- Uses [this](https://github.com/mui-org/material-ui/tree/master/examples/nextjs-with-typescript) example to integrate the `MaterialUI` library.
- Uses [this](https://github.com/mui-org/material-ui/tree/master/examples/with-styled-components) example to integrate the `Styled Components` library.
- [This]9https://medium.com/javascript-in-plain-english/ssr-with-next-js-styled-components-and-material-ui-b1e88ac11dfa) is a pretty good article on how to make `styled-components` and `Material-UI` play nice with each other.
- On how to use `fetch` with relative paths on server side: https://spectrum.chat/next-js/general/isomorphic-unfetch-error-only-absolute-urls-are-supported~e3697ba5-6747-4063-8f63-d91fe9e6af12
- Getting global data for the entire app once: https://stackoverflow.com/questions/58876930/fetch-global-data-for-the-whole-app-in-next-js-on-initial-page-load
- Suppressing TS errors: https://github.com/zeit/next.js/pull/9138 (TEMP)
- On settings environment variables: https://zeit.co/docs/v2/build-step#providing-environment-variables && https://zeit.co/docs/v2/serverless-functions/env-and-secrets

## Learnings

- Remember `getInitialProps` can only be used inside the `pages`.
