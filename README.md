## Project structure

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5hcugvfa5wy6nb702pkb.png)

## Project Setup
- Create directory and cd to the directory

```
mkdir my_module
cd my_module
```
 - Initialize and install third-party module

```
npm init -y
npm i chalk
```

- Update the `package.json` file

```
{
  "name": "ameh-calculator",
  "version": "1.0.0",
  "main": "app.js",
  "type": "module",
  "scripts": {
    "dev": "node app.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "chalk": "^5.4.1"
  }
}
```
- Create the calculator.js file in the custom module to implement basic arithmetic calculation and export

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/xjwjc7ss7bdi9el6krv0.png)

- Create app.js file in the root directory to import the functions

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/fcfozovvskxj24tjwns0.png)

- Run the app based on the scripts added in `package.json` file

```
npm run dev
```

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/q6y8o6vpnc6m54fm3kxm.png)
- Initialize git, add and commit the project to GitHub

```
git init
git add .
git commit -m "message"
```
- And then push to repo

```
git remote add origin https://github.com/ameh0429/techcrush assignment.git
git branch -M main
git push -u origin main
```
