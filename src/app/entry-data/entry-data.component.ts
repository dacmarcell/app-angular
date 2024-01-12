import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-entry-data',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './entry-data.component.html',
  styleUrl: './entry-data.component.css',
})
export class EntryDataComponent {
  CustomerModel = {
    CustomerName: 'a',
    CustomerCode: 'a',
    CustomerAmount: '',
  };
  color: string = 'blue';
}
