1. 3 is printed because i is the length of array of prices, which was inputed as three. We are able to access i outside of the loop because it is declared as a var variable so it is kind of like a function-scoped variable.
2. 150 is printed because the last element is 300 so this variable got changed for every element in the array throughout the loop as it was the last element that was processed and half of 300 dollars is 150 dollars as indicated by the discount parameter of 0.5 that plays a role into the formula within the for loop.
3. It is 150 as well since 300 is the last element that was processed and pushed into the discounted array due to following the sequence of input in the original prices array parameter of this function.
4. Nothing is being printed, but discounted array is being returned, but to test if the function is returning the correct elements in the array, we have to check it out through storing the function's return answer or through print/log statements. However, the discounted array, as it is within the scope of the whole function, is returning the final price of the original price given after the discount is accounted for so [ 50, 100, 150 ] is what discounted array stored and returned in this scenario.
5. i is not defined error happened because the scope of let i is inside the loop statement due to using 'let' to declare i variable.
6. discountedPrice is not defined error happened because that variable is also declared using 'let' inside the loop so it cannot be accessed outside from anywhere in the function unlike 'var' variables so we get the error of not defining discountedPrice.
7. 150 would be printed because 300 was the last element that was calculated and pushed to the array by the loop and since finalPrice is a variable declared outside of the loop using 'let' before the loop started so we can access it even after the loop ended as its scope is towards the function due to where it is declared.
8. Nothing is printed in the terminal, but the function is returning [ 50, 100, 150 ] as discounted array as the elements were being pushed respectively from within the loop where discount was being accounted for, leaving half the amount of price as the discount inputted by the parameter happened to be 0.5 in this specific given case.
9. 'TypeError: Assignment to constant variable' happened because the error on the finalPrice being changed occured when it was initially declared as a const so it did not moved past the error so our log statement regarding variable i that is placed after the loop would not be executed at all until the error is fixed that is happening inside the loop.
10. 'TypeError: Assignment to constant variable' happened because as said previously, the finalPrice errored out, so even when our log statement may not be the issue or the const that was being asked to print never conflicted as a const variable as it was never being attempted to change, our compiler failed at finalPrice being changed as a const variable so it stayed at the respective error.
11. 'TypeError: Assignment to constant variable' happened because even without the if statement, there is a condition of const type being violated so as previously said, the error stays put regardless until const variable is changed to let/var variable or const variable is not changed/messed around with.
12. Accessing the value of the name property in the student object - 
    By alert, I am simply printing these, but the inside of the alert accesses the respective prompts so this is a reminder for how I answered below.
    A: alert(student.name);

    Accessing the value of the Grad Year property in the student object - 
    B: alert(student['Grad Year']); //what about double quotes instead??

    Calling the function for the greeting property in the student object - 
    C: alert(student.greeting());

    Accessing the name property of the object in the Favorite Teacher property in student - 
    D: alert(student['Favorite Teacher'].name);

    Access index zero in the array of the courseLoad property of the student object - 
    E: alert(student.courseLoad[0]);

13. 
A. '3'+2
'32' because a string and 2 is concatenated as a string, creating '32'
B. '3'-2
1 because it is interpreted as a number so 3-2=1
C. 3+null
3  because read as a integer so null does not mean anything here so 3+0=3.
D. '3'+null
'3null' because string due to quotations around 3 so null is seen as a string to concatenate 3 to.
E. true+3
4 because true is considered to be value of 1 so true which is 1 plus another integer like 3 in this example, equal to 4.
F. false+null
0 because false is seen as a value of 0 so null changes nothing, resulting in 0.
G. '3'+undefined
'3undefined' because 3 is a string so undefined is seen as a string too so concentanation occurs.
H. '3'-undefined
NaN because a string, but due to minus, string 3 changes to number 3, but minus undefined is an unnown number to be converted to so the result of this computation becomes "Not-a-Number"/NaN.

14.
A. '2'>1 
true because string '2' becomes a number 2 so 2 is in fact greater than 1, so true is outputted.
B. '2'<'12'
false because two strings are being compared letter by letter so 2 is greater than 1 so the left hand side is bigger so false is outputted.
C. 2=='2'
true because '2' becomes a number, allowing us to check if '2' is equal to integer 2 on left hand side, which is in fact true.
D. 2==='2'
false because the triple equal sign means comparison without conversion type so if the two items are of different data types, it would output immediately false so here a number is being compared to string 2 so immediately false is outputted and no further work is done here.
E. true==2
false because true is 1 and it is not equal to integer 2 so false is outputted.
F. true === Boolean(2)
true because boolean value of all integers except 0 is true so Boolean(2) is true and it being compared without having comparison type being changed so since they both are boolean, now we are just checking if true==true is correct here so they are both same data type and both true so that it is true in fact so true is outputted respectively.

15.   The double equality uses comparison type change if two different datatypes are being compared and one of them can be interpreted better to mae the expression sensible while the triple equal sign means comparison without conversion type so if the two items are of different data types, it would simply output false immediately. If the same datatype happens on both ends, it will make further comparisons respectively to get to true or false as a result.

17. newArr will be [2, 4, 6] because callback takes the respective index's element and here since doSomething function was passed in the parameter as the callback function, it multiplies the respective element by 2 as done inside doSomething function and then when we return to the place in our modifyArray function where callback was called from, we pushed back the returned item from callback function into the newArr so each element of original input array is multiplied by 2 here, giving/leaving us with [2, 4, 6].

19.  The output was
    1
    4
    3
    2
    as 1 and 4 were immediately printed and the statement with 3 was not immediately printed like 1 and 4, but slightly delayed and 2 was finally printed after 1 second as indicated by 1000 so this order was outputted respectively.