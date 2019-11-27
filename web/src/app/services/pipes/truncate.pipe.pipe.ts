import { Pipe, PipeTransform } from '@angular/core'

import { isNullOrUndefined } from '../../services/core'

/**
 * USAGE:
 * value | truncate: numberOfWords: hasDots
 *
 * EXAMPLE:
 * ipsul lorel kepto | truncate: 2 : true
 */
@Pipe({
  name: 'truncate'
  })
export class TruncatePipe implements PipeTransform {
  transform (value: string, numberOfWords: number = 1, hasDots: boolean = false): any {
    if (!value || isNullOrUndefined(value)) {
      return value
    }
    let values = value.split(' ')
    let newValue = values.filter((v, i) => i < numberOfWords).map(value => value.trim()).join(' ')
    return (hasDots) ? newValue + ((values.length > numberOfWords) ? '...' : '' ) : newValue
  }
}
