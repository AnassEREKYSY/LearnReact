/* eslint-disable react/prop-types */

function Commentaires({item}) {
    return ( 
        <p>texte : {item?.text}/ publié le {item?.date} </p>
     );
}

export default Commentaires;