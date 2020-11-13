
export class FilterStat {
  isCompleted: boolean;
  isHigh: boolean;
  isNormal: boolean;
  isLow: boolean;

  //tslint:disable
  constructor( isCompleted: boolean, isHigh: boolean, isNormal: boolean, isLow: boolean) {
    this.isCompleted = isCompleted;
    this.isHigh = isHigh;
    this.isNormal = isNormal;
    this.isLow = isLow;
  }
}
