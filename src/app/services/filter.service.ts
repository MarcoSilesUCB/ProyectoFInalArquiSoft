import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  public spareFilter = {
    brand: '',
    model: ''


  };

  constructor() { }
}
