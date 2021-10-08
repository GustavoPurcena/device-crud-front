import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(
    private CategoryService: CategoryService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  saveCategory(): void {
    const data = {
      name: this.category.name,
    };

    this.CategoryService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['categories']);
        },
        error => {
          console.log(error);
        });
  }

  redirectToCategories() {
    this.router.navigate(['categories']);
  }
}
