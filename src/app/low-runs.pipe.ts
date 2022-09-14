import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lowRuns'
})
export class LowRunsPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return value < 10 ? "low runs": value;
  }

}
