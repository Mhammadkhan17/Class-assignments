import Image from "next/image";

const cars = [
    {
       id:13 , carOne: <Image src="/Corolla.png" alt="Corolla" height={1000} width={1000} className="w-max rounded-3xl shadow-md"></Image>
    },
    {
       id:23 , carTwo: <Image src='/Honda_Civic.png' alt="Honda_Civic" height={1000} width={1000} className="w-max rounded-3xl shadow-md"></Image>
    },
    {
       id:33 , carThree: <Image src='/Honda_City.png' alt="Honda_City" height={1000} width={1000} className="w-max rounded-3xl shadow-md"></Image>
    },
    {
       id:43 , carFour: <Image src='/Suzuki_Alto.png' alt="Suzuki_Alto"  height={1000} width={1000} className="w-max rounded-3xl shadow-md"></Image>
    }
]

const ArrayMap = () => {

  return (
    <div className="flex">
        {
            cars.map((vehicle)=>{
                return(
                    <div key={vehicle.id} className="flex justify-between m-8">
                        {vehicle.carOne}
                        {vehicle.carTwo}
                        {vehicle.carThree}
                        {vehicle.carFour}
                    </div>
                )
            })
        }
    </div>
  );
};

export default ArrayMap;
