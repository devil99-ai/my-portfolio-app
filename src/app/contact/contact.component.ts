import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  constructor(private titleService: Title){
    this.titleService.setTitle('Souvik Sharma - Portfolio');
  }
}
