import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Project } from '../_modules/Project';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-project-modal',
  imports: [CarouselModule, NgFor],
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.css'
})
export class ProjectModalComponent {
onImageError($event: ErrorEvent) {
throw new Error('Method not implemented.');
}
  project = {} as Project;


  constructor(public bsModlRef:BsModalRef){

  }
}
