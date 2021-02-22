import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { forkJoin } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  categoriesList: Category[]=[];
  productList: Products[]=[];
  displayProductList: Products[]=[];
  constructor(
    private apiService: ApiService,
    private httpService: HttpService,
    private nav: NavController,
  ) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories(){

    forkJoin([
      this.httpService.get('categories'),
      this.httpService.get('products')
    ]).subscribe(([category,products]) => {
        this.categoriesList = category;
        this.productList= products;
        this.displayProductList = products;
      });
    
  }

  displayCategoryProduct(category: any){
    this.displayProductList = this.productList.filter( data => data.categoryId == category.detail.value.id);
  }
  productDetails(detailId: any){
    this.nav.navigateForward('detail',{ queryParams: {id: detailId}});
  }
}
interface Category {
  id: number;
  name: string;
}
interface Products {
  id: number,
  name: string,
  imageUrl:string,
  categoryId: number
}
