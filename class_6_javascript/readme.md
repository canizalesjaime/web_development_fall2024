# Class 6 Javascript Continued

## Table of contents:
1. Links
2. Javascript
3. Code for chapter 3
   

## 1. Links
* [Javascript notes](https://eloquentjavascript.net/)


## 2. Javascript 
Go through these notes [link](https://eloquentjavascript.net/03_functions.html)(chapters 3 and 4) <br> 


## 3. Code for chapter 3
```javascript
//is num even 5
///////////////////////////////////////////////////////////////////////////////
function isEven(num)
{
    if(num == 0) return true;

    else if (num == 1) return false;

    else if (num < 0) return isEven(num+2);

    else return isEven(num-2);
}


//count the chars of a string 6  
///////////////////////////////////////////////////////////////////////////////
function countChars(text, character)
{
    let count = 0;
    for(let c = 0; c < text.length; c++)
        if(text[c] === character)
            count++;

    return count;
}
```

  