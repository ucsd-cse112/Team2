# MeatSpace Web Components
![alt text](https://meat-space.org/img/logo.png "MeatSpace logo 1") <br/>
[![Build Status](https://travis-ci.org/ucsd-cse112/Team2.svg?branch=master)](https://travis-ci.org/ucsd-cse112/Team2)
[![Maintainability](https://api.codeclimate.com/v1/badges/2a07d0e8d29fd216bc41/maintainability)](https://codeclimate.com/repos/5cc77286629ff0026e00188a/maintainability) <br/>

MeatSpace web component library. 

## Team Members
- Adam Kabbara `Lead`
- Timothy Bian `Co-Lead`
- Veronica Lin `Quality Assurance`
- Tony Huang `Quality Assurance`
- Shih-hung (Peter) Pi `Tools & Utility`
- Curtis Tong `Tools & Utility`
- Alex Monji `Coder`
- Aaron Brown `Coder`
- Justin Chen `Coder`
- Christopher Jensen `DevOps`
- Xin Liu `DevOps`

## [meat-space.org](https://meat-space.org)

## Getting Started
The following instructions will get our web components installed and running locally on your machine.

### Prerequisites 
* Nodejs
* npm

### Installing
Assuming you have started a nodejs project, have a `package.json` file set up, and are in the root directory of your poject, run
```
npm i team2
```
### Usage & Example
In your HTML page `<head>` element, add a `<script>` tag like so
```
<script type="module" src="./node_modules/team2/web_components/core-hello/core-hello.js"></script>
```
In the above example, `/core-hello/core-hello.js` is the path to the core-hello web component JavaScript file. 
If you want to use a different web component, you will have to change this part of the path appropriately.
Next, add the component into your HTML body
```
<core-hello rainbow lang="en">this is a test!</core-hello>
```
### Acknowledgment
Thanks to [BrowserStack](http://browserstack.com/) for supporting open source projects like ours. 

