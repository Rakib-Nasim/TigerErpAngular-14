import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthorEntryComponent } from './home/author/author-entry/author-entry.component';
import { BookEntryComponent } from './home/book/book-entry/book-entry.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CategoryEntryComponent } from './home/category/category-entry/category-entry.component';
import { DeleteConfirmationComponent } from './shared/delete-confirmation/delete-confirmation.component';
import { FooterOneComponent } from './layout/footer-one/footer-one.component';
import { HeaderOneComponent } from './layout/header-one/header-one.component';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgModule } from '@angular/core';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PublisherEntryComponent } from './home/publisher/publisher-entry/publisher-entry.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { SidenavModule } from 'src/vendor/libs/sidenav/sidenav.module';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    BookEntryComponent,
    HeaderOneComponent,
    FooterOneComponent,
    CategoryEntryComponent,
    AuthorEntryComponent,
    PublisherEntryComponent,
    SidenavComponent,
    DeleteConfirmationComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgSelectModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgMultiSelectDropDownModule.forRoot(),
    SidenavModule,
    Ng2SearchPipeModule,
    ToastrModule.forRoot(),
  ],
  exports:[
  ],
  providers: [],
  bootstrap: [AppComponent,]
})
export class AppModule { }
