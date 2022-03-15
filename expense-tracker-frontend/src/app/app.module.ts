import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import { ListExpenseComponent } from './components/list-expense/list-expense.component';
import { AddExpenseComponent } from './components/add-expense/add-expense.component';

const routers: Routes = [
  {path: 'expenses', component : ListExpenseComponent},
  {path: 'addexpense', component : AddExpenseComponent},
  {path: 'editexpense/:id', component : AddExpenseComponent},
  {path: '', redirectTo: '/expenses', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    ListExpenseComponent,
    AddExpenseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
