import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FileUploadDialogComponent } from './file-upload-dialog/file-upload-dialog.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'file-uploader';


  // dialogValue: string;
  // sendValue: string;
  
  constructor(
    public dialog: MatDialog
  ) { }
  openDialog(): void {
    const dialogRef = this.dialog.open(FileUploadDialogComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '98%',
      width: '98%',
      backdropClass: 'custom-dialog-backdrop-class',
      panelClass: 'custom-dialog-panel-class',
      data: { pageValue: 'test' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      // this.dialogValue = 'test';
    });
  }
}
