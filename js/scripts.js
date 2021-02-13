// scripts.js
// Main script for website

function beepBoop(number) {
	let result = [];

	for (let i=0; i<=number; i++) {
		if (i === 1) {
			result.push("Beep!");
		}
		else if (i === 2) {
			result.push("Boop!");
		}
		else if (i === 3) {
			result.push("Won't you be my neighbor?");
		}
		else {
			result.push(i);
		}
	}

	return result;
}

function getDigits(number) {
	const onesDigit = number % 10;
	const tensDigit = Math.floor((number % 100) / 10);
	const hundredsDigit = Math.floor(number / 100);
	digits = [onesDigit];
	if (hundredsDigit != 0 || tensDigit != 0) {
		digits.push(tensDigit);
	}
	if (hundredsDigit != 0) {
		digits.push(hundredsDigit);
	}

	return digits;
}