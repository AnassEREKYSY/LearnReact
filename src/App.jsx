import Event from "./component/exo/Event.component";
import Exo3 from "./component/exo/Exo3.component";
import Exo2 from "./component/exo/Exo2.component";
import Base from "./component/base/Base.component";
import Navbar from "./component/navbar/Navbar.component";
import H1 from "./component/h1/H1.component";
import Button from "./component/button/Button.component";
import Liste from "./component/exo/Liste.component";
import Article from "./component/exo/Article.component";
import Api from "./component/exo/API.component";
function App(){
  return(
    <>
      <H1 />
      <Button /> 
      <Navbar />
      <Base /> 
      <Exo2 />
      <Exo3 />
      <Event />
      <Liste />
      <Article />
      <Api />
    </>
  )
}
export default App;