Description
----
Compare a string with optional characters

For example:

Given the words: 
```
configure terminal
```
... We would like to allow certain abbreviations. We would take the optional text and enclose them in parentheses.
```
conf(igure) t(erminal)
```
This means that any of the following examples will return true:
```
conf t
confi t
confi te
confi termi
configure ter

...etc
```
Installation
----
```sh
npm install text-optional
```
Usage
----
```javascript
var optional = require('text-optional');

optional('con t', 'conf(igure) t(erminal)')
// true

optional('c ter', 'conf(igure) t(erminal)')
//false
```