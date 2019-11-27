import { RuleContract } from './rule.contract'

export interface ConditionContract {
  // type = 'and' | 'or' | 'date' | 'day' | 'month' | 'year'
  [type: string]: RuleContract[]
}
