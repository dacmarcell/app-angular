import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { EntryDataComponent } from './entry-data/entry-data.component';
import { UsingPipesComponent } from './using-pipes/using-pipes.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeroesComponent,
    EntryDataComponent,
    UsingPipesComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'app-angular';
  buttonPlaceholder: string = 'angulinho';
}
