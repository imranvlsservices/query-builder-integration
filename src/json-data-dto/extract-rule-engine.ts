import { RuleSet } from "shout-angular-query-builder";


    
export function extractRulesFromJson(json: any): RuleSet {
  const ruleSet: RuleSet = {
    condition: json.conditions?.condition || 'and', // Default to 'and' if condition is missing
    rules: [],
    actions: undefined, // Initialize actions as undefined
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

  // Handle actions in the current RuleSet
  if (json.action) {
    ruleSet.actions = json.action.map((action: any) => ({
      orderNo: action.orderNo,
      strategyCode: action.strategyCode,
      paymentProcessors: action.paymentProcessors?.map((processor: any) => ({
        paymentProcessorId: processor.paymentProcessorId,
        priorityNo: processor.priorityNo,
        weightPercentage: processor.weightPercentage,
      })),
    }));
  }

  // Handle 'then' condition
  if (json.then) {
    if (json.then.if && json.then.if.conditions) {
      ruleSet.then = extractRulesFromJson(json.then.if);
    } else if (json.then.action) {
      ruleSet.then = {
        condition: 'and',
        rules: [],
        actions: json.then.action.map((action: any) => ({
          orderNo: action.orderNo,
          strategyCode: action.strategyCode,
          paymentProcessors: action.paymentProcessors?.map((processor: any) => ({
            paymentProcessorId: processor.paymentProcessorId,
            priorityNo: processor.priorityNo,
            weightPercentage: processor.weightPercentage,
          })),
        })),
        then: undefined,
        else: undefined,
      };
    }
  }

  // Handle 'else' condition
  if (json.else) {
    if (json.else.if && json.else.if.conditions) {
      ruleSet.else = extractRulesFromJson(json.else.if);
    } else if (json.else.action) {
      ruleSet.else = {
        condition: 'and',
        rules: [],
        actions: json.else.action.map((action: any) => ({
          orderNo: action.orderNo,
          strategyCode: action.strategyCode,
          paymentProcessors: action.paymentProcessors?.map((processor: any) => ({
            paymentProcessorId: processor.paymentProcessorId,
            priorityNo: processor.priorityNo,
            weightPercentage: processor.weightPercentage,
          })),
        })),
        then: undefined,
        else: undefined,
      };
    }
  }

  return ruleSet;
}


