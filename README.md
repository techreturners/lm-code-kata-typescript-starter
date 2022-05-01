# TypeScript Kata Starter Code

This repository contains starter code for attempting a TypeScript kata exercise.

It assumes that you have Node and NPM installed.

If you haven't yet installed these, it's worth following the instructions on the Scala refresh exercises regarding Scala setup and installation

https://github.com/techreturners/js_coding_exercises

## Instructions

To utilise this starter code

### 1. Create a new folder on your computer that will house the starter code.

For example if you are working on a bowling game kata, using the command line you would do:

```
mkdir bowling-game-kata
```

### 2. Change to the directory and pull this code

Next navigate to that directory and `git pull` this code

```
cd bowling-game-kata
```

Initialise git

```
git init
```

And then pull the starter code

```
git pull https://github.com/techreturners/lm-code-kata-typescript-starter.git
```

Once the code has been pulled then rename the branch to **main**

```
git branch -M main
```

### 3. Open up GitHub.com and create a new repository

Go to GitHub.com and create a new repository.

Give the repository a name - suggest naming the repository the same name as your folder.

Make sure it is **Public**

Then leave everything else as blank. So do NOT create a README, GitIgnore or Licence.

Click **Create repository**

### 4. Copy URL of new repository

You should then see a screen telling you how to push to the repository.

Copy the URL of the repository. For example if a user called **pluto** had created a repository called **bowling-game-kata** then the URL would be:

https://github.com/pluto/bowling-game-kata.git

### 5. Push starter code back to repository

Then back on your computer whilst within your newly created directory. 

Configure your GitHub origin server (for where you will be pushing code back to)

```
git remote add origin URL_YOU_COPIED
```

Replacing the **URL_YOU_COPIED** with the correct URL. For example:

```
git remote add origin https://github.com/pluto/bowling-game-kata.git
```

Now you can push the code to your repository

```
git push -u origin main
```

### 6. Make sure you can run the tests

You should now be able to run the Jest tests either from the command line or your editor (such as IntelliJ)

```
npm install
```

followed by 

```
npm test
```

Should produce output similar to the following:

```
> lm-code-kata-typescript-starter@1.0.0 test
> jest

 PASS  src/index.test.ts
  Calc
    ✓ should return 10 for add(6, 4) (1 ms)
    ✓ should return 9 for add(10, -1)

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        0.675 s, estimated 1 s
Ran all test suites.
```

If you do see it run the tests then you're all ready to go 🙌

### 7. Utilise repository as normal

Now you can continue to utilise the repository as normal, committing and pushing as normal.