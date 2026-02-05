const input=require("readline-sync");
 
let phoneshope=[];

function addPhone(){
    const phone={
        name:input.question("Enter phone name:  "),
        storage:input.question("Enter phone storage:  "),
        price:input.question("Enter phone price:  ")

    }
    phoneshope.push(phone);
      console.log("✅ Phone added successfully!");
}

 
function viewPhone(){
    const name =input.question("Enter phone name to view");
    const phone=phoneshope.find(p=>p.name===name);
    console.log(phone||"❌ Phone not found");
    
}

 
function updatePhone(){
    let name =input.question("Enter your phone name : ");
    let phone =phoneshope.find(p=>p.name ===name );
    if(phone){
        phone.name=input.question("Enter new phone name :  ");
        phone.storage=input.question("Enter new storage :  ");
        phone.price=input.question("Enter new price : ");
        console.log("✅ Phone updated:", phone);
        
    }else{
        console.log("❌ Phone not found ");
        
    }

}


function removePhone(){
    const name =input.question("Enter phone name to remove:  ");
    const index=phoneshope.findIndex(p=>p.name===name);
    if(index!==-1){
        console.log("✅ Remove phone: ",phoneshope.splice(index,1)[0]);
        
    }
}