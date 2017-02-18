// JavaScript Snippets for Atom
// this is a useful JS package for atom IDE

Install

Go to Atom > Preferences... then search for JavaScript Snippets in Packages tab. Restart atom.

Development

$ cd ~/.atom/packages
$ git clone https://github.com/zenorocha/atom-javascript-snippets.git
$ cd atom-javascript-snippets
$ apm install
$ apm link




Console

[cd] console.dir

// console.dir(${1:obj});
[ce] console.error

// console.error(${1:obj});
[ci] console.info

// console.info(${1:obj});
[cl] console.log

// console.log(${1:obj});
[cw] console.warn

// console.warn(${1:obj});
[de] debugger

debugger;
DOM

[ae] addEventListener
// ${1:document}.addEventListener('${2:event}', function(e) {
//     ${0:// body...}
// });

[ac] appendChild
// ${1:document}.appendChild(${2:elem});

[rc] removeChild
// ${1:document}.removeChild(${2:elem});

[cel] createElement
// ${1:document}.createElement(${2:elem});

[cdf] createDocumentFragment
// ${1:document}.createDocumentFragment();

[ca] classList.add
// ${1:document}.classList.add('${2:class}');

[ct] classList.toggle
// ${1:document}.classList.toggle('${2:class}');

[cr] classList.remove
// ${1:document}.classList.remove('${2:class}');

[gi] getElementById
// ${1:document}.getElementById('${2:id}');

[gc] getElementsByClassName
// ${1:document}.getElementsByClassName('${2:class}');

[gt] getElementsByTagName
// ${1:document}.getElementsByTagName('${2:tag}');

[ga] getAttribute
// ${1:document}.getAttribute('${2:attr}');

[sa] setAttribute
// ${1:document}.setAttribute('${2:attr}', ${3:value});

[ra] removeAttribute
// ${1:document}.removeAttribute('${2:attr}');

[ih] innerHTML
// ${1:document}.innerHTML = '${2:elem}';

[tc] textContent
// ${1:document}.textContent = '${2:content}';

[qs] querySelector
// ${1:document}.querySelector('${2:selector}');

[qsa] querySelectorAll
// ${1:document}.querySelectorAll('${2:selector}');


Loop

[fe] forEach
${1:myArray}.forEach(function(${2:elem}) {
    ${0:// body...}
});
[fi] for in

for (${1:prop} in ${2:obj}) {
    if (${2:obj}.hasOwnProperty(${1:prop})) {
        ${0:// body...}
    }
}


Function

[fn] function
// function ${1:methodName} (${2:arguments}) {
//     ${0:// body...}
// }

[afn] anonymous function
// function(${1:arguments}) {
//     ${0:// body...}
// }

[pr] prototype
// ${1:ClassName}.prototype.${2:methodName} = function(${3:arguments}) {
//     ${0:// body...}
// }

[iife] immediately-invoked function expression
// (function(${1:window}, ${2:document}) {
//     ${0:// body...}
// })(${1:window}, ${2:document});
// [call] function call
//
// ${1:methodName}.call(${2:context}, ${3:arguments})

[apply] function apply
// ${1:methodName}.apply(${2:context}, [${3:arguments}])
// [ofn] function as a property of an object
//
// ${1:functionName}: function(${2:arguments}) {
//     ${3:// body...}
// }


JSON

[jp] JSON.parse
// JSON.parse(${1:obj});
// [js] JSON.stringify
//
// JSON.stringify(${1:obj});
// Timer

[si] setInterval

// setInterval(function() {
//     ${0:// body...}
// }, ${1:delay});
// [st] setTimeout
//
// setTimeout(function() {
//     ${0:// body...}
// }, ${1:delay});



NodeJS

[ase] assert.equal
// assert.equal(${1:actual}, ${2:expected});

[asd] assert.deepEqual
// assert.deepEqual(${1:actual}, ${2:expected});

[asn] assert.notEqual
// assert.notEqual(${1:actual}, ${2:expected});

[me] module.exports
// module.exports = ${1:name};

[pe] process.exit
// process.exit(${1:code});

[re] require
// require('${1:module}');




BDD

[desc] describe
// describe('${1:description}', function() {
//     ${0:// body...}
// });

[ita] it asynchronous
// it('${1:description}', function(done) {
//     ${0:// body...}
// });

[its] it synchronous
// it('${1:description}', function() {
//     ${0:// body...}
// });

[itp] it pending
// it('${1:description}');


Misc

[us] use strict
// 'use strict';

[al] alert
// alert('${1:msg}');

[co] confirm
// confirm('${1:msg}');

[pm] prompt
// prompt('${1:msg}');
