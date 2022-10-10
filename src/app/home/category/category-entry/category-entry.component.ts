import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { BookEntryService } from 'src/app/services/book-entry.service';

@Component({
  selector: 'app-category-entry',
  templateUrl: './category-entry.component.html',
  styleUrls: ['./category-entry.component.css']
})
export class CategoryEntryComponent implements OnInit {
  categoryEntryForm:FormGroup;
  compId:number=202;
   categories:any[]=[{"id":1,"name":'Science'},
  {"id":2,"name":"Commarce"},
  {"id":3,"name":"Humanity"}
];
categoryList:any[]=[];

  constructor( private fb:FormBuilder,
               private bookEntry:BookEntryService          
    ) { }

  ngOnInit(): void {
    this.getAllCategory();
  }
   getAllCategory(){
    this.bookEntry.getAllCategory(this.compId).subscribe((res:any)=>{
      if (res){
        this.categoryList=res.response as any[];
        console.log("this.categoryList",this.categoryList);
      }
    })
   }


  createForm(){
    this.categoryEntryForm=this.fb.group({
      id:[0,[]],
      compId:[this.compId,[]],
      categoryId:[0,[]],
      parentId:[[]],
      categoryName:[[]],
      description:[[]],
      productType:[[]],
      isProduction:[[]],
    })
  }

}
