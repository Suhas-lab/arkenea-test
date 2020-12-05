import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {SidebarModule} from 'primeng/sidebar';
import {ProgressBarModule} from 'primeng/progressbar';
import { UserAddComponent } from '../user-add/user-add.component';


@Component({
  selector: 'app-mainlist',
  templateUrl: './mainlist.component.html',
  styleUrls: ['./mainlist.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MainlistComponent implements OnInit {
  visibleSidebar1: boolean = true

  columnDefs = [
    { field: 'Name' },
    { field: 'Birth Date' },
    { field: 'Language' },
    { field: 'Gender' }

];
cols: any[];

userData : any;
value: number = 0;
maleUsers: any;
femaleUsers: any;
popupFlag: boolean = false;

@ViewChild(UserAddComponent) child;

constructor(){}

  ngOnInit(): void {
    this.userData = [
      {fullname: 'Richard Lovelace', birthdate:'December 10, 1815',languages:'Spanish, Latin', gender:'Male'},
      {fullname: 'Grace Hopper', birthdate:'December 9, 1906',languages:'English(UK)', gender:'Female'},
      {fullname: 'Margaret Hamilton', birthdate:'August 17, 1936',languages:'English(US), French', gender:'Female'},
      {fullname: 'Glenn Clarke', birthdate:'June 24, 1917',languages:'German, French, Latin', gender:'Male'},
    ];  
    this.value = this.value + (this.userData.length * 10);
    var res = {};
    this.userData.forEach(function(v) {
      res[v.gender] = (res[v.gender] || 0) + 1;
    })
    this.maleUsers = res['Male'];
    this.femaleUsers = res['Female']
  }

  setFlag(test){
    console.log(test)
    this.popupFlag = false;
    this.popupFlag = true;
  }

  savedatafromchild(e){
    this.userData.push(e);
    this.countMaleFdata(this.userData);
  }

  countMaleFdata(gdata){
    this.value = 0;
    this.value = this.value + (gdata.length * 10);
    var res = {};
    gdata.forEach(function(v) {
      res[v.gender] = (res[v.gender] || 0) + 1;
    })
    this.maleUsers = res['Male'];
    this.femaleUsers = res['Female'];
    this.visibleSidebar1 = true;
  }

  getflagvalue(){
    this.popupFlag = false;
    this.visibleSidebar1 = true;
  }

}
