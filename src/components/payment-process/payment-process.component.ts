import { Component, Input } from '@angular/core';
import { PaymentProcessor } from '../../dto/rule-engin-dto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-payment-process',
  imports: [CommonModule],
  templateUrl: './payment-process.component.html',
  styleUrl: './payment-process.component.scss'
})
export class PaymentProcessComponent {
  @Input() paymentProcess!: PaymentProcessor[]; // Input property
}
