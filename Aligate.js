/**
 * Created by Administrator on 2018/10/13.
 */
const pageName='Page Aligate.js';

class Aligate{

    setAppKey(key){
        this.appKey=key;
    }
    setAppSecret(secret){
        this.appSecret=secret;
    }
    setHost(host){
        this.host=host;
    }
    setPath(path){
        this.path=path;
    }
    post(data,callback){
        const co= require('co') ;
        const Client = require('aliyun-api-gateway').Client;

        const appKeyAli = this.appKey ;   //ali调用api的应用里设置的AppKey
        const appSecretAli = this.appSecret;

        const host = this.host;
        const path = this.path;

        const client = new Client(appKeyAli,appSecretAli);


        co(function* () {

            var url = 'http://' + host + path;


            var result = yield client.post(url, {
                headers: {
                    "accept" : "application/json",
                    "Content-Type" : "application/json;charset=UTF-8"
                },
                data: data

            });

            callback (null,result);


        }).catch(onError);

        function onError(err)  {
            //console.error(pageName,err);
            callback(err);
        }
    }
}

module.exports = Aligate;

