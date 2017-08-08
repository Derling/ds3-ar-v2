import { Component,OnInit } from '@angular/core';
import { WeaponDataService } from './weapon-data.service';
import 'rxjs/add/operator/map';
import { CLASSES } from './classes'; 
import { Calculator } from './Calculator';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  weapons = [];
  currentWeapon: {};
  classes = CLASSES;
  base_dmgs : {}
  calculator : Calculator;
  stats : {};
  infusions = ['Blessed','Blood','Chaos','Crystal','Dark',
	'Deep','Fire','Heavy','Hollow','Lightning','Normal','Poison','Raw','Refined',
	'Sharp','Simple'];
  infIndex = 10;
  currentClass = 0;
  currentLevel: number;
  constructor(private service: WeaponDataService){}
  ngOnInit() {
	  this.service.getWeapons().then(response => this.setWeapons(response));
  }
  setWeapons(response: any) {
	  this.weapons = response;
	  this.currentWeapon = this.weapons[0];
	  this.base_dmgs = this.currentWeapon['base_damages'][this.infusions[this.infIndex]];
	  this.stats = {str : this.classes[this.currentClass].str,
					dex : this.classes[this.currentClass].dex,
					int : this.classes[this.currentClass].int,
					faith : this.classes[this.currentClass].faith,
					luck : this.classes[this.currentClass].luck };
	  this.calculator = new Calculator(this.currentWeapon,
				this.infusions[this.infIndex],this.stats);
	  this.currentLevel = this.classes[this.currentClass].level;
  }
  chooseWeapon(index: number) {
	  this.currentWeapon = this.weapons[index];
	  this.infIndex = 10;
	  this.currentClass = 0;
	  this.base_dmgs = this.currentWeapon['base_damages'][this.infusions[this.infIndex]];
	  this.stats = {str : this.classes[this.currentClass].str,
					dex : this.classes[this.currentClass].dex,
					int : this.classes[this.currentClass].int,
					faith : this.classes[this.currentClass].faith,
					luck : this.classes[this.currentClass].luck };
	  this.calculator = new Calculator(this.currentWeapon,
				this.infusions[this.infIndex],this.stats);
  }
  changeClass() {
	  this.stats = {str : this.classes[this.currentClass].str,
					dex : this.classes[this.currentClass].dex,
					int : this.classes[this.currentClass].int,
					faith : this.classes[this.currentClass].faith,
					luck : this.classes[this.currentClass].luck };
	  this.calculator = new Calculator(this.currentWeapon,
				this.infusions[this.infIndex],this.stats);
	  this.currentLevel = this.classes[this.currentClass].level;
  }
  changeStat(stat: string, increment: number){
	  if(this.stats[stat] == this.classes[this.currentClass][stat] && increment == 1){
		    this.stats[stat] = this.stats[stat] + increment;
			this.currentLevel += increment;
			this.calculator = new Calculator(this.currentWeapon,this.infusions[this.infIndex],this.stats);
	  }
	  else if(this.stats[stat] == 99 && increment == 1) {}
	  else if(this.stats[stat] == this.classes[this.currentClass][stat] && increment != 1){}
	  else if(this.stats[stat] > this.classes[this.currentClass][stat] && this.stats[stat] < 100) { 
			this.stats[stat] = this.stats[stat] + increment;
			this.currentLevel += increment;
			this.calculator = new Calculator(this.currentWeapon,this.infusions[this.infIndex],this.stats);
	  }
	  else {
		    this.stats[stat] = this.stats[stat] + increment;
			this.currentLevel += increment;
			this.calculator = new Calculator(this.currentWeapon,this.infusions[this.infIndex],this.stats);
	  }
  }
  changeInfusion() {
	  this.calculator = new Calculator(this.currentWeapon,
				this.infusions[this.infIndex],this.stats);
	  this.base_dmgs = this.currentWeapon['base_damages']
				[this.infusions[this.infIndex]];
  }
  evalStats(): boolean {
	  return (this.stats['str'] >= this.currentWeapon['basic_data'].str_req) &&
			 (this.stats['dex'] >= this.currentWeapon['basic_data'].dex_req) &&
			 (this.stats['int'] >= this.currentWeapon['basic_data'].int_req) &&
		     (this.stats['faith'] >= this.currentWeapon['basic_data'].faith_req);
  }
}
