# Decision Log

## Use a vanilla translation solution

Date: 25/03/2020

Looked at `react-intl` and `nexti18n-next` libraries and decided against using them since the changes in Now 2.0 (and server.js file now being ignored) made a lot of these libraries incompatible with the latest workflows.

I will be missing out on some neat features that comes with these libraries such as string interpolation, date and currency formatting, etc… but I think it is a reasonable trade off for now since the content envisioned to be built this template is static. Besides none of the examples I have seen for these libraries was built for supporting a structure that I had in mind (url’s being like ‘\[lang]/content’ so I will be rolling a vanilla solution.

This medium article provides a pretty comprehensive walkthrough of that:
https://medium.com/swlh/how-to-build-a-multilingual-website-in-next-js-2924eeb462bc
