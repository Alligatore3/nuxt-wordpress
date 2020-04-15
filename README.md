# wordpress-nuxt
Use Wordpress API with Nuxt.js
<br/>

### This is my Q&A while executing `yarn create nuxt-app`

```
? Project name wordpress-nuxt
? Project description Use Wordpress API with Nuxt.js
? Author name Mattia Zanella
? Choose programming language JavaScript
? Choose the package manager Yarn
? Choose UI framework Bulma
? Choose custom server framework None (Recommended)
? Choose Nuxt.js modules (Press <space> to select, <a> to toggle all, <i> to invert selection)
? Choose linting tools (Press <space> to select, <a> to toggle all, <i> to invert selection)
? Choose test framework None
? Choose rendering mode Single Page App
```

---

The repo is structured as below:
```
/**
 * Of course al WP files are under this folder.
 * You should consider my functions.php file under my-theme/
 * Because it has some usefull functions inside.
 */
wordpress/

/**
 * And nuxt files are under this folder.
 */
nuxt/

```

### By the time I'm creating this repo [WP is at version 5.4](https://wordpress.org/download/) <br/>
The only reason I created the proper `wordpress/` repo is because I've put my custom theme which is required for the purpose of this demo.

<br/>

## You can find a [demo here](http://mattiazanella.it/develop/wordpress-nuxt/) 🖥

#### But how you deploy your environment it's up to you.
