let setting={them:"dark",language:"english"};
 
console.log(setting);

 Object.freeze(setting);//freeze object not delete not modify
setting.them="light";
delete setting.them
console.log(setting);
