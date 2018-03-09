import { Action } from '@ngrx/store';

export enum SitesActionTypes {
  SitesAction = '[Sites] Action'
}

export class Sites implements Action {
  readonly type = SitesActionTypes.SitesAction;
}

export type SitesActions = Sites;
