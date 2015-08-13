# ![Ionic](www/img/ionic_logo.png)

An introductory project for [Ionic](http://ionicframework.com), used in conjunction with [this workshop presentation](http://emilyemorehouse.github.io/ionic-present)!

This application begins with Ionic's tabs starter application. Each commit is meant to walk through small steps to adding a journal tab to the app.

From the initial commit of the boilerplate tabs app, this tutorial covers:

1. Creating a view and controller for our journal tab
1. Creating a service for our journal with add, remove and get methods
1. Adding a list view of our journal data to our tab
1. Adding a new method to our journal service: add!
1. Creating a modal with a form to add a new entry
1. Adding a cancel button to our modal, along with better logic to check our form data before saving
1. Creates an Ionic popup to alert the user when the form is incomplete
1. Adds swipe to delete on our list of journal entries along with controller logic to handle deletes
1. Adds the ability to save our journal object to localstorage so that it persists (along with a fix for the ng-repeat tracking in the next commit)

Coming soon: editing your entry!

## Install dependencies
First, install [Node.js](http://nodejs.org).

Next, install the Ionic package (OSX/Linux users may need sudo for this):
```
$ npm install -g ionic
```

## Getting the starter app (or just use the initial commit!)
Once you've got Ionic and its dependencies installed, you can use their CLI to start a new application from a boilerplate, a codepens and other sources! You have a few other options (blank, sidemenu, etc.) but we're going to use the tabs starter: 
```
$ ionic start my_app_name tabs
```
The tabs boilerplate is tracked in the initial commit of this repository. If you wish to move along within this repo, you can just start at the initial commit or you can start fresh using the above command and add everything yourself!

## Running the app
Once you've got your app on your machine using the method of your choice (cloning this repo or using `ionic start`), change into that directory (either the root of this repository or the directory that was created from the `start` command).

To run the app, use:
```
$ ionic serve
```

This will startup a live reload server. Just issue the command once and each time you save a file within the project, your page will refresh and your changes are automatically applied.

*There are a bunch of ways to run the app whether it's in a browser, simulator or on a device, so check out `ionic --help` sometime.*

## Deploying with Ionic View!

Ionic View is incredibly simple to use, and it's a great way to get your app on your phone without having to go through building for a specific platform. It's also a great way to share your app with friends/colleagues/clients without having to go through app store submissions (which are such a drag), loading them on their phones in person, or enabling dev mode for Android devices to download an APK. A few easy steps and BAM, you have an app to test:

1. Create an [Ionic IO](http://ionic.io) account.
1. Download the Ionic View app from the app store on your phone, logging in with your account.
1. Upload your app using the command:
```
$ ionic upload
```
1. Check it out on your phone! You'll now see your app on your dashboard in Ionic View. Hit download and enjoy your accomplishment!


## Resources for development

These are a few places that I constantly find myself referencing:

* [Ionic JS docs](http://ionicframework.com/docs/api/)
* [Ionic CSS component docs](http://ionicframework.com/docs/components/)
* [Ionic forum](http://forum.ionicframework.com/)
* [Angular docs](https://docs.angularjs.org/api)
* [Cordova Plugin docs](http://cordova.apache.org/docs/en/5.0.0/cordova_plugins_pluginapis.md.html)
