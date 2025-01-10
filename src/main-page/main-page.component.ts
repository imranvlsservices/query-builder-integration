import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnInit } from '@angular/core';
import { ConditionBlock, Conditions, PaymentProcessorRules } from '../dto/rule-engin-dto';
import { getPaymentProcessorRules } from '../data/rule-engin-data';
import { CommonModule } from '@angular/common';
import { RuleComponentComponent } from '../components/rule-component/rule-component.component';
import { ThenComponentComponent } from '../components/then-component/then-component.component';
import { ActionComponent } from '../components/action/action.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  standalone: true,
  imports: [CommonModule, RuleComponentComponent, ActionComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add this schema
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  @Input() ifData!: ConditionBlock; // Input property


  constructor() {}

  ngOnInit(): void {

    console.log('in main component',this.ifData);
  }

}
