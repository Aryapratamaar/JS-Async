const fs = require("fs").promises;

async function read() {
  try 
  {
    //baca file .json dengan fs
    let data = await fs.readFile("./data.json"); 

    //ubah format menjadi object
    data = JSON.parse(data);

    //ubah data gender dengan id 2
    const target = data.find(item => item.id === 2);
    if (target) {
      target.gender = "jantan";
    }
    
    //ubah format menjadi string
    data = JSON.stringify(data,null,2);

    //ubah format ke .json
    await fs.writeFile("./data.json", data, "utf-8");

    console.log(data);
  } 
  catch(error) {
    console.error(error);
  }
}

read();

