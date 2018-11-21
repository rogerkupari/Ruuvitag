var Ruuvitag = require("Ruuvitag");

function onInit(){
Ruuvitag.setEnvOn(true);

var ID = "msg:";


setInterval(function() 
 {

 
var battery = parseInt(NRF.getBattery());
var temperature = parseInt(Ruuvitag.getEnvData().temp);
var airPressure = parseInt(Ruuvitag.getEnvData().pressure);
var humidity = parseInt(Ruuvitag.getEnvData().humidity);

  
  if(airPressure < 1000)
    {
     airPressure = "" + "0" + airPressure; 
    }
  
  
  if(humidity != 100)
    {
      humidity = "" + "0" + humidity;
    }
  
   if(temperature < 100)
    {
      temperature = "" + "0" + temperature;
    }

console.log(temperature+ " *C");
console.log(airPressure + " KPa");
console.log(humidity + " %");
console.log(battery + " V");

require("ble_eddystone").advertise("" + ID + "" + temperature + "" + airPressure + "" + humidity + "" + battery);

},100*10*5);
}
save(); 
