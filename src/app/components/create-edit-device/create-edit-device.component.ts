import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Navigation, Router } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { Device } from 'src/app/models/device.model';
import { CategoryService } from 'src/app/services/category.service';
import { DeviceService } from 'src/app/services/device.service';

@Component({
  selector: 'app-create-edit-device',
  templateUrl: './create-edit-device.component.html',
  styleUrls: ['./create-edit-device.component.scss']
})
export class CreateEditDeviceComponent implements OnInit {

  editing: boolean = false;
  categories: Category[];
  device: Device = {
    id: null,
    category: null,
    categoryId: null,
    color: null,
    partNumber: null
  }

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private categoryService: CategoryService,
    private deviceService: DeviceService
  ) {
    const nav: Navigation = this.router.getCurrentNavigation();
    if (nav && nav.extras && nav.extras.state && nav.extras.state.device) {
      this.device = nav.extras.state.device;
    }
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe(data => {
      this.editing = (data.kind === 'edit');
    });
    this.getCategories();
  }

  getCategories(): void {
    this.categoryService.getAll()
      .subscribe(
        data => {
          this.categories = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  saveDevice(): void {
    const body = {
      categoryId: this.device.category ? this.device.category.id : null,
      color: this.device.color ? this.device.color : null,
      partNumber: this.device.partNumber
    };
    if (this.editing) {
      this.deviceService.update(this.device.id, body)
        .subscribe(
          response => {
            console.log(response);
            this.router.navigate(['devices']);
          },
          error => {
            console.log(error);
          });

    } else {
      this.deviceService.create(body)
        .subscribe(
          response => {
            console.log(response);
            this.router.navigate(['devices']);
          },
          error => {
            console.log(error);
          });
    }
  }

  redirectToDevices() {
    this.router.navigate(['devices']);
  }
}
