import {} from "modules/landshutbrauhaus";
import {} from "modules/slideshowpic";
import {} from "modules/base";
import {ScreenSwitch, ScreenUpperLeftText, ScreenUpperLeftBackgroundMaterial, ScreenLowerLeftText, ScreenLowerLeftBackgroundMaterial} from "modules/keyboard";
import {} from "modules/coinapi";
import {} from "modules/robotwalk";

import { playSound } from "@decentraland/SoundController";
executeTask(async () => {
    try {
      await playSound("sounds/remotehorst_flatrocket.mp3", {
        volume: 15,
        loop: true
      })
    } catch {
      log("failed to play sound")
    }
  })

// Add maingltf
let maingltf = new Entity()
maingltf.set(new Transform())
maingltf.get(Transform).position.set(5, 0, 15)
maingltf.get(Transform).rotation.setEuler(0, 90, 0)
maingltf.get(Transform).scale.setAll(1)
maingltf.set(new GLTFShape("models/main.gltf"))

// Add main to engine
engine.addEntity(maingltf)

let Ground1 = new Entity();
Ground1.set(new PlaneShape); Ground1.set(new Transform()); Ground1.get(Transform).position.set(0, 0, 10); Ground1.get(Transform).scale.set(20,20,1); Ground1.get(Transform).rotation.setEuler(90,0,0);
const Ground1Material = new Material(); Ground1Material.albedoTexture = "textures/grass.jpg"; Ground1.set(Ground1Material);
engine.addEntity(Ground1);
let Ground2 = new Entity();Ground2.set(new PlaneShape); Ground2.set(new Transform()); Ground2.get(Transform).position.set(15, 0, 19.5); Ground2.get(Transform).scale.set(10,1,1); Ground2.get(Transform).rotation.setEuler(90,0,0);
const Ground2Material = new Material(); Ground2Material.albedoTexture = "textures/grass.jpg"; Ground2.set(Ground2Material);
engine.addEntity(Ground2);
let Ground3 = new Entity();Ground3.set(new PlaneShape); Ground3.set(new Transform()); Ground3.get(Transform).position.set(19.5, 0, 14.5); Ground3.get(Transform).scale.set(1,9,1); Ground3.get(Transform).rotation.setEuler(90,0,0);
const Ground3Material = new Material(); Ground3Material.albedoTexture = "textures/base.jpg"; Ground3.set(Ground3Material);
engine.addEntity(Ground3);

let ckpic = new Entity();
ckpic.set(new PlaneShape); ckpic.set(new Transform()); ckpic.get(Transform).position.set(-2.7, 6, 15); ckpic.get(Transform).scale.set(5.5,2,1); ckpic.get(Transform).rotation.setEuler(0,90,0);
const ckpicMaterial = new Material(); ckpicMaterial.hasAlpha = true; ckpicMaterial.albedoTexture = "images/ck.jpg"; ckpic.set(ckpicMaterial);
engine.addEntity(ckpic);

let human1gltf = new Entity(); human1gltf.set(new Transform()); human1gltf.get(Transform).position.set(5.5, 12.7, 15.5); human1gltf.get(Transform).rotation.setEuler(0, 10, 0); human1gltf.get(Transform).scale.setAll(0.38); human1gltf.set(new GLTFShape("models/human.gltf")); human1gltf.get(GLTFShape).addClip(new AnimationClip("waving", { loop: true, speed: 1, weight: 0.2})); engine.addEntity(human1gltf); human1gltf.get(GLTFShape).getClip("waving").play();
let stagegltf = new Entity(); stagegltf.set(new Transform()); stagegltf.get(Transform).position.set(5.2, 12.5, 5.4); stagegltf.get(Transform).rotation.setEuler(90, 0, 0); stagegltf.get(Transform).scale.setAll(0.6); stagegltf.set(new GLTFShape("models/stage.gltf")); engine.addEntity(stagegltf);
let donaldT = new Entity(); donaldT.set(new Transform()); donaldT.get(Transform).position.set(6, 12.9, 5.4); donaldT.get(Transform).rotation.setEuler(270, 270, 0); donaldT.get(Transform).scale.setAll(1); donaldT.set(new GLTFShape("models/dt5.gltf")); engine.addEntity(donaldT); donaldT.get(GLTFShape).addClip(new AnimationClip("samba", { loop: true, speed: 1, weight: 0.2})); // engine.addEntity(donaldT); donaldT.get(GLTFShape).getClip("samba").play(); donaldT.get(GLTFShape).getClip("samba").playing = false;
let sambaclipswitch = donaldT.get(GLTFShape).getClip("samba");
let donaldTRedBox = new Entity(); donaldTRedBox.set(new BoxShape); donaldTRedBox.set(new Transform()); donaldTRedBox.get(Transform).position.set(5.2, 15.5, 3.5); donaldTRedBox.get(Transform).scale.set(0.5,0.5,0.5); donaldTRedBox.get(Transform).rotation.setEuler(0,0,0); const donaldTRedBoxMaterial = new Material(); donaldTRedBoxMaterial.albedoColor = Color3.Red(); donaldTRedBox.set(donaldTRedBoxMaterial); engine.addEntity(donaldTRedBox);
export let donaldTRedBoxText = new Entity; donaldTRedBoxText.add(new Transform({position: new Vector3(-0.51,1,0), scale: new Vector3(0.7,0.7,0.7) })); donaldTRedBoxText.get(Transform).rotation.setEuler(0,90,0); export let donaldTRedBoxTextValue = new TextShape("Click\nHere!");
donaldTRedBoxTextValue.fontSize = 180;
donaldTRedBoxTextValue.color = Color3.White();
donaldTRedBoxTextValue.fontFamily = "Arial, Helvetica, sans-serif";
donaldTRedBoxTextValue.hAlign = "middle";
donaldTRedBoxTextValue.width = 2;
donaldTRedBoxTextValue.height = 1.5;
donaldTRedBoxText.add(donaldTRedBoxTextValue);
donaldTRedBoxText.get(TextShape).shadowColor = Color3.Gray();
donaldTRedBoxText.get(TextShape).shadowOffsetY = 1;
engine.addEntity(donaldTRedBoxText);
donaldTRedBoxText.setParent(donaldTRedBox);

donaldTRedBox.add(new OnClick(e => {
    sambaclipswitch.playing =! sambaclipswitch.playing
}))

export class ScreenSwitchCheck implements ISystem{
    update(dt:number){
        switch(ScreenSwitch) {
            case 1:
                        // log('testswitch1');
                        ScreenUpperLeftText.fontSize = 180;
                        ScreenUpperLeftText.color = Color3.Yellow();
                        ScreenUpperLeftBackgroundMaterial.alpha = 1;
                        ScreenLowerLeftText.fontSize = 80;
                        ScreenLowerLeftText.color = Color3.Red();
                        ScreenLowerLeftBackgroundMaterial.alpha = 0.4;
                break;
            case 2:
                        ScreenUpperLeftText.fontSize = 80;
                        ScreenUpperLeftText.color = Color3.Red();
                        ScreenUpperLeftBackgroundMaterial.alpha = 0.4;
                        ScreenLowerLeftText.fontSize = 180;
                        ScreenLowerLeftText.color = Color3.Yellow();
                        ScreenLowerLeftBackgroundMaterial.alpha = 1;                       
                        // log('testswitch2');
                break;

            default:
                        log('statedefault');
        } 
       
    }
}
engine.addSystem(new ScreenSwitchCheck())
