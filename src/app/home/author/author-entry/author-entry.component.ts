import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-author-entry',
  templateUrl: './author-entry.component.html',
  styleUrls: ['./author-entry.component.css']
})
export class AuthorEntryComponent implements OnInit {
  authorEntryForm:FormGroup;


  constructor(
    private fb:FormBuilder,
  ) { }

  ngOnInit(): void {
    this.ceatForm();
  }
  ceatForm(){
    this.authorEntryForm=this.fb.group({
      id:[0,[]],
      authName:[[]],
      discription:[[]],
      status:[[]],
    })
  }

}
