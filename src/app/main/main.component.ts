import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { NbThemeService } from '@nebular/theme';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public selectRegion = new FormControl();
  public listCountries = [];
  public listAllCountries = [];
  public listRegion = [];
  public filterInput = '';
  constructor(private themeService: NbThemeService,
    private request: RequestService,
    private router: Router) {
    this.themeService.onThemeChange()
      .subscribe((theme: any) => {
        console.log(`Theme changed to ${theme.name}`);
      });
  }
  ngOnInit(): void {
    this.request.getData().subscribe((res: any) => {
      this.listCountries = res;
      // console.log(res);
      this.filterData()
    })
  }

  filterData() {
    for (let i = 0; i < this.listCountries.length; i++) {
      this.listCountries[i].currencies = this.getName(this.listCountries[i].currencies);
      this.listCountries[i].languages = this.getName(this.listCountries[i].languages);
      this.listCountries[i].topLevelDomain = this.listCountries[i].topLevelDomain.toString();
      if (this.listRegion.includes(this.listCountries[i].region)) {
      } else {
        this.listRegion.push(this.listCountries[i].region)
      }
      this.listAllCountries.push(this.listCountries[i]);
    }
    this.request.setListAllCountries(this.listAllCountries);
  }

  getName(list: Array<any>) {
    let names = '';
    list.forEach(element => {
      names = names.concat(element.name, ',');
    });
    return names;
  }

  filterByRegion() {
    this.listCountries = [];
    this.listAllCountries.forEach(element => {
      if (this.selectRegion.value === element.region) {
        this.listCountries.push(element);
      }
    });
  }

  selectCountry(country) {
    this.request.setNameCountry(country.name);

    this.router.navigate(['detail']);
  }
}
