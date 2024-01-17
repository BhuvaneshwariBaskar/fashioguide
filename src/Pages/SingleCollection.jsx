import React ,{useEffect,useState}from 'react';
import Navbar2 from '../components/Navbar/Navbar2.component'
import Singlecollection from '../components/Collectioncompo/Singlecollectioncard'
import { Dresscollection } from "../utils/collection";


const SingleCollection = ({user}) => {
  const [dressData, setDressData] = useState([]);

    useEffect(() => {
        console.log(Dresscollection);
        if ( Dresscollection && Dresscollection.length > 0) {
          const data =  Dresscollection.filter((event) => event.gender_type === "Female");
          setDressData(data);
          console.log(dressData);
        }
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