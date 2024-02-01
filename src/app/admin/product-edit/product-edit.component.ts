import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import {inject} from '@angular/core';

@Component({
  selector: 'app-product-edit',
  standalone: true,
  imports: [ReactiveFormsModule,  CommonModule, FormsModule, ReactiveFormsModule,
            HttpClientModule, RouterModule],
  providers: [ProductService, Router],
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.css'
})
export class ProductEditComponent {
  id: number = 0;
  
  router = inject(Router);

  constructor(private productService: ProductService, private route: ActivatedRoute) {}

  productFormEdit: FormGroup = new FormGroup({
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    image: new FormControl(),
    category_name: new FormControl()
  })

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.route.snapshot.params['id']);
    this.productService.getOne(this.id).subscribe(data => {
      this.productFormEdit = new FormGroup({
        name: new FormControl(data.name),
        price: new FormControl(data.price),
        description: new FormControl(data.description),
        image: new FormControl(data.image),
        category_name: new FormControl(data.category_name)
      })
    })
  }

  onUpdate(){
    this.productService.update(this.id, this.productFormEdit.value).subscribe(data => {
      console.log(data);
      this.router.navigate(['/product']);
    });
  }


}
