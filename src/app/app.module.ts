import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchSelectComponent } from './search-select/search-select.component';
import { MatSelectModule } from '@angular/material/select';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material';
import { ArrayToWords } from './pipes/array-to-words.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchSelectComponent,
    ArrayToWords
  ],
  imports: [
    BrowserModule,
    MatSelectModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
