# Decision Log

## Use a vanilla translation solution

Date: 25/03/2020

Looked at `react-intl` and `nexti18n-next` libraries and decided against using them since the changes in Now 2.0 (and server.js file now being ignored) made a lot of these libraries incompatible with the latest workflows.

I will be missing out on some neat features that comes with these libraries such as string interpolation, date and currency formatting, etc… but I think it is a reasonable trade off for now since the content envisioned to be built this template is static. Besides none of the examples I have seen for these libraries was built for supporting a structure that I had in mind (url’s being like ‘\[lang]/content’ so I will be going a vanilla solution.

This medium article provides a pretty comprehensive walkthrough of that:
https://medium.com/swlh/how-to-build-a-multilingual-website-in-next-js-2924eeb462bc

## Use Material-UI for ready-made components.

Date: 26/03/2020

It is useful to make use of a component library to quickly utilize ready-made solutions instead of reinventing the wheel yourself. Material-UI is a good choice here since it has a lot of customizable components, it is themable and SSR compatible.

## Use Styled Components instead of Styled-JSX

Data: 26/30/2020

This is a bit of a personal choice but I prefer `styled-components` over `styled-jsx` because it is easily themable, easier to override child classes with if you needed to, has a larger community and better documentation.
