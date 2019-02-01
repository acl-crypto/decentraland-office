    	// picturesfront for loop

        let picturesfront: {src: string, name: string}[] =
		[
			{src: "slideshowimg/pic1.jpg", name: "ImageFront1"},
			{src: "slideshowimg/pic2.jpg", name: "ImageFront2"},
			{src: "slideshowimg/pic3.jpg", name: "ImageFront3"},
			{src: "slideshowimg/pic4.jpg", name: "ImageFront4"}, 
			{src: "slideshowimg/pic5.jpg", name: "ImageFront5"} /*,
			{src: "slideshowimg/pic6.jpg", name: "ImageFront6"},
			{src: "slideshowimg/pic7.jpg", name: "ImageFront7"},
			{src: "slideshowimg/pic8.jpg", name: "ImageFront8"},
			{src: "slideshowimg/pic9.jpg", name: "ImageFront9"},
			{src: "slideshowimg/pic10.jpg", name: "ImageFront10"} */
        ];

        let PictureCountFront = 0;
		
		let PicturesSlideShow = new Entity();
        PicturesSlideShow.set(new PlaneShape); PicturesSlideShow.set(new Transform()); PicturesSlideShow.get(Transform).position.set(-3, 1.8, 18.6); PicturesSlideShow.get(Transform).scale.set(2.2,2.2,1); PicturesSlideShow.get(Transform).rotation.setEuler(0,0,0);
        const PicturesSlideShowMaterial = new Material(); PicturesSlideShowMaterial.hasAlpha = true; PicturesSlideShowMaterial.albedoTexture = picturesfront[PictureCountFront].src; PicturesSlideShow.set(PicturesSlideShowMaterial);
        engine.addEntity(PicturesSlideShow);

        export const makingofbottle = new Entity();
        export const makingofbottleText = new TextShape('Making of .... \n .... "the bottle"');
        makingofbottle.add(makingofbottleText);
        makingofbottleText.fontSize = 120;
        makingofbottleText.color = Color3.Yellow();
        makingofbottleText.fontFamily = "Arial, Helvetica, sans-serif";
        makingofbottleText.hAlign = "center";
        makingofbottleText.width = 2.5;
        makingofbottleText.height = 1;
        makingofbottle.get(TextShape).shadowColor = Color3.Gray();
        makingofbottle.get(TextShape).shadowOffsetY = 1;
        
        makingofbottle.set(new Transform())
        makingofbottle.get(Transform).position.set(-1, 1.8, 18.6)
        makingofbottle.get(Transform).rotation.setEuler(0, 0, 0)
        makingofbottle.get(Transform).scale.setAll(1);
        
        engine.addEntity(makingofbottle);

let timer = 0;

export class SlideShow implements ISystem{
    update(dt:number){
        timer++;
        if (timer == 70){

            PictureCountFront++;
            if (PictureCountFront == picturesfront.length){PictureCountFront = 0;}
            engine.removeEntity(PicturesSlideShow);
            PicturesSlideShowMaterial.albedoTexture = picturesfront[PictureCountFront].src;
            engine.addEntity(PicturesSlideShow);
            log(PictureCountFront);
            timer = 0;
        }
       
    }
}
engine.addSystem(new SlideShow())
