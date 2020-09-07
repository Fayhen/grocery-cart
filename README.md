# grocery-cart

This is a simple cart application built with TypeScript and the new Vue Composition API, made as a learning experience.

Current build uses TypeScript version 3.9.7 and composition-api version 1.0.0-beta.8.

The cart itself works by instantiating a Cart class which has a Map property that contains each of the user-added products. Class methods handle adding, updating and removing products from the cart, as well as emptying the cart entirely. Products are imported from a JSON file with dummy data and distributed throughout the application.

Checkout will simply notify the user that the purchase has been complete, by means of a native browser notification. A JSON string containing cart data, such as one required by a POST request to a server, is printed to the console.

To run this project locally, simply clone this repository and follow the instructions below.


## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
