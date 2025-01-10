import { Component, Input, OnInit } from '@angular/core';
import { Rule } from 'shout-angular-query-builder';
import { Conditions, NestedCondition } from '../../dto/rule-engin-dto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rule-component',
  imports: [CommonModule],
  templateUrl: './rule-component.component.html',
  styleUrl: './rule-component.component.scss'
})
export class RuleComponentComponent implements OnInit {
  @Input() condition!: Conditions; // Input property

  ngOnInit(): void {
    console.log('In Rule component data',this.condition);
  
  }

    // Type guard to check if a rule is of type Rule
    isRule(item: Rule | NestedCondition): item is Rule {
      return (item as Rule).field !== undefined;
    }
  
    // Type guard to check if a rule is of type NestedCondition
    isNestedCondition(item: Rule | NestedCondition): item is NestedCondition {
      return (item as NestedCondition).condition !== undefined;
    }

}
