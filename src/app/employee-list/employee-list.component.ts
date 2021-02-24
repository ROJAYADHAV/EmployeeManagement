import { Component, OnInit,TemplateRef  } from '@angular/core';
import {SharedServiceService} from '../../app/shared-service.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
 
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],

})
export class EmployeeListComponent implements OnInit {

  userArray:any=null;
  modalRef: BsModalRef;
  constructor(public http: SharedServiceService,private modalService: BsModalService) {
  
   }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.http.getEmployeeData().subscribe((response:any)=>{
    this.userArray =response;
    console.log(response);
    })
  }

  deleteData(delitem:any){
    this.http.deleteEmployeeData(delitem).subscribe((response:any)=>{
      this.getData();
    }
  )
  }
  editData(template:TemplateRef<any>,obj,index){
    this.modalRef = this.modalService.show(template);

  }

  UpdateData(userData){
    console.log(userData.id);
    this.http.updateNewEmployeeData(userData).subscribe((res:any)=>{
      this.getData();
  }
)
}





}
