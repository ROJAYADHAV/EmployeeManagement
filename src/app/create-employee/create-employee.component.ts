import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from '../shared-service.service';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {

  firstName:any;
age:any;
sapID:any;
email:any;
location:any;
contact:any;

  constructor(public http: SharedServiceService) { }

  
  AddData(){
   
let additem={firstName:this.firstName,
  age:this.age,
  sapID:this.sapID,
email:this.email,
location:this.location,
contact:this.contact
};
    this.http.addNewEmployeeData(additem).subscribe((result:any)=>{
      this.clear();
    }
  )
}
clear(){
  this.firstName="";
this.age="";
this.sapID="";
this.email="";
this.location="";
this.contact="";
}
}
