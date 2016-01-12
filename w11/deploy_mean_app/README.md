# Uncle Derry's Fishin' Friends!

![derry](http://i.somethingawful.com/cliff/ihateyou/page-119-02.jpg)

## Building & Deploying a MEAN App!

| Lesson Objectives                        |
| :--------------------------------------- |
| Understand file structure options for MEAN applications |
| Know the steps necessary to deploy an application to Heroku |
| Connect a hosted database to your MEAN application |

#### Road Map

1. This is the <u>Last Fishin' Time</u>, Derry. - Building and Deploying a MEAN Application Intro
2. Installing
3. Set Up
4. Going through the heroku docs
5. Setting up MongoLab
6. Good Luck Derry - Conclusion & Questions

# This is the Last Fishin' Time, Derry

Uncle Derry is in pretty desperate shape. I made the mistake of answering another one of his calls and he's convinced he finally has an app that will get him some friends at the sewage dump he calls a pond. I'm tired of helping him, but he's twisted my arm one last time to help him deploy his app. He thinks no one has called because he hasn't seemed flashy enough on the internet, so he made his very own MEAN app: *Uncle Derry's Fishin' Friends*. 

Now let's help him deploy it.

#### Before We Deploy - File Structure

There are two overall styles of file structure patterns I see with MEAN applications: the MVC/MVVM pattern or by component pattern.

MVC/MVVM Structure:

``` 
 - app/
 ----- bin/
 ---------- www
 ----- config/
 ---------- database.js
 ---------- seeds.js
 ---------- environment.js
 ----- models/
 ---------- fish.js
 ----- controllers/
 ---------- fish_controller.js
 ----- routes/
 ---------- api.js
 - public/
 ----- assets/
 ---------- css/
 --------------- style.css
 ----- app/
 ---------- controllers/
 --------------- mainCtrl.js
 --------------- userCtrl.js
 ---------- services/
 --------------- authService.js
 --------------- userService.js
 ---------- app.routes.js
 ---------- app.module.js
 ---------- templates/
 --------------- users/
 -------------------- all.html
 -------------------- single.html
 --------------- login.html
 --------------- home.html
 ---------- index.html
 - node_modules/
 - package.json
 - server.js
 - Procfile
```

Componential Structure:

``` 
 - app/
 ----- bin/
 ---------- www
 ----- config/
 ---------- environment.js
 ---------- database.js
 ---------- seeds.js
 ----- routes/
 ---------- api.js
 ----- fishes/
 ---------- fish.model.js
 ---------- fishes.controller.js
 - public/
 ----- assets/
 ---------- css/
 --------------- style.css
 ----- app/
 ---------- shared/
 --------------- sidebar/
 -------------------- sidebarView.html
 -------------------- sidebarController.html
 -------------------- sidebarService.html
 ---------- components/
 --------------- users/
 -------------------- userCtrl.js
 -------------------- userService.js
 -------------------- userView.html
 --------------- articles/
 -------------------- articleCtrl.js
 -------------------- articleService.js
 -------------------- articleView.html
 ---------- app.js
 ---------- app.routes.js
 ---------- index.html
 - node_modules/
 - package.json
 - server.js
```



As we can see, the MVC/MVVM structure mirrors a Rails application. This is often more familiar to developers, and therefore, it will be our structure for this lesson.

However, many MEAN stack developers prefer the components structure when they're working on projects of greater complexity. " As you build more Angular applications, you will see a pattern arise; your site will start to beseparated by sections. For instance, we have a user section and could move forward to create an article section, music, and whatever other resource. …[For the more advanced project,] we can inject the controllers, services, and routes into one main user module and inject that into our entire applications parent module." (MEAN Machine, Sevilleja & Lloyd).

## Installing

Copy the starter code outside of the `WDI_DTLA_6` Repository. We'll eventually be using Heroku to launch this app, so we do not want any nested repos!

Next:

`$ cd derrys_fishin_friends`

`$ npm install`

`$ mongod`

`$ nodemon`

Take the next 5 minutes to read through the app and see how it works.

## Set Up our App for Deployment

Create `.env` file

Comb through structure for any additional file creations. Eventually we'll also need a `Procfile`.

## Walk Through Heroku Build Process

[Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction) is a step by step document on how to deploy a Node application to Heroku.

Let's go through it together.

## Set Up MongoLab

We have options here. Using the addons method is quick and easy. However, sometimes you may want to hook up an already hosted database.

If we want to make our own, we'll be following these documentations: [Connecting to Your Database](http://docs.mongolab.com/connecting/#connect-string)

## Good Luck Derry! - Conclusion and Questions

Well, the site is up - I hope him the best, but I think misery suits him.

##### Questions

1. What are two popular ways to structure an application
2. What file is necessary in every Heroku deployment?
3. What are two methods to connect a database to a Heroku site?

### References

[Solution Code](https://github.com/EARnagram/derrys_fishin_friends)

[Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction)

[Connecting to Your Database](http://docs.mongolab.com/connecting/#connect-string)