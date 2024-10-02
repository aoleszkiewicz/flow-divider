import { Injectable } from '@angular/core';
import {CreateFlow, Flow} from '../models';
import {createUUID} from '../utils';
import {FlowStatus} from '../enums';

@Injectable({
  providedIn: 'root'
})
export class FlowsService {
  private flows: Flow[] = [];

  findOne(id: string) {
    return this.flows.find(f => f.id === id);
  }

  findAll() {
    return this.flows;
  }

  add(flow: CreateFlow) {
    const id = createUUID();
    this.flows.push({id, ...flow});
  }

  updateStatus(id: string, status: FlowStatus) {
    this.flows.map(f => f.id === id ? {...f, status} : f);
  }

  delete(id: string) {
    const foundFlow = this.findOne(id);
    if (foundFlow) {
      const index = this.flows.indexOf(foundFlow);
      this.flows.splice(index, 1);
    }
  }
}
