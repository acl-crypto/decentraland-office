import {getCurrenyRates, getCryptokittyData} from "modules/coinapi";

// buttons for keyboard

	export const keyboards: {key_name: string, key_x: number, key_y: number, key_width: number}[] =
		[
			{key_name: "1", key_x: -0.35, key_y: 0.361, key_width: 0.065},
			{key_name: "2", key_x: -0.28, key_y: 0.361, key_width: 0.065},
			{key_name: "3", key_x: -0.205, key_y: 0.361, key_width: 0.065},
			{key_name: "4", key_x: -0.125, key_y: 0.361, key_width: 0.065},
			{key_name: "5", key_x: -0.05, key_y: 0.361, key_width: 0.065},
			{key_name: "6", key_x: 0.035, key_y: 0.361, key_width: 0.065},
			{key_name: "7", key_x: 0.12, key_y: 0.361, key_width: 0.065},
			{key_name: "8", key_x: 0.19, key_y: 0.361, key_width: 0.065},
			{key_name: "9", key_x: 0.27, key_y: 0.361, key_width: 0.065},
			{key_name: "0", key_x: 0.34, key_y: 0.361, key_width: 0.065},
			{key_name: "Q", key_x: -0.44, key_y: 0.16, key_width: 0.065},
			{key_name: "W", key_x: -0.36, key_y: 0.16, key_width: 0.065},
			{key_name: "E", key_x: -0.285, key_y: 0.16, key_width: 0.065},
			{key_name: "R", key_x: -0.206, key_y: 0.16, key_width: 0.065},
			{key_name: "T", key_x: -0.126, key_y: 0.16, key_width: 0.065},
			{key_name: "Z", key_x: -0.052, key_y: 0.16, key_width: 0.065},
			{key_name: "U", key_x: 0.035, key_y: 0.16, key_width: 0.065},
			{key_name: "I", key_x: 0.12, key_y: 0.16, key_width: 0.065},
			{key_name: "O", key_x: 0.19, key_y: 0.16, key_width: 0.065},
			{key_name: "P", key_x: 0.27, key_y: 0.16, key_width: 0.065},
			{key_name: "A", key_x: -0.44, key_y: -0.03, key_width: 0.065},
			{key_name: "S", key_x: -0.36, key_y: -0.03, key_width: 0.065},
			{key_name: "D", key_x: -0.285, key_y: -0.03, key_width: 0.065},
			{key_name: "F", key_x: -0.205, key_y: -0.03, key_width: 0.065},
			{key_name: "G", key_x: -0.126, key_y: -0.03, key_width: 0.065},
			{key_name: "H", key_x: -0.052, key_y: -0.03, key_width: 0.065},
			{key_name: "J", key_x: 0.035, key_y: -0.03, key_width: 0.065},
			{key_name: "K", key_x: 0.12, key_y: -0.03, key_width: 0.065},
			{key_name: "L", key_x: 0.19, key_y: -0.03, key_width: 0.065},
			{key_name: "+", key_x: 0.27, key_y: -0.03, key_width: 0.065},
			{key_name: "Y", key_x: -0.425, key_y: -0.2, key_width: 0.065},
			{key_name: "X", key_x: -0.345, key_y: -0.2, key_width: 0.065},
			{key_name: "C", key_x: -0.265, key_y: -0.2, key_width: 0.065},
			{key_name: "V", key_x: -0.185, key_y: -0.2, key_width: 0.065},
			{key_name: "B", key_x: -0.11, key_y: -0.2, key_width: 0.065},
			{key_name: "N", key_x: -0.027, key_y: -0.2, key_width: 0.065},
			{key_name: "M", key_x: 0.045, key_y: -0.2, key_width: 0.065},
			{key_name: ",", key_x: 0.12, key_y: -0.2, key_width: 0.065},
			{key_name: ".", key_x: 0.19, key_y: -0.2, key_width: 0.065},
			{key_name: "-", key_x: 0.28, key_y: -0.2, key_width: 0.065},
			{key_name: " ", key_x: -0.017, key_y: -0.362, key_width: 0.15},
			{key_name: "!", key_x: 0.13, key_y: -0.362, key_width: 0.065},
			{key_name: "?", key_x: 0.20, key_y: -0.362, key_width: 0.065},
			{key_name: "#", key_x: 0.29, key_y: -0.362, key_width: 0.065},
			{key_name: "/", key_x: 0.36, key_y: -0.362, key_width: 0.065},
			{key_name: "*", key_x: -0.265, key_y: -0.362, key_width: 0.065},
			{key_name: "@", key_x: -0.192, key_y: -0.362, key_width: 0.065}

        ];
        
