import { ITimeserie } from './timeserie';

export interface IEquip {
  equip_name: string;
  time: string;
  S3avg: number;
  S4avg: number;
  TempAvg: number;
  timeseries?: ITimeserie[];
}

export interface ISerie {
  label: string;
  data: number[];
}
