import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';

export const routes: Routes = [
    {path: '', redirectTo: 'Home' , pathMatch: 'full'},
    {path: 'Home', component: HomeComponent},
    {path: 'ViewEmployee/:emplyeeId',component: ViewEmployeeComponent},
    {path: 'AddEmployee', component: AddEmployeeComponent},
    {path: 'EditEmployee/:employeeId', component: EditEmployeeComponent}
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}