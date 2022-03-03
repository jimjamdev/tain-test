## .... 6-8 hours ....

![wtf](https://c.tenor.com/P3071wk1eXcAAAAC/laughing-baby.gif)

# To start
npm i && npm run start

# Desc
So I went a path of SCSS modules for grid/layout and some static classes spit out globally, and a bunch of custom components. Not too much in sass here.
Now, i get the 6-8 hours if I had something ready, or an available stack. If it was my choice i'd just have went with apollo on nextjs. Solves a lot of these problems.

So, there's a small local-1 test branch to look at. It's mostly static data in redux and some tests with state to localstorage.

For main branch, you'll need the backend from https://github.com/jimmyjamieson/ag-server and npm i && npm run develop.
Backend is http://localhost:1337/admin/ 

You might have to set up a new admin user as it's just using a local db to test. Try cogocreative@gmail.com and Password1 - as I saved the .tmp folder in the repo - naughty.

# Notes
Never got the socket thing running for backend, but using quite a clean setup with RKT Query with polling, so you get updates across tabs. The local-1 version uses localstorage and a sync plugin if you're interested.

Take a look at another test to see one with a bit more components and sass https://github.com/jimmyjamieson/carma-movies

# SetUp
- Nextjs
- Typescript
- SASS
- Redux
- Redux-Toolkit
- RTK-Query

# Time
- Monday - Some base and research
- Tuesday - N/A 
- Wednesday - Some styles and polling demo