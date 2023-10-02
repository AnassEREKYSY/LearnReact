function Exo2() {

    //les boucles 
    //les conditions
    const fleurs=["jasmin","rose","tulipe"];
    return (  
        <>
            <div>
                <h1>Exo2</h1>
                <p style={{color:"red", fontSize:"30px"}}>
                    Lorem ipsum dolor sit, 
                    amet consectetur adipisicing elit. Voluptate, nisi!
                    Lorem ipsum dolor sit 
                    amet consectetur adipisicing elit. Quis, numquam.
                </p>
            </div>
            <h2>Les boucles</h2>
            <ul>
                { fleurs.map(function(item,key){
                    return <li key={key}>{item}</li>
                })
                }
            </ul>
            <h2>Les conditions</h2>
            {/**if classique , L'operateur ternaire (condition)? si ture : si false
             *                                      (confdition) && si true
            */}
            <div>
                {
                    (0 > 1)? <p>Condition true</p>:<p>Condition false</p>
                }
            </div>
            <div>
               {
                    (10 > 1)&& <p>Condition true</p>
                } 
            </div>
            

        </>
    );
}

export default Exo2;