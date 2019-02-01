import {ChangeCryptoKittyScreen, ChangeCryptoKittyScreenLowerRegionCurrency} from "modules/keyboard"

// get Currency Rates
export let CryptoCurrencyValue = "btc", keyboardScreenExchangeRate = "", CryptoKittyScreenLowerRegionTextValueTotal;
export function getCurrenyRates(CryptoCurrencyValue) {
	executeTask(async () => {
		
		try {
			let response0 = await fetch('https://rest.coinapi.io/v1/exchangerate/' + CryptoCurrencyValue +'?apikey=E28335C0-F0E3-4CF3-8151-1B2D483BE1F9')
			let json0 = await response0.json();
			log(json0);

			let CryptoCurrencyType = json0.asset_id_base;
			let CryptoCurrencyTypeUSD = CryptoCurrencyType + " / USD - Rate";
			log (CryptoCurrencyType);

			for(let i = 0; i < 99; i++)
			{
				let CryptoCurrencyValueLongloop = json0.rates[i].asset_id_quote;
					if (CryptoCurrencyValueLongloop == "USD"){
						let CryptoCurrencyValueLong = json0.rates[i].rate;
						CryptoCurrencyValue = (CryptoCurrencyValueLong.toFixed(3));
					};
			}
			CryptoKittyScreenLowerRegionTextValueTotal = "1 " + CryptoCurrencyType + " = " + CryptoCurrencyValue + " USD"
			ChangeCryptoKittyScreenLowerRegionCurrency(CryptoCurrencyTypeUSD, CryptoKittyScreenLowerRegionTextValueTotal);
	
		} catch {
			log('failed to reach test-URL-currency', error);
			ChangeCryptoKittyScreenLowerRegionCurrency("code unknown!", "try again");
		}
	})

};

// get CryptoKitty Info
let CryptokittyNumber = 1;
export let CryptokittyName = "", CryptokittyNumberValue = "", CryptokittyPicture ="";

export function getCryptokittyData(CryptokittyNumber){

executeTask(async () => {
		
	try {

		let response1 = await fetch('https://api.opensea.io/api/v1/asset/0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/' + CryptokittyNumber + '/')
		let json1 = await response1.json()
		if (json1.name == undefined){
			CryptokittyName = "wrong input - try again!"
		} else {
			CryptokittyName = "Name: " + JSON.stringify(json1.name);
		}
		CryptokittyNumberValue = JSON.stringify(json1.token_id);
		CryptokittyPicture = "images/cksingle.jpg";
		ChangeCryptoKittyScreen(CryptokittyNumberValue, CryptokittyPicture, CryptokittyName);
	} catch {
		log('failed to reach test-URL-CK', error);

	}

})

};

// getCryptokittyData(CryptokittyNumber);

export function getDecentralandData(){

	executeTask(async () => {
			
		try {
	
			let response2 = await fetch("https://api.opensea.io/api/v1/asset/0xF87E31492Faf9A91B02Ee0dEAAd50d51d56D5d4d/7/")
			let json2 = await response2.json()
			log(json2);
	
		} catch {
			log('failed to reach test-URL-DCL', error);
	
		}
	})
	
};

// getDecentralandData();
