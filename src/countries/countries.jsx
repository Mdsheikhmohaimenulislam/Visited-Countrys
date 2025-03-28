import { use } from "react"
import CountryVisited from "../country/country";
import './countries..css'


export default function Countries({promiseLoadFetchApi}){
 
    const countries = use(promiseLoadFetchApi)

    return(
        <div>
            <h1>All Countries: {countries.length}</h1>
            <div className="countries-container">
            {
                countries.map(country => <CountryVisited key={country.cca2} country={country}></CountryVisited>)
            }
            </div>
        </div>
    )
}