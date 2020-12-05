import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class UserAddComponent implements OnInit {
  @Input() popupFlag;

  @Output() saveData: EventEmitter<any> = new EventEmitter();
  @Output() statusflgfalse: EventEmitter<any> = new EventEmitter();

  data: any ={
    fullname: '',
    birthdate:'',
    languages:'',
    gender:'',
    about:''
  }
  selectedLang: any = [];
  languages: any = [];
  selectedValue: string;

  displayModal: boolean = false

  constructor() {
    this.languages = [
      {id:1, name:'Spanish'},
      {id:2, name:'Latin'},
      {id:3, name:'English(UK)'},
      {id:4, name:'English(US)'},
      {id:5, name:'French'},
      {id:6, name:'German'}

    ]
   }

  ngOnInit(): void {
  }
  onSubmitDetails(e){
    this.popupFlag = false;
    this.data.languages = Object.values(this.selectedLang);
    let arrstr = [];
    debugger
    for(let vl of this.data.languages){
      arrstr.push(vl['name']);
    }
    this.data.gender = this.selectedValue;
    this.data.languages = arrstr.toString();
    this.saveData.emit(this.data);
    this.formclear()
  }
  formclear(){
    this.data ={
      fullname: '',
      birthdate:'',
      languages:'',
      gender:'',
      about:''
    }
    this.selectedLang = [];
    this.selectedValue = '';
  }
  changeflag(e){
    this.statusflgfalse.emit(false);
  }

}
