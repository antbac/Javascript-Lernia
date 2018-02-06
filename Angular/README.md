# Angular 5

## What Angular is
Angular is a framework for JavaScript that helps the developer to produce web applications.

## Installation

### NodeJS
First of all you need to have **NodeJS** installed.
If you don't yet have it installed you can find it [here](https://nodejs.org/en/download/), just make sure you download the right version for your system.

I would recommend going for the LTS-version, but using the Current should not pose any problems.

You can check that everything works properly by opening a terminal-window and enter:
```bash
node --version
```
If it prints out a version number, that means it is working. Otherwise, something interfered with your installation.

### Angular CLI
Once you have Node up and running, we will install **Angular CLI** (command line interface).
Angular CLI will help us to set up, run, compile and test our application.

Go back to your terminal-window and type:
```bash
npm install -g @angular/cli
```

This will install **Angular CLI** globally on your system, meaning you won't have to enter it ever again even if you wish to create a new application later on.
*NOTE* that if you are on a **UNIX**-system (Linux / Mac) you may have to enter **sudo** before the command and then enter the password you use when you log into your computer normally.
The command would then look like this instead:
```bash
sudo npm install -g @angular/cli
```

To check that everything installed correctly you may enter:
```bash
ng --version
```
If it gives a big **Angular CLI** greeting and version numbers it is working. Otherwise, make sure you spelled everything correctly or search for solutions online.

## Usage
Create a new application by using the **ng new** followed by the name of the app:
```bash
ng new hello-world
```

Go to the newly created folder by typing:
```bash
cd name_of_new_folder
```

Once it finishes setting everything up you can start the new application by entering:
```bash
ng serve -o
```
This will automatically open a browser where you can see your current application.
It will also set up watchers that automatically update the web-page if you edit any of the files and hit **save**.

## File-structure
The folder created by the **ng new** command contains multiple sub-folders. The only one we will be looking at is the *src* folder, which contains all the material on our page.

The main ones, and likely the only ones we will be touching upon are:
- *src/app* contains the source-code of our application
- *src/assets* contains all the images or other media we want to display in our application
- *src/favicon.ico* contains the image shown on the tab in our browser
- *src/styles.css* contains CSS-code that should apply for our entire application
