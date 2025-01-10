import { Component, Input, OnInit } from '@angular/core';
import { Rule } from 'shout-angular-query-builder';
import { Conditions, NestedCondition } from '../../dto/rule-engin-dto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rule-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rule-component.component.html',
  styleUrl: './rule-component.component.scss',
})
export class RuleComponentComponent implements OnInit {
  @Input() condition!: Conditions; // Input property

  ngOnInit(): void {}

  // Type guard to check if a rule is of type Rule
  isRule(item: Rule | NestedCondition): item is Rule {
    return (item as Rule).field !== undefined;
  }

  // Type guard to check if a rule is of type NestedCondition
  isNestedCondition(item: Rule | NestedCondition): item is NestedCondition {
    return (item as NestedCondition).condition !== undefined;
  }

  getButtonClass(value: string): string {
    if (value.toLowerCase() === 'and' || value.toLowerCase() === 'or') {
      return 'andOr-button'; // Apply special style for "and" or "or"
    }
    return ''; // Default styling for other buttons
  }
}
