export const Pokedex: {[speciesid: string]: SpeciesData} = {
	folovo: {
		num: 1001,
		name: "Folovo",
		types: ["Grass"],
		baseStats: {hp: 40, atk: 67, def: 40, spa: 48, spd: 40, spe: 75},
		abilities: {0: "Overgrow", H: "Swift Swim"},
		weightkg: 5,
		evos: ["Sworchid"],
	},
	sworchid: {
		num: 1002,
		name: "Sworchid",
		types: ["Grass", "Fighting"],
		baseStats: {hp: 60, atk: 97, def: 49, spa: 70, spd: 49, spe: 95},
		abilities: {0: "Overgrow", H: "Swift Swim"},
		weightkg: 14,
		prevo: "Folovo",
		evos: ["Esplada"],
	},
	esplada: {
		num: 1003,
		name: "Esplada",
		types: ["Grass", "Fighting"],
		baseStats: {hp: 80, atk: 112, def: 69, spa: 80, spd: 69, spe: 120},
		abilities: {0: "Overgrow", H: "Swift Swim"},
		weightkg: 26,
		prevo: "Sworchid",
	},
	peepin: {
		num: 1004,
		name: "Peepin",
		types: ["Fire"],
		baseStats: {hp: 40, atk: 45, def: 60, spa: 70, spd: 45, spe: 50},
		abilities: {0: "Blaze", H: "Punk Rock"},
		weightkg: 1.7,
		evos: ["Scareech"],
	},
	scareech: {
		num: 1005,
		name: "Scareech",
		types: ["Fire", "Flying"],
		baseStats: {hp: 50, atk: 61, def: 80, spa: 94, spd: 70, spe: 65},
		abilities: {0: "Blaze", H: "Punk Rock"},
		weightkg: 10,
		prevo: "Peepin",
		evos: ["Macawphony"],
	},
	macawphony: {
		num: 1006,
		name: "Macawphony",
		types: ["Fire", "Flying"],
		baseStats: {hp: 70, atk: 71, def: 100, spa: 124, spd: 80, spe: 85},
		abilities: {0: "Blaze", H: "Punk Rock"},
		weightkg: 30,
		prevo: "Scareech",
	},
	pescafin: {
		num: 1007,
		name: "Pescafin",
		types: ["Water"],
		baseStats: {hp: 50, atk: 61, def: 72, spa: 41, spd: 40, spe: 46},
		abilities: {0: "Torrent", H: "Rock Head"},
		weightkg: 6,
		evos: ["Pedrowana"],
	},
	pedrowana: {
		num: 1008,
		name: "Pedrowana",
		types: ["Water", "Rock"],
		baseStats: {hp: 70, atk: 81, def: 92, spa: 61, spd: 50, spe: 66},
		abilities: {0: "Torrent", H: "Rock Head"},
		weightkg: 20,
		prevo: "Pescafin",
		evos: ["Arapaitan"],
	},
	arapaitan: {
		num: 1009,
		name: "Arapaitan",
		types: ["Water", "Rock"],
		baseStats: {hp: 90, atk: 101, def: 122, spa: 81, spd: 60, spe: 76},
		abilities: {0: "Torrent", H: "Rock Head"},
		weightkg: 80,
		prevo: "Pedrowana",
	},
	brazube: {
		num: 1010,
		name: "Brazubê",
		types: ["Normal", "Poison"],
		baseStats: {hp: 55, atk: 50, def: 60, spa: 20, spd: 45, spe: 20},
		abilities: {0: "Poison Point", 1: "Rough Skin", H: "Poison Touch"},
		weightkg: 1,
		evos: ["Brazupine"],
	},
	brazupine: {
		num: 1011,
		name: "Brazupine",
		types: ["Normal", "Poison"],
		baseStats: {hp: 80, atk: 80, def: 100, spa: 40, spd: 70, spe: 80},
		abilities: {0: "Poison Point", 1: "Rough Skin", H: "Poison Touch"},
		weightkg: 20,
		prevo: "Brazubê",
	},
};
