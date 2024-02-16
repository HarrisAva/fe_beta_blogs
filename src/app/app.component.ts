import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainLayoutComponent } from './core/components/main-layout/main-layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [RouterOutlet],
  imports: [MainLayoutComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'fe_beta_blogs';
}
