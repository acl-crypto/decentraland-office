
import {ETHactualRate, getETHrate} from "modules/coinapi";
import * as EthereumController from "@decentraland/EthereumController";
import * as EthConnect from '../node_modules/eth-connect/esm';
// import { toBoolean } from "../node_modules/eth-connect/eth-connect";
export let eth = EthereumController;
export let messageToSign = `# DCL Signed message
GreetzfromAclcrypto: 1
Attacker: 10
Defender: 123
Timestamp: 1512345678`
const myWallet = '0x1D234b212ccE0128b29C8BfB5963D341020E6cC9'

// buttons for beeroffers
export const beerOffers: {beer_name: string, beer_picture: string, beer_price: number, beer_x: number, beer_y: number, beer_z: number, beer_width: number, beer_height: number}[] =
[
    {beer_name: "Helles", beer_picture: "images/Bierflasche01.jpg", beer_price: 1, beer_x: -8.5, beer_y: 1.7, beer_z: 8, beer_width: 1, beer_height: 1},
    {beer_name: "Zwickl", beer_picture: "images/Bierflasche02.jpg", beer_price: 1.25, beer_x: -8.5, beer_y: 1.7, beer_z: 9.2, beer_width: 1, beer_height: 1},
    {beer_name: "Edelhell", beer_picture: "images/Bierflasche03.jpg", beer_price: 1.5, beer_x: -8.5, beer_y: 1.7, beer_z: 10.4, beer_width: 1, beer_height: 1}
];

for (let i = 0; i < beerOffers.length; i ++){
    let BierPicture = new Entity;
    BierPicture.set(new PlaneShape);
	BierPicture.add(new Transform({
        position: new Vector3(beerOffers[i].beer_x, beerOffers[i].beer_y, beerOffers[i].beer_z),
		scale: new Vector3(beerOffers[i].beer_width,beerOffers[i].beer_height,1)
    }));
    BierPicture.get(Transform).rotation.setEuler(0,270,0);
    engine.addEntity(BierPicture);
    let BierPictureMaterial = new Material();
    BierPictureMaterial.albedoTexture = beerOffers[i].beer_picture;
    BierPictureMaterial.hasAlpha = true;
    BierPictureMaterial.alpha = 1;
    BierPicture.set(BierPictureMaterial);

    let BeerShopBeerPrice = new Entity();
    let BeerShopBeerPriceinUSD = beerOffers[i].beer_price / ETHactualRate;
    let BeerShopBeerPriceText = new TextShape(BeerShopBeerPriceinUSD.toFixed(4) + " ETH");
    engine.addEntity(BeerShopBeerPrice);
	BeerShopBeerPrice.add(new Transform({
        position: new Vector3(beerOffers[i].beer_x, beerOffers[i].beer_y - 0.7, beerOffers[i].beer_z),
    }));

    BeerShopBeerPrice.get(Transform).rotation.setEuler(0, 270, 0)
    BeerShopBeerPriceText.fontSize = 100;
    BeerShopBeerPriceText.color = Color3.Yellow();
    BeerShopBeerPriceText.fontFamily = "Arial, Helvetica, sans-serif";
    BeerShopBeerPriceText.hAlign = "center";
    BeerShopBeerPriceText.width = 4;
    BeerShopBeerPriceText.height = 1;
    BeerShopBeerPrice.add(BeerShopBeerPriceText);
    BeerShopBeerPrice.get(TextShape).shadowColor = Color3.Gray();
    BeerShopBeerPrice.get(TextShape).shadowOffsetY = 1;


    BierPicture.add(
		new OnClick(e => {
            log("Price: " + ETHactualRate);
            // payment

            messageToSign = `# DCL Signed message
    Beer: `+ beerOffers[i].beer_name + `
    Price: ` + BeerShopBeerPriceinUSD.toFixed(4) + ` ETH
    Are you sure ? : (sign/cancel)`

            function signMessage(msg: string){
                executeTask(async () => {  
                                          const userData7 = await eth.getUserAccount();
                                          const userData8 = JSON.stringify(userData7);
                                          log(userData7 + " testess " + userData8);
                                          const convertedMessage = await eth.convertMessageToObject(msg)
                                          const { message, signature } = await eth.signMessage(convertedMessage)
                                          log({ message, signature })
                                      
                                          const originalMessageHex = await  EthConnect.toHex(msg)
                                          const sentMessageHex = await  EthConnect.toHex(message)
                                          const isEqual = sentMessageHex === originalMessageHex
                                          log("Is the message correct?", isEqual)
                                          
                                          if (signature){
                                              log("signature: " + signature)
                                              try {
                                                await eth.requirePayment(myWallet, BeerShopBeerPriceinUSD, 'ETH');
                                                log("success!");
                                              } catch {
                                                log("failed process payment")
                                              }
                                          } else
                                          {
                                            log("no correct signature")
                                            return;
                                          }
                                        
                })
            }
                                      
            signMessage(messageToSign)
            

        })
    )
    
    let getETHratetimer = 0;
    let timer = 0;
      class UpdateBeerPrice implements ISystem{
        update(dt:number){
            getETHratetimer ++;
            if(getETHratetimer == 50 || getETHratetimer == 200000){
                if (i == 0) {
                    getETHrate();
                }
                getETHratetimer = 120;
            }

            timer++;
            if (timer == 100 || timer == 200000){

                engine.removeEntity(BeerShopBeerPrice);
                BeerShopBeerPrice = new Entity();
                BeerShopBeerPriceinUSD = beerOffers[i].beer_price / ETHactualRate;
                BeerShopBeerPriceText = new TextShape(BeerShopBeerPriceinUSD.toFixed(4) + " ETH");
                engine.addEntity(BeerShopBeerPrice);
                BeerShopBeerPrice.add(new Transform({
                    position: new Vector3(beerOffers[i].beer_x, beerOffers[i].beer_y - 0.7, beerOffers[i].beer_z),
                }));
            
                BeerShopBeerPrice.get(Transform).rotation.setEuler(0, 270, 0)
                BeerShopBeerPriceText.fontSize = 100;
                BeerShopBeerPriceText.color = Color3.Yellow();
                BeerShopBeerPriceText.fontFamily = "Arial, Helvetica, sans-serif";
                BeerShopBeerPriceText.hAlign = "center";
                BeerShopBeerPriceText.width = 4;
                BeerShopBeerPriceText.height = 1;
                BeerShopBeerPrice.add(BeerShopBeerPriceText);
                BeerShopBeerPrice.get(TextShape).shadowColor = Color3.Gray();
                BeerShopBeerPrice.get(TextShape).shadowOffsetY = 1;
                
                timer = 120;
            }
           
        }
    }
    engine.addSystem(new UpdateBeerPrice())



}

