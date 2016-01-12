# Context Atlas

![true true](http://www2.pictures.zimbio.com/mp/3YN8yZYv5dMl.jpg)

## Context and Scope in JavaScript

| Lesson Objectives - SWBAT                |
| ---------------------------------------- |
| Explain the difference between Context and Scope |
| Explain `this` and its implementations   |
| Effectively use `Function.prototype.apply()` & `Function.prototype.call()` |
| Effectively use `Function.prototype.bind()` |
| Identify the three implementations of `this` |

##### Road Map

1. Context & Scope, [a Frame Tale](https://en.wikipedia.org/wiki/Frame_story)
2. The Difference Between Context and Scope
3. `this` Wandering Soul
4. Binding Context Functionally
5. Conclusion

## Context and Scope - A Frame Tale

![halle berry](http://www.cityoffilms.com/wp-content/uploads/2012/08/Cloud-Atlas-berry.jpg)



A Frame Tale is a story within a story; a nested tale, if you will. Some famous examples include *The Sandman*, *One Thousand and One Nights*, *The Princess Bride*, and *The Cantebury Tales*. 

Today we'll be considering Scope and Context using *Cloud Atlas*, an extremely nested frame tale (six stories in all), as a guide to understanding Context.

## The Difference Between Context and Scope

It's important to understand the distinction between Context and Scope. Many JS developers muddy the two meanings, but they are absolutely not the same.

Every function invocation contains both a scope and a context associated with it. Fundamentally, scope is *function-based* while context is **object-based**. We can see why this is confusing, as functions are, of course, objects in JS.

Scope pertains to the variable access of a function when it is invoked and is unique to each invocation (recall block scoping in ES2015 with `let` and `const`). Context is always the value of the `this` keyword which is a reference to the object that “owns” the currently executing code.

Another way to think about it is:

- Context is exactly where we are, and refers to `this`
- Scope is where we are, as well as all variables that are availabe in enclosing functions/global

**Remember**: 

1. Local variables exist only within the function body of which they are defined and will have a different scope for every call of that function. 
2. Any defined global variable, meaning any variable declared outside of a function body will live throughout runtime and can be accessed and altered in any scope.

##  `this` Wandering Soul

![comet birthmark](http://4.bp.blogspot.com/-3ByLUi8BEYA/Uf-0Y2EL4eI/AAAAAAAAUBg/Sewr-M3MOag/s1600/9.jpg)



Context is all about `this` and `this` is generally determined by how a function is invoked.

For instance, when a method on an object:

``` javascript
var goodSoul = {
    frobisher: function(){
        return this === goodSoul;    
    }
};

goodSoul.frobisher(); // true
```

However, when detached from an object (AKA an unbound function):

``` javascript
var birthmark = function() {
  return this;
};

birthmark(); // window
```

 Using `'use strict'` changes the value of `this` (when on the global scope) from `window` to `undefined`. See the table below for a better understanding of `this` on the global scope:

| ES5      | ES5 'use strict' | ES2015 'use strict' |
| -------- | ---------------- | ------------------- |
| `window` | `undefined`      | `undefined`         |

> Can anyone tell me why this is such a necessary update to JavaScript?

Taking the same `birthmark` function from earlier, we see that when we invoke it with the `new` keyword, making it act as a constructor, `this` will no longer be on the global scope, but on the newly created instance of birthmark.

``` javascript
new birthmark(); // birthmark {}
```

But let's take this a bit farther. With constructors, if the function has a return statement that returns an object, that object will be the result of the `new` expression.  Otherwise, the result of the expression is the object currently bound to `this` (generally how constructors work).

## Binding Context Functionally

We can also set context when we call a function. There are three main methods to acomplish this:

1. `Function.prototype.call()`
2. `Function.prototype.apply()`
3. `Function.prototype.bind()`

`Function.prototype.apply()` and `Function.prototype.call()` work extremely similarly. 

In both cases, the first parameter is the object to which you want the context bound. Additionally, in non-strict mode code, `null` and `undefined` will be replaced with the global object, and primitive values will be boxed (made into an instance of the corresponding parent constructor object).

For `Function.prototype.apply()`, the second argument is an array. 

In the case of `Function.prototype.call()`, the second argument is an undetermined amount of arguments.

``` javascript
function sameSoul(soulC, soulD){
  return this.soulA + " is " + this.soulB + " is " + soulC + " is " + soulD + "!";
}

var firstTwo = {soulA: "Adam Ewing", soulB: "Robert Frobisher"};

// The first parameter is the object to use as
// 'this', subsequent parameters are passed as 
// arguments in the function call
sameSoul.call(firstTwo, "Sonmi-351", "Zachry"); // "Adam Ewing is Robert Frobisher is Sonmi-351 is Zachry!"

// The first parameter is the object to use as
// 'this', the second is an array whose
// members are used as the arguments in the function call
sameSoul.apply(firstTwo, ["Sonmi-351", "Zachry"]); // "Adam Ewing is Robert Frobisher is Sonmi-351 is Zachry!"
```

##### Note on `Function.prototype.apply()`

Now with the spread operator in ES2015, this method may fall out of use since you can use `Function.prototype.call()` with either an array or list of arguments with spread operators (recall `…bunchaSouls` as arguments in a function).

### `Function.prototype.bind()`

Invoking this method creates a new function with the same body and scope as the original function, but where `this` is permanently bound to the first argument of `bind`.

This makes `Function.prototype.bind()` an extremely useful method for borrowing methods.

``` javascript
function sameSoul(soulC, soulD){
  return this.soulA + " is " + this.soulB + " is " + soulC + " is " + soulD + "!";
}

var noGood = {
  soulA: "Old Georgie",
  soulB: "Henry Goose",
}

var badSouls = sameSoul.bind(noGood);

badSouls("Nurse Noakes", "Vyvyan Ayrs"); // "Old Georgie is Henry Goose is Nurse Noakes is Vyvyan Ayrs!"
```



## Conclusion

Context and Scope are two enormously important aspects of javascript, and understanding these methods will assist you greatly in your growth as a programmer. Context is a difficult concept - even seasoned pros will still make errors with `this`. However, questions regarding context and `this` are extremely common in interviews, so it's a good idea to practice with these methods.

##### Questions

1. How do scope and context differ?
2. How do `.apply()` and `.call()` differ?
3. What does the first parameter of `.bind()` do?

#### References

[Understanding Scope and Context in JavaScript](http://ryanmorr.com/understanding-scope-and-context-in-javascript/)

[JavaScript’s Apply, Call, and Bind Methods are Essential for JavaScript Professionals](http://javascriptissexy.com/javascript-apply-call-and-bind-methods-are-essential-for-javascript-professionals/)