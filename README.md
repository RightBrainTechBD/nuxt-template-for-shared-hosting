# Nuxt Template for Shared Hosting

> A Nuxt.js starter template for deploying in Apache Shared Hosting

**This template is still under development, feedback welcome!**

## Modules Used

- [PWA Module](https://github.com/nuxt-community/pwa-module) - Supercharge Nuxt with a heavily tested, updated and stable PWA solution.
- [Axios Module](https://github.com/nuxt-community/axios-module) - Secure and easy Axios integration with Nuxt.js.
- [Router Module](https://github.com/nuxt-community/router-module) - Nuxt.js module to use router.js instead of `pages/` directory.

## Installation

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli).
> Make sure to use a version of vue-cli >= 3.2 (`vue -V`).

- Create the project. 

``` bash
$ vue init RightBrainTechBD/nuxt-template-for-shared-hosting my-project  
```

- Go to the location you have created your project

``` bash
$ cd my-project
```

- Install dependencies

``` bash
$ npm install # Or yarn install
```

## Usage

### Development

``` bash
# serve with hot reloading at localhost:3000
$ npm run dev
```

Go to [http://localhost:3000](http://localhost:3000)

### Production

``` bash
# build for production and launch the server
$ npm run build
$ npm start
```

### Generate

``` bash
# generate a static project
$ npm run generate
```

### Deployment in Apache Shared Hosting

Run your project from any Directory of your shared hosting server. 

By default the App will be run on: [http://localhost:3000](http://localhost:3000). You can change the port if you want.

To change the port add the `server` property to your `nuxt.config.js`

``` bash
server: {
    // replace XXXXX with the port on which you want your Nuxt.js application listens
    port: XXXXX
}
```

Now, at the public directory of your domain `(eg: yourdomain.com)` add a `.htaccess` file & add the following lines of code.

``` bash
RewriteEngine on

# Forcing all incoming requests to HTTPS. 
# HTTPS is required for PWA. If you don't want PWA feature you can deisable next 2 lines
 
RewriteCond %{HTTPS} !on
RewriteRule (.*) https://%{HTTP_HOST}%{REQUEST_URI} [R=301,L]

DirectoryIndex index.html

RewriteRule ^$ http://127.0.0.1:XXXXX/ [P,L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ http://127.0.0.1:XXXXX/$1 [P,L]
```
> In both RewriteRule lines, replace XXXXX with the port on which your Nuxt.js application listens.

Now you can view you NUXT app from `https://yourdomain.com`.

**This template is still under development, let me know if you find any issue!**

> *** This project is created using: [nuxt-community/pwa-template](https://github.com/nuxt-community/pwa-template)
