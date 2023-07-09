# SYMLINK A Package Folder

## npm-prefix >> npm-link

> how can i develop the Privisec ArtaLog command line interface app to run a  symlink using "pal app.js" to launch. One of the current commands is "node app.js create" and it should be "pal app.js create". I want to be able configure "pal app.js create" without running "npm run pal app.js create"

**Package linking is a two-step process.**

First, npm link in a package folder with no arguments will create a symlink in the global folder {prefix}/lib/node_modules/< package > that links to the package where the npm link command was executed. It will also link any bins in the package to {prefix}/bin/{name}. Note that npm link uses the global prefix (see npm prefix -g for its value).

Next, in some other location, npm link package-name will create a symbolic link from globally-installed package-name to node_modules/ of the current folder.

Note that package-name is taken from package.json, not from the directory name.

>> To modify the command used to launch your Privisec ArtaLog command-line interface app, you can follow these steps:
>> Open the package.json file in the root directory of your Privisec ArtaLog project.
>> Locate the "scripts" section within the package.json file.

### Modify the "start" script

>> to use the "pal" command instead of "node" as follows:

  ```json
    "scripts": {
        "start": "pal app.js"
    },
  ```

>> Save the package.json file.

## NPM-Prefix

Print the local prefix to standard output. This is the closest parent directory to contain a package.json file or node_modules directory, unless -g is also specified.

If -g is specified, this will be the value of the global prefix. See npm config for more detail.

### Examples

```sh
npm prefix
/usr/local/projects/foo
```

```sh
npm prefix -g
/usr/local
```

>> Check your system's environment variables to ensure that the directory where the globally installed npm packages are located is included in the PATH variable.

  ```sh
    # You can find the path where global npm packages are installed by running the following command:
    
  npm config get prefix
  ```

>> Open your shell configuration file (e.g., ~/.zshrc for zsh) in a text editor.
>>Add the following line at the end of the file:

```sh
export PATH="$PATH:<npm_global_packages_path>/bin"
```

>> Replace <npm_global_packages_path> with the actual path you obtained from the previous step.

>> Save the file and restart your shell or run the following command to apply the changes:

  ```sh
    source ~/.zshrc
  ```

## Configuration

**global**

- Default: false
- Type: Boolean

Operates in "***global***" mode, so that packages are installed into the **prefix** folder instead of the current working directory. See folders for more on the differences in behavior.

- packages are installed into the {prefix}/lib/node_modules folder, instead of the current working directory.
- bin files are linked to {prefix}/bin
- man pages are linked to {prefix}/share/man

>> Open your project's package.json file.
>> Locate the "scripts" section. If it doesn't exist, create it.
>> Add a custom script entry for the "pal" command, like this:

  ```json
    "scripts": {
        "pal": "node app.js"
    }
  ```

>> This script entry defines the "pal" command and maps it to the execution of node app.js.
>> Save the package.json file.
>> Run the following command to get the path of the global npm bin directory:

```sh
npm bin -g
```

This will output the path to the global npm bin directory (e.g., /usr/local/bin).

Open your shell configuration file. For zsh, it's usually ~/.zshrc, and for bash, it's typically ~/.bashrc or ~/.bash_profile.

Add the following line to the configuration file, replacing /path/to/npm/bin with the actual path obtained from step 1:

```sh

export PATH="/path/to/npm/bin:$PATH"

```

Restart your terminal or run the following command to apply the changes to your current session:

```shell

source ~/.zshrc

```

Run the following command to get the path of the global npm bin directory:

```sh
npm prefix -g
```

This will output the path to the global npm bin directory (e.g., /usr/local).

Open your shell configuration file. For zsh, it's usually ~/.zshrc, and for bash, it's typically ~/.bashrc or ~/.bash_profile.

Add the following line to the configuration file, replacing /path/to/npm/bin with the actual path obtained from step 1:

```sh
export PATH="/path/to/npm/bin:$PATH"
```

User
> npm prefix
> -g
> /opt/homebrew

Open your shell configuration file. For zsh, it's usually ~/.zshrc, and for bash, it's typically ~/.bashrc or ~/.bash_profile.

Add the following line to the configuration file:

```sh
export PATH="/opt/homebrew/bin:$PATH"
```

This will add the /opt/homebrew/bin directory to the beginning of the PATH variable.

Restart your terminal or run the following command to apply the changes to your current session:

```shell
source ~/.zshrc
```

Navigate to the root directory of your Privisec ArtaLog CLI project in the terminal.

Open the package.json file in a text editor.

Locate the "bin" field in the package.json file. It should look something like this:

```json
"bin": {
  "pal": "app.js"
}
```

Modify the "bin" field as follows:

```json
"bin": {
  "pal": "./app.js"
}
```

Make sure to include the leading ./ before app.js.
Save.

Run the following command to create a symlink to the global executable:

```bash
npm link
```

This command will create a symlink in the global node_modules/.bin directory that points to your local pal script.

