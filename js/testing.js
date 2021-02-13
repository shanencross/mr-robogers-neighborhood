// testing.js
// Functions used to test specs for project.
// To run tests, open index.html and call the runTests() function in the console

// Run tests for all functions
function runTests() {
	testBeepBoop();
	testGetDigits();
}

// Test the beepBoop function
function testBeepBoop() {
	const test1 = {
		input: 0,
		expectedOutput: [0]
	};

	const test2 = {
		input: 1,
		expectedOutput: [0, "Beep!"]
	};

	const test3 = {
		input: 2,
		expectedOutput: [0, "Beep!", "Boop!"]
	};

	const test4 = {
		input: 3,
		expectedOutput: [0, "Beep!", "Boop!", "Won't you be my neighbor?"]
	};

	const test5 = {
		input: 9, 
		expectedOutput: [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9]
	};

	const test6 = {
		input: 19,
		expectedOutput: [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?", 14, 15, 16, 17, 18, 19]
	};

	tests = [test1, test2, test3, test4, test5, test6];
	runTestArray(tests, beepBoop);
}

// Test the getDigits function
function testGetDigits() {
	test1 = {
		input: 6,
		expectedOutput: [6]
	};

	test2 = {
		input: 76,
		expectedOutput: [6, 7]
	};

	test3 = {
		input: 358,
		expectedOutput: [3, 5, 8]
	};

	test4 = {
		input: 4253453,
		expectedOutput: [4, 2, 5, 3, 4, 5, 3]
	}

	tests = [test1, test2, test3, test4];
	runTestArray(tests, getDigits);
}

// Iterate over an array of tests for a given function and run them
function runTestArray(testArray, functionToTest) {
	console.log("Testing " + functionToTest.name);
	for (let i=0; i<testArray.length; i++) {
		const test = testArray[i];
		const testNumber = i + 1;
		runTest(functionToTest, test, testNumber);
	}
}

// Run a single specified test for a given function
function runTest(testFunction, test, testNumber) {
	const output = testFunction(test.input);

	console.log("Test #" + testNumber);
	console.log("Input:");
	console.log(test.input);
	console.log("Output:");
	console.log(output);
	console.log("Expected output:");
	console.log(test.expectedOutput);

	if (arrayIsEquals(output, test.expectedOutput)) {
		console.log("Success!");
	}
	else {
		console.log("Failure!");
	}

	console.log("");
}

// Compare arrays. Developed only for 1D arrays
function arrayIsEquals(array1, array2) {
	if (array1.length != array2.length) {
		return false;
	}

	for (let i=0; i<array1.length; i++) {
		if (array1[i] !== array2[i]) {
			return false;
		}
	}
	return true;
}