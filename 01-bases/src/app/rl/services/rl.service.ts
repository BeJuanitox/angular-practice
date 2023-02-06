import { Injectable } from "@angular/core";
import { get } from "http";

import { Car } from "../interfaces/rl.interface";

@Injectable()
export class RlService {

  private _cars: Car[] = [
    {
      name: 'Octane',
      iq: 200
    },
    {
      name: 'Dominus',
      iq: 600
    }
  ];

  get cars(): Car[] {
    return [...this._cars];
  }

  constructor() {
    console.log('Initial service');
  }

}
