import React, { Component } from 'react';


class Buscador extends Component {

    busquedaRef = React.createRef(); //Creo un objeto y una referencia
    obtenerDatos = (e) => {
        e.preventDefault();
        
        // tomamos el valor del imput y lo enviamos al cmponente principal
        const termino = this.busquedaRef.current.value;
        
        this.props.datosBusqueda(termino);
    };

    render() { 
        return (
            <form onSubmit={this.obtenerDatos}>
                <div className="row">

                    <div className="form-group col-md-8">

                        <input ref={this.busquedaRef} type="text" className="form-control
                        form-control-lg" placeholder="Busca tu Imagen.
                        Ejemplo: Montaña" />

                    </div>

                    <div className="row">
                        <div className="form-group col-md-12">
                            
                            <input type="submit" className="btn-lg btn-danger btn-block" value="Buscar" />
                        </div>

                    </div>
                </div>

            </form>
        );
    }
}
 

export default Buscador;