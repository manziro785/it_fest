import React from 'react'
import './partnerModule.css'
import { useState, useEffect } from 'react'
import axios from 'axios';


export default function Partner() {
  const [partner, setPartner] = useState([]);


    async function getData() {
      try {
        const res = await axios.get('http://217.151.230.35:199/api/info/partner/'); 
        console.log(res.data);
        setPartner(res.data);
      } catch (error) {
        console.error('Ошибка при выполнении GET-запроса:', error.message);
        
      }
    }
    useEffect(() => {
      getData();      
    }, []); 

  return (
    <>
        <div className="wrapp-org">

    <div className="title-org">
        Партнеры
      </div>
    <div className="partner-container">
      
      {partner.map((partner) => (  
        <div key={partner.id} className="main-org">
          {partner.photo && (
            <> 
            <a href={partner.url} target="_blank" rel="noopener noreferrer">
            <img src={partner.photo} alt={partner.name} />
            </a>
            </>            
          )} 
          <h2>{partner.name}</h2>

        </div>
      ))}
    </div> 
    </div> 

    </>
  )
}
