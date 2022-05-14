import { Component } from '@angular/core';
import { CrudService } from './services/crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private crud: CrudService) { }
  title = 'Angular 13 CRUD example';
 
  serviceName = this.crud.getServiceName('Abinash');
  name = this.crud.serviceName;

}
