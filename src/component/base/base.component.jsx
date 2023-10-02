function Base() {
    const text ="Bonjour les Amis"
    const url ="https://via.placeholder.com/200"
    function click(){
        console.log("Cliquer");
    }
    return ( 
        <div>
            {/**interpolation */}
            <h2>{text}</h2>
            {/**ne pas oublier de fermer les balise */}
            <img src={url} alt="" /> 
            <p id="premier" className="info" style={{color:"green"}}>Lorem ipsum 
                dolor sit amet consectetur adipisicing elit. 
                Suscipit maiores ut expedita atque voluptatem 
                eligendi temporibus nemo deserunt, facere quia 
                molestiae architecto illum quae veritatis excepturi 
                accusamus ipsa nobis libero.
            </p>
            <button onClick={click}>Cliquer</button>
        </div>
    );
}

export default Base;