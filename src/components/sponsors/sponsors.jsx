import React from 'react'
import './sponsorModule.css'
import { useState, useEffect } from 'react'
import axios from 'axios';


export default function Sponsors() {
  const [sponsor, setSponsor] = useState([]);


    async function getData() {
      try {
        const res = await axios.get('http://217.151.230.35:199/api/info/sponsor/'); 
        console.log(res.data);
        setSponsor(res.data);
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
        Спонсоры
      </div>
    <div className="sponsor-container">
      
      {sponsor.map((sponsor) => (  
        <div key={sponsor.id} className="main-org">
          {sponsor.photo && (
            <>
            <a href={sponsor.url} target="_blank" rel="noopener noreferrer" >
            <img src={sponsor.photo} alt={sponsor.name} className='sponsor-img'/>
            </a>
            </>            
          )}

        </div>
      ))}
    </div> 
    </div>
    </>
  )
}
