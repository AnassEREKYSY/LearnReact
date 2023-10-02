import Compteur from "./Compteur.component";

function Liste() {
    const data=[
        {nb:2 ,  color:"blue"},
        {nb:10 ,  color:"red"},
        {nb:-10 ,  color:"green"}
    ]
    return ( 
        <div>
           { 
          data.map( (item,key) => {
           return <Compteur {...item} key={key} />
          } )
        }
            
        </div>
    );
}

export default Liste;