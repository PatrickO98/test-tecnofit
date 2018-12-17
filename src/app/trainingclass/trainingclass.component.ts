import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TrainingClass } from '../entities/trainingclass';
import { TrainingClassService } from '../services/trainingclass.service';

@Component({
  selector: 'app-trainingclass',
  templateUrl: './trainingclass.component.html',
  styleUrls: ['./trainingclass.component.scss']
})
export class TrainingclassComponent implements OnInit {

  classes: TrainingClass[];
  allClasses: TrainingClass[];
  @Input() editedClass: TrainingClass;

  constructor(private trainingClassService: TrainingClassService) { }

  ngOnInit() {
    this.getTrainingClasses();
  }

  getTrainingClasses(): void {
    this.trainingClassService.getClasses()
      .subscribe(data => {
        this.classes = data.data;
        this.allClasses = data.data;
      });
  }

  saveClass(): void {
    this.trainingClassService.saveClass(this.editedClass)
      .subscribe(
        data => {
          console.log('saved!');
        },
        error => {
          console.log('error');
        }
      );
  }

  classFilter(event: KeyboardEvent, param: string): void {
    this.classes = this.allClasses.filter(e => e.name.includes(param));
  }

  openOpt(target: string): void {
    console.log(target);
    document.getElementById(target).classList.toggle("active");
    document.getElementById(target).parentElement.parentElement.classList.toggle("active");
  }

  openModal(target: string): void {
    document.getElementById(target).style.display = "block";
  }

  closeModal(target: string): void {
    document.getElementById(target).style.display = "none";
  }

}
