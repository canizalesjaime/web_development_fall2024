# Class 7 Javascript continued

## Table of contents:
1. Chapter 4 eloquent javascript
2. Including Javascript with HTML
3. Node.js

   
## Links
* [Node API Doc](https://nodejs.org/docs/latest/api/)
* [npmjs pacakges](https://www.npmjs.com/)


## Chapter 4 eloquent javascript 
[chapter 4 javascript](https://eloquentjavascript.net/04_data.html)


## Including Javascript with HTML 
Three method for adding javascript(same as CSS):
* Inline 
* Internal
* External

See example:  [example](./examples/adding_javascript.html) <br><br>
One thing to note is that you should always add javascript as close to the end(as possible) of the script. 


## Node.js
Node.js is a software that you can download on your computer. The software provides two main services, first it gives you a javascript interpretter that you can use directly on your computer(you are not restricted to the intertpretter on your browser). This will allow us to easily create servers for our backend applications. Second, it provides the node package manager(npm); which allows us to easily manage and install external dependenices into our node projects.


### Using node.js
* A node directory is created by going into that directory and running the command ``` npm init ``` if this command runs successfully a file named <em> package.json </em> will be created in your current node directory.
* In <em> package.json </em> add  the line - <em>"type": "module",</em>. See [example](./npm_with_node/package.json).
* a node project always installs its dependencies locally. Do  ```npm i \<package_name \> ``` to install dependencies.  For example: ``` npm i express ```. After you run this command you will notice a new folder in your directory named <em> node_modules </em>, inside this directory is where all your dependencies will be installed.
* If you are using git, you will notice that whenever you install a dependency, a bunch of files are added to <em> node_modules </em>. In order to avoid clutter in your git commits, it is good practice to add the line <em>*node_modules</em> to your <em>.gitignore</em> file. See [example](../.gitignore).
You can always reinstall your dependencies from your package.json file by running ``` npm install ```. You're dependencies will always be listed in <em>package.json</em>
 