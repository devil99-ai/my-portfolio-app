import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { NavComponent } from "./nav/nav.component";




@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent, NavComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularPortfolioWebsite';
  
}
