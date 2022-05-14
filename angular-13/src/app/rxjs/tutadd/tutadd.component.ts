import { Component, OnInit } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';
import { CrudService } from 'src/app/services/crud.service';
@Component({
  selector: 'app-tutadd',
  templateUrl: './tutadd.component.html',
  styleUrls: ['./tutadd.component.css']
})
export class TutaddComponent implements OnInit {

  tutorial: Tutorial = {
    title: '',
    description: '',
    published: false
  };
  submitted = false;

  constructor(
    private tutorialService: TutorialService,
    private crud: CrudService
  ) { }

  ngOnInit(): void {
  }

  saveTutorial(): void {
    const data = {
      title: this.tutorial.title,
      description: this.tutorial.description
    };

    this.crud.saveNew(data).subscribe((res:any) => {
      this.submitted = true;
      console.log(res);
    });
  }

  newTutorial(): void {
    this.submitted = false;
    this.tutorial = {
      title: '',
      description: '',
      published: false
    };
  }

}
