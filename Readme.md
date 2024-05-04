# Object-Oriented Programming Patterns

This repository is dedicated to demonstrating various Object-Oriented Programming (OOP) patterns. These patterns are fundamental to writing organized and manageable code, and understanding them can greatly enhance your programming skills.


## Table of Contents

1. [Strategy Pattern](#strategy-pattern)
2. [Observer Pattern](#observer-pattern)
3. [Factory Method Pattern](#factory-method-pattern)
4. [Abstract Factory Pattern](#abstract-factory-pattern)

## Strategy Pattern

The first pattern we'll explore is the Strategy Pattern. This pattern is a behavioral design pattern that enables selecting an algorithm at runtime. Instead of implementing a single algorithm directly, code receives run-time instructions as to which in a family of algorithms to use.

### Structure

The Strategy Pattern involves three main components:

1. **Context**: Maintains a reference to a Strategy object.
2. **Strategy**: Common interface for all supported algorithms. Context uses this interface to call the algorithm defined by a ConcreteStrategy.
3. **ConcreteStrategy**: Implements the algorithm using the Strategy interface.

### Usage

The Strategy Pattern is used when:

- There are multiple ways to achieve something, and the best method can only be determined at runtime.
- You want to hide the complex or algorithm-specific data structures used by the algorithm from the client.

### Common Cases

1. **Routing**: You can use the Strategy pattern to handle different routing strategies. For instance, you might have different strategies for API routes, static file serving, and dynamic routes.
2. **Authentication**: Different strategies can be used for different authentication methods, such as OAuth, JWT, or basic username/password authentication. Libraries like Passport.js use this pattern extensively.
3. **DataValidation**: You can have different validation strategies for different types of data. For example, you might have one strategy for validating user input, another for validating file uploads, etc.
4. **DatabaseOperation**:If your application needs to support different databases (like MongoDB, PostgreSQL, etc.), you can use the Strategy pattern to switch between different database operation strategies.
5. **Payment Processing**: If your web application needs to handle different payment gateways (like Stripe, PayPal, etc.), the Strategy pattern can be used to switch between different payment processing strategies.

### Conclusion

Remember, the Strategy pattern is useful when you have several related classes that only differ in their behavior. Strategies provide a way to configure a class with one of many behaviors.

## Observer Pattern

The Observer Pattern is a behavioral design pattern that allows objects to notify other objects about changes in their state. The Observer Pattern is widely used when a change to one object requires changing others, and you don't know how many objects need to be changed.

### Structure

The Observer Pattern involves two main components:

1. **Subject**: Maintains a list of observers, facilitates adding or removing observers
2. **Observer**: Provides an update interface for objects that need to be notified of a Subject's changes of state

### Usage

The Observer Pattern is used when:

- An abstraction has two aspects, one dependent on the other. Encapsulating these aspects in separate objects lets you vary and reuse them independently.
- A change to one object requires changing others, and you don't know how many objects need to be changed.
- An object should be able to notify other objects without making assumptions about who these objects are. In other words, you don't want these objects tightly coupled.

### Common Cases

1. **Event Handling**: In event-driven programming, the Observer pattern is often used to notify interested objects when a particular event occurs.
2. **Model-View-Controller (MVC)**: The Observer pattern is used in the model-view-controller (MVC) architectural pattern. In MVC, the this pattern is used to decouple the model from the view.
3. **Progress Reporting**: If you have a long-running task (like a file upload), you can use the Observer pattern to notify interested parts of your application about the progress.
4. **Newsletter Subscriptions**: When a new article or post is published, all subscribers (observers) can be notified.
5. **State Management Libraries**: Libraries like Redux (used in React) or Vuex (used in Vue.js) use the Observer pattern to notify components when the application state changes, so they can update their views accordingly.

### Conclusion

The Observer pattern provides a simple way of communicating between components in a loosely coupled manner. It's a key part in many reactive systems and data-driven applications.

## Factory Method Pattern

The Factory Method Pattern is a creational design pattern that provides an interface for creating objects, but allows subclasses to alter the type of objects that will be created.

### Structure

The Factory Method Pattern involves two main components:

1. **Creator**: Declares the factory method, which returns an object of type Product. Creator may also define a default implementation of the factory method.
2. **ConcreteCreator**: Overrides the factory method to return an instance of a ConcreteProduct.

### Usage

The Factory Method Pattern is used when:

- A class can't anticipate the class of objects it must create.
- A class wants its subclasses to specify the objects it creates.
- Classes delegate responsibility to one of several helper subclasses, and you want to localize the knowledge of which helper subclass is the delegate.

### Common Cases

1. **UI Libraries**: A library that's used for building UI components might use the Factory Method pattern to create buttons, panels, dialogs, etc.
2. **Database Connectors**: Depending on the type of database (MySQL, PostgreSQL, MongoDB, etc.), a different type of connector might be created.

## Abstract Factory Pattern

The Abstract Factory Pattern is a creational design pattern that provides an interface for creating families of related or dependent objects without specifying their concrete classes.

### Structure

The Abstract Factory Pattern involves several components:

1. **AbstractFactory**: Declares an interface for operations that create abstract products.
2. **ConcreteFactory**: Implements the operations to create concrete product objects.
3. **AbstractProduct**: Declares an interface for a type of product object.
4. **ConcreteProduct**: Defines a product object to be created by the corresponding concrete factory, and implements the AbstractProduct interface.

### Usage

The Abstract Factory Pattern is used when:

- A system should be independent of how its products are created, composed, and represented.
- A system should be configured with one of multiple families of products.
- Products from a family are designed to work together, and you need to enforce this constraint.
- You want to provide a class library of products, and you want to reveal just their interfaces, not their implementations.

### Common Cases

1. **GUI Toolkits**: Different operating systems have different look and feel for their GUI controls. An application can use an Abstract Factory to create controls that look native to the OS it's running on.
2. **Database Migration Tools**: These tools can use Abstract Factory to create different types of database commands, which makes it easy to switch between different databases.

### Conclusion

The Factory Method and Abstract Factory patterns encapsulate the complexities of creating objects. The Factory Method pattern uses inheritance and relies on a subclass to handle the desired object instantiation. On the other hand, the Abstract Factory pattern uses object composition. Object creation is implemented in methods exposed in the factory interface.

Stay tuned for more patterns!