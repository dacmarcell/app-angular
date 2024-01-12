import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SomeComponentComponent } from './some-component/some-component.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SomeComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  value1: string = 'yash';
  ngOnInit(): void {
    console.log('Hello World ngOnInit');
  }

  handleInput(event: Event) {
    this.value1 = (event.target as HTMLInputElement).value;
  }
}
