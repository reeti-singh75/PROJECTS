let setting={them:"dark",language:"english"};
 
console.log(setting);

//  Object.seal(setting);//seal  object karne ke bad ham usme add kar sakte h modifi kar sakta h but hata nhi sakte hi kisi bhi key ko 
delete setting.them
setting.them="black";// update 
setting.flower="rose";// nhi jod sakte 
console.log(setting);

let obj1={a:1,b:2,c:3};
