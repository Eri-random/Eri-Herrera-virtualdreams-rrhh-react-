import React from 'react';
import './styles/formulario.css';
import validar from './validacion.js';



class Form extends React.Component {
    state = {
        errors: {
            default:"completá todos los campos"
        }
    };


    handleChange = e => {

        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {

        e.preventDefault();
        //pasarle los valores que contiene el estado
        //object destructuring para sacar los errores del estado
        const { errors, ...sinErros } = this.state
        const {errores} = this.state;

        //tendra todos lo errores que tenga el formulario
        const result = validar(sinErros);

        //devuelve un arreglo con las propiedades del objeto
        if (Object.keys(result)) {
            //asignar a errores los que obtenga de la funcion validar
            return this.setState({ errors: result })
        }

    };

    handleClick = e => {
        const { errors } = this.state;

      
        if(Object.keys(errors).length === 0){
            alert("El mensaje se envio correctamente");
        }
    }



    render() {

        //guardar los errores del estado
        const { errors } = this.state;


        return (
            <div className="row justify-content-center">

                <div className="col-lg-7 col-md-9 col-sm-12 border border-2 rounded-3 my-5 py-5 px-7">
                    <h1>Contáctenos.</h1>
                    <p>Contáctenos sobre cualquier cosa relacionada con nuestra empresa o nuestro servicio <br></br>Haremos todo lo posible por darle respuestas a la brevedad.</p>

                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group mb-4">
                            <label htmlFor="">Nombre</label>
                            <input
                                onChange={this.handleChange}
                                className="form-control"
                                type="text"
                                name="nombre"
                                value={this.state.nombre} />
                        </div>
                        {errors.nombre && <p className="error">{errors.nombre}</p>}

                        <div className="form-group mb-4">
                            <label htmlFor="">Email</label>
                            <input
                                onChange={this.handleChange}
                                className="form-control"
                                type="text"
                                name="email"
                                value={this.state.email} />
                        </div>
                        {errors.nombre && <p className="error">{errors.email}</p>}


                        <div className="form-group mb-4">
                            <label htmlFor="">Asunto</label>
                            <input
                                onChange={this.handleChange}
                                className="form-control"
                                type="text"
                                name="asunto"
                                value={this.state.asunto} />
                        </div>

                        <div className="form-group mb-4">
                            <label htmlFor="">Mensaje</label>
                            <textarea
                                onChange={this.handleChange}
                                className="form-control"
                                name="mensaje"
                                id=""
                                cols="30" rows="5"
                                value={this.state.mensaje}></textarea>
                        </div>

                        {errors.default && <p className="error center">{errors.default}</p>}

                        <div className="d-grid col-10 mx-auto mt-5">
                            <input onClick={this.handleClick}className="btn btn-dark" type="submit" value="Enviar"></input>
                        </div>

                    </form>
                </div>
            </div>



        );
    }
}

export default Form;