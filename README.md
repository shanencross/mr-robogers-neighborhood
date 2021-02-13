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

# Tests

Describe: beepBoop()
Test 1: "It should return an array with a 0 if the number 0 is inputted"
Expect(beepBoop(0).toEqual([0]));

Test 2: "It should return an array of 0 and "Beep!" if the number 1 is inputted"
Expect(beepBoop(1).toEqual([0, "Beep!"]));

Test 3: "It should return an array of 0, "Beep!", and "Boop!" if the number 2 is inputted
Expect(beepBoop(2).toEqual([0, "Beep!", "Boop!"]));

Test 4: "It should return an array of 0, "Beep!", "Boop!", and "Won't you be my neighbor?" if the number 3 is inputted
Expect(beepBoop(3).toEqual([0, "Beep!", "Boop!", "Won't you be my neighbor?"]));

Test 5: "If any number between 0 and 9 is inputted, it should return the range of numbers from 0 to the input, except 1, 2, and 3 are replaced with "Beep!", "Boop!", and "Won't you be my neightbor?" respectively
Expect(beepBoop(9).toEqual([0, "Beep!", "Boop!", "Won't you be my neighbor?", "4", "5", "6", "7", "8", "9"));


## Known Bugs

None.

## License

[MIT](https://choosealicense.com/licenses/mit/)

Copyright 2021 Shanen Cross
