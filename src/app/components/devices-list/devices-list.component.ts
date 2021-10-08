import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Device } from 'src/app/models/device.model';
import { CategoryService } from 'src/app/services/category.service';
import { DeviceService } from 'src/app/services/device.service';

@Component({
  selector: 'app-devices-list',
  templateUrl: './devices-list.component.html',
  styleUrls: ['./devices-list.component.scss']
})
export class DevicesListComponent implements OnInit {

  devices?: Device[];

  constructor(
    private categoryService: CategoryService,
    private deviceService: DeviceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getDevices();
  }

  getDevices(): void {
    this.deviceService.getAll()
      .subscribe(
        data => {
          this.devices = data;
          this.devices.forEach(device => {
            this.categoryService.get(device.categoryId).subscribe(response => {
              device.category = response;
            }, err => {
              console.log(err);
            });
          })
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.getDevices();
  }

  removeDevice(device: Device): void {
    this.deviceService.delete(device.id)
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  removeAllDevices(): void {
    this.deviceService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  addDevice() {
    this.router.navigate(['devices/add']);
  }
  
  editDevice(device: Device) {
    this.router.navigate(['devices/edit/' + device.id],  { state: { device: device } });
  }

}
