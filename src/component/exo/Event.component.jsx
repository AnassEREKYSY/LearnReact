function Event() {
    const handelClick =()=>alert("Je suis la 2eme methode");
    const addition =(a,b)=>alert(a+b);
    return (  
        <div>
            <button onClick={function(){}}>Bouton</button>
            <button onClick={()=>alert("Bonjour")}>Message</button>
            <button onClick={handelClick}>Bouton</button>
            <button onClick={()=>addition(3,4)}>Addition 1</button>
            <button onClick={()=>addition(10,4)}>Addition2 </button>
        </div>
    );
}

export default Event;