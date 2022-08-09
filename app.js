console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count)
 {
    for (let i = 1; i <= count; i++)
    {
        if (i % 2 != 0)
        {
            console.log(i);
        }
    }
    if (count > 0)
    {
        console.log("Invalid number");
    }     
    
}
printOdds();
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(userName, age)
{
    let above16 = `Congrats ${userName}, you can drive!`;
    let below16= `Sorry ${userName}, but you need to wait until your 16.`;
    if (age >= 16)
    {
        console.log(above16);
    }    
    else if (age < 16)
    {
        console.log(below16);
    }
}
checkAge();
// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
function whichQuad(x, y)
{
    if ((x > 0) && (y > 0))
    {
        console.log("The point is in Quadrant 1");
    }
    else if ((x < 0) && (y> 0))
    {
        console.log("The point is in Quadrant 2");
    }
    else if ((x < 0) && (y < 0))
    {
        console.log("The point is in Quadrant 3");
    }
    else if ((x > 0) && (y < 0))
    {
        console.log("The point is in Quadrant 4");
    }
    else if (x == 0)
    {
        console.log("The point is on the Y axis");
    }
    else if (y == 0)
    {
        console.log("The point is on the X axis");
    }
}
whichQuad();
// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
function kindOfTriangle(side1, side2, side3) 
{
    if ((side1 + side2 > side3) && (side2 + side3 > side1)  && (side3 + side1 > side2))
    {
        if ((side1 == side2) && (side2 == side3))
        {
            console.log("The triangle is Equalateral");
        }    
        else if ((side1 == side2) || (side1 == side3) || (side2 == side3))
        {
            console.log("The triangle is Isosceles");
        }
        else if ((side1 != side2) && (side1 != side3) && (side2 != side3))
        {
            console.log("The Triangle is Scalene");
        }
    }
    else
    {
        console.log("This is not a valid triangle");
    }     
}
kindOfTriangle();
// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");
function dataUsage(planLimit, day, usage) 
{
       if (planLimit <= usage)
       {
            console.log("You are out of data");
       }
}