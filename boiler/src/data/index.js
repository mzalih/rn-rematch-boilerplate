import {AsyncStorage} from "react-native"

export default class Data {

	static async get(key){
		try{
			return await AsyncStorage.getItem(key);
		}catch(err){
				return "";
		}
	}

	static async set(key,value){
		try{
		 	await AsyncStorage.setItem(key,value+"");
		 	return true;
		}catch(err){

		}

	}

}