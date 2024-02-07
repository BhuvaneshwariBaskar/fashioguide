import React ,{useEffect,useState}from 'react';
import Navbar2 from '../components/Navbar/Navbar2.component'
import Singlecollection from '../components/Collectioncompo/Singlecollectioncard'
import { useLocation } from 'react-router-dom';
import { dress } from '../axios/dress.axios';


const SingleCollection = ({user}) => {
  const [dressData, setDressData] = useState([]);
  
  const location = useLocation();
  const passedData = location.state && location.state.data;
  useEffect(() => {
    dress(user.token).then((res) => {
      const data = res.data.filter((event) => event.category_name === passedData);
      setDressData(data);
    });
  }, []);
    
  return (
    <section className="bg-[#EEEEEE]">
    {/* Navbar */}
      <Navbar2 />
      <div class="ml-[5%] mt-[3%] position:relative justify-center items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {dressData &&
            dressData.map((dress, index) => (
              <Singlecollection dress={dress} index={index} />
            ))}
        </div>
    </section>
  )
}

export default SingleCollection