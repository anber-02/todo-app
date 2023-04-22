import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  lista: any[] =[]
  constructor(private menuService: MenuService) {
    this.lista = this.menuService.getMenu()
   }
  ngOnInit() {}

}
