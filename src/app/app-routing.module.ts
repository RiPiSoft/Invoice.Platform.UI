import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as areas  from './core/areas' 

const routes: Routes = 
[
  {
    path: "",
    component: areas.HomeComponent,
    children: []
  },
  {
    path: "invoice",
    component: areas.InvoiceComponent,
    children: []
  },
  {
    path: "estimate",
    component: areas.EstimateComponent,
    children: []
  },
  {
    path: "receipt",
    component: areas.ReceiptComponent,
    children: []
  },
  {
    path: "history",
    component: areas.HistoryComponent,
    children: []
  },
  {
    path: "reminder",
    component: areas.ReminderComponent,
    children: []
  },
  {
    path: "statistics",
    component: areas.StatisticsComponent,
    children: []
  },
  { 
    path: '**', 
    component: areas.PageNotFoundComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
