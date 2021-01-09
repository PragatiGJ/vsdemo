import { Component, OnInit } from '@angular/core';
import { PnrService } from '../pnr.service';
@Component({
  selector: 'app-pnr',
  templateUrl: './pnr.component.html',
  styleUrls: ['./pnr.component.css']
})
export class PnrComponent implements OnInit {

  pnrNo : number;
  data : any;
  constructor(private service: PnrService) { }

  ngOnInit() {
  }

  checkPnr(){
    alert(this.pnrNo);
    this.service.fetchPnrStatus(this.pnrNo).subscribe(data => {
      this.data = data;
      alert(JSON.stringify(data));
      //alert(data.trainNo);
      //alert(data.passengers[0].name);

    })
  }
}
