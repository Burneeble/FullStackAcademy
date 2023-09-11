# Task

Your task is to deploy a Database in DynamoDB and then create Lambdas that have to interact with it. You'll have to create a **car dealership** so that you're able to register, read, modify and delete car records that contain information about the car.

## Technical specifications

Ideally:
First you'll have to create a `Car` class that contains JSON attributes only (see [typescript-json-serializer](https://www.npmjs.com/package/typescript-json-serializerhttps:/));

Then, create a `Utilities` class inside a file that create parameters to interact with DynamoDB .

After that, create a `Manager` class inside another file that use the parameters to factually interact with DynamoDB (take `app-backend` as an example and read the [docs](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/dynamodb-examples.htmlhttps:/)).

Finally, create the lambda functions, you should be able to:

- Create a car inside the database;
- Read information about a car;
- Update a car record information;
- Delete a car;
- Read all cars.
