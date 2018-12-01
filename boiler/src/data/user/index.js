import  data  from "./../data"

export default class User {

	static async isLoged(){
			try{
				let response = await data.get("logged_in");
		    	return response == "true" ? true : false ;
		    }catch(err){
		    	return false;
		    }
	}

	static async loged(value){
		 await data.set("logged_in", value ? "true":"false");
	}

}