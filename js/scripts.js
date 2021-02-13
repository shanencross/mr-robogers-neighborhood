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
		else {
			result.push(0);
		}
	}

	return result;
}