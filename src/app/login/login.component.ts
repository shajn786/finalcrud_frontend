import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Route, Router, Routes } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username=""
  password=""
  result = []
id=""
  constructor(private api : ApiService,private routes : Router)
  {

  }

  readValues = ()=>
  {
    let data:any = {"username":this.username,"password":this.password}
    console.log(data)
    this.api.login(data).subscribe(
      (response:any)=>
      {
         console.log(response.canme)
         this.id=response.id
         localStorage.setItem("id",this.id)
         this.routes.navigate(["/profile"])

      }
    )
  }

}
