import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-detail-country',
  templateUrl: './detail-country.component.html',
  styleUrls: ['./detail-country.component.scss']
})
export class DetailCountryComponent implements OnInit {

  public country;
  public listBord = [];
  public listAllCountries = [];

  constructor(private request: RequestService,
    private router: Router) {
    this.listAllCountries = this.request.getListAllCountries()
  }

  ngOnInit(): void {
    this.getData();

  }

  getData() {
    this.listBord = [];
    this.country = this.listAllCountries.find(c => c.name === this.request.getNameCountry());
    console.log(this.country);
    this.country.borders.forEach(element => {
      console.log(element);
      let aux = this.listAllCountries.filter(c => c.alpha3Code === element);
      this.listBord.push(aux[0].name);
    });
    console.log(this.listBord);
  }

  back() {
    this.router.navigate(['main']);
  }

  search(name) {
    this.request.setNameCountry(name);
    this.getData();
  }
}
