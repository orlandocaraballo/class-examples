![terminal](terminal.png)
# Terminal Commands

_Below are some of the more common commands I find myself using as a developer and instructor of the SEI_

## Help

```sh
$ man [command] # access manual of a unix [command]
$ [command] --help # usually accesses help of [command]
$ tldr [command]
```

## Read File

```sh
$ cat [path to file] # outputs the text contained within a file to the terminal
$ less [path to file] # opens file for reading
```

## Open w/ Text Editor

```sh
$ code [path to file] # opens a file in vscode text editor
$ nano [path to file] # opens a file in nano text editor
$ vim [path to file] # opens a file in vim text editor]
```

## Process Management

```sh
$ ps aux
$ ps aux | grep [process]
```

```sh
$ killall [process name] # stops [process] from running

# example
$ killall node # kills all node processes currently running
```

## Text Filtering

```sh
$ grep [text] [path to file] # search within file for text
```

## Network Request

```sh
$ curl [url]
```

## Node Version Manager

[NVM](https://github.com/nvm-sh/nvm)

```sh
$ nvm install [version of node js]
$ nvm use [version of node js]
$ nvm alias default [version of node js]
```

## Node Package Manager

[NPM](https://www.npmjs.com/)

```sh
$ npm install
$ npm install [module]
$ npm install [module] -g # install globally
$ npm install [module] --save-dev # install as dev dependancy
$ npm list [module] # display all listings first
```

## Mac OSX

[Homebrew](https://brew.sh/)

```sh
$ brew install [cask name]
$ brew uninstall [cask name]
$ brew cleanup
$ brew doctor
```