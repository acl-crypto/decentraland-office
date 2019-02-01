export let tree1gltf = new Entity(); tree1gltf.set(new Transform()); tree1gltf.get(Transform).position.set(18, 3, 14); tree1gltf.get(Transform).rotation.setEuler(0, 180, 0); tree1gltf.get(Transform).scale.setAll(0.1); tree1gltf.set(new GLTFShape("models/tree1.gltf")); tree1gltf.get(GLTFShape).addClip(new AnimationClip("tree01", { loop: true, speed: 1, weight: 0.2})); engine.addEntity(tree1gltf)
tree1gltf.get(GLTFShape).getClip("tree01").play()
export let tree2gltf = new Entity(); tree2gltf.set(new Transform()); tree2gltf.get(Transform).position.set(15, 3, 12); tree2gltf.get(Transform).rotation.setEuler(0, 0, 0); tree2gltf.get(Transform).scale.setAll(0.1); tree2gltf.set(new GLTFShape("models/tree2.gltf")); tree2gltf.get(GLTFShape).addClip(new AnimationClip("tree02", { loop: true, speed: 1, weight: 0.2})); engine.addEntity(tree2gltf); tree2gltf.get(GLTFShape).getClip("tree02").play()
export let tree1gltf4floor = new Entity(); tree1gltf4floor.set(new Transform()); tree1gltf4floor.get(Transform).position.set(4, 16.7, 9); tree1gltf4floor.get(Transform).rotation.setEuler(0, 270, 0); tree1gltf4floor.get(Transform).scale.setAll(0.1); tree1gltf4floor.set(new GLTFShape("models/tree1.gltf")); tree1gltf4floor.get(GLTFShape).addClip(new AnimationClip("tree01", { loop: true, speed: 1, weight: 0.2})); engine.addEntity(tree1gltf4floor); tree1gltf4floor.get(GLTFShape).getClip("tree01").play()
export let tree2gltf4floor = new Entity(); tree2gltf4floor.set(new Transform()); tree2gltf4floor.get(Transform).position.set(5, 16.7, 12.5); tree2gltf4floor.get(Transform).rotation.setEuler(0, 90, 0); tree2gltf4floor.get(Transform).scale.setAll(0.1); tree2gltf4floor.set(new GLTFShape("models/tree2.gltf")); tree2gltf4floor.get(GLTFShape).addClip(new AnimationClip("tree02", { loop: true, speed: 1, weight: 0.2})); engine.addEntity(tree2gltf4floor); tree2gltf4floor.get(GLTFShape).getClip("tree02").play()

export const welcomeText = new Entity();
export const welcomeTextText = new TextShape("Welcome !\n Herzlich Willkommen !");
welcomeText.add(welcomeTextText);
welcomeTextText.fontSize = 120;
welcomeTextText.color = Color3.Blue();
welcomeTextText.fontFamily = "Arial, Helvetica, sans-serif";
welcomeTextText.hAlign = "center";
welcomeTextText.width = 2.5;
welcomeTextText.height = 1;
welcomeText.get(TextShape).shadowColor = Color3.Gray();
welcomeText.get(TextShape).shadowOffsetY = 1;

welcomeText.set(new Transform())
welcomeText.get(Transform).position.set(9.05, 8.5, 16.8)
welcomeText.get(Transform).rotation.setEuler(0, 270, 0)
welcomeText.get(Transform).scale.setAll(1);

engine.addEntity(welcomeText);

/*

// ETH-wallet-address
import {getUserPublicKey,getUserData} from "@decentraland/Identity"

const publicKey2 = getUserPublicKey();
let testlist2 = JSON.stringify(publicKey2);
log("publicKey2 " + publicKey2 + " " + testlist2);

const publicKeyRequest = executeTask(async () => {
    const publicKey = await getUserPublicKey()
    let testtext4 = publicKey;
    let testlist = await JSON.stringify(publicKey);
    log(publicKey + " " + testlist);
    return publicKey
  })
  
  class IDSystem implements ISystem {
    update(publicKey) {
      if (publicKeyRequest.didFail) {
        //  let ETHwalletAddressText = "not logged in";
        log("error fetching id" + publicKeyRequest.error)

      } else {
        // let ETHwalletAddressText = publicKey;
        log("id:" + publicKeyRequest.result)

      }
    }
    
  }

let testtext = "test";
// let testtext2 = publicKey;
const ETHwalletAddress = new Entity();
const ETHwalletAddressText = new TextShape();

executeTask(async () => {
  let userData = await getUserData()
  log("Zweiterversuch" + userData + userData.publicKey + userData.displayName);
})

*/
