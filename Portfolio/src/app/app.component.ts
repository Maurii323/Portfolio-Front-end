import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portfolio';
}

document.addEventListener("DOMContentLoaded", function(){
  iniciarApp();
})

function iniciarApp() {
  navegacionFija();
}

function navegacionFija():void{                                                        // reconoce cuando el usuario se paso del header con el scroll, y pone la navegacion fija cuando eso pase
  const barra:any = document.querySelector(".barra");
  const sobreMi:any = document.querySelector("#fijar");
  const body:any = document.querySelector("body");

  window.addEventListener("scroll", function(){
      // sobreMi.getBoundingClientRect()
      if(sobreMi.getBoundingClientRect().top < 0){
          barra.classList.add("fijo")
          body.classList.add("body-scroll");
      }else{
       barra.classList.remove("fijo")
       body.classList.remove("body-scroll");
      }
  });
}






