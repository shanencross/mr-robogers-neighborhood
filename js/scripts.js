// scripts.js
// Main script for website

// Gets user input and outputs results
$(document).ready(function() {
	$("#inputForm").submit(function(event) {
		event.preventDefault();
		
		$("#results").show();
		$("ul#numberList").empty();

		inputNumber = parseInt($("input#numberInput").val());
		
		const results = beepBoop(inputNumber);
		for (const result of results) {
			$("ul#numberList").append("<li>" + result + "</li>");
		}
	})
});

// Given a number, returns array of numbers ranging from 0 up to and including the given number...
// ...except certain numberse are replaced.
// A number where any digit is 1 becomes "Beep!"
// A number where any digit is 2 becomes "Boop!"
// A Number where any digit is 3 becomes "Won't you be my neighbor?"
// The rule for 3 is prioritized over the rule for 2, which is prioritized over the rule for 1.
function beepBoop(number) {
	let result = [];

	for (let i=0; i<=number; i++) {
		const digits = getDigits(i);

		if (digits.includes(3)) {
			result.push("Won't you be my neighbor?");
		}
		else if (digits.includes(2)) {
			result.push("Boop!");
		}
		else if (digits.includes(1)) {
			result.push("Beep!");
		}
		else {
			result.push(i);
		}
	}

	return result;
}

// Given a number, returns an array listing its digits, from the lowest place to the highest place.
function getDigits(number) {
	let digits = [];
	for (let currentNumber = number; number >= 1; number = Math.floor(number / 10)) {
		digits.push(number % 10)
	}

	return digits;
}