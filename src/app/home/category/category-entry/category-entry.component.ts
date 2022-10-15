import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-entry',
  templateUrl: './category-entry.component.html',
  styleUrls: ['./category-entry.component.css']
})
export class CategoryEntryComponent implements OnInit {
  categoryEntryForm:FormGroup;
  compId:number=202;
   
categoryList:any[]=[];

  constructor( private fb:FormBuilder,
               private category:CategoryService,        
    ) { }

  ngOnInit(): void {
    this.createForm();
    this.getAllCategory();
  }
   getAllCategory(){
    this.category.getAllCategory(this.compId).subscribe((res:any)=>{
      if (res){
        this.categoryList=res.response as any[];
        console.log("this.categoryList",this.categoryList);
      }
    })
   }

   saveCategory(){
    console.log("save data",this.formVal);
    this.category.saveCategory(this.formVal).subscribe((res:any)=>{
      if(res){
        console.log(this.categoryEntryForm.value);
      }
    })
   }


  createForm(){
    this.categoryEntryForm=this.fb.group({
      id:[0,[]],
      compId:[this.compId,[]],
      categoryId:[0,[]],
      parentId:[null,[]],
      categoryName:['',[]],
      description:['',[]],
      productType:[0,[]],
      isProduction:[0,[]],
    })
  }
  get formVal(){
    return this.categoryEntryForm.value;
  }
  get f(){
    return this.categoryEntryForm.controls;
  }
  

}
