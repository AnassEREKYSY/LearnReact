/* eslint-disable react/prop-types */
import { useEffect, useState} from 'react';

function Api() {

    const [pays,setPays]=useState([])
    useEffect(function(){
        fetch('https://restcountries.com/v3.1/all')
        .then(function(response){return response.json()})
        .then(data=>setPays(data))
    },[])// effectuer le contenu de la fct 1 seule fois au moment du chargement de composant 
     // Créez un état pour stocker les données de l'API
 
  return (
    <ul>
        {
            pays.map(function(item,key){
                return <li key={key}>{item.name.common} - {item.flag}</li>
            })
        }
    </ul>
  );
}

export default Api;
