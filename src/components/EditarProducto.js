import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editarProductoAction } from '../actions/productoActions';
import { useNavigate } from 'react-router';

const EditarProducto = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [producto, guardarProducto] = useState({
    nombre: '',
    precio: ''
  })

  //Producto a editar
  const productoEditar = useSelector(state => state.productos.productoeditar);
  
  //Llenar el state automaticamente
  useEffect(() => {
    guardarProducto(productoEditar);
  }, [productoEditar]);

  //Leer los datos del formulario
  const onChangeFormulario = e => {
    guardarProducto({
      ...producto,
      [e.target.name] : e.target.value
    })
  }
  
  const {nombre, precio} = producto;
  const submitEditarProducto = e => {
    e.preventDefault();
    dispatch(editarProductoAction(producto));
    navigate('/');
  }

  return (
    <div className='row justify-content-center'>
    <div className='col-md-8'>
      <div className='card mt-4'>
        <div className='card-body'>
          <h2 className='text-center mb-4 font-weight-bold'>
            Editar Producto
          </h2>

          <form
            onSubmit={submitEditarProducto}
          >
            <div className='from-group'>
              <label>Nombre Producto</label>
              <input 
                type="text" 
                className='form-control' 
                placeholder='Nombre Producto' 
                name='nombre'
                value={nombre}
                onChange={onChangeFormulario}
              />
            </div>
            <div className='from-group'>
              <label>Precio Producto</label>
              <input 
                type="number" 
                className='form-control' 
                placeholder='Precio Producto' 
                name='precio'
                value={precio}
                onChange={onChangeFormulario}
              />
            </div>

            <button
              type='submit'
              className='btn btn-primary font-weight-bold mt-3 text-uppercase d-block w-100'
            >Guardar Cambios</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default EditarProducto