# Campaign Monitor - Coding Take-home Test Questions

The code is written in JS (ES6). The answers are written in separate files in `src` folder and the unit tests are located in `./src/tests` These are the list of questions answered:

Question 1: `./src/isNullOrEmpty.js`

Question 2: `./src/getPositiveDivisors.js`

Question 3: `./src/calculateTriangleArea.js`

Question 4: `./src/getCommonArrayItems.js`

Question 7: `./src/arrangeBy.js`

Question 8: `./src/urlChecker.js`

For questions 1, 2, 3, 4, and 7 there are unit tests located in `./src/tests` with the same file name with `*.test.js` extension. In order to run the answer to Question 8 (url checker), you can run the file using node:

```
node ./src/urlChecker.js
```

Or use the npm scripts command:

```
npm run url-checker
```

Then you can interact with the program via terminal.

## Getting Started

### Installing

Clone the repository:

```
git clone https://github.com/estefaie/campaign-monitor-tech-test.git
```

Then install dependencies:

```
npm install
```

## Running the tests

Run the following command to run the unit tests once:
```
npm run tests
```

Run the following command to get a test coverage report:
```
npm run coverage
```

Note that there is no test written for `./src/urlChecker.js` due to it's program-like behaviour and it is excluded from the coverage report.

## And coding

Coding style and js/es6 coding practices are enforced using `eslint` and `prettier`.

Run the following command to get a report from eslint and prettier.

```
npm run lint
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [npm](https://www.npmjs.com/) - a package manager for the JavaScript programming language.
* [Jest](https://jestjs.io/) - Jest is a JavaScript Testing Framework maintained by Facebook, Inc.
* [ESLint](https://eslint.org//) - a static code analysis tool for identifying problematic patterns found in JavaScript code.
* [Prettier](https://prettier.io/) - Opinionated Code Formatter.
