import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-some-component',
  standalone: true,
  imports: [],
  templateUrl: './some-component.component.html',
  styleUrl: './some-component.component.css',
})
export class SomeComponentComponent {
  @Input() nome: string = '';
}
