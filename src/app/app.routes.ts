import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'add-flow',
    loadComponent: () => import('./core/components/add-flow/add-flow.component').then(c => c.AddFlowComponent),
  },
  {
    path: 'flows',
    loadComponent: () => import('./core/components/flows/flows.component').then(c => c.FlowsComponent),
  }
];
