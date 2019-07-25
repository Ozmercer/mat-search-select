import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MatSelect} from '@angular/material';

@Component({
  selector: 'app-search-select',
  templateUrl: './search-select.component.html',
  styleUrls: ['./search-select.component.scss']
})
export class SearchSelectComponent implements OnInit {
  @Input() options: string[];
  @Input() placeholder = 'Search';
  @Input() multiple: boolean;

  @Input() set currentSelection(s: string | string[]) {
    if (s) {
      this.currentValue = s;
    }
  }

  @Output() change: EventEmitter<string | string[]>;
  @ViewChild('select', {static: false}) select: MatSelect;
  @ViewChild('scroller', {static: false}) scroller: ElementRef;
  @ViewChild('input', {static: false}) input: ElementRef;

  filteredOptions: string[];
  inputText: string;
  initialText: string;
  currentValue: string | string[];
  currentFocus: number;

  constructor() {
    this.inputText = '';
    this.initialText = '';
    this.filteredOptions = [];
    this.change = new EventEmitter<string>();
    this.currentFocus = null;
  }

  ngOnInit() {
    this.options.sort();
    this.filteredOptions = this.options;
  }

  filterList(filter: string) {
    this.initialText = this.inputText;
    this.filteredOptions = this.options.filter(option => option.toLowerCase().includes(filter.toLowerCase()));
    this.currentFocus = null;
  }

  onChange(selection: string | string[]) {
    this.change.emit(selection);
  }

  onOpenSelect() {
    this.input.nativeElement.focus();
  }

  onKeyPress(ev: KeyboardEvent) {
    ev.stopPropagation();
    switch (ev.key) {
      case 'Escape':
        this.select.close();
        break;
      case 'ArrowUp':
        ev.preventDefault();
        if (this.currentFocus === null) {
          this.currentFocus = this.scroller.nativeElement.children.length - 1;
        } else if (this.currentFocus > 0) {
          this.currentFocus--;
        } else {
          this.currentFocus = null;
          this.inputText = this.initialText;
        }
        this.updateViewOnKeyPress();
        break;
      case 'ArrowDown':
        ev.preventDefault();
        if (this.currentFocus === null) {
          this.currentFocus = 0;
        } else if (this.currentFocus < this.scroller.nativeElement.children.length - 1) {
          this.currentFocus++;
        } else {
          this.currentFocus = null;
          this.inputText = this.initialText;
        }
        this.updateViewOnKeyPress();
        break;
      case 'Enter':
        this.change.emit(this.inputText);
        this.inputText = '';
        this.filterList('');
        this.select.close();
        break;
    }
  }

  private updateViewOnKeyPress() {
    if (this.currentFocus === null) {
      return;
    }
    this.scroller.nativeElement.children[this.currentFocus].focus();
    this.input.nativeElement.focus();
    this.inputText = this.scroller.nativeElement.children[this.currentFocus].innerText;
  }
}
