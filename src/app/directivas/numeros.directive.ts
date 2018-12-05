import { Directive, ElementRef, Input, Renderer2, HostListener, Output, EventEmitter } from '@angular/core';


@Directive({
  selector: '[Numeros]'
})
export class NumerosDirective {


  constructor(public elemento: ElementRef, public render: Renderer2) {
    console.log("antes de null")



  }

  @Input() Numeros: string;
  @Output() Notnumber = new EventEmitter



  @HostListener('keyup') onkeyup() {
    //this.render.setProperty(this.elemento.nativeElement,'value','Cute alligator');
    /*this.render.setProperty(this.elemento.nativeElement,'value',this.Numeros.replace(/\D/g, "")
    .replace(/([0-9])([0-9]{3})$/, '$1.$2')
    .replace(/\B(?=(\d{3})+(?!\d)\.?)/g, ","));*/
    this.ngOnInit();
  }


  ngOnInit() {

    if (this.Numeros == "") {
      return null
    } else {
      //|| /^./.test(this.Numeros)

      if ( /^([0-9-.,])*$/.test(this.Numeros) ) {

        this.Notnumber.emit(false);

        this.render.setProperty(this.elemento.nativeElement, 'value', this.Numeros.replace(/\D/g, "")
          .replace(/([0-9])([0-9]{3})$/, '$1.$2')
          .replace(/\B(?=(\d{3})+(?!\d)\.?)/g, ","));


      } else {

        this.Notnumber.emit(true);



      }


      console.log(this.Numeros.replace(/\D/g, "")
        .replace(/([0-9])([0-9]{3})$/, '$1.$2')
        .replace(/\B(?=(\d{3})+(?!\d)\.?)/g, ","));

    }

  }


}




