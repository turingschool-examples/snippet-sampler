# Snippet Sampler

## Getting Started

First and foremost, let's make a directory.

```
mkdir snippet-sampler
```

Treat yourself to some sweet, sweet `cd` action and head on into that directory.

```
cd snippet-sampler
```

Alright, now let's get a `package.json` in place.

```
npm init --yes
```

We'll probably want some dependencies too.

```
npm install -D firebase firebase-tools jquery webpack webpack-dev-server
```

Cool. We're not done setting up just yet.

```
touch webpack.config.js
mkdir public lib
touch public/index.html public/style.css lib/index.js
```

We'll use a super simple webpack configuration.

```js
const path = require('path');

module.exports = {
  entry: './lib/index.js',
  output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
};
```

We'll also go ahead and add `start` and `build` scripts to `package.json`.

```js
{
  // Other properties…
  "scripts": {
    "start": "webpack-dev-server",
    "build": "webpack",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  // Other properties…
}
```

In `index.html`, let's add some markup.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Snippet Sampler</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>

    <header>
      <h1>Snippet Sampler</h1>
    </header>

    <section id="new-snippet">
      <form id="new-snippet--form">
        <input type="text" placeholder="Title" id="new-snippet--title">
        <textarea placeholder="Code" id="new-snippet--code"></textarea>
        <input type="submit" id="new-snippet--submit">
      </form>
    </section>

    <section id="snippets"></section>

    <script src="bundle.js"></script>
  </body>
</html>
```

Let's also have give it some style.

```css
(Forthcoming…)
```

## Configuring Firebase

Head over to https://console.firebase.google.com/ to create a new application.

Hit the big blue button that says "Create New Project."

![Create new project](images/create-now-project.png)

Next, we'll need to get our hands on those sweet, sweet Firebase keys.

Go to your app, click on "Auth" in the sidebar and then click on "WEB SETUP" in the upper right-hand corner.

![Get your project configuration keys](images/D5RsjWWn3W.gif)

In `lib/index.js`, we'll add the following in order to get Firebase configured and setup.

```js
const firebase = require('firebase');

// Paste the configuration you copied from the Firebase Console above here.
```

![Firebase configuration](images/configuration-firebase.png)

At this point, we have most of our setup done and we're ready to start building our application.
