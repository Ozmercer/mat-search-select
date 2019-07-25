# Description

Component built using Angular Material. This component open a mat-select element that includes a search-bar. Typing in will filter the select options. Navigation between options is possible using UP and DOWN arrow keys, ENTER chooses the seleted option and ESC closes the component.

## API

   // Array of select-options
  @Input() options: string[];
  
  // Placeholder text
  @Input() placeholder: String;
  
  // Use multiple select mode
  @Input() multiple: boolean;
  
  // Choose what option/options are shown as selected
  @Input() currentSelection: string | string[];
  
  // Emits chosen option/options
  @Output() change: EventEmitter<string | string[]>;

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
