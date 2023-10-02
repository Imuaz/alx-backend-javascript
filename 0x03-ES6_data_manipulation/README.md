# 0x03. ES6 data manipulation

**INTRODUCTION**

Generally, the project covered the usage of map, filter, and reduce functions on arrays, along with an explanation of typed arrays. Additionally, it delved into the Set, Map, and WeakLink data structures, providing insights into their applications and usage in programming.

## Resources:books:
***Read or watch:***
- [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Typed Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Typed_arrays)
- [Set Data Structure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
- [Map Data Structure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
- [WeakMap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)

## Requirements:round_pushpin:
- All files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- All files should end with a new line
- A mandatory [README.md](./README.md) file, at the root of the folder of the project.
- The code should use the `js` extension
- The code should be tested using `Jest` and the command `npm run test`
- The code should be verified against lint using ESLint
- The code needs to pass all the tests and lint. The entire project can be verified by  running `npm run full-test` command
- All functions must be exported

## Setup:wrench:
**Install NodeJS 12.11.x**

(in the home directory):

```
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```
**Install Jest, Babel, and ESLint**

in the project directory, Jest, Babel and ESList can be installed by using the supplied `package.json` and running `npm install` command.

## Configuration files:toolbox:

The following files should be added to the project directory

- [package.json](./package.json)
- [babel.config.js](./babel.config.js)
- [.eslintrc.js](./.eslintrc.js)

Fiannly, the `npm install` command should be run when the `package.json` is added.

## Tasks:page_with_curl:
**0. Basic list of objects**
- [0-get_list_students.js](./0-get_list_students.js): A function that returns an array of objects.

Each object have three attributes: `id` (Number), `firstName` (String), and location `(String)`.

The array contains the following students in order:
  - `Guillaume`, id: `1`, in `San Francisco`
  - `James`, id: `2`, in `Columbia`
  - `Serena`, id: `5`, in `San Francisco`