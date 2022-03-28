import { Component } from '@angular/core';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projekatProba';
  ngOnInit(){
   
  }
  generatePdf(){
    const documentDefinition = { content: 'This is an sample PDF printed with pdfMake NEMANJA' };
    pdfMake.createPdf(documentDefinition).open();
   }
   testFunction(){
    this. generatePdf()
   }
}


