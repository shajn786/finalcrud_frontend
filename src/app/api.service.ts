import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  ROOT_URL:string ="http://springboot-finalcrud-env.eba-c7cn9hir.eu-north-1.elasticbeanstalk.com";

  constructor(private http : HttpClient) { }


  addCustomer = (data:any)=>
  {
    return this.http.post(this.ROOT_URL+"/addcustomer",data)
  }

  login=(data:any)=>
  {
    return this.http.post(this.ROOT_URL+"/login",data)
  }

  profile=(data:any)=>
  {
    const apiurl = this.ROOT_URL+`/findcustomer/${data}`
    return this.http.get(apiurl)
  }

  search=(id:any)=>
  {
    return this.http.get(this.ROOT_URL+`/findcustomer/${id}`)
  }

  update=(data:any)=>
  {
    return this.http.post(this.ROOT_URL+"/updatecustomer",data)
  }

  allcustomer = ()=>
  {
    return this.http.get(this.ROOT_URL+"/allcustomer")
  }
}
