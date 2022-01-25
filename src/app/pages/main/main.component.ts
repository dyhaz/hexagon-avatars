import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  title = 'profilepicture';

  constructor() { }

  ngOnInit(): void {
  }

  fileUploaded(ev: any) {
    console.log('file', ev);
  }
}
