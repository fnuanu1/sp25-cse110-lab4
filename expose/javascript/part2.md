1. 3 is printed because i is the length of array of prices, which was inputed as three. We are able to access i outside of the loop because it is declared as a variable so it is kind of like a global variable
2. 150 is printed because the last element is 300 so it got changed for every element in the array as it was processed and half of 300 dollars is 150 dollars as indicated by the discount parameter of 0.5 that plays a role into the formula within the for loop.
3. It is 150 as well since that is the last element
4. Nothing is being printed, but discounted should be returned, but to test if the function is doing what it is supposed to, we have to check it out through storing the function's return answer or through print statements ?
5. i is not defined error because the scope of let i is inside the loop.
6. discountedPrice is not defined error because that variable is also declared using let inside the loop function
7. 150 because that was the last element that was calculated in the array and since this is a variable outside of the loop before the loop started so we can access it after the loop ended.
8. Nothing is printed in the terminal
9. TypeError: Assignment to constant variable.
10. TypeError: Assignment to constant variable.
11. TypeError: Assignment to constant variable.

12. Accessing the value of the name property in the student object - 
    alert(student.name);
Accessing the value of the Grad Year property in the student object
    alert(student['Grad Year']); //what about double quotes instead??
Calling the function for the greeting property in the student object
    student.greeting();
Accessing the name property of the object in the Favorite Teacher property in student
    alert(student['Favorite Teacher'].name);
Access index zero in the array of the courseLoad property of the student object
    alert(student.courseLoad[0]);

13. 
> '3'+2
'32' because a string and 2 is concatenated as a string, creating '32'
> '3'-2
1 because it is interpreted as a number so 3-2=1
> 3+null
3  because read as a integer
> '3'+null
'3null' because string due to quotations around 3 so null is seen as a string to concatenate 3 to.
> true+3
4 because true is considered to be value of 1 so true which is 1 plus another integer like 3 in this example, equal to 4.
> false+null
0 because false is seen as a value of 0 so null changes nothing, resulting in 0.
> '3'+undefined
'3undefined' because 3 is a string so undefined is seen as a string too so concentanation occurs.
> '3'-undefined
NaN because a string minus undefined which means '3' is not a number, but also undefined is simply undefined??

14.
> '2'>1 
true because string '2' becomes a number 2 so 2 is in fact greater than 1, so true is outputted.
> '2'<'12'
false because two strings are being compared letter by letter so 2 is greater than 1 so the left hand side is bigger so false is outputted.
> 2=='2'
true because '2' becomes a number, allowing us to check if '2' is equal to integer 2 on left hand side, which is in fact true.
> 2==='2'
false because the triple equal sign means comparison without conversion type so if the two items are of different data types, it would output immediately false so here a number is being compared to string 2 so immediately false is outputted and no further work is done here.
> true==2
false because true is 1 and it is not equal to integer 2 so false is outputted.
> true === Boolean(2)
true because boolean value of all integers except 0 is true so Boolean(2) is true and it being compared without having comparison type being changed so true===true is being questioned here simply so they are both same data type and both true so that it is true in fact so true is outputted respectively.

15.  The double equality uses comparison type change if two different datatypes are being compared while the triple equal sign means comparison without conversion type so if the two items are of different data types, it would output immediately false. If same datatype on both ends, it will make further comparisons respectively to get to true or false as a result.

17. newArr will be [2, 4, 6] because callback takes the respective index's element and multiplies it by 2 specifically by the dosomething function that was inputted as the callback parameter and pushed back into the newArr so each element of original input array is multiplied by 2.

19. The output was
    1
    4
    3
    2