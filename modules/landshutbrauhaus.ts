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