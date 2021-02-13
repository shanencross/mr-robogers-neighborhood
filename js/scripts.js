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
	const tensDigit = Math.floor(number / 10);
	digits = [onesDigit];
	if (tensDigit != 0) {
		digits.push(tensDigit);
	}
	return digits;
}