//#region imports

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FooterState } from 'src/app/models/enums/footer-state';

//#endregion 

// a classe que representa o serviço que lida com os estilos e estados do footer do aplicativo 

@Injectable({
  providedIn: 'root'
})
export class FooterService {

  //#region Constructor

  //Constructor padrao

  constructor(
    private readonly router: Router,
  ) { 
    this.router.events.subscribe( next: () => {
      const currentUrl = this.router.url;

      if(currentUrl.startsWith('/main/categories'))
        return void this.selectedFooterSubject.next(FooterState.CATEGORIES);

      if(currentUrl.startsWith('/main/my-comments'))
        return void this.selectedFooterSubject.next(FooterState.MY_COMMENTS);

      if(currentUrl.startsWith('/main/all-comments'))
        return void this.selectedFooterSubject.next(FooterState.ALL_COMMENTS);

    });
  }

  //#endregion

  //#region Private Properties

  // Evento lancado para dizer qual menu do footer realmente esta selecionado

  private readonly selectedFooterSubject: BehaviorSubject <FooterState> = new BehaviorSubject<FooterState>(FooterState.CATEGORIES);

  //#endregion

  //#region Public Methods

  // metodo que retorna a referencia do observable do evento que diz qual e o menu atualmente selecionado

  public getCurrentSelectedFooter$(): Observable<FooterState> {
    return this.selectedFooterSubject.asObservable();
  }

  //#endregion
}
