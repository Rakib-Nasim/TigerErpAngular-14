import { RouterModule, Routes } from '@angular/router';

import { AuthorEntryComponent } from './home/author/author-entry/author-entry.component';
import { BookEntryComponent } from './home/book/book-entry/book-entry.component';
import { CategoryEntryComponent } from './home/category/category-entry/category-entry.component';
import { NgModule } from '@angular/core';
import { PublisherEntryComponent } from './home/publisher/publisher-entry/publisher-entry.component';

const routes: Routes = [
  {path:'',component:BookEntryComponent},
  {path:'author-entry',component:AuthorEntryComponent},
  {path:'category-entry',component:CategoryEntryComponent},
  {path:'publisher-entry',component:PublisherEntryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
