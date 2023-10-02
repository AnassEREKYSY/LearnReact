function Exo4() {
    const formation =[
        {nom:"JS",duree:5 ,sommaire:["decouverte","installation"]},
        {nom:"Angular",duree:2,sommaire:["init","depoloiment"]},
        {nom:"React",duree:15,sommaire:["dev","prod"]}
    ];
    return ( 
        <div>
            {
                formation.map(function(item,key){

                    return (
                        <div key={key}>
                          <h2>{item.nom}</h2>
                          <p>Durée : {item.duree} heures</p>
                          <ul>
                            {item.sommaire.map(function (sousItem, sousKey) {
                              return <li key={sousKey}>{sousItem}</li>;
                            })}
                          </ul>
                        </div>
                      );
                })
            }
        </div>
    );
}

export default Exo4;