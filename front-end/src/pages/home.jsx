import React from 'react';
//import { FaTrash, FaEdit } from "react-icons/fa";
import '../style/style.css'

const Home = ({items}) => {


    return(
        <>
            <header> 

                <h1>Ia Solídaria</h1> 

                <nav>
                    <ul>
                        <li>Página 1</li>
                        <li>Página 2</li>
                        <li>Página 3</li>
                    </ul>
                </nav>

            </header>


            <section className='bodySection'>

                <div className='listDonation'>
                    <h2>Lista de Doações</h2>
                    <table>
                    <thead>
                        <tr>
                            <th>Alimento</th>
                            <th>Quantidade</th>
                            <th>Tipo</th>
                            <th>Bairro</th>
                        </tr>
                    </thead>

                    <tbody>
                        {items.map((item) => (
                        <tr key={item.uuid}>
                            <td>{item.alimento}</td>
                            <td>{item.quantidade}</td>
                            <td>{item.tipo}</td>
                            <td>{item.bairro}</td>
                        </tr>
                        ))}
                    </tbody>
                    </table>
                </div>
            </section>

            <footer>
                <h4>Todos os direitos reservados. ©</h4>
            </footer>



        </>
    )
}

export default Home