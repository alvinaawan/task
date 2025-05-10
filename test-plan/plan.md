# Test plan for the Counter App
 
 ## Features

* Display the increment and decrement logic of the counter 
* Check the negative lower boundry number functionaliy
* The counter resets to 0 on refreshing the Window

 ## Test Cases
 We can verify multiple features of this app with the following 4 test cases:

* TC 1: Verify that the counter only displays the positive numbers
* TC 2: Verify that the counter is Incremented/Decremented by 1 on pressing the increment or decrement button respectively. 
* TC 3: Verify that the counter should not decrement further after the value 0 even on pressing the decrement button multiple times)
* TC 4: Verify that refreshing the page resets the counter to 0 


## Test Case 1
Verify that the counter only displays the positive numbers

* Test Description: This test case should verify that the counter displays only the postive numbers and the user is not able to decrement the value lower than 0. 
* Precondition: Counter component is visible on the application

| Test Action |Expected Result   |
| ------------- |:-------------|
| Open the counter application     | Counter application is launched without any error values     |
| Verify the counter value is 0 by default      | The counter value displays 0 by default   |
| Verify the user is able to view the following buttons on the application: <ol><li>Increment</li><li>Decrement</li></ol>  | The mentioned buttons are available    |
| Click the "Increment" button and check the displayed value | <ol><li>The user should be able to press the increment button and the value is incremened by 1</li><li>The resulting value should be 1</li></ol>|
| Now try click on the decrement button 2 times to get a value lower than 0  |<ol><li>The value is decremented to 0 from 1 successfully.</li><li>The user should get a prompt indicating the user "The value cannot be decremented any further"</li></ol>    |

## Test Case 2
Verify that the counter is Incremented/Decremented by 1 on pressing the increment or decrement button respectively.

* Test Description: This test case Verify that when the user clicks on the Increment button the value is incremented by 1 and by pressing the decrement button the value is decremented by 1. The behaviour should be the same on clicking the buttons multiple times as well. 

* Precondition: Counter component is visible on the application

| Test Action |Expected Result   |
| ------------- |:-------------|
| Open the counter application     | Counter application is launched without any error values     |
| Verify the counter value is 0 by default      | The counter value displays 0 by default   |
| Verify the user is able to view the following buttons on the application: <ol><li>Increment</li><li>Decrement</li></ol>  | The mentioned buttons are available    |
| Click the "Increment" button and check the displayed value | <ol><li>The user should be able to press the increment button and the value is incremened by 1</li><li>The resulting value should be 1</li></ol>|
| Now click on the Increment button 3 more times |The value is incremented 3 times and the resulting value should be  4|
| Try to increment the value multiple times and make sure the increment counter works as expected| The value is incremented by 1 each time the user clicks on the increment button   |
| Now click on the decrement button  | The user is able to decrement the counter successfully without any errors  |
| Now try click on the decrement button multiple times   | The user should be able to decrement the value successfully until 0|

## Test Case 3
Verify that the counter should not decrement further after the value 0 even on pressing the decrement button multiple times

* Test Description: This test case should verify that the counter displays only the postive numbers and the user is not able to decrement the value lower than 0 even after clicking the decrement button multiple times after the value 0 has been reached. 

* Precondition: Perform TC1 

| Test Action |Expected Result   |
| ------------- |:-------------|
| Close the prompt and try clicking on the decrement button multiple times  | The user gets the indication everytime on clicking decrement button that the value cannot be further decremented on pressind the decrement button if the current value of the counter is already 0. 

## Test Case 4
Verify that the counter only displays the positive numbers

* Test Description: This test case should verify that the counter resets to 0 after the page is refreshed.

| Test Action |Expected Result   |
| ------------- |:-------------|
| Open the counter application     | Counter application is launched without any error values     |
| Verify the counter value is 0 by default      | The counter value displays 0 by default   |
| Verify the user is able to view the following buttons on the application: <ol><li>Increment</li><li>Decrement</li></ol>  | The mentioned buttons are available    |
| Click the "Increment" button and check the displayed value | <ol><li>The user should be able to press the increment button and the value is incremened by 1</li><li>The resulting value should be 1</li></ol>|
| Click on the increment button multiple times and then refresh the page  |<ol><li>The value is Incremented by 1 everytime user presses the increment button.</li><li>The counter resets to 0 after the page is refreshed. </li></ol>    |