// method for keyboard

// KeyboardParent
export const KeyboardParent = new Entity()
KeyboardParent.add(new Transform({
	position: new Vector3(-8, 5, 6),
	rotation: Quaternion.Euler(0,270,0),
	scale: new Vector3(2,1.2,1)
}))
engine.addEntity(KeyboardParent);

// KeyboardParentBackground

let BoxWCollisions = new BoxShape();
BoxWCollisions.withCollisions = true;

let KeyboardParentBackgroundBox = new Entity();
KeyboardParentBackgroundBox.add(BoxWCollisions);
KeyboardParentBackgroundBox.add(new Transform({position: new Vector3(-0.4,0.8,0.055), rotation: Quaternion.Euler(0,0,0), scale: new Vector3(2,2.7,0.1)}));
engine.addEntity(KeyboardParentBackgroundBox);
let KeyboardParentBackgroundBoxMaterial = new Material();
KeyboardParentBackgroundBoxMaterial.albedoTexture = "textures/Elec_albedo.png";
/*
KeyboardParentBackgroundBoxMaterial.alphaTexture = "textures/Elec_ao.png"; // ambient?mask?roughness?
KeyboardParentBackgroundBoxMaterial.emissiveTexture = "textures/Elec_roughness.png"; // ambient?mask?roughness?
KeyboardParentBackgroundBoxMaterial.bumpTexture = "textures/Elec_normal.png";
*/
KeyboardParentBackgroundBox.add(KeyboardParentBackgroundBoxMaterial);
KeyboardParentBackgroundBox.setParent(KeyboardParent);

// KeyboardBackGround
export const KeyboardBackground = new Entity()
KeyboardBackground.set(new PlaneShape);
export const KeyboardBackgroundMaterial = new Material();
KeyboardBackgroundMaterial.albedoTexture = "textures/keyboard.jpg";
KeyboardBackground.add(KeyboardBackgroundMaterial);
engine.addEntity(KeyboardBackground);
KeyboardBackground.setParent(KeyboardParent);

// KeyboardButtons
export let renderKeyboardButtonsArray = [];
export const buttonMaterial = new Material();
buttonMaterial.albedoColor = Color3.Red();
buttonMaterial.hasAlpha = true;
buttonMaterial.alpha = 0;
export let KeyboardInputPlaneText = "";

