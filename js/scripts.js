// scripts.js
// Main script for website

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

function getDigits(number) {
	let digits = [];
	for (let currentNumber = number; number >= 1; number = Math.floor(number / 10)) {
		digits.push(number % 10)
	}

	return digits;
}