const BeerShopHeadline = new Entity();
const BeerShopHeadlineText = new TextShape("Beer-Shop\n(Click on picture to buy)");

BeerShopHeadline.set(new Transform())
BeerShopHeadline.get(Transform).position.set(-8.5, 3, 9.2)
BeerShopHeadline.get(Transform).rotation.setEuler(0, 270, 0)
BeerShopHeadline.get(Transform).scale.setAll(1);
engine.addEntity(BeerShopHeadline);
BeerShopHeadlineText.fontSize = 250;
BeerShopHeadlineText.color = Color3.Yellow();
BeerShopHeadlineText.fontFamily = "Arial, Helvetica, sans-serif";
BeerShopHeadlineText.hAlign = "center";
BeerShopHeadlineText.width = 5.5;
BeerShopHeadlineText.height = 1;
BeerShopHeadline.add(BeerShopHeadlineText);
BeerShopHeadline.get(TextShape).shadowColor = Color3.Gray();
BeerShopHeadline.get(TextShape).shadowOffsetY = 1;

const BeerShopHeadlineWarn = new Entity();
BeerShopHeadlineWarn.set(new Transform())
BeerShopHeadlineWarn.get(Transform).position.set(-8.5, 2.35, 9.2)
BeerShopHeadlineWarn.get(Transform).rotation.setEuler(0, 270, 0)
BeerShopHeadlineWarn.get(Transform).scale.setAll(1);
engine.addEntity(BeerShopHeadlineWarn);
const BeerShopHeadlineWarnText = new TextShape("Careful !! Don`t use ETH-Mainnet to test ! Use Ropsten-Testnet instead !")
BeerShopHeadlineWarnText.fontSize = 50;
BeerShopHeadlineWarnText.width = 5.5;
BeerShopHeadlineWarnText.color = Color3.Red();
BeerShopHeadlineWarn.add(BeerShopHeadlineWarnText);

export let Picture1 = new Entity();
Picture1.set(new PlaneShape); Picture1.set(new Transform()); Picture1.get(Transform).position.set(8.5, 2.2, 7.5); Picture1.get(Transform).scale.set(3.5,2,1); Picture1.get(Transform).rotation.setEuler(0,90,0);
const Picture1Material = new Material(); Picture1Material.hasAlpha = true; Picture1Material.albedoTexture = "images/logo02.png"; Picture1.set(Picture1Material);
engine.addEntity(Picture1);