for (let i = 0; i < keyboards.length; i ++){

	let KeyboardButton = new Entity;
	KeyboardButton.set(new PlaneShape);
	KeyboardButton.add(new Transform({
		position: new Vector3(keyboards[i].key_x, keyboards[i].key_y, -0.01),
		scale: new Vector3(keyboards[i].key_width,0.14,1)
	}));
	engine.addEntity(KeyboardButton)
	KeyboardButton.set(buttonMaterial);
	KeyboardButton.setParent(KeyboardParent);
	KeyboardButton.add(
		new OnClick(e => {
			engine.removeEntity(KeyboardInputPlaneTextEntity);
			let oldkeyboardScreenText = KeyboardInputPlaneText;
			let addkeyboardScreenText = keyboards[i].key_name;
			let newkeyboardScreenText = oldkeyboardScreenText.concat(addkeyboardScreenText);
			KeyboardInputPlaneText = newkeyboardScreenText;
		
			KeyboardInputPlaneTextEntity = new Entity;
			KeyboardInputPlaneTextEntity.add(new Transform({
				position: new Vector3(0,0.8,-0.01),
				scale: new Vector3(0.7,0.8,1)
			}));
		
			KeyboardInputPlaneTextEntityText = new TextShape(KeyboardInputPlaneText);
			KeyboardInputPlaneTextEntityText.fontSize = 120;
			KeyboardInputPlaneTextEntityText.color = Color3.Yellow();
			KeyboardInputPlaneTextEntityText.fontFamily = "Arial, Helvetica, sans-serif";
			KeyboardInputPlaneTextEntityText.hAlign = "left";
			KeyboardInputPlaneTextEntityText.width = 1;
			KeyboardInputPlaneTextEntityText.height = 0.5;
			KeyboardInputPlaneTextEntity.add(KeyboardInputPlaneTextEntityText);
			KeyboardInputPlaneTextEntity.get(TextShape).shadowColor = Color3.Gray();
			KeyboardInputPlaneTextEntity.get(TextShape).shadowOffsetY = 1;
			engine.addEntity(KeyboardInputPlaneTextEntity);
			KeyboardInputPlaneTextEntity.setParent(KeyboardParent);
		
				log(keyboards[i].key_name + KeyboardInputPlaneText);
				})
			)
		


}

// KeyBoard Delete Button
const KeyboardButtonDelete = new Entity;
KeyboardButtonDelete.set(new PlaneShape);
KeyboardButtonDelete.add(new Transform({
	position: new Vector3(0.41, 0.21, -0.01),
	scale: new Vector3(0.14,0.15,1)
}));
engine.addEntity(KeyboardButtonDelete);
KeyboardButtonDelete.set(buttonMaterial);
KeyboardButtonDelete.setParent(KeyboardParent);

KeyboardButtonDelete.add(
	new OnClick(e => {
		engine.removeEntity(KeyboardInputPlaneTextEntity);
		let oldkeyboardScreenText = KeyboardInputPlaneText;
		let delkeyboardScreenText = oldkeyboardScreenText.substr(0, oldkeyboardScreenText.length-1);
		KeyboardInputPlaneText = delkeyboardScreenText;
	
		KeyboardInputPlaneTextEntity = new Entity;
		KeyboardInputPlaneTextEntity.add(new Transform({
			position: new Vector3(0,0.8,-0.01),
			scale: new Vector3(0.7,0.8,1)
		}));

		KeyboardInputPlaneTextEntityText = new TextShape(KeyboardInputPlaneText);
		KeyboardInputPlaneTextEntityText.fontSize = 120;
		KeyboardInputPlaneTextEntityText.color = Color3.Yellow();
		KeyboardInputPlaneTextEntityText.fontFamily = "Arial, Helvetica, sans-serif";
		KeyboardInputPlaneTextEntityText.hAlign = "left";
		KeyboardInputPlaneTextEntityText.width = 1;
		KeyboardInputPlaneTextEntityText.height = 0.5;
		KeyboardInputPlaneTextEntity.add(KeyboardInputPlaneTextEntityText);
		KeyboardInputPlaneTextEntity.get(TextShape).shadowColor = Color3.Gray();
		KeyboardInputPlaneTextEntity.get(TextShape).shadowOffsetY = 1;
		engine.addEntity(KeyboardInputPlaneTextEntity);
		KeyboardInputPlaneTextEntity.setParent(KeyboardParent);
	
			})
)

// KeyBoard Return Button
export const returnKeyKeyboard = new Entity;
returnKeyKeyboard.set(new PlaneShape);
returnKeyKeyboard.add(new Transform({
	position: new Vector3(0.39, 0, -0.01),
	scale: new Vector3(0.15,0.15,1)
}));
engine.addEntity(returnKeyKeyboard);
returnKeyKeyboard.set(buttonMaterial);
returnKeyKeyboard.setParent(KeyboardParent);

