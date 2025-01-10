import { Component, Input } from '@angular/core';
import { Action } from '../../dto/rule-engin-dto';
import { CommonModule } from '@angular/common';
import { PaymentProcessComponent } from '../payment-process/payment-process.component';

@Component({
  selector: 'app-action',
  imports: [CommonModule, PaymentProcessComponent],
  templateUrl: './action.component.html',
  styleUrl: './action.component.scss'
})
export class ActionComponent {
  @Input() actionData!: Action[]; // Input property

}
