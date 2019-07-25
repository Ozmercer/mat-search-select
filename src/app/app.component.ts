import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  options = [
    'Default option',
    'Cheddar',
    'Parmesan',
    'Gorgonzola',
    'Emmental',
    'Bree',
    'Mozzarella',
    'Feta',
  ];
  activeOption: string | string[];
  placeholder = 'Pick a cheese';
  filteredOptions: string[];

  ngOnInit() {
    this.activeOption = this.options[0];
    this.filteredOptions = this.options.filter((option, index) => index % 3 === 1)
  }

  onSelect(selection: string | string[]) {
    this.activeOption = selection;
  }
}