returnKeyKeyboard.add(
	new OnClick(e => {
		engine.removeEntity(KeyboardInputPlaneTextEntity);

				// CurrencyExchange - Cryptokitties
				switch(ScreenSwitch) {
					case 1:
						getCurrenyRates(KeyboardInputPlaneText);
						log('testswitch1' + KeyboardInputPlaneText);
						break;
					case 2:
						getCryptokittyData(KeyboardInputPlaneText);

								log('testswitch2' + KeyboardInputPlaneText);
						break;
		
					default:
								log('statedefault');
				} 

		KeyboardInputPlaneText = "";
	
		KeyboardInputPlaneTextEntity = new Entity;
		KeyboardInputPlaneTextEntity.add(new Transform({
			position: new Vector3(0,0.8,-0.01),
			scale: new Vector3(0.7,0.8,1)
		}));

		KeyboardInputPlaneTextEntityText = new TextShape(KeyboardInputPlaneText);
		KeyboardInputPlaneTextEntityText.fontSize = 120;
		KeyboardInputPlaneTextEntityText.color = Color3.Yellow();
		KeyboardInputPlaneTextEntityText.fontFamily = "Arial, Helvetica, sans-serif";
		KeyboardInputPlaneTextEntityText.hAlign = "left";
		KeyboardInputPlaneTextEntityText.width = 1;
		KeyboardInputPlaneTextEntityText.height = 0.5;
		KeyboardInputPlaneTextEntity.add(KeyboardInputPlaneTextEntityText);
		KeyboardInputPlaneTextEntity.get(TextShape).shadowColor = Color3.Gray();
		KeyboardInputPlaneTextEntity.get(TextShape).shadowOffsetY = 1;
		engine.addEntity(KeyboardInputPlaneTextEntity);
		KeyboardInputPlaneTextEntity.setParent(KeyboardParent);

	})
)

// KeyBoard Input Area Background
export const KeyboardInputPlaneBackground = new Entity;
KeyboardInputPlaneBackground.set(new PlaneShape);
KeyboardInputPlaneBackground.add(new Transform({
	position: new Vector3(0,0.8,0),
	scale: new Vector3(0.8,0.4,1)
}));
export const KeyboardInputPlaneBackgroundMaterial = new Material;
KeyboardInputPlaneBackgroundMaterial.albedoColor = Color3.Black();
KeyboardInputPlaneBackground.set(KeyboardInputPlaneBackgroundMaterial);
KeyboardInputPlaneBackground.setParent(KeyboardParent);
engine.addEntity(KeyboardInputPlaneBackground);

// KeyBoard Area Text Area
export let KeyboardInputPlaneTextEntity = new Entity;
// KeyboardInputPlaneTextEntity.set(new TextShape);
KeyboardInputPlaneTextEntity.add(new Transform({
  position: new Vector3(0,0.8,-0.01),
  scale: new Vector3(0.7,0.8,1)
}));

export let KeyboardInputPlaneTextEntityText = new TextShape(KeyboardInputPlaneText);
KeyboardInputPlaneTextEntityText.fontSize = 120;
KeyboardInputPlaneTextEntityText.color = Color3.Yellow();
KeyboardInputPlaneTextEntityText.fontFamily = "Arial, Helvetica, sans-serif";
KeyboardInputPlaneTextEntityText.hAlign = "left";
KeyboardInputPlaneTextEntityText.width = 1;
KeyboardInputPlaneTextEntityText.height = 0.5;
KeyboardInputPlaneTextEntity.add(KeyboardInputPlaneTextEntityText);
KeyboardInputPlaneTextEntity.get(TextShape).shadowColor = Color3.Gray();
KeyboardInputPlaneTextEntity.get(TextShape).shadowOffsetY = 1;
engine.addEntity(KeyboardInputPlaneTextEntity);
KeyboardInputPlaneTextEntity.setParent(KeyboardParent);

