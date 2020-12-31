import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insure',
  templateUrl: './insure.component.html',
  styleUrls: ['./insure.component.css']
})
export class InsureComponent implements OnInit {
  selectedFile: File

  onFileChanged(event) {
    this.selectedFile = event.target.files[0]
  }

  onUpload() {
    // upload code goes here
  }
  constructor() { }

  ngOnInit(): void {
  }

}
