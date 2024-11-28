import ArrayMap from "./components/arraymap";
import ParentComponent from "./components/parentcomponent";

import React from "react";
import Card from "./components/card";
const data = [
  { id: 1, title: "Toyota Corolla", price: 'PKR 59.7 - 75.5 lacs', imageUrl:'/Corolla.png' },
  { id: 2, title: "Honda City", price: 'PKR 46.5 - 58.5 lacs',imageUrl:'/Honda_City.png' },
  { id: 3, title: "Honda Civic", price: 'PKR 86.6 - 99.0 lacs' , imageUrl:'/Honda_Civic.png'},
  {id: 4,  title: "Suzuki Alto", price: 'PKR 23.3 - 30.5 lacs', imageUrl:'/Suzuki_Alto.png'},
];

const HomePage = () => {
  return (
    <>
      <h1 className="text-6xl text-center font-semibold my-5">Array Map function</h1>
      <ArrayMap />
      <h1 className="text-6xl text-center font-semibold my-5">Props</h1>
      <ParentComponent />
      <h1 className="text-6xl text-center font-semibold my-5">Cards using props</h1>
      <div className="flex justify-around p-10">
        {data.map((item) => (
          <div key={item.id} className="m-3">
            <Card
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
            />
          </div>
        ))}
      </div>
    </>
  );
};
export default HomePage