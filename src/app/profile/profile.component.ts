import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

id:any=""
data:any = []

  constructor(private api :ApiService)
  {
    this.id= Number(localStorage.getItem("id"))
    console.log(this.id)
    api.profile(this.id).subscribe(
      (response:any)=>

      {
         console.log(response)
         this.data= response
      }
    )
  }

}
