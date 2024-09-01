import { useState, useEffect } from "react";

//4 custom hook

export const useFetch = (url) => {

    const [data, setData] = useState(null);

    // 5- refatorando post
    const[config, setConfig] = useState(null);
    const[method, setMethod] = useState(null);
    //callFetch é para ativar a requisição
    const[callFetch, setCallfetch] = useState(null);

    // 6 - loading (não começa carregandopor isso false)
    const [loading, setLoading]= useState(false);

    // 7 - erros
    const [error, setError] = useState(null);


    const httpConfig = (data, method) =>{
        if(method === "POST"){
            setConfig({
                method,
                headers:{
                    "Content-type": "application/Json",
                },
                body: JSON.stringify(data),
            });
            setMethod(method);
        }
    };



//aqui ira disparar o loading
    useEffect(()=>{ 
        const fetchData = async() => {
             //7 - tratando erros
          try{
           
              //6- loading começa
            setLoading(true);

            const res = await fetch(url);
            const Json = await res.json();

           
            setData(Json) 
           
            }catch(error){
                console.log(error.message);

                setError("Houve algum error ao carregar os dados!");
            } 
             //6-acaba o loading
            setLoading(false);
        };
    
        fetchData();
    }, [url, callFetch]);





    // 5- refatorando post
    useEffect(() =>{

        const httpRequest = async()=>{
            let Json

            if(method === "POST") {
                //6-loading inicio
                setLoading(true);

                let fetchOptions = [url, config]

                const res = await fetch(...fetchOptions)

                Json = await res.json();

                //6- acaba loading
                setLoading(false);
            }
            setCallfetch(Json);
        };
        httpRequest();

    },[config, method, url])

    return {data, httpConfig, loading, error};


};