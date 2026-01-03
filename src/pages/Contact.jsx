import { useEffect, useState } from "react";
import {Link} from "react-router"

const Contact = () => {
  // const [name,setName] =useState("");
  // useEffect(()=>{
  //     console.log(
  //         name
  //     )
  // },[name])

  const [data, setData] = useState(null);
 

  useEffect(() => {
     const fetchData = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setData(data);
  };
    fetchData();
  }, []);
  return (
    <>
      {/* <div className="ml-15 mt-20">
        <input  type="text" value={name} onChange={(e)=>setName(e.target.value)} className="shadow bg-red-300"   />
       
        </div> */}
        <div className="mt-6 pl-160 text-6xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent">
          Product
        </div>
         
      <div className="flex gap-4 flex-wrap mt-3 ml-30 p-6 ">
        
        {data?.map((d) => (
          <div
            key={d.id}
            className="w-[300px] bg-white rounded-xl shadow-lg overflow-hidden flex flex-col hover:scale-105 transition  duration-300"
          >
            <div className="h-[280px] flex items-center justify-center p-4">
              <img
                src={d.image}
                alt="product image"
                className="h-[250px] w-full object-contain"
              />
            </div>

            <div className="px-5 pb-4 flex flex-col flex-grow cursor-default">
              <h2 className="font-semibold text-sm text-center leading-tight line-clamp-2 ">
                {d.title}
              </h2>
            </div>
            <div className="text-gray-500 font-semibold text-sm mt-1 pl-2 cursor-default">
              {"Price: $" + d.price}
            </div>
            <div className="text-xs text-gray-500 mt-3   mx-2 text-justify line-clamp-3 cursor-default    ">
              {d.description}
            </div>
            <div className="pl-2 mt-1 text-sm  ">
              <span className="text-blue-500">
                Rating:{" "}
                 {d.rating.rate}
              </span>
              
            </div>
            <Link to={`/product/${d.id}`}
              className="mt-2 w-full py-2 bg-blue-600 flex justify-center text-white text-sm font-semibold
                   rounded-bottom-md hover:bg-blue-700 transition"
            >
              View More Detail
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};
export default Contact;