export let Picture2 = new Entity();
Picture2.set(new PlaneShape); Picture2.set(new Transform()); Picture2.get(Transform).position.set(-8.6, 1.9, 5); Picture2.get(Transform).scale.set(3,2.5,1); Picture2.get(Transform).rotation.setEuler(0,270,0);
const Picture2Material = new Material(); Picture2Material.hasAlpha = true; Picture2Material.albedoTexture = "images/lb01.jpg"; Picture2.set(Picture2Material);
engine.addEntity(Picture2);

export let Picture3 = new Entity();
Picture3.set(new PlaneShape); Picture3.set(new Transform()); Picture3.get(Transform).position.set(-5.5, 1.9, 1.38); Picture3.get(Transform).scale.set(3,2.5,1); Picture3.get(Transform).rotation.setEuler(0,180,0);
const Picture3Material = new Material(); Picture3Material.hasAlpha = true; Picture3Material.albedoTexture = "images/Bier01.jpg"; Picture3.set(Picture3Material);
engine.addEntity(Picture3);

export let lb1gltf = new Entity()
lb1gltf.set(new Transform())
lb1gltf.get(Transform).position.set(6, 0.05, 4)
lb1gltf.get(Transform).rotation.setEuler(0, 300, 0)
lb1gltf.get(Transform).scale.setAll(0.55)
lb1gltf.set(new GLTFShape("models/lb01.gltf"))
engine.addEntity(lb1gltf)

const lbText1 = new Entity();
const lbText1Text = new TextShape("www.landshuter-brauhaus.de");

lbText1.set(new Transform())
lbText1.get(Transform).position.set(8.6, 1, 7.5)
lbText1.get(Transform).rotation.setEuler(0, 90, 0)
lbText1.get(Transform).scale.setAll(1);
engine.addEntity(lbText1);
lbText1Text.fontSize = 120;
lbText1Text.color = Color3.Yellow();
lbText1Text.fontFamily = "Arial, Helvetica, sans-serif";
lbText1Text.hAlign = "center";
lbText1Text.width = 4;
lbText1Text.height = 1;
lbText1.add(lbText1Text);
lbText1.get(TextShape).shadowColor = Color3.Gray();
lbText1.get(TextShape).shadowOffsetY = 1;

export let turningBottle = new Entity(); turningBottle.set(new GLTFShape("models/flasche01.gltf")); turningBottle.set(new Transform()); turningBottle.get(Transform).position.set(0,0,0.15); turningBottle.get(Transform).rotation.setEuler(330,0,0); turningBottle.get(Transform).scale.setAll(0.01);
engine.addEntity(turningBottle);
export let turningBottleParent = new Entity; turningBottleParent.set(new Transform());turningBottleParent.get(Transform).position.set(0,1,0);
turningBottle.setParent(turningBottleParent)
engine.addEntity(turningBottleParent);
let turningBottleBaseShape = new BoxShape;
turningBottleBaseShape.withCollisions = true;
export let turningBottleBase = new Entity(); turningBottleBase.add(turningBottleBaseShape); turningBottleBase.set(new Transform()); turningBottleBase.get(Transform).position.set(0,0.4,0); turningBottleBase.get(Transform).rotation.setEuler(0,0,0); turningBottleBase.get(Transform).scale.set(1,0.8,1);
turningBottleBase

let turningBottleBaseMaterial = new Material();
turningBottleBaseMaterial.alphaTexture = "textures/LavaAmbient.png"; // ambient?mask?roughness?
turningBottleBaseMaterial.albedoTexture = "textures/LavaAlbedo.png";
turningBottleBaseMaterial.emissiveTexture = "textures/LavaMask.png"; // ambient?mask?roughness?
turningBottleBaseMaterial.bumpTexture = "textures/LavaNormal_Bump.png";
turningBottleBase.add(turningBottleBaseMaterial);

engine.addEntity(turningBottleBase);
export let turningBottleAll = new Entity(); turningBottleAll.set(new Transform()); turningBottleAll.get(Transform).position.set(-6,0,4); turningBottleAll.get(Transform).scale.setAll(1.3);
turningBottleParent.setParent(turningBottleAll); turningBottleBase.setParent(turningBottleAll)
engine.addEntity(turningBottleAll);

export class RotatorSystem implements ISystem{
    update(dt:number){
        let spinbottleaxis = turningBottle.get(Transform);
        let spinbottleaxisRotation = new Vector3(0,1,0);
        spinbottleaxis.rotate(spinbottleaxisRotation, 15 * dt);
        let spinbottle = turningBottleParent.get(Transform);
        let spinbottleRotation = new Vector3 (0,1,0);
        spinbottle.rotate(spinbottleRotation, 15 * dt);

    }

}
engine.addSystem(new RotatorSystem());