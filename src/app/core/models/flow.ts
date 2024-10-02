import {Step} from './step';
import {FlowStatus} from '../enums';

export interface Flow {
  id: string;
  name: string;
  description?: string;
  steps: Step[];
  status: FlowStatus;
}

export interface CreateFlow extends Omit<Flow, 'id'>{}
