import { Component } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {

  id=""
  
  readValues = ()=>
  {
    let data:any = {"username":this.id}
    console.log(data)
  }

}
