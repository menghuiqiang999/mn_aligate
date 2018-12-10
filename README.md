#This is a function from Moonlight
#Quick Start
##install
    npm install mn_aligate
##Basic Usage

    const Aligate= require("mn_Aligate");
    const aligate= new Aligate();
    const appKeyAli= "2491XXXX" ,    //ali调用api的应用里设置的AppKey
        appSecretAli= 'XXX0837dadad751ae5f3de19fc9bbXXX';
    const host = "corpweixin.api.moonlightwine.com";
    aligate.setAppKey(appKeyAli);
    aligate.setAppSecret(appSecretAli);
    aligate.setHost(host);
    aligate.setPath("/get_access_token");
    const corpId="wx0293666cXXXXXaa0";
    var agentId = "1000XXX";
    var appSecret = 'XXXXXXhb0ePhXPZRMV02nzqSTQEliclTBEtnAIXXXXXX';
    const data={corpId:corpId,corpSecret:appSecret};
    aligate.post(data,(err,result) =>{
        if(err){console.log(err)}
        console.log(result);
    });


