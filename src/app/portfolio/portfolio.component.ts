import { Component, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectCardComponent } from "../project-card/project-card.component";
import { Project } from '../_modules/Project';
import { Tag } from '../_modules/Tag';
import { CommonModule } from '@angular/common';
import { ProjectsService } from '../_services/projects.service';
import { BsModalRef, BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { CarouselModule } from 'ngx-bootstrap/carousel';
@Component({
  selector: 'app-portfolio',
  imports: [ProjectCardComponent, CommonModule, ModalModule,CarouselModule],
  providers: [BsModalService],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],
})
export class PortfolioComponent implements OnInit{

  projects = {} as Project[];


  constructor(private titleService: Title, private projectService: ProjectsService){
    this.titleService.setTitle('Souvik Sharma - Portfolio');
  }
  ngOnInit(): void {
    this.projects=this.projectService.GetProjects();
  }

}