// KeyBoard Screen
export let KeyBoardScreen = new Entity;
KeyBoardScreen.set(new PlaneShape);
KeyBoardScreen.add(new Transform({
	position: new Vector3(0,1.6,0),
	scale: new Vector3(1,1,1)
}));
engine.addEntity(KeyBoardScreen);
export let KeyBoardScreenMaterial = new Material();
KeyBoardScreenMaterial.albedoColor = Color3.Black();
KeyBoardScreen.add(KeyBoardScreenMaterial);
KeyBoardScreen.setParent(KeyboardParent);

export let CryptoKittyScreenUpperRegion = new Entity;
CryptoKittyScreenUpperRegion.add(new Transform({
	position: new Vector3(0,2,-0.01),
	scale: new Vector3(0.7,0.8,1)
  }));
let CryptoKittyScreenUpperRegionTextValue = "(number)"
export let CryptoKittyScreenUpperRegionText = new TextShape(CryptoKittyScreenUpperRegionTextValue);
CryptoKittyScreenUpperRegionText.fontSize = 120;
CryptoKittyScreenUpperRegionText.color = Color3.Yellow();
CryptoKittyScreenUpperRegionText.fontFamily = "Arial, Helvetica, sans-serif";
CryptoKittyScreenUpperRegionText.hAlign = "middle";
CryptoKittyScreenUpperRegionText.width = 1;
CryptoKittyScreenUpperRegionText.height = 0.5;
CryptoKittyScreenUpperRegion.add(CryptoKittyScreenUpperRegionText);
CryptoKittyScreenUpperRegion.get(TextShape).shadowColor = Color3.Gray();
CryptoKittyScreenUpperRegion.get(TextShape).shadowOffsetY = 1;
engine.addEntity(CryptoKittyScreenUpperRegion);
CryptoKittyScreenUpperRegion.setParent(KeyboardParent);

export let KeyBoardScreenCryptokitty = new Entity;
KeyBoardScreenCryptokitty.set(new PlaneShape);
KeyBoardScreenCryptokitty.add(new Transform({
	position: new Vector3(0,1.55,-0.01),
	scale: new Vector3(0.4,0.6,0.6)
}));
engine.addEntity(KeyBoardScreenCryptokitty);
let KeyBoardScreenCryptokittyMaterialPicture = "images/cksingle.jpg";
export let KeyBoardScreenCryptokittyMaterial = new Material();
KeyBoardScreenCryptokittyMaterial.albedoTexture = KeyBoardScreenCryptokittyMaterialPicture;
KeyBoardScreenCryptokitty.add(KeyBoardScreenCryptokittyMaterial);
KeyBoardScreenCryptokitty.setParent(KeyboardParent);

export let CryptoKittyScreenLowerRegion = new Entity;
CryptoKittyScreenLowerRegion.add(new Transform({
	position: new Vector3(0,1.2,-0.01),
	scale: new Vector3(0.2,0.2,1)
  }));
let CryptoKittyScreenLowerRegionTextValue = "(Name of Cryptokitty)";
export let CryptoKittyScreenLowerRegionText = new TextShape("Name: " + CryptoKittyScreenLowerRegionTextValue);
CryptoKittyScreenLowerRegionText.fontSize = 120;
CryptoKittyScreenLowerRegionText.color = Color3.Yellow();
CryptoKittyScreenLowerRegionText.fontFamily = "Arial, Helvetica, sans-serif";
CryptoKittyScreenLowerRegionText.hAlign = "middle";
CryptoKittyScreenLowerRegionText.width = 5;
CryptoKittyScreenLowerRegionText.height = 0.5;
CryptoKittyScreenLowerRegion.add(CryptoKittyScreenLowerRegionText);
CryptoKittyScreenLowerRegion.get(TextShape).shadowColor = Color3.Gray();
CryptoKittyScreenLowerRegion.get(TextShape).shadowOffsetY = 1;
engine.addEntity(CryptoKittyScreenLowerRegion);
CryptoKittyScreenLowerRegion.setParent(KeyboardParent);

