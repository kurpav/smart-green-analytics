import { Action } from '@ngrx/store';
import { ISite } from '../../shared/models/site';

export enum SitesActionTypes {
  LoadAction = '[Sites] Load Action',
  LoadSuccessAction = '[Sites] Load Success Action',
  SelectSiteAction = '[Sites] Select Site Action',
  SelectEquipmentAction = '[Sites] Select Equipment Action'
}

export class Load implements Action {
  readonly type = SitesActionTypes.LoadAction;
}

export class LoadSuccess implements Action {
  readonly type = SitesActionTypes.LoadSuccessAction;
  constructor(public payload: ISite[] = []) { }
}

export class SelectSite implements Action {
  readonly type = SitesActionTypes.SelectSiteAction;
  constructor(public payload: string = null) { }
}

export class SelectEquipment implements Action {
  readonly type = SitesActionTypes.SelectEquipmentAction;
  constructor(public payload: string = null) { }
}

export type SitesActions =
  Load |
  LoadSuccess |
  SelectSite |
  SelectEquipment;
