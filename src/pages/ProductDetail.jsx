import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async (id) => {
      setLoading(true);
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await res.json();

        if (!res.ok) {
          throw new Error("Failed to fetch");
        }
        setData(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData(id);
  }, [id]);
  if (error) return error;
  if (loading) return <div>Loading.....</div>;

  const addtoCart = async (item) => {
    try {
      const res = await fetch("https://fakestoreapi.com/carts", {
        method: "POST",
        body: item,
      });
      if (!res.ok) throw new Error("Failed ");
      alert("Item added to cart successfully!");
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <div className="flex flex-row min-h-screen min-w-full items-center justify-center p-8 gap-7 cursor-default ">
      <div className="hover:scale-110 transition  duration-300">
        <img
          src={data?.image}
          alt={data?.title}
          className="w-90 h-100  object-contain rounded-lg  p-4 cursor-pointer"
        />
      </div>

      <div className="flex flex-col max-w-lg mb-5">
        <div className=" text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent cursor-default">
          {data?.title}
        </div>

        <div className="text-gray-600 text-justify mb-3 text-sm cursor-default">
          {data?.description}
        </div>

        <div className="text-green-500 font-semibold text-md mb-6 cursor-default">
          <span className="text-gray-700 text-xl">Price: </span>${data?.price}
        </div>
        <div className="flex flex-row justiify-center items-center gap-2 mb-4 cursor-default">
          <span className="text-md font-semibold text-yellow-500 ">
            <span className="text-gray-600 ">Rating: </span>
            {data?.rating?.rate}
            <span className="text-black">/5</span>
          </span>

          <span className="text-sm text-gray-400">
            ({data?.rating?.count}review)
          </span>
        </div>
        <button
          onClick={() =>
            addtoCart(
              JSON.stringify({
                id: 0,
                userId: 0,
                product: [data],
              })
            )
          }
          className="bg-gradient-to-r from-blue-500 to-purple-500 w-60 h-10 rounded-2xl text-white hover:from-blue-600 hover:to-purple-600 hover:scale-105 transition duration-300 cursor-pointer"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
