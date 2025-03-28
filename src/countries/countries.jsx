import { use } from "react"

export default function Countries({promiseLoadFetchApi}){
 
    const countries = use(promiseLoadFetchApi)
    console.log(countries);
    return(
        <div>
            <h1>All Countries </h1>
        </div>
    )
}