import { PaymentProcessorRules } from "../dto/rule-engin-dto";

export function getPaymentProcessorRules(): PaymentProcessorRules {
    return {
      if: {
        conditions: {
          condition: "and",
          rules: [
            {
              field: "requestAmount",
              operator: ">=",
              value: "1",
            },
            {
              field: "requestAmount",
              operator: "<=",
              value: "50000",
            },
            {
              condition: "or",
              rules: [
                {
                  field: "requestCurrencyCode",
                  operator: "==",
                  value: "INR",
                },
                {
                  field: "requestCurrencyCode",
                  operator: "==",
                  value: "PHP",
                },
                {
                  field: "requestCurrencyCode",
                  operator: "==",
                  value: "USD",
                },
              ],
            },
          ],
        },
        then: {
          if: {
            conditions: {
              condition: "and",
              rules: [
                {
                  field: "requestCurrencyCode",
                  operator: "==",
                  value: "INR",
                },
              ],
            },
            then: {
              action: [
                {
                  orderNo: 1,
                  strategyCode: "selected",
                  paymentProcessors: [
                    {
                      paymentProcessorId: "paymentProcessor1",
                    },
                  ],
                },
                {
                  orderNo: 2,
                  strategyCode: "successRateDaily",
                },
              ],
            },
            else: {
              if: {
                conditions: {
                  condition: "and",
                  rules: [
                    {
                      field: "requestCurrencyCode",
                      operator: "==",
                      value: "PHP",
                    },
                  ],
                },
                then: {
                  action: [
                    {
                      orderNo: 1,
                      strategyCode: "priority",
                      paymentProcessors: [
                        {
                          priorityNo: 1,
                          paymentProcessorId: "paymentProcessor3",
                        },
                        {
                          priorityNo: 2,
                          paymentProcessorId: "paymentProcessor4",
                        },
                      ],
                    },
                    {
                      orderNo: 2,
                      strategyCode: "successRateDaily",
                    },
                  ],
                },
                else: {
                  if: {
                    conditions: {
                      condition: "and",
                      rules: [
                        {
                          field: "metadata",
                          metadataField: "vip_player",
                          operator: "==",
                          value: "true",
                        },
                      ],
                    },
                    then: {
                      action: [
                        {
                          orderNo: 1,
                          strategyCode: "weightTransactionCount",
                          paymentProcessors: [
                            {
                              weightPercentage: 25,
                              paymentProcessorId: "paymentProcessor5",
                            },
                            {
                              weightPercentage: 25,
                              paymentProcessorId: "paymentProcessor6",
                            },
                            {
                              weightPercentage: 50,
                              paymentProcessorId: "paymentProcessor7",
                            },
                          ],
                        },
                        {
                          orderNo: 2,
                          strategyCode: "successRateDaily",
                        },
                      ],
                    },
                    else: {
                      action: [
                        {
                          orderNo: 1,
                          strategyCode: "selected",
                          paymentProcessors: [
                            {
                              paymentProcessorId: "paymentProcessor8",
                            },
                          ],
                        },
                        {
                          orderNo: 2,
                          strategyCode: "successRateDaily",
                        },
                      ],
                    },
                  },
                },
              },
            },
          },
        },
        else: {
          action: [
            {
              orderNo: 1,
              strategyCode: "priority",
              paymentProcessors: [
                {
                  priorityNo: 1,
                  paymentProcessorId: "paymentProcessor9",
                },
                {
                  priorityNo: 2,
                  paymentProcessorId: "paymentProcessor10",
                },
                {
                  priorityNo: 3,
                  paymentProcessorId: "paymentProcessor11",
                },
              ],
            },
            {
              orderNo: 2,
              strategyCode: "lowestFee",
            },
            {
              orderNo: 3,
              strategyCode: "successRateDaily",
            },
          ],
        },
      },
    };
  }
  