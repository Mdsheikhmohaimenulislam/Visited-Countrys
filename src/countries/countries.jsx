import { use, useState } from "react"
import CountryVisited from "../country/country";
import './countries..css'


export default function Countries({promiseLoadFetchApi}){
    const [visitedCountry,setVisitedCountry] = useState([])
    const [visitedFlags , setVisitedFlags] = useState([])
 
    const countries = use(promiseLoadFetchApi)

    const handleVisitedFlags = (flag) => {
        const newVisitedFlags = [...visitedFlags , flag]
        setVisitedFlags(newVisitedFlags)

    }

    const visitedCountries = (country) => {
        const newVisitedCountries = [...visitedCountry , country]
        setVisitedCountry(newVisitedCountries)
        
    }

    return(
        <div>
            <h1>All Countries: {countries.length}</h1>
            <h3>Travel The Country Count: {visitedCountry.length}</h3>
            <ol>
                {
                    visitedCountry.map((country , index) => <li key={index}>{country.name.common}</li>)
                    
                }
            </ol>
            <div className="flag-content">
                {
                    visitedFlags.map((flag,index) => <img key={index} src={flag}></img>)
                }
            </div>
            <div className="countries-container">
            {
                countries.map(country => <CountryVisited
                     key={country.cca2}
                     visitedCountries = {visitedCountries}
                     handleVisitedFlags = {handleVisitedFlags}
                      country={country}
                      ></CountryVisited>)
            }
            </div>
        </div>
    )
}