import React ,{useEffect,useState}from 'react';
import { useNavigate } from 'react-router-dom';
import { Dresscollection } from "../../utils/collection";


const Singlecollection = () => {
  
  const navigate = useNavigate();
  const [dressData, setDressData] = useState([]);
  const navigateToPage=(e)=>{
    navigate('/individualpage', { state: { data: e } });
  }
  useEffect(() => {
    if ( Dresscollection && Dresscollection.length > 0) {
      const data =  Dresscollection.filter((event) => event.gender_type === "Female");
      setDressData(data);
      console.log(dressData);
    }
  }, []);
  return (
    <div className="sm:w-96 position:relative justify-center items-center" onClick={navigateToPage()}>
<div className="w-96 h-[50vh] position:relative justify-center items-center bg-white my-7 mt-7 mb-4 bg-cover bg-center" style={{ backgroundImage: `url(${Dresscollection})` }}>
      
      </div>
      <h1 className='text-center text-2xl font-[inter]'>{}</h1>

    </div>
      
    
  )
}

export default Singlecollection