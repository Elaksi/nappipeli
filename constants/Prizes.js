const prizes = {
  NONE: 0, 
  LARGE: 1,
  MEDIUM: 2,
  SMALL: 3,
 };

prizes.properties = {
	[prizes.NONE] : { name: "Ei mitään", congratulation: "Ei voittoa..." },
	[prizes.LARGE] : { name: "Jättipotti", congratulation: "Voitit jättipotin! Onneksi olkoon!" },
	[prizes.MEDIUM] : { name: "Ihan ok palkinto", congratulation: "Jättipotti jäi välistä, mutta voitit keskisuuren palkinnon. Onneksi olkoon!" },
	[prizes.SMALL] : { name: "Lohdutuspalkinto", congratulation: "Jee! Voitit lohdutuspalkinnon! Onneksi olkoon!" },
};

export default prizes;