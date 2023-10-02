function Exo3() {
    const formation=[{nom:"JS",duree:5},{nom:"Angular",duree:2},{nom:"React",duree:15}]
    return (  
        <>
            <ul>
                {
                    formation.map(function(item,key){
                        return (item.duree>10 ? (
                            <li style={{color:"red"}} key={key}>{item.nom} durée {item.duree}</li>
                            ): 
                           (
                            <li style={{color:"blue"}} key={key}>{item.nom} durée {item.duree}</li>
                           )
                           )
                    })
                }
            </ul>
        </>
    );
}

export default Exo3;