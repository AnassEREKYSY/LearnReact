import Commentaires from "./Commentaire.component";

function Article() {
    const data = {
          titre: "Article1",
          contenu: "Lorem30",
          auteur: "Victor Hugo",
          commentaires: [
            { contenu: "Super Article", date: "25/10/2023" },
            { contenu: "Ohhh c'est trop bon!!!!", date: "02/10/2021" },
            { contenu: "Article super bon!!", date: "20/09/2022" },
          ],
        }
    return (  
        <div>
            <h1>{data.titre}</h1>
            <p>{data.contenu}</p>
            <p> nom auteur : {data.auteur}</p>
            {data?.commentaires?.map(function(item , key){
                return  <Commentaires key={key} item={item}/>
            })}
           
        </div>
    );
}

export default Article;