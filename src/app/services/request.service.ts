import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';
import { pluck } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class RequestService {

  urlApi: string;

  listAllCountries = []

  nameCountry 
  constructor(private http: HttpClient) {
    this.urlApi = "https://restcountries.eu/rest/v2/all?fields=name;capital;currencies;borders;flag;languages;nativeName;population;region;subregion;topLevelDomain;alpha3Code";

  }

  getData() {
    return this.http.get(this.urlApi);
  }

  getListAllCountries() {
    return this.listAllCountries;
  }

  setListAllCountries(list) {
    this.listAllCountries = list;
  }

  getNameCountry() {
    return this.nameCountry;
  }

  setNameCountry(name) {
    this.nameCountry = name;
  }
}
