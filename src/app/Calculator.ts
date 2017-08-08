import { SATURATION } from './saturation.service';


export class Calculator{
	saturation = SATURATION;
	totalDmg = 0;
	bonusPhysical = 0;
	bonusMagic = 0;
	bonusLightning = 0;
	bonusFire = 0;
	bonusDark = 0;
	bonusLuck = 0;	
	constructor(public weapon: {},public infusion:string,
	public stats: {}) { this.init(); };

	private init() : void {
		this.calculateBonuses();
		this.calculateTotalDmg();
	};
	
	private calculateBonuses() : void {
		this.calculatePhysicalBonus();
		this.calculateMagicBonus();
		this.calculateFireBonus();
		this.calculateLightningBonus();
		this.calculateDarkBonus();
		this.calculateLuckBonus();
	};

	private calculatePhysicalBonus() : void {
		this.bonusPhysical = 
			this.weapon['base_damages'][this.infusion]['physical'] *
			((this.weapon['scaling_coeff'][this.infusion][0]/100 * 
			this.getSaturation(this.weapon['saturation_index'][this.infusion]['physical'],this.stats['str'])/100) +
			(this.weapon['scaling_coeff'][this.infusion][1]/100 * 
			this.getSaturation(this.weapon['saturation_index'][this.infusion]['physical'],this.stats['dex'])/100));
			if(this.infusion == 'Blessed') {
				this.bonusPhysical += 
				this.weapon['base_damages'][this.infusion]['physical'] *
				((this.weapon['scaling_coeff'][this.infusion][3]/100 * 
				this.getSaturation(this.weapon['saturation_index'][this.infusion]['physical'],this.stats['faith'])/100));
			}
	};

	private calculateLuckBonus() : void {
		this.bonusLuck =
			this.weapon['base_damages'][this.infusion]['physical'] *
			(this.weapon['scaling_coeff'][this.infusion][4]/100 *
			this.getSaturation(this.weapon['saturation_index'][
			this.infusion]['physical'],this.stats['luck'])/100);
	};

	private calculateMagicBonus() : void {
		this.bonusMagic = 
			this.weapon['base_damages'][this.infusion]['magic'] *
			((this.weapon['scaling_coeff'][this.infusion][2]/100 * 
			this.getSaturation(this.weapon['saturation_index'][this.infusion]['magic'],this.stats['int'])/100));
	};

	private calculateFireBonus() : void {
		this.bonusFire = 
			this.weapon['base_damages'][this.infusion]['fire'] *
			((this.weapon['scaling_coeff'][this.infusion][2]/100 * 
			this.getSaturation(this.weapon['saturation_index'][this.infusion]['fire'],this.stats['int'])/100) +
			(this.weapon['scaling_coeff'][this.infusion][3]/100 * 
			this.getSaturation(this.weapon['saturation_index'][this.infusion]['fire'],this.stats['faith'])/100));
	};

	private calculateLightningBonus() : void {
		this.bonusLightning = 
			this.weapon['base_damages'][this.infusion]['lightning'] *
			((this.weapon['scaling_coeff'][this.infusion][3]/100 * 
			this.getSaturation(this.weapon['saturation_index'][this.infusion]['lightning'],this.stats['faith'])/100))
	};

	private calculateDarkBonus() : void {
		this.bonusDark = 
			this.weapon['base_damages'][this.infusion]['dark'] *
			((this.weapon['scaling_coeff'][this.infusion][2]/100 * 
			this.getSaturation(this.weapon['saturation_index'][this.infusion]['dark'],this.stats['int'])/100) +
			(this.weapon['scaling_coeff'][this.infusion][3]/100 * 
			this.getSaturation(this.weapon['saturation_index'][this.infusion]['dark'],this.stats['faith'])/100));
	};

	private getSaturation(index : number,level : number) {
		for(const i of this.saturation) {
			if(i['Curve Index'] == index) {
				return +i['Level ' + level];
			};
		};
	};

	private calculateTotalDmg() : void {
		this.totalDmg = Math.floor(this.weapon['base_damages'][this.infusion]['physical'] + this.weapon['base_damages'][this.infusion]['magic'] + this.weapon['base_damages'][this.infusion]['fire'] + this.weapon['base_damages'][this.infusion]['lightning'] + this.weapon['base_damages'][this.infusion]['dark'] + this.bonusPhysical + this.bonusMagic + this.bonusFire + this.bonusLightning + this.bonusDark + this.bonusLuck);
	};
};