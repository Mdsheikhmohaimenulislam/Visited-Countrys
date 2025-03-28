import { useState } from 'react'
import './country.css'
const CountryVisited = ({country}) => {
    const [visited , setVisited] = useState(false)

    const handleVisited = () => {   

        // if(visited === true){
        //     setVisited(false);
        // }
        // else{
        //     setVisited(true);
        // }

        setVisited(!visited)

    }

    // className={visited ? 'btn-visited' : 'btn-not-visited'} ak ta class toggle hole ai ta use 

    return(
        <div className={`country-container  ${visited && 'country-visited'}`}>
            <h3>Country Name: {country.name.common}</h3>
            <img src={country.flags.png} alt="" />
            <h3>Population: {country.population}</h3>
            <p>independent: {country.independent ? 'Free' : 'Not Free'}</p>
            <button onClick = {handleVisited}>{visited ? 'Visited' : 'Not Visited'}</button>
        </div>
    )
}
export default CountryVisited;