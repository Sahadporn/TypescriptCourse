# What is Typescript

Typescript is a programming language but it's also a tool. It's a powerful compiler which you run over your code to compile your typescript code to Javascript. So a result of writing code in ts is js. Ts compiler compiles these new features to JavaScript workarounds so in the end it might give nicer syntax, easier way of doing something and it will then compile that nicer easier way to a more complex JavaScript snippet. One important thing which the name already implies is it adds types, it adds a feature to the js language.

Ts's type system only helps during development (i.e. before the code gets compiled).

Js is dynamically typed which means it's perfectly fine when a variable which initially might hold a number later is assign a string to it.

Ts is statically typed which means it need definition for the types of variables and parameters ends on during development.

Initialize setup

```typescript
tsc --init

// create .js for all .ts
tsc
```

Using watch mode

```typescript
tsc [filename.ts] -w
```

## tsconfig.json

"Lib": [
    // all core vanilla js
    "dom",
    "es6",
    "dom.iterable",
    "scripthost"
] -> option that allows you to specify which default objects and features typescript knows

"sourceMap" -> help with debugging and developing
"outDir" -> setting dist folder
"rootDir" -> setting source folder
"noEmitOnError" -> conpiling file despite having errors
"strict" -> enables all strict type checking options