export function ChangeCryptoKittyScreen(CryptoKittyScreenUpperRegionTextValue, KeyBoardScreenCryptokittyMaterialPicture, CryptoKittyScreenLowerRegionTextValue){
	
	engine.removeEntity(CryptoKittyScreenUpperRegion);
	CryptoKittyScreenUpperRegion = new Entity;
	CryptoKittyScreenUpperRegion.add(new Transform({
		position: new Vector3(0,2,-0.01),
		scale: new Vector3(0.7,0.8,1)
	  }));
	CryptoKittyScreenUpperRegionText = new TextShape(CryptoKittyScreenUpperRegionTextValue);
	CryptoKittyScreenUpperRegionText.fontSize = 120;
	CryptoKittyScreenUpperRegionText.color = Color3.Yellow();
	CryptoKittyScreenUpperRegionText.fontFamily = "Arial, Helvetica, sans-serif";
	CryptoKittyScreenUpperRegionText.hAlign = "middle";
	CryptoKittyScreenUpperRegionText.width = 1;
	CryptoKittyScreenUpperRegionText.height = 0.5;
	CryptoKittyScreenUpperRegion.add(CryptoKittyScreenUpperRegionText);
	CryptoKittyScreenUpperRegion.get(TextShape).shadowColor = Color3.Gray();
	CryptoKittyScreenUpperRegion.get(TextShape).shadowOffsetY = 1;
	engine.addEntity(CryptoKittyScreenUpperRegion);
	CryptoKittyScreenUpperRegion.setParent(KeyboardParent);

	  	if (ScreenSwitch == 1){
			ScreenSwitch = 2;
	  	} else {
			engine.removeEntity(KeyBoardScreenCryptokitty)
		}

	KeyBoardScreenCryptokitty = new Entity;
	KeyBoardScreenCryptokitty.set(new PlaneShape);
	KeyBoardScreenCryptokitty.add(new Transform({
		position: new Vector3(0,1.55,-0.01),
		scale: new Vector3(0.4,0.6,0.6)
	}));
	engine.addEntity(KeyBoardScreenCryptokitty);
	KeyBoardScreenCryptokittyMaterial = new Material();
	KeyBoardScreenCryptokittyMaterial.albedoTexture = KeyBoardScreenCryptokittyMaterialPicture;
	KeyBoardScreenCryptokitty.add(KeyBoardScreenCryptokittyMaterial);
	KeyBoardScreenCryptokitty.setParent(KeyboardParent);

	engine.removeEntity(CryptoKittyScreenLowerRegion);
	CryptoKittyScreenLowerRegion = new Entity;
	CryptoKittyScreenLowerRegion.add(new Transform({
		position: new Vector3(0,1.2,-0.01),
		scale: new Vector3(0.2,0.2,1)
	  }));
	// let CryptoKittyScreenLowerRegionTextValue = "(Name of Cryptokitty)";
	CryptoKittyScreenLowerRegionText = new TextShape(CryptoKittyScreenLowerRegionTextValue);
	CryptoKittyScreenLowerRegionText.fontSize = 120;
	CryptoKittyScreenLowerRegionText.color = Color3.Yellow();
	CryptoKittyScreenLowerRegionText.fontFamily = "Arial, Helvetica, sans-serif";
	CryptoKittyScreenLowerRegionText.hAlign = "middle";
	CryptoKittyScreenLowerRegionText.width = 5;
	CryptoKittyScreenLowerRegionText.height = 0.5;
	CryptoKittyScreenLowerRegion.add(CryptoKittyScreenLowerRegionText);
	CryptoKittyScreenLowerRegion.get(TextShape).shadowColor = Color3.Gray();
	CryptoKittyScreenLowerRegion.get(TextShape).shadowOffsetY = 1;
	engine.addEntity(CryptoKittyScreenLowerRegion);
	CryptoKittyScreenLowerRegion.setParent(KeyboardParent);

}

