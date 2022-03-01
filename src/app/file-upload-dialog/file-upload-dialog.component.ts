import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-upload-dialog',
  templateUrl: './file-upload-dialog.component.html',
  styleUrls: ['./file-upload-dialog.component.css']
})
export class FileUploadDialogComponent implements OnInit {
  file:any;
  files: any[] = [];
  constructor() { }

  ngOnInit(): void {
  }
  
  getFile(event:any){
    this.file = event.target.files[0];
    this.files.push(this.file)
    console.log(this.files);
    
  }
 
}
