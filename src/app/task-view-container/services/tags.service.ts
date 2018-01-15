import { Injectable } from '@angular/core';

export interface ITag {
  value: string;
  label: string;
}

@Injectable()
export class TagsService {
  public tags: ITag [] =[];

  constructor() {

  }

}
