import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  lista:any[] = [
    {nombre: 'friends', icon: 'people', ruta: 'no hay'},
    {nombre: 'profile', icon: 'people', ruta: 'no hay'}
  ]

  getMenu(){
    return this.lista
  }
}
