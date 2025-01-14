import { RuleSet } from "shout-angular-query-builder";


    
export function extractRulesFromJson(json: any): RuleSet {
    const ruleSet: RuleSet = {
      condition: json.conditions?.condition || 'and', // Default to 'and' if condition is missing
      rules: [],
    };
  
    // Iterate through the rules in the JSON
    json.conditions?.rules.forEach((rule: any) => {
      if (rule.field) {
        // Add individual rule
        ruleSet.rules.push({
          field: rule.field,
          operator: rule.operator,
          value: rule.value,
        });
      } else if (rule.condition) {
        // Add nested RuleSet
        ruleSet.rules.push(extractRulesFromJson({ conditions: rule }));
      }
    });
  
    // Handle 'then' condition
    if (json.then && json.then.if && json.then.if.conditions) {
      ruleSet.then = extractRulesFromJson(json.then.if);
    }
  
    if (json.else && json.else.if && json.else.if.conditions) {
        ruleSet.else = extractRulesFromJson(json.else.if);
      }
  
    return ruleSet;
  }