export function ChangeCryptoKittyScreenLowerRegionCurrency(CryptoKittyScreenUpperRegionTextValue, CryptoKittyScreenLowerRegionTextValueTotal){
	
	engine.removeEntity(CryptoKittyScreenUpperRegion);
	CryptoKittyScreenUpperRegion = new Entity;
	CryptoKittyScreenUpperRegion.add(new Transform({
		position: new Vector3(0,1.7,-0.01),
		scale: new Vector3(0.4,0.5,1)
	  }));
	CryptoKittyScreenUpperRegionText = new TextShape(CryptoKittyScreenUpperRegionTextValue);
	CryptoKittyScreenUpperRegionText.fontSize = 120;
	CryptoKittyScreenUpperRegionText.color = Color3.Yellow();
	CryptoKittyScreenUpperRegionText.fontFamily = "Arial, Helvetica, sans-serif";
	CryptoKittyScreenUpperRegionText.hAlign = "middle";
	CryptoKittyScreenUpperRegionText.width = 2.5;
	CryptoKittyScreenUpperRegionText.height = 0.5;
	CryptoKittyScreenUpperRegion.add(CryptoKittyScreenUpperRegionText);
	CryptoKittyScreenUpperRegion.get(TextShape).shadowColor = Color3.Gray();
	CryptoKittyScreenUpperRegion.get(TextShape).shadowOffsetY = 1;
	engine.addEntity(CryptoKittyScreenUpperRegion);
	CryptoKittyScreenUpperRegion.setParent(KeyboardParent);
	 	 if (ScreenSwitch == 2){
		engine.removeEntity(KeyBoardScreenCryptokitty);
		ScreenSwitch = 1;
		}	
	engine.removeEntity(CryptoKittyScreenLowerRegion);
	CryptoKittyScreenLowerRegion = new Entity;
	CryptoKittyScreenLowerRegion.add(new Transform({
		position: new Vector3(0,1.4,-0.01),
		scale: new Vector3(0.3,0.3,1)
	  }));
	CryptoKittyScreenLowerRegionText = new TextShape(CryptoKittyScreenLowerRegionTextValueTotal);
	CryptoKittyScreenLowerRegionText.fontSize = 120;
	CryptoKittyScreenLowerRegionText.color = Color3.Yellow();
	CryptoKittyScreenLowerRegionText.fontFamily = "Arial, Helvetica, sans-serif";
	CryptoKittyScreenLowerRegionText.hAlign = "middle";
	CryptoKittyScreenLowerRegionText.width = 5;
	CryptoKittyScreenLowerRegionText.height = 0.5;
	CryptoKittyScreenLowerRegion.add(CryptoKittyScreenLowerRegionText);
	CryptoKittyScreenLowerRegion.get(TextShape).shadowColor = Color3.Gray();
	CryptoKittyScreenLowerRegion.get(TextShape).shadowOffsetY = 1;
	engine.addEntity(CryptoKittyScreenLowerRegion);
	CryptoKittyScreenLowerRegion.setParent(KeyboardParent);

}

// Switch for Screens
export let ScreenSwitch = 2;

// Screen Upper Left

export let ScreenUpperLeftBackground = new Entity;
ScreenUpperLeftBackground.set(new PlaneShape);
ScreenUpperLeftBackground.add(new Transform({
	position: new Vector3(-1,1.4,-0.01),
	scale: new Vector3(0.5,0.5,1)
  }));

export const ScreenUpperLeftBackgroundMaterial = new Material;
ScreenUpperLeftBackgroundMaterial.albedoTexture = "images/cryptocurrencies.png";
ScreenUpperLeftBackgroundMaterial.hasAlpha = true;
ScreenUpperLeftBackgroundMaterial.alpha = 0.4;
ScreenUpperLeftBackground.set(ScreenUpperLeftBackgroundMaterial);
ScreenUpperLeftBackground.setParent(KeyboardParent);
engine.addEntity(ScreenUpperLeftBackground);

export let ScreenUpperLeft = new Entity;

ScreenUpperLeft.add(new Transform({
	position: new Vector3(-1,1.8,-0.01),
	scale: new Vector3(0.2,0.2,1)
  }));
