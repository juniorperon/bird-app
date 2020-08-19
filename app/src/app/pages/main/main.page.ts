//#region Imports

import { Component } from '@angular/core';
import { FooterState } from 'src/app/models/enums/footer-state';
import { FooterService } from 'src/app/service/footer/footer.service';

//#endregion

//a classe que representa a pagina inicial da aplicação

@Component({
  selector: 'bird-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage {

  //#region Constructor

  //Construtor padrao

  constructor(
    private readonly footerService: FooterService,
  ) { 
    this.footerService.getCurrentSelectedFooter$().subscribe(footerState => {
      this.currentSelectedFooter = footerState;
    })
  }

  //#endregion

  //#region Public Properties

 // O menu do Footer que está realmente selecionado

  public currentSelectedFooter: FooterState = FooterState.CATEGORIES;

  //os estados possiveis para o menu do footer

  public footerState: typeof FooterState = FooterState;

  //#endregion

}
