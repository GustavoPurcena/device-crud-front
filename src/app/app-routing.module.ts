import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { CategoriessListComponent } from './components/categories-list/categories-list.component';
import { CreateEditDeviceComponent } from './components/create-edit-device/create-edit-device.component';
import { DevicesListComponent } from './components/devices-list/devices-list.component';


const routes: Routes = [

  { path: '', redirectTo: 'categories', pathMatch: 'full' },
  {
    path: 'categories', component: CategoriessListComponent, children: [
      { path: 'add', component: AddCategoryComponent },
    ]
  },
  {
    path: 'devices', component: DevicesListComponent, children: [
      { path: 'add', component: CreateEditDeviceComponent, data: { kind: 'create' } },
      { path: 'edit/:id', component: CreateEditDeviceComponent, data: { kind: 'edit' } }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