This specifies that the pal command should be linked to the app.js file. 
Save.

Add the following line at the very beginning of your app.js file:

```js
#!/usr/bin/env node
```

This is called a shebang, and it tells the system that this file should be executed using the Node.js interpreter.

Save the changes to app.js.

In the terminal, navigate to the root directory of your project.

Now, let's create a symbolic link to the app.js file in one of the directories listed in your system's PATH. For example, let's use /usr/local/bin:

```shell
sudo ln -s /path/to/your/project/app.js /usr/local/bin/pal
```

Replace /path/to/your/project with the actual path to your project's directory.

Note: You might need to enter your system password when running the sudo command.

In the terminal, navigate to the root directory of your project.

Run the following command to make app.js executable:

```sh

chmod +x app.js

```

> User:
> this is my app.js file:

```js
// Replace 'node' with 'pal' if the command is 'pal'
if (process.argv[0] === "pal") {
  process.argv[0] = "node";
}

import {
  create,
  show,
  list,
  filter,
  destroy,
  update,
  newCart,
  add,
  cancel
} from "./src/commands.js";

const inform = console.log;

const pal = process.argv[0];
const action = process.argv[2].toLowerCase();
const missingInputMess = "action input was not provided";
const input = !process.argv.splice(3).join(" ")
  ? missingInputMess
  : process.argv.splice(3).join(" ");

inform(`This is pal: ${pal}
This is the current command: ${action}
This is current input: ${input}`);

function runApp() {
  switch (action) {
    case "create":
      create(input);
      break;
    case "show":
  show(input);
      break;
    case "list":
      list(input);
      break;
    case "filter":
      filter(input);
      break;
    case "delete":
      destroy(input);
      break;
    case "update":
  update(input);
      break;
    case "new-cart":
      newCart();
      break;
    case "add":
  add(input);
      break;
    case "cancel":
  cancel(input);
      break;
    default:
      inform(missingInputMess);
  }
}
runApp();

export { input };
```

Based on the code you've shared, it seems that you're trying to modify the process.argv array to replace the command pal with node before importing the commands and running your application.

To ensure the modification works correctly, you need to move the import statements below the block where you modify process.argv. Here's an updated version of your app.js file with the necessary changes:

```js

const pal = process.argv[0];
const action = process.argv[2]?.toLowerCase();
const missingInputMess = "action input was not provided";
const input = process.argv.splice(3).join(" ") || missingInputMess;

import {
  create,
  show,
  list,
  filter,
  destroy,
  update,
  newCart,
  add,
  cancel
} from "./src/commands.js";

const inform = console.log;

inform(`This is pal: ${pal}
This is the current command: ${action}
This is the current input: ${input}`);

function runApp() {
  switch (action) {
    case "create":
      create(input);
      break;
    case "show":
  show(input);
      break;
    case "list":
      list(input);
      break;
    case "filter":
      filter(input);
      break;
    case "delete":
      destroy(input);
      break;
    case "update":
  update(input);
      break;
    case "new-cart":
      newCart();
      break;
    case "add":
  add(input);
      break;
    case "cancel":
  cancel(input);
      break;
    default:
      inform(missingInputMess);
  }
}

runApp();

```

Please replace the content of your app.js file with the updated code above.

Upgrade your Node.js version: Update your Node.js installation to a version that supports the optional chaining operator (14.0.0 or later). You can download the latest version from the official Node.js website (https://nodejs.org).

Modify the code to remove optional chaining: If upgrading Node.js is not an option, you can modify the code to remove the optional chaining operator. Replace the line const action = process.argv[2]?.toLowerCase(); with the following code:

```js
const action = process.argv[2] ? process.argv[2].toLowerCase() : undefined;
```

This change ensures that action will be undefined if process.argv[2] is not present, mimicking the behavior of the optional chaining operator.

Once you've made the necessary modifications, try running pal app.js create again to see if it resolves the error.

If you still encounter any issues or have further questions, please let me know.
User

> pal app.js create                                                                       ─╯
> /opt/homebrew/bin/pal: line 1: const: command not found
> /opt/homebrew/bin/pal: line 2: syntax error near unexpected token
> /opt/homebrew/bin/pal: line 2: const action = process.argv[2] ? process.argv[2].toLowerCase() : undefined;

I apologize for the confusion. It seems that running the script directly as pal app.js create is still not working. The issue is that the system tries to interpret the script as a shell script, which results in the error messages you're seeing.

## Modify the app.js file| Make it EXECUTABLE

Add a shebang line at the beginning of the app.js file. This line tells the system which interpreter to use for executing the script. For Node.js scripts, the shebang line should be:

```js
#!/usr/bin/env node
```

Save the app.js file.

In your terminal, navigate to the directory where the app.js file is located.

Run the following command to make the app.js file executable:

```sh

chmod +x app.js

```

Now you should be able to run the script as pal app.js create without any issues.

By making the file executable and adding the shebang line, you're specifying that the file should be interpreted as a Node.js script rather than a shell script.
