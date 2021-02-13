# Mr. Roboger's Neighborhood

#### Learning project for Epicodus coding school. Website that outputs a list of integers between 0 and a user-inputted number, but with certain integers replaced with certain phrases, including a line from Mr. Roger's Neighborhood

#### Shanen Cross

## Technologies Used

* HTML
* CSS
* Bootstrap
* JavaScript
* jQuery

## Description

Website takes a number as input from the user. It outputs a list ranging from 0 to this number, but replaces certain numbers with certain phrases.

The rules for the replacements are:
* Numbers that contain a 1 in any digit are replaced with "Beep!"
* Numbers that contain a 2 in any digit are replaced with "Boop!"
* Numbers that contain a 3 in any digit are replaced with "Won't you be my neighbor?"

These rules are listed from lowest to highest priority. So, for example, 23 would become "Won't you be my neighbor?", because the rule for 3 is prioritized above the one for 2.

## Setup/Installation Requirements

To run locally:
* Install git
* Use git to clone this repository to a local directory
* Open _index.html_ in a web browser

Or, to view online:
* Visit https://shanencross.github.io/mr-robogers-neighborhood/

Once the website is open:
* Input a number in the textbox, and press submit to see the result
* To see another result, input another number in the textbox, and press submit again

To run the tests:
* Open the website as described above, then open your browser's JavaScript console
* type _runTests()_ in the console and press enter
* The resulting output should display the tests, and whether they succeed or fail

# Tests

Describe: beepBoop()
Test 1: "It should return an array with a 0 if the number 0 is inputted"
Expect(beepBoop(0).toEqual([0]));

Test 2: "It should return an array of 0 and "Beep!" if the number 1 is inputted"
Expect(beepBoop(1).toEqual([0, "Beep!"]));

Test 3: "It should return an array of 0, "Beep!", and "Boop!" if the number 2 is inputted"
Expect(beepBoop(2).toEqual([0, "Beep!", "Boop!"]));

Test 4: "It should return an array of 0, "Beep!", "Boop!", and "Won't you be my neighbor?" if the number 3 is inputted"
Expect(beepBoop(3).toEqual([0, "Beep!", "Boop!", "Won't you be my neighbor?"]));

Test 5: "If any number between 0 and 9 is inputted, it should return the range of numbers from 0 to the input, except 1, 2, and 3 are replaced with "Beep!", "Boop!", and "Won't you be my neighbor?" respectively"
Expect(beepBoop(9).toEqual([0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9]));

Test 6: "If any number between 0 and 19 is inputted, it should return the range of numbers from 0 to the input, except any number with 1, 2, or 3 as a digit is replaced with "Beep!", "Boop!", or "Won't you be my neighbor?" respectively, with the rule for 3 prioritized above 2, and the rule for 2 prioritized above 1"
Expect(beepBoop(19).toEqual([0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!"]));

Test 7: If any two-digit number inputted, it should return the range of numbers from 0 to the input, with the same exceptions list previously"
Expect(beepBoop(99).toEqual([0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Boop!", "Boop!", "Boop!", "Won't you be my neighbor?", "Boop!", "Boop!", "Boop!", "Boop!", "Boop!", "Boop!", "Won't you be my neighbor?", "Won't you be my neighbor?", "Won't you be my neighbor?", "Won't you be my neighbor?", "Won't you be my neighbor?", "Won't you be my neighbor?", "Won't you be my neighbor?", "Won't you be my neighbor?", "Won't you be my neighbor?", "Won't you be my neighbor?", 40, "Beep!", "Boop!", "Won't you be my neighbor?", 44, 45, 46, 47, 48, 49, 50, "Beep!", "Boop!", "Won't you be my neighbor?", 54, 55, 56, 57, 58, 59, 60, "Beep!", "Boop!", "Won't you be my neighbor?", 64, 65, 66, 67, 68, 69, 70, "Beep!", "Boop!", "Won't you be my neighbor?", 74, 75, 76, 77, 78, 79, 80, "Beep!", "Boop!", "Won't you be my neighbor?", 84, 85, 86, 87, 88, 89, 90, "Beep!", "Boop!", "Won't you be my neighbor?", 94, 95, 96, 97, 98, 99]));


Describe getDigits()
Test 1: Given a one-digit number, should return an array containing that number.
Expect(getDigits(6).toEqual([6]));

Test 2: Given a two-digit number, should return an array containing each digit of that number, from the ones place to the tens place.
Expect(getDigits(76).toEqual([6, 7]));

Test 3: Given a three-digit number, should return an array containing each digit of that number, from the ones place, to the tens place, to the hundreds place.
Expect(getDigits(358).toEqual([8, 5, 3]));

Test 4: For a number with any amount of digits, should return an array containing each digit of that number, from the lowest place to the highest place.
Expect(getDigits(4253453).toEqual([3, 5, 4, 3, 5, 2, 4]));

## Known Bugs

None.

## License

[MIT](https://choosealicense.com/licenses/mit/)

Copyright 2021 Shanen Cross