let ScreenUpperLeftTextValue = "Cryptocurrency\nRates";
export let ScreenUpperLeftText = new TextShape(ScreenUpperLeftTextValue);
ScreenUpperLeftText.fontSize = 80;
ScreenUpperLeftText.color = Color3.Red();
ScreenUpperLeftText.fontFamily = "Arial, Helvetica, sans-serif";
ScreenUpperLeftText.hAlign = "middle";
ScreenUpperLeftText.width = 5;
ScreenUpperLeftText.height = 1.5;
ScreenUpperLeft.add(ScreenUpperLeftText);
ScreenUpperLeft.get(TextShape).shadowColor = Color3.Gray();
ScreenUpperLeft.get(TextShape).shadowOffsetY = 1;
engine.addEntity(ScreenUpperLeft);
ScreenUpperLeft.setParent(KeyboardParent);

ScreenUpperLeftBackground.add(
	new OnClick(e => {
		if (ScreenSwitch == 2){
			ChangeCryptoKittyScreenLowerRegionCurrency("Enter\nCurrency Code", "Example: BTC = Bitcoin");
		}
	})
);

export let Switchinfo = new Entity;

Switchinfo.add(new Transform({
	position: new Vector3(-1,0.9,-0.01),
	scale: new Vector3(0.2,0.2,1)
  }));
export let SwitchinfoText = new TextShape("Click on the pictures\nto switch infoboard ");
SwitchinfoText.fontSize = 150;
SwitchinfoText.color = Color3.White();
SwitchinfoText.fontFamily = "Arial, Helvetica, sans-serif";
SwitchinfoText.hAlign = "middle";
SwitchinfoText.width = 5;
SwitchinfoText.height = 1.5;
Switchinfo.add(SwitchinfoText);
Switchinfo.get(TextShape).shadowColor = Color3.Gray();
Switchinfo.get(TextShape).shadowOffsetY = 1;
engine.addEntity(Switchinfo);
Switchinfo.setParent(KeyboardParent);

// Screen Lower Left

export let ScreenLowerLeftBackground = new Entity;
ScreenLowerLeftBackground.set(new PlaneShape);
ScreenLowerLeftBackground.add(new Transform({
	position: new Vector3(-1,0.2,-0.01),
	scale: new Vector3(0.5,0.5,1)
  }));

export const ScreenLowerLeftBackgroundMaterial = new Material;
ScreenLowerLeftBackgroundMaterial.albedoTexture = "images/cryptokitties.jpg";
ScreenLowerLeftBackgroundMaterial.hasAlpha = true;
ScreenLowerLeftBackgroundMaterial.alpha = 1;
ScreenLowerLeftBackground.set(ScreenLowerLeftBackgroundMaterial);
ScreenLowerLeftBackground.setParent(KeyboardParent);
engine.addEntity(ScreenLowerLeftBackground);

export let ScreenLowerLeft = new Entity;

ScreenLowerLeft.add(new Transform({
	position: new Vector3(-1,0.6,-0.01),
	scale: new Vector3(0.2,0.2,1)
  }));
let ScreenLowerLeftTextValue = "Cryptokitties\nInfo";
export let ScreenLowerLeftText = new TextShape(ScreenLowerLeftTextValue);
ScreenLowerLeftText.fontSize = 180;
ScreenLowerLeftText.color = Color3.Green();
ScreenLowerLeftText.fontFamily = "Arial, Helvetica, sans-serif";
ScreenLowerLeftText.hAlign = "middle";
ScreenLowerLeftText.width = 5;
ScreenLowerLeftText.height = 1.5;
ScreenLowerLeft.add(ScreenLowerLeftText);
ScreenLowerLeft.get(TextShape).shadowColor = Color3.Gray();
ScreenLowerLeft.get(TextShape).shadowOffsetY = 1;
engine.addEntity(ScreenLowerLeft);
ScreenLowerLeft.setParent(KeyboardParent);

ScreenLowerLeftBackground.add(
	new OnClick(e => {
		if (ScreenSwitch == 1){
			ChangeCryptoKittyScreen("Number", "images/cksingle.jpg", "(enter kitty-number)");
		}
	})
);