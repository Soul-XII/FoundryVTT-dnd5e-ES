// dnd5eESSheet
// @author Cosmo Corban

import { DND5E } from "../../systems/dnd5e/module/config.js";
import { ActorSheet5eCharacter as Actor} from "../../systems/dnd5e/module/actor/sheets/character.js";

//Translate non localized strings from the DND5E.CONFIG
Hooks.once('ready', function() {
	let lang = game.i18n.lang;
	if (lang === "es") {
// Configure Optional Character Flags
		DND5E.characterFlags = {
			"powerfulBuild": {
			  name: "Forma Poderosa",
			  hint: "Proporciona una capacidad de carga superior.",
			  section: "Atributos Raciales",
			  type: Boolean
			},
			"savageAttacks": {
			  name: "Ataques Salvajes",
			  hint: "Añade un dado de daño extra en los críticos.",
			  section: "Atributos Raciales",
			  type: Boolean
			},
			"elvenAccuracy": {
			  name: "Precisión Élfica",
			  hint: "Tira un d20 extra con ventaja para Des, Int, Sab, o Car.",
			  section: "Atributos Raciales",
			  type: Boolean
			},
			"halflingLucky": {
			  name: "Suerte de Mediano",
			  hint: "Vuelve a tirar pruebas de d20 cuando salga 1.",
			  section: "Atributos Raciales",
			  type: Boolean
			},
			"initiativeAdv": {
			  name: "Vantaja en Iniciativa",
			  hint: "De rasgos del personaje u objetos mágicos.",
			  section: "Rasgos",
			  type: Boolean
			},
			"initiativeAlert": {
			  name: "Dote Alerta",
			  hint: "Provee +5 a la Iniciativa.",
			  section: "Rasgos",
			  type: Boolean
			},
			"jackOfAllTrades": {
			  name: "Aprendiz de Mucho",
			  hint: "Mitad de Competencia a las pruebas de habilidad en las que no eres Competente.",
			  section: "Rasgos",
			  type: Boolean
			},
			"observantFeat": {
			  name: "Observant Feat",
			  hint: "Adquieres un modificador de +5 a tu Percepción e Investigación pasivas.",
			  skills: ['prc','inv'],
			  section: "Rasgos",
			  type: Boolean
			},
			"remarkableAthlete": {
			  name: "Atleta Sobresaliente",
			  hint: "Mitad de Competencia (redondiado hacia arriba) a las pruebas de habilidad físicas y a la Iniciativa.",
			  abilities: ['str','dex','con'],
			  section: "Rasgos",
			  type: Boolean
			},
			"weaponCriticalThreshold": {
			  name: "Umbral de Golpe Crítico",
			  hint: "Permite una mayor probabilidad de golpe crítico; por ejemplo, Crítico Mejorado o Crítico Superior.",
			  section: "Rasgos",
			  type: Number,
			  placeholder: 20
			},
		};
	}
	
});

export class ActorSheet5eCharacter extends Actor {
	static get defaultOptions() {
	  return mergeObject(super.defaultOptions, {
			classes: ["dnd5eES", "dnd5e", "sheet", "actor", "character"],
			width: 800,
			height: 800
		});
	}
}

Hooks.once('ready', function() {
	let lang = game.i18n.lang;
	if (lang === "es") {
		Actors.unregisterSheet("dnd5e", Actor);
		Actors.registerSheet('dnd5e', ActorSheet5eCharacter, {
			types: ['character'],
			makeDefault: true
		});
	}
});
