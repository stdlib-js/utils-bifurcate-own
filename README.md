<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# bifurcateOwn

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Split an object's **own** property values into two groups according to a predicate function.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/utils-bifurcate-own
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var bifurcateOwn = require( '@stdlib/utils-bifurcate-own' );
```

#### bifurcateOwn( obj, \[options,] predicate )

Splits an object's **own** property values into two groups according to a `predicate` function, which specifies which group a value in the input `object` belongs to. If a `predicate` function returns a truthy value, a value belongs to the first group; otherwise, a value belongs to the second group.

```javascript
function predicate( v ) {
    return v[ 0 ] === 'b';
}
var obj = {
    'a': 'beep',
    'b': 'boop',
    'c': 'foo',
    'd': 'bar'
};

var out = bifurcateOwn( obj, predicate );
// e.g., returns [ [ 'beep', 'boop', 'bar' ], [ 'foo' ] ]
```

A `predicate` function is provided two arguments:

-   **value**: object value.
-   **key**: object index.

```javascript
function predicate( v, k ) {
    console.log( '%s: %s', k, v );
    return v[ 0 ] === 'b';
}
var obj = {
    'a': 'beep',
    'b': 'boop',
    'c': 'foo',
    'd': 'bar'
};

var out = bifurcateOwn( obj, predicate );
// e.g., returns [ [ 'beep', 'boop', 'bar' ], [ 'foo' ] ]
```

The function accepts the following `options`:

-   **returns**: specifies the output format. If the option equals `'values'`, the function outputs values. If the option equals `'keys'`, the function outputs keys. If the option equals `'*'`, the function outputs both keys and values. Default: `'values'`.
-   **thisArg**: execution context.

By default, the function returns object values. To return object keys, set the `returns` option to `'keys'`.

```javascript
function predicate( v ) {
    return v[ 0 ] === 'b';
}
var obj = {
    'a': 'beep',
    'b': 'boop',
    'c': 'foo',
    'd': 'bar'
};

var opts = {
    'returns': 'keys'
};
var out = bifurcateOwn( obj, opts, predicate );
// e.g., returns [ [ 'a', 'b', 'd' ], [ 'c' ] ]
```

To return key-value pairs, set the `returns` option to `'*'`.

```javascript
function predicate( v ) {
    return v[ 0 ] === 'b';
}
var obj = {
    'a': 'beep',
    'b': 'boop',
    'c': 'foo',
    'd': 'bar'
};

var opts = {
    'returns': '*'
};
var out = bifurcateOwn( obj, opts, predicate );
// e.g., returns [ [ [ 'a', 'beep' ], [ 'b', 'boop ], [ 'd', 'bar' ] ], [ [ 'c', 'foo' ] ] ]
```

To set the `predicate` execution context, provide a `thisArg`.

```javascript
function predicate( v ) {
    this.count += 1;
    return v[ 0 ] === 'b';
}
var context = {
    'count': 0
};
var opts = {
    'thisArg': context
};
var obj = {
    'a': 'beep',
    'b': 'boop',
    'c': 'foo',
    'd': 'bar'
};
var out = bifurcateOwn( obj, opts, predicate );
// e.g., returns [ [ 'beep', 'boop', 'bar' ], [ 'foo' ] ]

console.log( context.count );
// => 4
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   Iteration order is **not** guaranteed, as `object` key enumeration is not specified according to the [ECMAScript specification][ecma-262-for-in]. In practice, however, most engines use insertion order to sort an `object`'s keys, thus allowing for deterministic iteration.
-   Because iteration order is **not** guaranteed, result order is **not** guaranteed.
-   The function determines the list of own enumerable properties **before** invoking the provided function. Hence, any modifications made to the input `object` **after** calling this function (such as adding and removing properties) will **not** affect the list of visited properties.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var fromCodePoint = require( '@stdlib/string-from-code-point' );
var bifurcateOwn = require( '@stdlib/utils-bifurcate-own' );

var key;
var obj;
var out;
var i;

// Generate a random object...
obj = {};
for ( i = 0; i < 100; i++ ) {
    key = fromCodePoint( 97+i );
    obj[ key ] = randu();
}

function predicate( v ) {
    return ( v < 0.5 );
}

// Compute the groups:
out = bifurcateOwn( obj, predicate );
console.log( out );
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils-bifurcate`][@stdlib/utils/bifurcate]</span><span class="delimiter">: </span><span class="description">split values into two groups.</span>
-   <span class="package-name">[`@stdlib/utils-bifurcate-by`][@stdlib/utils/bifurcate-by]</span><span class="delimiter">: </span><span class="description">split values into two groups according to a predicate function.</span>
-   <span class="package-name">[`@stdlib/utils-bifurcate-in`][@stdlib/utils/bifurcate-in]</span><span class="delimiter">: </span><span class="description">split an object's own and inherited property values into two groups according to a predicate function.</span>
-   <span class="package-name">[`@stdlib/utils-group-own`][@stdlib/utils/group-own]</span><span class="delimiter">: </span><span class="description">group an object's own property values according to an indicator function.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-bifurcate-own.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-bifurcate-own

[test-image]: https://github.com/stdlib-js/utils-bifurcate-own/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/utils-bifurcate-own/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-bifurcate-own/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-bifurcate-own?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-bifurcate-own.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-bifurcate-own/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-bifurcate-own/tree/deno
[deno-readme]: https://github.com/stdlib-js/utils-bifurcate-own/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/utils-bifurcate-own/tree/umd
[umd-readme]: https://github.com/stdlib-js/utils-bifurcate-own/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/utils-bifurcate-own/tree/esm
[esm-readme]: https://github.com/stdlib-js/utils-bifurcate-own/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/utils-bifurcate-own/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-bifurcate-own/main/LICENSE

[ecma-262-for-in]: https://262.ecma-international.org/5.1/#sec-12.6.4

<!-- <related-links> -->

[@stdlib/utils/bifurcate]: https://github.com/stdlib-js/utils-bifurcate

[@stdlib/utils/bifurcate-by]: https://github.com/stdlib-js/utils-bifurcate-by

[@stdlib/utils/bifurcate-in]: https://github.com/stdlib-js/utils-bifurcate-in

[@stdlib/utils/group-own]: https://github.com/stdlib-js/utils-group-own

<!-- </related-links> -->

</section>

<!-- /.links -->
