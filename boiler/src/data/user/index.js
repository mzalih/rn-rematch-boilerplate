import  data  from "../"

export default class User {

	static async isLogedIn(){
			try{
				let response = await data.get("loged_in");
		    	return response == "true" ? true : false ;
		    }catch(err){
		    	return false;
		    }
	}

	static async setLogin(value){
		 await data.set("loged_in", value ? "true":"false");
	}

}