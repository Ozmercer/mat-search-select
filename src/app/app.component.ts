import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mat-search-select';
  options = [
    'Default option',
    'Option 1',
    'Option 2',
    'Option 3',
    'Option 4',
    'Option 5',
    'Option 6',
    'Option 7',
  ];
  activeOption: string | string[];
  placeholder = 'Choose option';
  filteredOptions: string[];

  ngOnInit() {
    this.activeOption = this.options[0];
    this.filteredOptions = this.options.filter((option, index) => index % 2 === 0)
  }

  onSelect(selection: string | string[]) {
    this.activeOption = selection;
  }
}
