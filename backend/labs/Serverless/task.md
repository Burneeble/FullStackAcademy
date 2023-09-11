# Task

Your task is to create a `Calculator` class in **Typescript** and then to make some lambda endpoints avaiable which take two numbers in input, perform the 4 basic operations with them and then return the result.

## Technical specifications

The `Calculator` class has to be a singleton class (more info: [Singleton Class](https://refactoring.guru/design-patterns/singleton/typescript/examplehttps:/)) and it has to throw errors in particular situation, for example, when a division for 0 is attempted, these errors have also to be visible when attempting to call the Lambdas with faulty values, the lambdas have to return the status code accordingly. Everything has to be written in **Typescript**.

In total there will be 4 endpoints:

`sum`, it has to be a `GET` operation and has to take two numbers in **query**.

`sub`, it has to be a `GET` operation and has to take two numbers in **path**.

`mul`, it has to be a `POST` operation and has to take `n` numbers in **body** where `n` > 0.

`div`, it has to be a a `POST` operation and has to take `n` numbers in **body** where `n` > 1.
