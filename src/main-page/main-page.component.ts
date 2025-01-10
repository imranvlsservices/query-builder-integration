import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { PaymentProcessorRules } from '../dto/rule-engin-dto';
import { getPaymentProcessorRules } from '../data/rule-engin-data';
import { CommonModule } from '@angular/common';
import { RuleComponentComponent } from '../components/rule-component/rule-component.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  standalone: true,
  imports: [CommonModule, RuleComponentComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add this schema
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  ruleEngineJson!: PaymentProcessorRules;

  constructor() {}

  ngOnInit(): void {
    // Fetch the rule engine JSON using the reusable function
    this.ruleEngineJson = getPaymentProcessorRules();
    console.log(this.ruleEngineJson);
  }

  /**
   * Recursively generates a tree from JSON data.
   * @param json The JSON object to convert to tree structure
   * @returns An array of tree nodes
   */
   generateTree(json: any): any[] {
    const tree: any[] = [];
    for (const key in json) {
      if (json.hasOwnProperty(key)) {
        if (typeof json[key] === 'object' && json[key] !== null) {
          tree.push({ label: key, children: this.generateTree(json[key]) });
        } else {
          tree.push({ label: `${key}: ${json[key]}` });
        }
      }
    }
    return tree;
  }
}
