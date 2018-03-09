import { IEquip } from './equip';

export interface ISite {
  site: string;
  equips?: IEquip[];
  preview?: string;
}
