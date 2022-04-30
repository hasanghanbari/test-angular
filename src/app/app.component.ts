import {Component, ElementRef, ViewChild} from '@angular/core';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'maher';

  public exportHtmlToPDF(){
    let data = document.getElementById('page');

    if (data) {
      html2canvas(data).then(canvas => {

        let docWidth = 208;
        let docHeight = canvas.height * docWidth / canvas.width;

        const contentDataURL = canvas.toDataURL('image/png')
        let doc = new jsPDF('p', 'mm', 'a4');
        let position = 0;
        doc.addImage(contentDataURL, 'PNG', 0, position, docWidth, docHeight)

        doc.save('exportedPdf.pdf');
      });
    }
  }
}
