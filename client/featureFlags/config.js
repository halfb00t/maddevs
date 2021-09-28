/**
 * config of feature flags
 * Available value of each field is array of environments
 * Available environments - [development, staging, production]
 */
export const config = {
  blogComments: ['development', 'staging'],
  newCustomerUniversitySection: ['development', 'staging'],
  customerUniversitySection: ['production'],
  clutchCase: ['development', 'staging'],
}
