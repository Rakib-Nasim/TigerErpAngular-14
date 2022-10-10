import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { AuthServiceService } from './../../../services/auth-service.service';
import { BookEntryService } from 'src/app/services/book-entry.service';
import { IDropdownSettings, } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-book-entry',
  templateUrl: './book-entry.component.html',
  styleUrls: ['./book-entry.component.css']
})
export class BookEntryComponent implements OnInit {
  bookEntryForm : FormGroup;
  compId:number=202;
  dropdownSettings:IDropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
    categoryItems:any[]=[];
    authorItems:any[]=[];
    publisherItems:any[]=[];
    bookList:any[]=[];
  categories:any[]=[{"id":1,"name":'Science'},
  {"id":2,"name":"Commarce"},
  {"id":3,"name":"Humanity"}
];
authors:any[]=[{"id":1,"name":'Rakib'},
  {"id":2,"name":"Hasan"},
  {"id":3,"name":"Nasim"}
];
publishers:any[]=[{"id":1,"name":'Bd-Publisher'},
  {"id":2,"name":"Usa-Publisher"},
  {"id":3,"name":"Uae-publisher"}
];
  statuslist:any[]=[{"id":1,"name":'Active'},{"id":2,"name":"InActive"}];
  constructor(
    private bookentry:BookEntryService,
    
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getBook();
    this.creatForm();
    // this.getAllCategory();
  }

  selectOneAll(item:any){
   console.log('select One', this.categoryItems);
  }
  selectAll(item:any){
    console.log('select All', item);
  }


   getBook(){
    this.bookentry.getAllBook(this.compId).subscribe((res:any)=>{
      if(res){
           this.bookList=res as any[];
           console.log("this.bookList",this.bookList);
      }
    })
   }
   
  // getAllCategory()
  // {
  //   this.bookentry.getAllCategory(this.compId).subscribe((res :any)=>{
  //     if(res){
  //       this.categories=res as any[];
  //       console.log("categories",this.categories);
  //     }
  //   })
  // }
 creatForm(){
  this.bookEntryForm=this.fb.group({
    id:[0,[]],
    categoryList:[this.categoryItems],
    authorList:[this.authorItems],
    publisherList:[this.publisherItems],
    titel:[[]],
    iSBN:[[]],
    description:[[]],
    country:[[]],
    price:[[]],
    order:[[]],
    status:[[]],
  })
 }
   
}
