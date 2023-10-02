/* eslint-disable react/prop-types */
function Compteur({color,nb}) {
    return ( 
        <div>
            <span style={{color}}>{nb}</span>
        </div>
     );
}

export default Compteur;