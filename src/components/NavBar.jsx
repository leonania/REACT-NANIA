import React, { Fragment } from 'react';

class NavBar extends React.Component{
    render(){
        const customStyle ={
            backgroundColor : "white",
            padding: "20px",
            fontFamily: "arial",
            color : "black",
            fontSize: "10px"

            
        }
        return(
            <fragment>
            <div style={customStyle}>
                <h2 className='probandologo'>LOGO</h2>
                <ul class="listaNav">
                    <li><a href='https://www.mercadolibre.com.ar/'>Mi cuenta</a></li>
                    <li><a href='https://www.mercadolibre.com.ar/'>Mis compras</a></li>
                    <li><a href='https://www.mercadolibre.com.ar/'>Carrito</a></li>
                </ul>
           
            </div>
            </fragment>
        )
    }
}

export default NavBar;














