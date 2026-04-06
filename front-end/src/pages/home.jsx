import React, {useState} from 'react';
import '../style/style.css'
import Header from '../componentes/Header.jsx'
import Footer from '../componentes/Footer.jsx'
import Donationlist from '../componentes/DonationsList.jsx'
import AddComponent from '../componentes/AddComponent.jsx'

const Home = ({items}) => {

    const [showForm, setShowForm] = useState(false)

    const handleShowForm = () => {
    setShowForm(!showForm)
}


    return(
        <>
            <Header />
            
            {showForm && <AddComponent />}

            <Donationlist items={items} onAddClick={handleShowForm} />

            <Footer />
        </>
    )
}

export default Home