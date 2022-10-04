import { useState } from "react";
import Swal from 'sweetalert2';
import Tarjeta from "../src/componentes";

import "./index.css";

// CONSIGNAS EN APP:
// 1- implementar 2 estados, uno para manejar el tema claro/oscuro del sitio y otro estado que maneje la plataforma favorita seleccionada
// 2- crear los metodos que me permitan asiganarle valor correspondiente a esas variables
// 3- incorporar el componete Tarjeta en 🚩

function App() {
  const state = [temaOscuro, setTemaOscuro] = useState(false);
  const state2 = [favorita, setFavorita] = useState("");


  const handleTema = (event) => {
   this.setState({
              temaOscuro: event.target.value
              });


      }



   
  };

  const handleFavorita = (event) => {
                     this.setState2({
                                  favorita: event.target.value
                                  });


                          }
  
  };
const asiganarleTema = (event) => {
   if (this.state.temaOscuro === true){
               setTemaOscuro({'temaOscuro: false'})}
               else {
               setTemaOscuro({'temaOscuro: false'})
               }

})

const asiganarleTema = (event) => {
     if (this.state.favorita == "youtube"){
                 setTemaOscuro({'temaOscuro: false'})}
                 else {
                 setTemaOscuro({'temaOscuro: false'})
                 }

  })







}



  return (
    <div id="App" className={temaOscuro ? "dark" : ""}>
      <h1>¡Bienvenidos!</h1>
      <h2>Contanos, ¿cuál es tu plataforma favorita?</h2>
      { favorita !== "" ? (<h4 className={ favorita === "Twitter" ? "tw" : favorita === "Facebook" ? "fb" : "yt" }> {favorita}</h4>) : ("")}

      // 🚩 incoporar el componente Tarjeta, pasarle la funcion que maneja la plataforma favorita

      <button onClick={() => { handleTema(); }}>Cambiar tema</button>
    </div>
  );
}


export default App;
