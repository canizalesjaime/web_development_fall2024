function flatten(input_arr)
{
    let output_arr = [];

    function flatten_recursive(input_arr)
    {
        if (typeof(input_arr) !== 'object') output_arr.push_back(input_arr);

        else
        {
            for (let e of input_arr)
            {
                if (typeof(e) !== 'object') output_arr.push(e)
                
                else flatten_recursive(e);
            }
        }
    }

    flatten_recursive(input_arr);
    return output_arr;
}


// let in1 = [1,2,[3,4],7,8,[1,[1,15]], 77];
let in1 = [1,2,4,3,5,['app', 'tom'], 9, [1,2], 'jack'];
console.log(flatten(in1));


function range(start, end, step=1)
{
    let arr = [];

    if (step < 0 && start >= end)
    {
        for (let i = start; i >= end; i+=step)
            arr.push(i);
    }
    
    else if (step > 0 && start <= end)
    {
        for (let i = start; i <= end; i+=step)
            arr.push(i);
    }

    else return [];

    return arr;
}


function sum(arr)
{
    let s = 0;
    for (let i = 0; i < arr.length; i++)
        s+=arr[i];

    return s;
}


///////////////////////////////////////////////////////////////////////////////
function reverseArray(arr)
{
    let reverseArr = [];

    for (let i = arr.length-1; i >= 0 ; i--)
        reverseArr.push(arr[i]);
    
    return reverseArr;
}


///////////////////////////////////////////////////////////////////////////////
function reverseArrayInPlace(arr)
{
    for (let i = 0, j= arr.length-1; i < j ; i++,j--)
    {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j]=temp;
    }
}


///////////////////////////////////////////////////////////////////////////////
function arrayToList(arr)
{
    let list = {value: NaN, rest:null};
    let ptr = list;
    for (let i = 0; i<arr.length; i++)
    {
        ptr.value=arr[i];
        if (i == arr.length-1) ptr.rest=null;
        else ptr.rest={value: NaN, rest:null};
        ptr=ptr.rest;
    }
    return list;
}


///////////////////////////////////////////////////////////////////////////////
function listToArray(obj)
{
    let arr = [];
    ptr=obj;
    while(ptr)
    {
        arr.push(ptr.value);
        ptr=ptr.rest;
    }
    return arr;
}


// takes an element and a list and creates a new list that adds the 
// element to the front of the input list
///////////////////////////////////////////////////////////////////////////////
function prepend(value1, rest1)
{
    return {value:value1, rest: rest1};
}


// takes a list and a number and returns the element at the given position in 
// the list (with zero referring to the first element) or undefined when there
// is no such element(make it recursive)
///////////////////////////////////////////////////////////////////////////////
function nth(list,num)
{
    if (num === 0) return list.value;
    else return nth(list.rest,num-1);
}


///////////////////////////////////////////////////////////////////////////////
function deepEqual(val1, val2)
{
    if (typeof(val1)===typeof(val2))
    {
        if(val1===null && val2===null) return true;
        if(val1===null || val2===null) return false;

        if (typeof(val1)==='object')
        {
            if(Object.keys(val1).length === Object.keys(val1).length)
            {
                let temp_bool=true;
                for (let key of Object.keys(val1))
                {
                    temp_bool = temp_bool && deepEqual(val1[key],val2[key]);
                    if (!temp_bool) return false;
                }
                return temp_bool;
            }
            else return false;
        }
        else return val1 === val2;
    }
    else return false;
}

console.log(prepend(value1, rest1));