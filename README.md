# PomoProject

Download or clone project from git hub-->
1.) git clone https://github.com/Adikanu/PomoProject.git


Open project in any IDE(WebStorm) and open any terminal in IDE

##Install Dependencies-->
We have two kinds of dependencies in this project: tools and Angular framework code. The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [Node package manager][npm].
* We get the Angular code via `bower`, a [client-side code package manager][bower].
* In order to run the end-to-end tests, you will also need to have the
  [Java Development Kit (JDK)][jdk] installed on your machine. Check out the section on
  [end-to-end testing](#e2e-testing) for more info.

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
2.) npm install
```

This command reads scripts  from  package.json file and downloads the following tools into the node_modules directory:

Bower - client-side code package manager
Http-Server - simple local static web server
Karma - unit test runner
Protractor - end-to-end (E2E) test runner
After clone this repo, run npm install inside the project folder to install and build the project dependencies.


##Running the Development Web Server-->

I have preconfigured the project with a simple development web server. The simplest way to start
this server is:

```
3.) npm start
```

Now browse to the app at [`localhost:8000/index.html`][local-app-url].

To run this project you just need to run npm start to start the development server at http://localhost:8000/Promodoro/. Enjoy it!

Now browse app to or type in url  http://localhost:8000/Promodoro/

##Running UnitTests


```
4.) npm test
```

This will start the Karma unit test runner. Karma will read the configuration file karma.conf.js, located at the root of the project directory. This configuration file tells Karma to:

 ->Open up instances of the Chrome and Firefox browsers and connect them to Karma.
->Execute all the unit tests in these browsers.
->Report the results of these tests in the terminal/command line window.
->Watch all the project's JavaScript files and re-run the tests whenever any of these change.

