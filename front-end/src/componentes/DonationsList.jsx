import React from 'react';
import { FaTrash, FaEdit} from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import '../style/style.css'

const DonationsList = (props) => {

    const items = props.items

    return(
        <>
                 <section className='bodySection'>
                <div className='listDonation'>

                    <div className='headerList'>
                     <h2>Lista de Doações</h2>
                        <button id='buttonAdd' onClick={props.onAddClick}>Adicionar <FaCirclePlus /></button>
                    </div>
                    

                    <table>
                    <thead>
                        <tr>
                            <th>Alimento</th>
                            <th>Quantidade</th>
                            <th>Tipo</th>
                            <th>Bairro</th>
                            <th>Ações</th>
                        </tr>
                    </thead>

                    <tbody>
                        {items.map((item) => (
                        <tr key={item.uuid}>
                            <td>{item.alimento}</td>
                            <td>{item.quantidade}</td>
                            <td>{item.tipo}</td>
                            <td>{item.bairro}</td>
                            <td id='icon-actions'>
                                <span style={{ marginRight: '10px'}}><FaEdit /></span>
                                <span><FaTrash /></span>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}

export default DonationsList