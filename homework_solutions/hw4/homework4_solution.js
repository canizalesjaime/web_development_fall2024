//Looping a triangle 1, type: name=(parameter list){body}
///////////////////////////////////////////////////////////////////////////////
function loopTriangle(rows)
{
    let row = "#";
    for (let i = 0; i < rows; i++)
    {
        console.log(row);
        row=row+"#";
    }
}


//fizzBuzz 2
///////////////////////////////////////////////////////////////////////////////
function fizzBuzz(toNum)
{
    for(let i = 0; i < toNum; i++)
    {
        if (i % 3 === 0 && i % 5 === 0) console.log("fizzbuzz");

        else if (i % 3 === 0) console.log("fizz");

        else if (i % 5 === 0) console.log("buzz");

        else console.log(i);
    }
}


//chessboard 3
///////////////////////////////////////////////////////////////////////////////
function chessboard(rows, cols)
{
    let row_1="";
    for(let i = 0; i<cols/2; i++)
        row_1=row_1+"# ";

    for(let i = 0; i<rows; i++)
    {
        if(i%2!=0) console.log(row_1);

        else console.log(" "+row_1);
    }
}


loopTriangle(10);
