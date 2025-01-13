export interface PaymentProcessorRules {
    if: ConditionBlock;
  }
  
  export interface ConditionBlock {
    conditions: Conditions;
    then?: ThenElseBlock;
    else?: ThenElseBlock;
  }
  
  export interface Conditions {
    condition: string;
    rules: (Rule | NestedCondition)[];
  }
  
  export interface Rule {
    field: string;
    operator: string;
    value: string;
    metadataField?: string;
  }
  
  export interface NestedCondition {
    condition: string;
    rules: Rule[];
  }
  
  export interface ThenElseBlock {
    if?: ConditionBlock;
    then?: ThenElseBlock;
    else?: ThenElseBlock;
    action?: Action[];
  }
  
  export interface Action {
    orderNo: number;
    strategyCode: string;
    paymentProcessors?: PaymentProcessor[];
  }
  
  export interface PaymentProcessor {
    paymentProcessorId?: string;
    priorityNo?: number;
    weightPercentage?: number;
  }
