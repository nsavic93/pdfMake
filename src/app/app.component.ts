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
      {
        text: '',
      },
      { text: '' },
      { text: '' },
      { text: '' },
      { text: '' },
      { text: '' },
      { text: '' },
      { text: '' },
      { text: '' },
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
        margin: [-15, 0, 0, 0],
        columns: [
          [
            {
              text: 'EVIDENCIJA UTROŠKA GORIVA I MAZIVA',
              fontSize: 10,
              margin: [100, 0, 0, 10],
            },
            {
              table: {
                heights: [20, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
                widths: [
                  '7%',
                  '18%',
                  '18%',
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
                      text: "Datum",
                      fontSize: 7,
                      alignment: 'center',
                      margin: [0, 18, 0, 15],
                    },
                    {
                      text: "Mjesto tankovanja",
                      fontSize: 7,
                      alignment: 'center',
                      margin: [0, 15, 0, 15],
                    },
                    {
                      text: 'Stanje brojila km',
                      fontSize: 7,
                      alignment: 'center',
                      margin: [0, 18, 0, 15],
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
                      text: '',
                      alignment: 'center',
                      fontSize: 7,
                      margin: [0, 10, 0, 10],
                    },
                    {
                      text: "",
                      alignment: 'center',
                      fontSize: 7,
                      margin: [0, 10, 0, 10],
                    },
                    {
                      text: "",
                      fontSize: 7,
                      margin: [0, 10, 0, 10],
                      alignment: 'center',
                    },
                    { text: '', alignment: 'center' },
                    { text: '', alignment: 'center' },
                    { text: '', alignment: 'center' },
                    { text: '', alignment: 'center' },
                    { text: '', alignment: 'center' },
                    { text: '', alignment: 'center' },
                  ],
                  [
                    {
                      text: '',
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
                      text: '',
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
                      text: '',
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
                      text: '',
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
                      text: '',
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
                      text: '',
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
                      text: '',
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
                      text: '',
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
                      text: '',
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
                      margin: [0, 0, 0, 30],
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
                      margin: [0, 30, 0, 0],
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
              margin: [35, -15, 0, -10],
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
                      text: "PN-3",
                      fontSize: 10,
                      alignment: 'center',
                      margin: [0, 5, 0, 5],
                    },
                  ],
                  [
                    {
                      text: 'Naziv privrednog društva, odnosno preduzetnika ',
                      fontSize: 7,
                      colSpan: 1,
                      margin: [0, 10, 0, 0],
                      border: [false, false, false, false],
                    },
                    {
                      table: {
                        widths: ["*"],
                        body: [

                          [
                            {
                              text: ' ', // Ovde ide promenljiva za naziv privrednog drustva
                              fontSize: 7,

                              margin: [-20, 6, 0, 0],
                              border: [false, false, false, false],
                            },
                          ],
                          [
                            {
                              text: ' .............................................................................................................',
                              fontSize: 7,

                              margin: [-20, -11, 0, 0],
                              border: [false, false, false, false],
                            },
                          ],
                        ],
                      },

                      // text:'',
                      // fontSize: 7,
                      colSpan: 3,
                      // margin: [0, 10, 0, 5],
                      border: [false, false, false, false],
                    },

                  ],
                  [
                    {
                      table: {
                        widths: ["*"],
                        body: [

                          [
                            {
                              text: ' ', // Ovde ide promenljiva za naziv privrednog drustva (nastavak)
                              fontSize: 7,

                              margin: [0, -5, 0, 0],
                              border: [false, false, false, false],
                            },
                          ],
                          [
                            {
                              text: ' ................................................................................................................................................................................................',
                              fontSize: 7,

                              margin: [-5, -11, 0, 0],
                              border: [false, false, false, false],
                            },
                          ],
                        ],
                      },

                      // text:'',
                      // fontSize: 7,
                      colSpan: 4,
                      // margin: [0, 10, 0, 5],
                      border: [false, false, false, false],
                    },
                  ],
                  [
                    {
                      table: {
                        widths: [22, 170, 17, "*", "*", 22],
                        body: [

                          [
                            {
                              text: 'Mjesto ',
                              fontSize: 7,

                              margin: [0, -5, 0, 0],
                              border: [false, false, false, false],
                            },
                            {
                              text: ' ' + "travelOrder.place", // Ovde ide promenljiva za mesto
                              fontSize: 7,
                              colSpan: 1,
                              alignment: "center",
                              margin: [0, -6, 0, 0],
                              border: [false, false, false, false],
                            },
                            {
                              text: 'Dana',
                              fontSize: 7,

                              margin: [0, -5, 0, 0],
                              border: [false, false, false, false],
                            },
                            {
                              text: "day" + " / " + "month", // Ovde ide promenljiva za dan i mesec
                              fontSize: 7,
                              alignment: "center",
                              margin: [0, -6, 0, 0],
                              border: [false, false, false, false],
                            },

                            {
                              text: "/" + "year", // Ovde ide promenljiva za godinu
                              fontSize: 7,
                              alignment: 'left',
                              margin: [0, -6, 0, 0],
                              border: [false, false, false, false],
                            },
                            {
                              text: 'Godine',
                              fontSize: 7,
                              // alignment: 'right',
                              margin: [-10, -5, 0, 0],
                              border: [false, false, false, false],
                            },
                          ],
                          [
                            {
                              text: '',
                              fontSize: 7,

                              margin: [0, -5, 0, 0],
                              border: [false, false, false, false],
                            },
                            {
                              text: '............................................................................................',
                              fontSize: 7,
                              colSpan: 1,
                              margin: [0, -12, 0, 0],
                              border: [false, false, false, false],
                            },
                            {
                              text: '',
                              fontSize: 7,

                              margin: [0, -5, 0, 0],
                              border: [false, false, false, false],
                            },
                            {
                              text: '..........................................',
                              fontSize: 7,
                              colSpan: 2,
                              margin: [0, -12, 0, 0],
                              border: [false, false, false, false],
                            },

                            {
                              text: ".......................",
                              fontSize: 7,
                              // alignment: 'left',
                              colSpan: 2,
                              margin: [0, -5, 0, 0],
                              border: [false, false, false, false],
                            },
                            {
                              text: '',
                              fontSize: 7,

                              margin: [0, -5, 0, 0],
                              border: [false, false, false, false],
                            },
                          ],

                        ],
                      },

                      // text:'',
                      // fontSize: 7,
                      colSpan: 4,
                      // margin: [0, 10, 0, 5],
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
                      bold: true,
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
                      text: 'Broj ',
                      colSpan: 1,
                      fontSize: 7,
                      margin: [-30, 0, 0, 5],
                      border: [false, false, false, false],
                    },
                    {
                      table: {
                        widths: ["*"],
                        body: [

                          [
                            {
                              text: ' ', // Ovde ide promenljiva za br putnog naloga
                              fontSize: 7,

                              margin: [0, -5, 0, 0],
                              border: [false, false, false, false],
                            },
                          ],
                          [
                            {
                              text: '..........................................................',
                              fontSize: 7,

                              margin: [-5, -11, 0, 0],
                              border: [false, false, false, false],
                            },
                          ],
                        ],
                      },
                      fontSize: 7,
                      colSpan: 2,
                      margin: [-80, 0, 0, 5],
                      border: [false, false, false, false],
                    },
                    {
                      text: '',
                      fontSize: 7,
                      margin: [0, 0, 0, 5],
                      // border: [false, false, false, false],
                    },
                  ],

                  [
                    {
                      table: {
                        body: [
                          [
                            {
                              text: 'Prezime i ime vozača',
                              margin: [0, 0, 0, 5],
                              border: [false, false, false, false],
                              fontSize: 7,
                            },
                          ],
                          [
                            {
                              table: {
                                widths: [7, "*"],
                                body: [

                                  [
                                    {
                                      text: '1. ',
                                      fontSize: 7,

                                      margin: [-5, -5, 0, 0],
                                      border: [false, false, false, false],
                                    },
                                    {
                                      text: "travelOrder.driver_full_name",
                                      fontSize: 7,

                                      margin: [0, -7, 0, 0],
                                      border: [false, false, false, false],
                                    },
                                  ],
                                  [
                                    {
                                      text: "",
                                      fontSize: 7,

                                      margin: [-5, -11, 0, 0],
                                      border: [false, false, false, false],
                                    },
                                    {
                                      text: '.........................................................................',
                                      fontSize: 7,

                                      margin: [-10, -13, 0, 0],
                                      border: [false, false, false, false],
                                    },
                                  ],
                                ],
                              },
                              border: [false, false, false, false],
                            }
                            // {
                            //   text: '1. ............................................................................',
                            //   margin: [0, 2, 0, 2],
                            //   border: [false, false, false, false],
                            //   fontSize: 7,
                            // },

                          ],
                          [
                            {
                              table: {
                                widths: [7, "*"],
                                body: [

                                  [
                                    {
                                      text: '2. ',
                                      fontSize: 7,

                                      margin: [-5, -5, 0, 0],
                                      border: [false, false, false, false],
                                    },
                                    {
                                      text: "",
                                      fontSize: 7,

                                      margin: [0, -7, 0, 0],
                                      border: [false, false, false, false],
                                    },
                                  ],
                                  [
                                    {
                                      text: "",
                                      fontSize: 7,

                                      margin: [-5, -11, 0, 0],
                                      border: [false, false, false, false],
                                    },
                                    {
                                      text: '.........................................................................',
                                      fontSize: 7,

                                      margin: [-10, -13, 0, 0],
                                      border: [false, false, false, false],
                                    },
                                  ],
                                ],
                              },
                              border: [false, false, false, false],
                            }
                          ],
                          [
                            {
                              text: 'Prezime i ime suvozača:',
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
                              text: 'Prezime i ime lica koja vrše utovar i istovar, a prevoze se u prostoru odredjenom za smeštaj tereta:',
                              margin: [0, -5, 0, 2],
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
                      // text: '  Relacija..................................................................................................................................................................................',

                      table: {
                        widths: [20, "*"],
                        body: [

                          [
                            {
                              text: 'Relacija ',
                              fontSize: 7,

                              margin: [-5, -5, 0, 0],
                              border: [false, false, false, false],
                            },
                            {
                              text: "${travelOrder.place} - ${travelOrder.start_point} - ${travelOrder.mid_point} - ${travelOrder.end_point}" ,
                              fontSize: 7,
                              alignment: "center",
                              margin: [0, -12, 0, 0],
                              border: [false, false, false, false],
                            },
                          ],
                          [
                            {
                              text: "",
                              fontSize: 7,

                              margin: [-5, 0, 0, 0],
                              border: [false, false, false, false],
                            },
                            {
                              text: '..................................................................................................................................................................................',
                              fontSize: 7,

                              margin: [-10, -13, 0, 0],
                              border: [false, false, false, false],
                            },
                          ],
                        ],
                      },



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
                      margin: [0, -2, 0, -1],
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
                              text: 'Potvrda o ispravnosti vozila za vožnju:',
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
                                      margin: [0, -15, 0, 5],
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
                                      text: '(Potpis vozača)',
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
                              border: [false, false, false, false],
                            },
                            {
                              text: '(M.P.)',
                              fontSize: 7,
                              margin: [0, 27, 0, 5],
                              alignment: 'center',
                              border: [false, false, false, false],
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
                                      margin: [0, 5, 0, -10],
                                      alignment: 'center',
                                      border: [false, false, false, false],
                                    },
                                  ],
                                  [
                                    {
                                      text: '(Potpis ovlašćenog lica za izdavanje putnog naloga)',
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
                              border: [false, false, false, false],
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
    ],
  };

  pdfMake.createPdf(documentDefinition).open();
}
generatePdf4(){
  
  const documentDefinition = {
    pageOrientation: 'landscape',
    pageSize: 'A4',
    margin: [0, 0, 0, 0],
    content: [
      {
        margin: [-15, 0, 0, 0],
        columns: [
          [
            {
              text: 'EVIDENCIJA UTROŠKA GORIVA I MAZIVA',
              fontSize: 10,
              margin: [100, 0, 0, 10],
            },
            {
              table: {
                heights: [20, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
                widths: [
                  '7%',
                  '18%',
                  '18%',
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
                      text: "Datum",
                      fontSize: 7,
                      alignment: 'center',
                      margin: [0, 18, 0, 15],
                    },
                    {
                      text: "Mjesto tankovanja",
                      fontSize: 7,
                      alignment: 'center',
                      margin: [0, 15, 0, 15],
                    },
                    {
                      text: 'Stanje brojila km',
                      fontSize: 7,
                      alignment: 'center',
                      margin: [0, 18, 0, 15],
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
                      text: '',
                      alignment: 'center',
                      fontSize: 7,
                      margin: [0, 10, 0, 10],
                    },
                    {
                      text: "",
                      alignment: 'center',
                      fontSize: 7,
                      margin: [0, 10, 0, 10],
                    },
                    {
                      text: "",
                      fontSize: 7,
                      margin: [0, 10, 0, 10],
                      alignment: 'center',
                    },
                    { text: '', alignment: 'center' },
                    { text: '', alignment: 'center' },
                    { text: '', alignment: 'center' },
                    { text: '', alignment: 'center' },
                    { text: '', alignment: 'center' },
                    { text: '', alignment: 'center' },
                  ],
                  [
                    {
                      text: '',
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
                      text: '',
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
                      text: '',
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
                      text: '',
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
                      text: '',
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
                      text: '',
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
                      text: '',
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
                      text: '',
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
                      text: '',
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
                      margin: [0, 0, 0, 30],
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
                      margin: [0, 30, 0, 0],
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
              margin: [35, -15, 0, -10],
              table: {
                widths: [130, 60, 60, 50],
                body: [
                  [
                    {
                      text: 'Obrazac putnog naloga za putnički automobil',
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
                      text: "PN-4",
                      fontSize: 10,
                      alignment: 'center',
                      margin: [0, 5, 0, 5],
                    },
                  ],
                  [
                    {
                      text: 'Naziv nalogodavca ',
                      fontSize: 7,
                      colSpan: 1,
                      margin: [0, 10, 0, 0],
                      border: [false, false, false, false],
                    },
                    {
                      table: {
                        widths: ["*"],
                        body: [

                          [
                            {
                              text: ' AAAAAAAAAAAAAAAAAAAAAAAAAA', // Ovde ide promenljiva za naziv privrednog drustva
                              fontSize: 7,

                              margin: [-60, 6, 0, 0],
                              border: [false, false, false, false],
                            },
                          ],
                          [
                            {
                              text: ' .............................................................................................................................................................',
                              fontSize: 7,

                              margin: [-80, -11, 0, 0],
                              border: [false, false, false, false],
                            },
                          ],
                        ],
                      },

                      // text:'',
                      // fontSize: 7,
                      colSpan: 3,
                      // margin: [0, 10, 0, 5],
                      border: [false, false, false, false],
                    },

                  ],
                  [
                    {
                      table: {
                        widths: ["*"],
                        body: [

                          [
                            {
                              text: ' ', // Ovde ide promenljiva za naziv privrednog drustva (nastavak)
                              fontSize: 7,

                              margin: [0, -5, 0, 0],
                              border: [false, false, false, false],
                            },
                          ],
                          [
                            {
                              text: ' ................................................................................................................................................................................................',
                              fontSize: 7,

                              margin: [-5, -11, 0, 0],
                              border: [false, false, false, false],
                            },
                          ],
                        ],
                      },

                      // text:'',
                      // fontSize: 7,
                      colSpan: 4,
                      // margin: [0, 10, 0, 5],
                      border: [false, false, false, false],
                    },
                  ],
                  [
                    {
                      table: {
                        widths: [22, 177, 17, "*", "*", 22],
                        body: [

                          [
                            {
                              text: 'Mjesto ',
                              fontSize: 7,

                              margin: [0, -5, 0, 0],
                              border: [false, false, false, false],
                            },
                            {
                              text: ' ' + "travelOrder.place", // Ovde ide promenljiva za mesto
                              fontSize: 7,
                              colSpan: 1,
                              alignment: "center",
                              margin: [0, -6, 0, 0],
                              border: [false, false, false, false],
                            },
                            {
                              text: 'Dana',
                              fontSize: 7,

                              margin: [0, -5, 0, 0],
                              border: [false, false, false, false],
                            },
                            {
                              text: "day" + " / " + "month", // Ovde ide promenljiva za dan i mesec
                              fontSize: 7,
                              alignment: "center",
                              margin: [0, -6, 0, 0],
                              border: [false, false, false, false],
                            },

                            {
                              text: "/" + "year", // Ovde ide promenljiva za godinu
                              fontSize: 7,
                              alignment: 'left',
                              margin: [0, -6, 0, 0],
                              border: [false, false, false, false],
                            },
                            {
                              text: 'Godine',
                              fontSize: 7,
                              // alignment: 'right',
                              margin: [-10, -5, 0, 0],
                              border: [false, false, false, false],
                            },
                          ],
                          [
                            {
                              text: '',
                              fontSize: 7,

                              margin: [0, -5, 0, 0],
                              border: [false, false, false, false],
                            },
                            {
                              text: '................................................................................................',
                              fontSize: 7,
                              colSpan: 1,
                              margin: [0, -12, 0, 0],
                              border: [false, false, false, false],
                            },
                            {
                              text: '',
                              fontSize: 7,

                              margin: [0, -5, 0, 0],
                              border: [false, false, false, false],
                            },
                            {
                              text: '..........................................',
                              fontSize: 7,
                              colSpan: 2,
                              margin: [0, -12, 0, 0],
                              border: [false, false, false, false],
                            },

                            {
                              text: ".......................",
                              fontSize: 7,
                              // alignment: 'left',
                              colSpan: 2,
                              margin: [0, -5, 0, 0],
                              border: [false, false, false, false],
                            },
                            {
                              text: '',
                              fontSize: 7,

                              margin: [0, -5, 0, 0],
                              border: [false, false, false, false],
                            },
                          ],

                        ],
                      },

                      // text:'',
                      // fontSize: 7,
                      colSpan: 4,
                      // margin: [0, 10, 0, 5],
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
                      bold: true,
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
                      text: 'Broj ',
                      colSpan: 1,
                      fontSize: 7,
                      margin: [-30, 10, 0, 5],
                      border: [false, false, false, false],
                    },
                    {
                      table: {
                        widths: ["*"],
                        body: [

                          [
                            {
                              text: ' ', // Ovde ide promenljiva za br putnog naloga
                              fontSize: 7,

                              margin: [0, -5, 0, 0],
                              border: [false, false, false, false],
                            },
                          ],
                          [
                            {
                              text: '..........................................................',
                              fontSize: 7,

                              margin: [-5, -1, 0, 0],
                              border: [false, false, false, false],
                            },
                          ],
                        ],
                      },
                      fontSize: 7,
                      colSpan: 2,
                      margin: [-80, 0, 0, 5],
                      border: [false, false, false, false],
                    },
                    {
                      text: '',
                      fontSize: 7,
                      margin: [0, 0, 0, 5],
                      // border: [false, false, false, false],
                    },
                  ],

                  [
                    {
                      colSpan: 4,
                      table: {
                        widths: [70, "*"],
                        body: [
                          
                          [
                            {
                              text: 'Prezime i ime vozača',
                              margin: [0, -2, 0, 5],
                              border: [false, false, false, false],
                              fontSize: 7,
                            },
                            {
                              table: {
                                widths: [7, "*"],
                                body: [

                                  [
                                    {
                                      text: '1. ',
                                      fontSize: 7,

                                      margin: [-5, -5, 0, 0],
                                      border: [false, false, false, false],
                                    },
                                    {
                                      text: "travelOrder.driver_full_name",
                                      fontSize: 7,

                                      margin: [0, -7, 0, 0],
                                      border: [false, false, false, false],
                                    },
                                  ],
                                  [
                                    {
                                      text: "",
                                      fontSize: 7,

                                      margin: [-5, -11, 0, 0],
                                      border: [false, false, false, false],
                                    },
                                    {
                                      text: '............................................................................................................................................',
                                      fontSize: 7,

                                      margin: [-10, -13, 0, 0],
                                      border: [false, false, false, false],
                                    },
                                  ],
                                ],
                              },
                              border: [false, false, false, false],
                            }
                            // {
                            //   text: '1. ............................................................................',
                            //   margin: [0, 2, 0, 2],
                            //   border: [false, false, false, false],
                            //   fontSize: 7,
                            // },

                          ],
                          [
                            {
                              text: '',
                              margin: [0, 0, 0, 5],
                              border: [false, false, false, false],
                              fontSize: 7,
                            },
                            {
                              table: {
                                widths: [7, "*"],
                                body: [

                                  [
                                    {
                                      text: '2. ',
                                      fontSize: 7,

                                      margin: [-5, -5, 0, 0],
                                      border: [false, false, false, false],
                                    },
                                    {
                                      text: "",
                                      fontSize: 7,

                                      margin: [0, -7, 0, 0],
                                      border: [false, false, false, false],
                                    },
                                  ],
                                  [
                                    {
                                      text: "",
                                      fontSize: 7,

                                      margin: [-5, -11, 0, 0],
                                      border: [false, false, false, false],
                                    },
                                    {
                                      text: '............................................................................................................................................',
                                      fontSize: 7,

                                      margin: [-10, -13, 0, 0],
                                      border: [false, false, false, false],
                                    },
                                  ],
                                ],
                              },
                              border: [false, false, false, false],
                            }
                          ],
                          [
                            {
                              text: '',
                              margin: [0, 0, 0, 5],
                              border: [false, false, false, false],
                              fontSize: 7,
                            },
                            {
                              table: {
                                widths: [7, "*"],
                                body: [

                                  [
                                    {
                                      text: '3. ',
                                      fontSize: 7,

                                      margin: [-5, -5, 0, 0],
                                      border: [false, false, false, false],
                                    },
                                    {
                                      text: "",
                                      fontSize: 7,

                                      margin: [0, -7, 0, 0],
                                      border: [false, false, false, false],
                                    },
                                  ],
                                  [
                                    {
                                      text: "",
                                      fontSize: 7,

                                      margin: [-5, -11, 0, 0],
                                      border: [false, false, false, false],
                                    },
                                    {
                                      text: '............................................................................................................................................',
                                      fontSize: 7,

                                      margin: [-10, -13, 0, 0],
                                      border: [false, false, false, false],
                                    },
                                  ],
                                ],
                              },
                              border: [false, false, false, false],
                            }
                          ],
                          
                        ],
                      },
                      margin:[0,20,0,0],
                      border: [false, false, false, false],
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
                      // text: '  Relacija..................................................................................................................................................................................',

                      table: {
                        widths: [20, "*"],
                        body: [

                          [
                            {
                              text: 'Relacija ',
                              fontSize: 7,

                              margin: [-5, -5, 0, 0],
                              border: [false, false, false, false],
                            },
                            {
                              text: "${travelOrder.place} - ${travelOrder.start_point} - ${travelOrder.mid_point} - ${travelOrder.end_point}" ,
                              fontSize: 7,
                              alignment: "center",
                              margin: [0, -12, 0, 0],
                              border: [false, false, false, false],
                            },
                          ],
                          [
                            {
                              text: "",
                              fontSize: 7,

                              margin: [-5, 0, 0, 0],
                              border: [false, false, false, false],
                            },
                            {
                              text: '..................................................................................................................................................................................',
                              fontSize: 7,

                              margin: [-10, -13, 0, 0],
                              border: [false, false, false, false],
                            },
                          ],
                        ],
                      },



                      colSpan: 4,
                      fontSize: 7,
                      margin: [0, 5, 0, -5],
                      border: [false, false, false, false],
                    },
                  ],
                  [
                    {
                      table: {
                        widths: ["*", 70, "*"],
                        body: [
                          [
                            {
                              text: 'Marka i tip putničkog automobila',
                              fontSize: 7,
                              margin: [0, 5, 0, 5],
                              alignment: 'center',
                            },
                            
                            
                            {
                              text: 'Broj sjedišta',
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
                              margin: [0, 5, 0, 5],
                              alignment: 'center',
                            },
                          ],
                        ],
                      },
                      colSpan: 4,
                      fontSize: 7,
                      margin: [0, -2, 0, -1],
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
                              text: 'Potvrda o ispravnosti vozila za vožnju:',
                              colSpan: 3,
                              fontSize: 7,
                              margin: [0, 0, 0, 5],
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
                                      text: 'Vozilo primio bez vidljivih nedostataka:',

                                      fontSize: 7,
                                      margin: [0, -15, 0, 5],
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
                                      text: '(Potpis vozača)',
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
                              border: [false, false, false, false],
                            },
                            {
                              text:'',
                              border: [false, false, false, false],
                            }
                            ,
                            {
                              text:'',
                              border: [false, false, false, false],
                            }
                            
                          ],
                          [
                            {
                              text:'',
                              border: [false, false, false, false],
                            },
                            {
                              text: '(M.P.)',
                              fontSize: 7,
                              margin: [-80, 27, 0, 5],
                              alignment: 'center',
                              border: [false, false, false, false],
                            },
                            {
                              table: {
                                widths: ['*'],
                                body: [
                                  [
                                    {
                                      text: '',

                                      fontSize: 7,
                                      margin: [-40, -10, 0, 5],
                                      alignment: 'center',
                                      border: [false, false, false, false],
                                    },
                                  ],
                                  [
                                    {
                                      text: '.....................................................................................................',
                                      fontSize: 7,
                                      margin: [-40, 5, 0, -10],
                                      alignment: 'center',
                                      border: [false, false, false, false],
                                    },
                                  ],
                                  [
                                    {
                                      text: '(Potpis ovlašćenog lica za izdavanje putnog naloga)',
                                      fontSize: 7,
                                      margin: [-40, 5, 0, -10],
                                      alignment: 'center',
                                      border: [false, false, false, false],
                                    },
                                  ],
                                ],
                              },
                              fontSize: 7,
                              margin: [0, 9, 0, 5],
                              alignment: 'center',
                              border: [false, false, false, false],
                            },
                          ]
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
    ],
  };

  pdfMake.createPdf(documentDefinition).open();
}
pdf4(){
  this.generatePdf4()
}
  testFunction() {
    this.generatePdf();
  }
}
