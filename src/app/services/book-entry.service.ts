import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookEntryService {
  baseApiUrl: string =environment.apiUrl;
  constructor(private http:HttpClient) { }

  getAllCategory(compId:number){
    return this.http.get(this.baseApiUrl+'/api/category/GetAllCategoryByComp/'+compId);
  }
  getAllBook(compId:number){
    return this.http.get(this.baseApiUrl+'/api/product/GetProductByComp/'+compId);
  }
}