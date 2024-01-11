import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
})
export class HeroesComponent {
  buttonText: string = 'Acessar';
  buttonNumber: number = 10;
  buttonArray: string[] = ['Comprar', 'Vender'];
  buttonObject = {
    label: 'Comprar',
  };
  @Input() placeholder: string = '';

  getAlert(input: string) {
    alert(input);
  }
}
