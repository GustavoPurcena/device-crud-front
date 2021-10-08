import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  category: Category = {
    name: ''
  };
  submitted = false;

  constructor(private CategoryService: CategoryService) { }

  ngOnInit(): void {
  }

  saveCategory(): void {
    const data = {
      title: this.category.name,
    };

    this.CategoryService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newCategory(): void {
    this.submitted = false;
    this.category = {
      name: '',
    };
  }
}
