import { Component, OnDestroy, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
@Component({
  selector: 'app-tutlist',
  templateUrl: './tutlist.component.html',
  styleUrls: ['./tutlist.component.css']
})
export class TutlistComponent implements OnInit, OnDestroy {

  constructor(private crud: CrudService) { }
  tutList:any;
  sub:any;
  ngOnInit(): void {
    console.log("Before Refresh");
    this.getList();
    this.sub = this.crud.Refreshrequired.subscribe((_) =>{
      console.log("After Refresh");
      this.getList();
    });
    console.log("ggg");
  }
  getList(){
    this.crud.getAll().subscribe((res:any) => {
      this.tutList = res;
    });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
