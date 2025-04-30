1. What is printed by line 9? If the code returns an error, explain why.
A: 20 was printed.
2. What is printed by line 13? If the code returns an error, explain why. 
A: 20 was printed again.
3. Why should you not use var? Explain why. 
A: Var should not be used as it seems to be accessible outside the scope of the if-statement so it is function-scoped so we are able to access the variables we might not want to change and access after certain blocksof code like variables that should be left in an if-statement or for-loop.
4. 20 was printed.
5. Error was thrown because the result was declared in the scope of the previous if-statement so it is not defined error is given since we put our log statement outside of the respective if-statement where we had previously defined result.
6. The error of Assignment to constant variable is thrown because const variables can't be changed, which was what line 7 was attempting to do so we did not moved past that to our log statement.
7. The error of Assignment to constant variable or did not moved past the error so our log statement was never statement due to our attempt to redefine a const variable that was previously declared.
   
