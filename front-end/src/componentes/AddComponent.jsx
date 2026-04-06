import React, { useState } from 'react';
import '../style/style.css';
import axios from 'axios';

const AddComponent = (props) => {

    const [formData, setFormData] = useState({
        alimento: '',
        quantidade: '',
        tipo: '',
        bairro: '',
        categoria: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:4000/doacoes', formData);
            console.log("Enviado com sucesso");

            // limpa o formulário
            setFormData({
                alimento: '',
                quantidade: '',
                tipo: '',
                bairro: '',
                categoria: ''
            });

            // atualiza lista e fecha form (se vier do pai)
            if (props.onSuccess) {
                props.onSuccess();
            }

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='bodyForm'>
            <form className='form' onSubmit={handleSubmit}>

                <label htmlFor="alimento">Alimento:</label>
                <input 
                    type='text' 
                    id='alimento' 
                    name='alimento' 
                    value={formData.alimento}
                    onChange={handleChange} 
                />

                <label htmlFor="quantidade">Quantidade:</label>
                <input 
                    type='text' 
                    id='quantidade' 
                    name='quantidade' 
                    value={formData.quantidade}
                    onChange={handleChange} 
                />

                <label htmlFor="tipo">Tipo:</label>
                <input 
                    type='text' 
                    id='tipo' 
                    name='tipo' 
                    value={formData.tipo}
                    onChange={handleChange} 
                />

                <label htmlFor="categoria">Categoria:</label>
                <input 
                    type='text'
                    id='categoria'
                    name="categoria" 
                    value={formData.categoria}
                    onChange={handleChange} 
                />

                <label htmlFor="bairro">Bairro:</label>
                <input 
                    type='text' 
                    id='bairro' 
                    name='bairro' 
                    value={formData.bairro}
                    onChange={handleChange} 
                />

                <button type="submit">Adicionar</button>
            </form>
        </div>
    );
};

export default AddComponent;