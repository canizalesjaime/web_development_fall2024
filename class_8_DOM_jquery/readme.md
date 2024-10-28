# Class 8 Document Object Model (DOM)

## Table of contents:
1. Links
2. Javascript and the Document Object Model
3. Notes
   

## Links
* [Dom Doc](https://www.w3schools.com/jsref/dom_obj_style.asp)
* [Event Listener Doc](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
* [Events](https://developer.mozilla.org/en-US/docs/Web/Events)
* [jQuery Doc](https://jquery.com/)


## Javascript and the Document Object Model
Javascript uses the document object model to interact with the html file that includes it. DOM works like this :
![title](./dom_tree.png)<br><br>
For example we can reference the title tag using the document.firstElementChild.firstElementChild.lastElementChild; However this can be tedious so instead we will mostly use the methods document.querySelector("class id or tag") and querySelectorAll("class id or tag"). See the code in this lecture for more examples on how to use. 


## Including Jquery in HTML
Add this to html file:  
\<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"\>\</script\>

See example:  [example](./examples/adding_javascript.html) <br><br>
One thing to note is that you should always add javascript as close to the end(as possible) of the script. 


## Jquery
JQuery is an external library used to make your DOM code more concise and readable. See [folder](./jquery_intro/) for examples of using JQuery. The main way to use JQuery is with the $. For example, in DOM you would write document.querySelector("h1"). In JQuery this is simply abbreviated to $("h1"). Reference the JQuery documnetation in the links section for more JQuery function examples.  


## Notes
* Homework: Finish the Drum Kit starting files project using javascript and the DOM. You want to replace the images of the letters with all the images in the folder: [images](./Drum%20Kit%20Starting%20Files/images/), after you set the images also add the relative sound file so that when you click the image of the drum, it makes the corresponding sound. REMEMBER, you are only allowed to modify the index.js [file](./Drum%20Kit%20Starting%20Files/index.js). Submit the index.js file to blackboard.

  