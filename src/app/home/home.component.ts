import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from '../_services/projects.service';
import { Project } from '../_modules/Project';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NgFor } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CarouselModule, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  featuredProject = {} as Project;

  constructor(private titleService: Title, private projectService: ProjectsService){
    this.titleService.setTitle('Souvik Sharma - Home');
    
  }
  ngOnInit(): void {
    this.featuredProject = this.projectService.GetProjectById(0);
  }

}
