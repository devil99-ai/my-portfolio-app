import { Component, Input, NO_ERRORS_SCHEMA } from '@angular/core';
import { Project } from '../_modules/Project';
import { CommonModule} from '@angular/common';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal'
import { ProjectModalComponent } from '../project-modal/project-modal.component';
import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-project-card',
  imports: [CommonModule],
  schemas: [NO_ERRORS_SCHEMA],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  @Input() project = {} as Project;
  bsModalRef?: BsModalRef;

  constructor(private modalService:BsModalService,@Inject(PLATFORM_ID) private platformId: Object){

  }

  OpenProjectModal(){
const modalOptions: ModalOptions ={
  class: "modal-lg",
  initialState: {
    project: this.project
  }
};

    this.bsModalRef = this.modalService.show(ProjectModalComponent,modalOptions);
  }
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Code that accesses document or window
      const element = document.createElement('div');
      console.log(element);
    }
  }
  
}
