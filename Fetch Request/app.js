class Request{

    get(url){
        return new Promise((resolve,reject)=>{
            fetch(url)
            .then(response=>response.json())
            .then(data=>resolve(data))
            .catch(err=>reject(err));
        });
    }
    post(url,data){
            return new Promise((resolve,reject)=>{
            /*     fetch(url,{
                    method:'POST',
                    body: JSON.stringify(data),
                    headers: {
                        "Content-type":"application/json; charset-UTF-8"
                    },
                })
                .then(response => response.json())
                .then(data =>resolve(data))
                .catch(err=> reject(err));
            }) */
            fetch('https://jsonplaceholder.typicode.com/posts/1', {
                 method: 'PATCH',
                 body: JSON.stringify({
                title: 'foo',
                }),
                headers: {
                'Content-type': 'application/json; charset=UTF-8',
                },
                })
                .then((response) => response.json())
                .then((json) => console.log(json));

                })
            }
    put(url,data){
        return new Promise((resolve,reject)=>{
            fetch(url,{
                method:'PUT',
                body: JSON.stringify(data),
                headers: {
                    "Content-type":"application/json; charset-UTF-8"
                },
            })
            .then(response => response.json())
            .then(data =>resolve(data))
            .catch(err=> reject(err));
        })
    }
    delete(url){

        return new Promise((resolve,reject)=>{
            fetch("https://jsonplaceholder.typicode.com/albums/1",{
                method: "DELETE"
            }).then(response=> resolve("Veri silme islemi başarılı"))
            .catch(err=>reject(err));
        });
    }

}
const request = new Request();
let albums;

/* request.get("https://api.exchangeratesapi.io/latest
.then(albums=>{
    
    console.log(albums);
})
.catch(err=> console.log(err)); */

// console.log(albums); Asenkron durum

/* request.post("https://jsonplaceholder.typicode.com/albums",{userId:1,title:"Se nessecita"})
.then(newalbum => console.log(newalbum))
.catch(err =>console.log(err)) */

// request.post();

/* request.put("https://jsonplaceholder.typicode.com/posts/1",{userId:10,title:"Es estupendo"})
.then(album=>console.log(album))
.catch(err=>console.log(err)); */

request.delete("https://jsonplaceholder.typicode.com/albums/1")
.then(message=>console.log(message))
.catch(err=>console.log(err));