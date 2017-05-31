# HelloAngularFabric

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## install Fabric
1) Install Fabric.js

npm install fabric --save 
2) Install TypeScript definitions for Fabric.js

typings install fabric --source dt --save
3) Import fabric in required ts file

import 'fabric';
declare const fabric: any;

## install JQuery

STEP 1 - First things first
npm install --save jquery

npm install -D @types/jquery

STEP 2 - IMPORT
// Now, within any of the app files (ES2015 style)
import * as $ from 'jquery';
//
$('#elemId').width();

// OR

// CommonJS style - working with "require"
import $ = require('jquery')
//
$('#elemId').width();

UPDATE - Feb - 2017

import $ from 'jquery';
//
$('#elemId').width();


In your index.html just add this in the header block:
<script src="https://cdn.ckeditor.com/4.6.1/full/ckeditor.js"></script>

Install ng2-ckeditor via NPM

npm install ng2-ckeditor --save
In your app.component.ts add this:

import { CKEditorComponent } from '../../../node_modules/ng2-ckeditor/src/ckeditor.component';
@NgModule({
    declarations: [
        CKEditorComponent
    ],
    exports: [
        CKEditorComponent,
           ]
})
Use editor like this:

<ckeditor [(ngModel)]="myContent" debounce="500"></ckeditor>