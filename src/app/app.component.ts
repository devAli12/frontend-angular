import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormationComponent } from './components/formation/formation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend-formation';
}
