import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthorEntryComponent } from './home/author/author-entry/author-entry.component';
import { BookEntryComponent } from './home/book/book-entry/book-entry.component';
import { BrowserModule } from '@angular/platform-browser';
import { CategoryEntryComponent } from './home/category/category-entry/category-entry.component';
import { FooterOneComponent } from './layout/footer-one/footer-one.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderOneComponent } from './layout/header-one/header-one.component';
import { NgModule } from '@angular/core';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgSelectModule } from '@ng-select/ng-select';
import { PublisherEntryComponent } from './home/publisher/publisher-entry/publisher-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    BookEntryComponent,
    HeaderOneComponent,
    FooterOneComponent,
    CategoryEntryComponent,
    AuthorEntryComponent,
    PublisherEntryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
