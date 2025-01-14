import { RuleSet } from "shout-angular-query-builder";


    
export function extractRulesFromJson(json: any): RuleSet {
  const ruleSet: RuleSet = {
    condition: json.conditions?.condition || 'and', // Default to 'and' if condition is missing
    rules: [],
    then: undefined,
    else: undefined,
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
  if (json.then) {
    if (json.then.if && json.then.if.conditions) {
      // If 'then' contains nested conditions, extract them recursively
      ruleSet.then = extractRulesFromJson(json.then.if);
    } else if (json.then.action) {
      // If 'then' contains an 'action' array, initialize an empty RuleSet
      ruleSet.then = {
      } as any;
    }
  }

  // Handle 'else' condition
  if (json.else) {
    if (json.else.if && json.else.if.conditions) {
      // If 'else' contains nested conditions, extract them recursively
      ruleSet.else = extractRulesFromJson(json.else.if);
    } else if (json.else.action) {
      // If 'else' contains an 'action' array, initialize an empty RuleSet
      ruleSet.else = {} as any;
    }
  }

  return ruleSet;
}

