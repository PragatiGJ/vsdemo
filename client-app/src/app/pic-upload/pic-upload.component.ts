import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pic-upload',
  templateUrl: './pic-upload.component.html',
  styleUrls: ['./pic-upload.component.css']
})
export class PicUploadComponent implements OnInit {

  profilePic : any;//File;
  customerId : any;//number;
  customerService: any;

  constructor() { }

  ngOnInit(): void {
    this.customerId = sessionStorage.getItem('customerId');
  }

  onFileChange(event) {
    this.profilePic = event.target.files[0];
  }

  upload() {
    let formData: FormData = new FormData;
    formData.append('profilePic', this.profilePic);
    console.log(formData.get('profilePic'));//just to check if we have ref to uploaded pic
    this.customerService.picUpload(formData).subscribe(response => {
      alert(JSON.stringify(response));
    });
  }

}
