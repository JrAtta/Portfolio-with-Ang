import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
//    text :string = "Hi! I'm Ibrahim, a Angular.js Developer based in Cairo.";
//    @ViewChild('textDiv') textDiv! : ElementRef;

//    ngOnInit(): void {
//      this.typeAnimation();
//      setTimeout(() => this.typeAnimation(), 1000);

//    }
//  index:number=0;
//  typeAnimation(){
//     if(this.index < this.text.length){
//         this.textDiv.nativeElement.innerHTML += this.text.charAt(this.index);
//         this.index++;
//         setTimeout(this.typeAnimation,100);
//     }

//     setTimeout(() => this.typeAnimation(), 100);
//   }
text: string = "Hi! I'm Ibrahim, an Angular.js Developer based in Cairo.";
  index: number = 0;

  // Access the h6 element with the class 'desc'
  @ViewChild('descDiv') textDiv!: ElementRef;

  ngOnInit(): void {
    // Start the typewriter effect after 1 second
    setTimeout(() => this.typeAnimation(), 1000);
  }

  typeAnimation() {
    if (this.index < this.text.length) {
      this.textDiv.nativeElement.innerHTML += this.text.charAt(this.index);
      this.index++;
      setTimeout(() => this.typeAnimation(), 100);
    }
  }

}
