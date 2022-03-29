import { Component } from '@angular/core';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  aaa = 'STA';
  title = 'projekatProba';
  header = [
    { text: 'Datum', style: 'tableHeader' },
    { text: 'B', style: 'tableHeader' },
  ];
  value = [
    { text: 'Asda', style: 'tableHeader' },
    { text: 'Bsa', style: 'tableHeader' },
  ];
  tableBody = [
    [
      {
        text: 'Datum',
        style: 'tableHeader',
        alignment: 'center',
        margin: [0, 25, 0, 20],
      },
      {
        text: 'Mjesto tankovanja',
        style: 'tableHeader',
        alignment: 'center',
        margin: [0, 25, 0, 20],
      },
      {
        text: 'Stanje brojila km',
        style: 'tableHeader',
        alignment: 'center',
        margin: [0, 25, 0, 20],
      },
      {
        text: 'Plinsko ulje',
        style: 'tableHeader',
        alignment: 'center',
        margin: [0, 25, 0, 20],
      },
      {
        text: 'Benzin',
        style: 'tableHeader',
        alignment: 'center',
        margin: [0, 25, 0, 20],
      },
      {
        text: 'Motorno ulje',
        style: 'tableHeader',
        alignment: 'center',
        margin: [0, 25, 0, 20],
      },
      {
        text: 'Ostala maziva',
        style: 'tableHeader',
        alignment: 'center',
        margin: [0, 25, 0, 20],
      },
      {
        text: 'Broj racuna',
        style: 'tableHeader',
        alignment: 'center',
        margin: [0, 25, 0, 20],
      },
      {
        text: 'Pumpna stanica (potpis i pecat)',
        style: 'tableHeader',
        alignment: 'center',
        margin: [0, 25, 0, 20],
      },
    ],
    [
      { text: 'Datum', style: 'tableHeader' },
      { text: 'mesto tankovanja', style: 'tableHeader' },
      { text: 'mesto tankovanja', style: 'tableHeader' },
      { text: 'mesto tankovanja', style: 'tableHeader' },
      { text: 'mesto tankovanja', style: 'tableHeader' },
      { text: 'mesto tankovanja', style: 'tableHeader' },
      { text: 'mesto tankovanja', style: 'tableHeader' },
      { text: 'mesto tankovanja', style: 'tableHeader' },
      { text: 'mesto tankovanja', style: 'tableHeader' },
    ],
    [
      {
        text: '',
        style: 'tableHeader',
        alignment: 'center',
        margin: [0, 25, 0, 20],
      },
      { text: '', style: 'tableHeader' },
      { text: '', style: 'tableHeader' },
      { text: '', style: 'tableHeader' },
      { text: '', style: 'tableHeader' },
      { text: '', style: 'tableHeader' },
      { text: '', style: 'tableHeader' },
      { text: '', style: 'tableHeader' },
      { text: '', style: 'tableHeader' },
    ],
    [
      {
        text: '',
        style: 'tableHeader',
        alignment: 'center',
        margin: [0, 25, 0, 20],
      },
      { text: '', style: 'tableHeader' },
      { text: '', style: 'tableHeader' },
      { text: '', style: 'tableHeader' },
      { text: '', style: 'tableHeader' },
      { text: '', style: 'tableHeader' },
      { text: '', style: 'tableHeader' },
      { text: '', style: 'tableHeader' },
      { text: '', style: 'tableHeader' },
    ],
  ];
  dodavanjePodataka() {
    for (let i = 0; i < this.tableBody.length; i++) {
      for (let j = 0; j < this.tableBody[i].length; j++) {
        if (this.tableBody[i][j].text === '') {
          this.tableBody[i][j].text = 'AAAAA';
        }
      }
    }
  }
  ngOnInit() {}
  generatePdf() {
    const documentDefinition = {
      pageOrientation: 'landscape',
      pageSize: 'A4',
      margin: [0, 0, 0, 0],
      content: [
        {
          
          columns: [
            [
              { text: 'EVIDENCIJA UTROŠKA GORIVA I MAZIVA', fontSize: 10 , margin:[100,0,0,10]},
              {
                table: {
                 
                  widths: [
                    '7%',
                    '15%',
                    '15%',
                    '10%',
                    '8%',
                    '10%',
                    '10%',
                    '10%',
                    '18%',
                  ],

                  body: [
                    
                    [
                      {
                        text: 'Datum',
                        fontSize: 7,
                        alignment: 'center',
                        margin: [0, 18, 0, 15],
                      },
                      {
                        text: 'Mjesto tankovanja',
                        fontSize: 7,
                        alignment: 'center',
                        margin: [0, 15, 0, 15],
                      },
                      {
                        text: 'Stanje brojila km',
                        fontSize: 7,
                        alignment: 'center',
                        margin: [0, 15, 0, 15],
                      },
                      {
                        text: 'Plinsko ulje',
                        fontSize: 7,
                        alignment: 'center',
                        margin: [0, 15, 0, 15],
                      },
                      {
                        text: 'Benzin',
                        fontSize: 7,
                        alignment: 'center',
                        margin: [0, 18, 0, 15],
                      },
                      {
                        text: 'Motorno ulje',
                        fontSize: 7,
                        alignment: 'center',
                        margin: [0, 15, 0, 15],
                      },
                      {
                        text: 'Ostala maziva',
                        fontSize: 7,
                        alignment: 'center',
                        margin: [0, 15, 0, 15],
                      },
                      {
                        text: 'Broj računa',
                        fontSize: 7,
                        alignment: 'center',
                        margin: [0, 15, 0, 15],
                      },
                      {
                        text: 'Pumpna stanica (Potpis i pečat)',
                        fontSize: 7,
                        alignment: 'center',
                        margin: [0, 15, 0, 15],
                      },
                    ],
                    [
                      {
                        text: this.aaa,
                        alignment: 'center',
                        fontSize: 7,
                        margin: [0, 10, 0, 10],
                      },
                      { text: '', alignment: 'center' },
                      { text: '', alignment: 'center' },
                      { text: '', alignment: 'center' },
                      { text: '', alignment: 'center' },
                      { text: '', alignment: 'center' },
                      { text: '', alignment: 'center' },
                      { text: '', alignment: 'center' },
                      { text: '', alignment: 'center' },
                    ],
                    [
                      {
                        text: this.aaa,
                        alignment: 'center',
                        fontSize: 7,
                        margin: [0, 10, 0, 10],
                      },
                      { text: '', alignment: 'center' },
                      { text: '', alignment: 'center' },
                      { text: '', alignment: 'center' },
                      { text: '', alignment: 'center' },
                      { text: '', alignment: 'center' },
                      { text: '', alignment: 'center' },
                      { text: '', alignment: 'center' },
                      { text: '', alignment: 'center' },
                    ],
                    [
                      {
                        text: this.aaa,
                        alignment: 'center',
                        fontSize: 7,
                        margin: [0, 10, 0, 10],
                      },
                      { text: '', alignment: 'center' },
                      { text: '', alignment: 'center' },
                      { text: '', alignment: 'center' },
                      { text: '', alignment: 'center' },
                      { text: '', alignment: 'center' },
                      { text: '', alignment: 'center' },
                      { text: '', alignment: 'center' },
                      { text: '', alignment: 'center' },
                    ],
                    [
                      {
                        text: this.aaa,
                        alignment: 'center',
                        fontSize: 7,
                        margin: [0, 10, 0, 10],
                      },
                      { text: '', alignment: 'center' },
                      { text: '', alignment: 'center' },
                      { text: '', alignment: 'center' },
                      { text: '', alignment: 'center' },
                      { text: '', alignment: 'center' },
                      { text: '', alignment: 'center' },
                      { text: '', alignment: 'center' },
                      { text: '', alignment: 'center' },
                    ],
                    [
                      {
                        text: this.aaa,
                        alignment: 'center',
                        fontSize: 7,
                        margin: [0, 10, 0, 10],
                      },
                      { text: '', alignment: 'center' },
                      { text: '', alignment: 'center' },
                      { text: '', alignment: 'center' },
                      { text: '', alignment: 'center' },
                      { text: '', alignment: 'center' },
                      { text: '', alignment: 'center' },
                      { text: '', alignment: 'center' },
                      { text: '', alignment: 'center' },
                    ],
                    [
                      {
                        text: this.aaa,
                        alignment: 'center',
                        fontSize: 7,
                        margin: [0, 10, 0, 10],
                      },
                      { text: '', alignment: 'center' },
                      { text: '', alignment: 'center' },
                      { text: '', alignment: 'center' },
                      { text: '', alignment: 'center' },
                      { text: '', alignment: 'center' },
                      { text: '', alignment: 'center' },
                      { text: '', alignment: 'center' },
                      { text: '', alignment: 'center' },
                    ],
                    [
                      {
                        text: this.aaa,
                        alignment: 'center',
                        fontSize: 7,
                        margin: [0, 10, 0, 10],
                      },
                      { text: '', alignment: 'center' },
                      { text: '', alignment: 'center' },
                      { text: '', alignment: 'center' },
                      { text: '', alignment: 'center' },
                      { text: '', alignment: 'center' },
                      { text: '', alignment: 'center' },
                      { text: '', alignment: 'center' },
                      { text: '', alignment: 'center' },
                    ],
                    [
                      {
                        text: this.aaa,
                        alignment: 'center',
                        fontSize: 7,
                        margin: [0, 10, 0, 10],
                      },
                      { text: '', alignment: 'center' },
                      { text: '', alignment: 'center' },
                      { text: '', alignment: 'center' },
                      { text: '', alignment: 'center' },
                      { text: '', alignment: 'center' },
                      { text: '', alignment: 'center' },
                      { text: '', alignment: 'center' },
                      { text: '', alignment: 'center' },
                    ],
                    [
                      {
                        text: this.aaa,
                        alignment: 'center',
                        fontSize: 7,
                        margin: [0, 10, 0, 10],
                      },
                      { text: '', alignment: 'center' },
                      { text: '', alignment: 'center' },
                      { text: '', alignment: 'center' },
                      { text: '', alignment: 'center' },
                      { text: '', alignment: 'center' },
                      { text: '', alignment: 'center' },
                      { text: '', alignment: 'center' },
                      { text: '', alignment: 'center' },
                    ],
                    [
                      {
                        text: this.aaa,
                        alignment: 'center',
                        fontSize: 7,
                        margin: [0, 10, 0, 10],
                      },
                      { text: '', alignment: 'center' },
                      { text: '', alignment: 'center' },
                      { text: '', alignment: 'center' },
                      { text: '', alignment: 'center' },
                      { text: '', alignment: 'center' },
                      { text: '', alignment: 'center' },
                      { text: '', alignment: 'center' },
                      { text: '', alignment: 'center' },
                    ],
                    [
                      {
                        text: 'UKUPNO:',
                        fontSize: 7,
                        alignment: 'center',
                        margin: [0, 10, 0, 10],
                        colSpan: 2,
                      },
                      { text: '', alignment: 'center', colSpan: 2 },
                      { text: '', alignment: 'center' },
                      { text: '', alignment: 'center' },
                      { text: '', alignment: 'center' },
                      { text: '', alignment: 'center' },
                      { text: '', alignment: 'center' },
                      { text: '', alignment: 'center' },
                      { text: '', alignment: 'center' },
                    ],
                    [
                      {
                        text: 'Napomena',
                        fontSize: 6,
                        margin: [0, 0, 0, 50],
                        colSpan: 6,
                      },
                      { text: '', margin: [0, 25, 0, 20] },
                      { text: '', alignment: 'center', margin: [0, 25, 0, 20] },
                      { text: '', alignment: 'center', margin: [0, 25, 0, 20] },
                      { text: '', alignment: 'center', margin: [0, 25, 0, 20] },
                      { text: '', alignment: 'center', margin: [0, 25, 0, 20] },
                      {
                        text: '................................................................ (evidentirao)',
                        fontSize: 7,
                        alignment: 'center',
                        margin: [0, 50, 0, 0],
                        colSpan: 3,
                      },
                      { text: '', alignment: 'center', margin: [15, 0, 15] },
                      { text: '', alignment: 'center', margin: [15, 0, 15] },
                    ],
                  ],
                },
              },
            ],

            [
              {
                margin: [15, -15, 0, -10],
                table: {
                  widths: [160, 60, 60, 50],
                  body: [
                    [
                      {
                        text: 'Obrazac putnog naloga za teretno i kombinovano vozilo',
                        fontSize: 7,
                        alignment: 'center',
                        margin: [0, 2, 0, 2],
                      },
                      {
                        text: '',
                        fontSize: 10,
                        border: [false, false, false, false],
                        alignment: 'center',
                      },
                      {
                        text: '',
                        fontSize: 10,
                        alignment: 'center',
                        border: [false, false, false, false],
                      },
                      {
                        text: 'PN-3',
                        fontSize: 10,
                        alignment: 'center',
                        margin: [0, 5, 0, 5],
                      },
                    ],
                    [
                      {
                        text: 'Naziv privrednog drustva, odnosno preduzetnika ...............................................................................................................',
                        fontSize: 7,
                        colSpan: 4,
                        margin: [0, 10, 0, 5],
                        border: [false, false, false, false],
                      },
                    ],
                    [
                      {
                        text: '  .................................................................................................................................................................................................',
                        colSpan: 4,
                        fontSize: 7,
                        margin: [0, 5, 0, 5],
                        border: [false, false, false, false],
                      },
                    ],
                    [
                      {
                        text: '  Mjesto...................................................................................................... dana..................................../20.................godine',
                        colSpan: 4,
                        fontSize: 7,
                        margin: [0, 5, 0, 5],
                        border: [false, false, false, false],
                      },
                    ],
                    [
                      {
                        text: '',
                        fontSize: 7,
                        margin: [0, 5, 0, 0],
                        border: [false, false, false, false],
                      },
                      {
                        text: 'PUTNI NALOG',
                        colSpan: 2,
                        fontSize: 15,
                        margin: [-30, 5, 0, 0],
                        border: [false, false, false, false],
                        bold:true
                      },
                      {
                        text: '',
                        fontSize: 10,
                        margin: [0, 5, 0, 0],
                        border: [false, false, false, false],
                      },
                      {
                        text: '',
                        fontSize: 7,
                        margin: [0, 5, 0, 0],
                        border: [false, false, false, false],
                      },
                    ],
                    [
                      {
                        text: '',
                        fontSize: 7,
                        margin: [0, 0, 0, 5],
                        border: [false, false, false, false],
                      },
                      {
                        text: 'Broj ...............................................',
                        colSpan: 2,
                        fontSize: 7,
                        margin: [-30, 0, 0, 5],
                        border: [false, false, false, false],
                      },
                      {
                        text: '',
                        fontSize: 7,
                        margin: [0, 0, 0, 5],
                        border: [false, false, false, false],
                      },
                      {
                        text: '',
                        fontSize: 7,
                        margin: [0, 0, 0, 5],
                        border: [false, false, false, false],
                      },
                    ],
                    [
                      {
                        table: {
                          body: [
                            [
                              {
                                text: 'Prezime i ime vozaca',
                                margin: [0, 5, 0, 5],
                                border: [false, false, false, false],
                                fontSize: 7,
                              },
                            ],
                            [
                              {
                                text: '1. ............................................................................',
                                margin: [0, 2, 0, 2],
                                border: [false, false, false, false],
                                fontSize: 7,
                              },
                            ],
                            [
                              {
                                text: '2. ...........................................................................',
                                margin: [0, 2, 0, 2],
                                border: [false, false, false, false],
                                fontSize: 7,
                              },
                            ],
                            [
                              {
                                text: 'Prezime i ime suvozaca:',
                                margin: [0, 2, 0, 2],
                                border: [false, false, false, false],
                                fontSize: 7,
                              },
                            ],
                            [
                              {
                                text: '1. ............................................................................',
                                margin: [0, 2, 0, 2],
                                border: [false, false, false, false],
                                fontSize: 7,
                              },
                            ],
                            [
                              {
                                text: '2. ...........................................................................',
                                margin: [0, 2, 0, 2],
                                border: [false, false, false, false],
                                fontSize: 7,
                              },
                            ],
                          ],
                        },
                        border: [false, false, false, false],
                      },
                      {
                        table: {
                          body: [
                            [
                              {
                                text: 'Prezime i ime lica koja vrse utovar i istovar, a prevoze se u prostoru odredjenom za smestaj tereta:',
                                margin: [0, 2, 0, 2],
                                fontSize: 7,
                                border: [false, false, false, false],
                              },
                            ],
                            [
                              {
                                text: '1. ............................................................................................',
                                margin: [0, 2, 0, 2],
                                fontSize: 7,
                                border: [false, false, false, false],
                              },
                            ],
                            [
                              {
                                text: '2. ............................................................................................',
                                margin: [0, 2, 0, 2],
                                fontSize: 7,
                                border: [false, false, false, false],
                              },
                            ],
                            [
                              {
                                text: '3. ............................................................................................',
                                margin: [0, 2, 0, 2],
                                fontSize: 7,
                                border: [false, false, false, false],
                              },
                            ],
                            [
                              {
                                text: '4. ............................................................................................',
                                margin: [0, 2, 0, 2],
                                fontSize: 7,
                                border: [false, false, false, false],
                              },
                            ],
                            [
                              {
                                text: '5. ............................................................................................',
                                margin: [0, 2, 0, 2],
                                fontSize: 7,
                                border: [false, false, false, false],
                              },
                            ],
                          ],
                        },
                        border: [false, false, false, false],
                        fontSize: 7,
                        colSpan: 3,
                        margin: [0, 5, 0, 5],
                      },
                      {
                        text: '',
                        fontSize: 15,
                        margin: [0, 5, 0, 5],
                        border: [false, false, false, false],
                      },
                      {
                        text: '',
                        fontSize: 7,
                        margin: [0, 5, 0, 5],
                        border: [false, false, false, false],
                      },
                    ],
                    [
                      {
                        text: '  Relacija..................................................................................................................................................................................',
                        colSpan: 4,
                        fontSize: 7,
                        margin: [0, 5, 0, -5],
                        border: [false, false, false, false],
                      },
                    ],
                    [
                      {
                        table: {
                          widths: [70, '*', '*', '*', 80],
                          body: [
                            [
                              {
                                text: 'Marka i tip vozila',
                                fontSize: 7,
                                margin: [0, 9, 0, 5],
                                alignment: 'center',
                              },
                              {
                                text: 'Sopstvena masa (t)',
                                fontSize: 7,
                                margin: [0, 5, 0, 5],
                                alignment: 'center',
                              },
                              {
                                text: 'Nosivost (t)',
                                fontSize: 7,
                                margin: [0, 9, 0, 5],
                                alignment: 'center',
                              },
                              {
                                text: 'Ukupna masa (t)',
                                fontSize: 7,
                                margin: [0, 5, 0, 5],
                                alignment: 'center',
                              },
                              {
                                text: 'Registarska oznaka vozila',
                                fontSize: 7,
                                margin: [0, 5, 0, 5],
                                alignment: 'center',
                              },
                            ],
                            [
                              {
                                text: '',
                                fontSize: 7,
                                margin: [0, 9, 0, 5],
                                alignment: 'center',
                              },
                              {
                                text: '',
                                fontSize: 7,
                                margin: [0, 5, 0, 5],
                                alignment: 'center',
                              },
                              {
                                text: '',
                                fontSize: 7,
                                margin: [0, 9, 0, 5],
                                alignment: 'center',
                              },
                              {
                                text: '',
                                fontSize: 7,
                                margin: [0, 5, 0, 5],
                                alignment: 'center',
                              },
                              {
                                text: '',
                                fontSize: 7,
                                margin: [0, 5, 0, 5],
                                alignment: 'center',
                              },
                            ],
                            [
                              {
                                text: '',
                                fontSize: 7,
                                margin: [0, 9, 0, 5],
                                alignment: 'center',
                              },
                              {
                                text: '',
                                fontSize: 7,
                                margin: [0, 5, 0, 5],
                                alignment: 'center',
                              },
                              {
                                text: '',
                                fontSize: 7,
                                margin: [0, 9, 0, 5],
                                alignment: 'center',
                              },
                              {
                                text: '',
                                fontSize: 7,
                                margin: [0, 5, 0, 5],
                                alignment: 'center',
                              },
                              {
                                text: '',
                                fontSize: 7,
                                margin: [0, 5, 0, 5],
                                alignment: 'center',
                              },
                            ],
                          ],
                        },
                        colSpan: 4,
                        fontSize: 7,
                        margin: [0, 5, 0, -1],
                        border: [false, false, false, false],
                      },
                    ],
                    [
                      {
                        text: '  Vozilu je pridodato sljedece vozilo: ...............................................................................................................................',
                        colSpan: 4,
                        fontSize: 7,
                        margin: [0, 2, 0, -8],
                        border: [false, false, false, false],
                        bold: true,
                      },
                    ],
                    [
                      {
                        table: {
                          widths: [70, '*', '*', '*', 80],
                          body: [
                            [
                              {
                                text: 'Marka i tip vozila',
                                fontSize: 7,
                                margin: [0, 9, 0, 5],
                                alignment: 'center',
                              },
                              {
                                text: 'Sopstvena masa (t)',
                                fontSize: 7,
                                margin: [0, 5, 0, 5],
                                alignment: 'center',
                              },
                              {
                                text: 'Nosivost (t)',
                                fontSize: 7,
                                margin: [0, 9, 0, 5],
                                alignment: 'center',
                              },
                              {
                                text: 'Ukupna masa (t)',
                                fontSize: 7,
                                margin: [0, 5, 0, 5],
                                alignment: 'center',
                              },
                              {
                                text: 'Registarska oznaka vozila',
                                fontSize: 7,
                                margin: [0, 5, 0, 5],
                                alignment: 'center',
                              },
                            ],
                            [
                              {
                                text: '',
                                fontSize: 7,
                                margin: [0, 9, 0, 5],
                                alignment: 'center',
                              },
                              {
                                text: '',
                                fontSize: 7,
                                margin: [0, 5, 0, 5],
                                alignment: 'center',
                              },
                              {
                                text: '',
                                fontSize: 7,
                                margin: [0, 9, 0, 5],
                                alignment: 'center',
                              },
                              {
                                text: '',
                                fontSize: 7,
                                margin: [0, 5, 0, 5],
                                alignment: 'center',
                              },
                              {
                                text: '',
                                fontSize: 7,
                                margin: [0, 5, 0, 5],
                                alignment: 'center',
                              },
                            ],
                            [
                              {
                                text: '',
                                fontSize: 7,
                                margin: [0, 9, 0, 5],
                                alignment: 'center',
                              },
                              {
                                text: '',
                                fontSize: 7,
                                margin: [0, 5, 0, 5],
                                alignment: 'center',
                              },
                              {
                                text: '',
                                fontSize: 7,
                                margin: [0, 9, 0, 5],
                                alignment: 'center',
                              },
                              {
                                text: '',
                                fontSize: 7,
                                margin: [0, 5, 0, 5],
                                alignment: 'center',
                              },
                              {
                                text: '',
                                fontSize: 7,
                                margin: [0, 5, 0, 5],
                                alignment: 'center',
                              },
                            ],
                          ],
                        },
                        colSpan: 4,
                        fontSize: 7,
                        margin: [0, 5, 0, 0],
                        border: [false, false, false, false],
                      },
                    ],
                    [
                      {
                        table: {
                          widths: ['*', 20, 180],
                          body: [
                            [
                              {
                                text: 'Potvrda o ispravnosti vozila za voznju:',
                                colSpan: 3,
                                fontSize: 7,
                                margin: [0, -10, 0, 5],
                                alignment: 'center',
                                border: [false, false, false, false],
                              },
                              {
                                text: '',
                                fontSize: 7,
                                margin: [0, 5, 0, 5],
                                alignment: 'center',
                              },
                              {
                                text: '',
                                fontSize: 7,
                                margin: [0, 5, 0, 5],
                                alignment: 'center',
                              },
                            ],
                            [
                              {
                                table: {
                                  widths: ['*'],
                                  body: [
                                    [
                                      {
                                        text: 'Vozilo primio bez nedostataka:',

                                        fontSize: 7,
                                        margin: [0, -10, 0, 5],
                                        alignment: 'center',
                                        border: [false, false, false, false],
                                      },
                                    ],
                                    [
                                      {
                                        text: '.........................................................................',
                                        fontSize: 7,
                                        margin: [0, 5, 0, -10],
                                        alignment: 'center',
                                        border: [false, false, false, false],
                                      },
                                    ],
                                    [
                                      {
                                        text: '(Potpis vozaca)',
                                        fontSize: 7,
                                        margin: [0, 5, 0, -10],
                                        alignment: 'center',
                                        border: [false, false, false, false],
                                      },
                                    ],
                                  ],
                                },
                                fontSize: 7,
                                margin: [0, 9, 0, 5],
                                alignment: 'center',
                                border:[false,false,false,false]
                              },
                              {
                                text: '(M.P.)',
                                fontSize: 7,
                                margin: [0, 27, 0, 5],
                                alignment: 'center',
                                border:[false,false,false,false]
                              },
                              {
                                table: {
                                  widths: ['*'],
                                  body: [
                                    [
                                      {
                                        text: '',

                                        fontSize: 7,
                                        margin: [0, -10, 0, 5],
                                        alignment: 'center',
                                        border: [false, false, false, false],
                                      },
                                    ],
                                    [
                                      {
                                        text: '........................................................................................',
                                        fontSize: 7,
                                        margin: [0, 8, 0, -10],
                                        alignment: 'center',
                                        border: [false, false, false, false],
                                      },
                                    ],
                                    [
                                      {
                                        text: '(Potpis ovlascenog lica za izdavanje putnog naloga)',
                                        fontSize: 7,
                                        margin: [0, 5, 0, -10],
                                        alignment: 'center',
                                        border: [false, false, false, false],
                                      },
                                    ],
                                  ],
                                },
                                fontSize: 7,
                                margin: [0, 9, 0, 5],
                                alignment: 'center',
                                border:[false,false,false,false]
                              },
                            ],
                          ],
                        },
                        colSpan: 4,
                        fontSize: 7,
                        margin: [0, 5, 0, 5],
                        border: [false, false, false, false],
                      },
                    ],
                  ],
                },
              },
            ],
          ],
        },

        // {text: 'EVIDENCIJA UTROŠKA GORIVA I MAZIVA', style: 'header' , margin:[140,0,100,10] , fontSize: 15},
        // {table: {
        //   headerRows: 1,
        //   widths: ['4%', '7%', '7%', '4%' , '4%' , '5%' , '4%' , '4%' , "10%"],
        //     body: this.tableBody

        // }}
        // {
        //   style: 'tableExample',

        //   table: {
        //     widths: ['4%', '7%', '7%', '4%' , '4%' , '5%' , '4%' , '4%' , "10%"],

        //     body: [

        //       [{text: 'Datum', alignment: 'center' , margin: [0, 25, 0, 20]}, {text: 'Mjesto tankovanja', alignment: 'center' , margin: [0, 20, 0, 20]} , {text: 'Stanje brojila km', alignment: 'center' , margin: [0, 20, 0, 20]}  , {text: 'Plinsko ulje', alignment: 'center', margin: [0, 20, 0, 20]}  , {text: 'Benzin', alignment: 'center', margin: [0, 25, 0, 20]} ,{text: 'Motorno ulje', alignment: 'center', margin: [0, 20, 0, 20]}  ,{text: 'Ostala maziva', alignment: 'center', margin: [0, 20, 0, 20]} ,{text: 'Broj računa', alignment: 'center', margin: [0, 20, 0, 20]},{text: 'Pumpna stanica (Potpis i pečat)', alignment: 'center' , margin: [0, 20, 0, 20]} ],
        //       [{text: this.aaa, alignment: 'center' , margin: [0, 25, 0, 20]},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]}],
        //       [{text: '', alignment: 'center' , margin: [0, 25, 0, 20]},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]}],
        //       [{text: '', alignment: 'center' , margin: [0, 25, 0, 20]},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]}],
        //       [{text: '', alignment: 'center' , margin: [0, 25, 0, 20]},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]}],
        //       [{text: '', alignment: 'center' , margin: [0, 25, 0, 20]},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]}],
        //       [{text: '', alignment: 'center' , margin: [0, 25, 0, 20]},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]}],
        //       [{text: '', alignment: 'center' , margin: [0, 25, 0, 20]},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]}],
        //       [{text: '', alignment: 'center' , margin: [0, 25, 0, 20]},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]}],
        //       [{text: '', alignment: 'center' , margin: [0, 25, 0, 20]},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]}],
        //       [{text: '', alignment: 'center' , margin: [0, 25, 0, 20]},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]}],
        //       [{text: 'UKUPNO:', alignment: 'center' , margin: [0, 25, 0, 20], colSpan:2},{text: '', alignment: 'center' , margin: [0, 25, 0, 20], colSpan:2},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]}],
        //       [{text: 'Napomena' , margin: [0, 0, 0, 50], colSpan: 6},{text: 'Evidentirano', margin: [0, 25, 0, 20]},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]},{text: '................................................. (evidentirao)', alignment: 'center' , margin: [0, 50, 0, 0], colSpan: 3},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]},{text: '', alignment: 'center' , margin: [0, 25, 0, 20]}]

        //     ],

        //   }
        // },
      ],
    };
    pdfMake.createPdf(documentDefinition).open();
  }
  testFunction() {
    this.generatePdf();
  }
}
