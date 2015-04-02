
mai-boilerplate
===============

[Koa](https://github.com/koajs/koa) boilerplate we use to create mai3.me, aim to be lean, flexible and only provide direction for app structures


# Motivation

`koa` is very flexible when it comes to app structure, but at the same time it leaves the burden of coming up with one to developers.

This repo aims to provide some directions on how to kickstart your first koa app.


# Basic features

- A router
- A logger for debugging requests
- A config loader for your app specific settings
- Setup database connections, examples includes `mongodb` and `redis`
- Devtools like livereload and static files server for local development
- Demo how to make use generators/promises
- Some npm scripts to get your started


# Setup

`npm install` and `npm run local`, visit http://localhost:8080/


# App structure

```
components - contains your app
public - contains public assets
tests - literally
```

Instead of forcing you into a specific folder structure (like most MVC, MVVM frameworks), we simply recommend *grouping features into isolated components, stay lean and modular*.

Say you are to build a landing page for your site:

1. Start by adding a `landing` folder (as a component).

2. Write your main business logic there.

3. As you code, think about what can be abstracted into its own component, like `templates`, `renderers`, `i18n` etc.

4. See if it should exists in the `landing` folder (landing page specific modules), or move to a parallel directory under `components` (common modules that can be shared across components).

**In short, avoid premature refactoring, use architectural patterns where you can see significant gains, not because it's what you used to or what textbooks told you to.**

Happy coding!


# License

MIT

