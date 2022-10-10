import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-publisher-entry',
  templateUrl: './publisher-entry.component.html',
  styleUrls: ['./publisher-entry.component.css']
})
export class PublisherEntryComponent implements OnInit {
  publisherEntryFrom:FormGroup
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  creatForm(){
    this.publisherEntryFrom=this.fb.group({
      id:[[]],
      publisherName:[[]],
      discription:[[]],
      status:[[]],
    })
  }

}
