const axios = require('axios');

async function hitApi() {
    try{
        let hitData = await axios.get("https://jsonplaceholder.tyicode.com/users");
        console.log(hitData, "==> FINAL");
    }
    catch(error){
        console.log(error);
    }
}

hitApi();

