import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  constructor(
   private route: ActivatedRoute,
   private httpService: HttpService,
  ) { }
  productsDeatilsobj:any
  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      this.httpService.get('productDetails/'+params.get("id")).subscribe((productsDeatils) => { 
        this.productsDeatilsobj = productsDeatils;
      });
    });
  }

}
