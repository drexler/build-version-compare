
### build-version-compare

[![npm](https://img.shields.io/npm/v/build-version-compare.svg)](https://www.npmjs.com/package/build-version-compare)
[![license](https://img.shields.io/github/license/drexler/build-version-compare.svg)](https://github.com/drexler/build-version-compare/blob/master/LICENSE.md)

A Node package to compare two version strings of the format *major.minor.patch.buildnumber*.

#### Installation

```shell
$ yarn add build-version-compare
```

```shell
$  npm install --save build-version-compare
```

#### Usage

``` typescript
import {comparator} from 'build-version-compare';

const artifactVersions = [ 
  '3.20.0.10',
  '3.20.0.11',
  '3.20.0.12',
  '3.20.0.13',
  '3.20.0.14',
  '3.20.0.15',
  '3.20.0.16',
  '3.20.0.17',
  '3.20.0.18',
  '3.20.0.19',
  '3.20.0.2',
  '3.20.0.20',
  '3.20.0.21',
  '3.20.0.3',
  '3.20.0.4',
  '3.20.0.5',
  '3.20.0.6',
  '3.20.0.7',
  '3.20.0.8',
  '3.20.0.9' 
];
console.log(artifactVersions.sort(comparator));
```


