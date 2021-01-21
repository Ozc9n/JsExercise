// Ajax Callback ,http request


class Request{
    constructor(){
        this.xhr=new XMLHttpRequest();
    }
    // Get Request
    get(url,callback){
        this.xhr.open("GET",url);//Bağlantı açık
        // const temp=this; ilkel yöntem   
        this.xhr.onload=() =>{
                console.log(this);
                // console.log(this); xhr
                // xhr i silince de düzeliyor
                if(this.xhr.status===200){
                    callback(null,this.xhr.responseText);
                    // (console.log(this.xhr.responseText));
                }
                else{
                    callback("GET Request : Bir hata oluştu...",null);
                }
            }
            //.bind(this);
        this.xhr.send();

    }
    /* this karmaşası önlemek için 4 çeşit yöntem mevcut
 1- dışarıda temp e  this atamak
 2- xhr ı silmek
 3- bind(this)
 4- arrow function */

    post(url,data,callback){
        this.xhr.open("POST",url);
        this.xhr.setRequestHeader("Content-type","application/json");
        this.xhr.onload=()=>{

            if(this.xhr.status===201){
                callback(null,this.xhr.responseText);
            }
            else{
                callback("POST Request : Bir hata oluştu...",null);
            }
        }

        this.xhr.send(JSON.stringify(data));
    }
    put(url,data,callback){//UPDATE
        this.xhr.open("PUT",url);
        this.xhr.setRequestHeader("Content-type","application/json");
        this.xhr.onload=()=>{

            if(this.xhr.status===200){
                callback(null,this.xhr.responseText);
            }
            else{
                callback("PUT Request: Bir hata oluştu...",null);
            }
        }

        this.xhr.send(JSON.stringify(data));
    }
    delete(url,callback){
        this.xhr.open("DELETE",url);
           
        this.xhr.onload=() =>{
                console.log(this);
              
                if(this.xhr.status===200){
                    callback(null,"Veri Silme işlemi başarılı...");
               
                }
                else{
                    callback("DELETE Request : Bir hata oluştu...",null);
                }
            }
            
        this.xhr.send();
    }
    

}

const request = new Request();
request.get("http://jsonplaceholder.typicode.com/albums/51",function(err,response){
    if(err===null){
        console.log(response);
    }
    else{
        //HATA
        console.log(err);
    }
});
// const albums = request.get("http://jsonplaceholder.typicode.com/posts");
// console.log(albums);//Callback yapmalı asenkron

request.post("http://jsonplaceholder.typicode.com/albums",{userId:2,title:"Thriller"},function(album,err){

    if(err===null){
        console.log(album);
    }
    else{
        //HATA
        console.log(err);
    }

});
 request.put("http://jsonplaceholder.typicode.com/albums/10",{userId:143,title:"Mustafa Sandal"},function(album,err){

    if(err===null){
        console.log(album);
    }
    else{
        //HATA
        console.log(err);
    }
});
request.delete("http://jsonplaceholder.typicode.com/albums/10",function(err,response){
    if(err===null){
        console.log(response);
    }
    else{
        //HATA
        console.log(err);
    }

});
