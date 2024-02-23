import { Component } from '@angular/core';
import { MainLayoutComponent } from './core/components/main-layout/main-layout.component';
import { RouterOutlet } from '@angular/router';


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
