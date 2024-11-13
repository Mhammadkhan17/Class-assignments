import Image from "next/image"
const FeatureProducts = () => {
    return (
        <div className="flex lg:flex-row flex-col justify-around my-7 mx-12">
            <div className="w-full mb-7 p-6 pt-7 ml-2 mr-2 bg-gray-100 rounded-3xl"> 
            <div className="flex justify-center"><Image src='/Corolla.png' width={400} height={450} className="rounded-3xl" alt="Corolla"/></div>
            <p className="text-lg text-center font-bold pt-2">Toyota Corolla</p>
            <p className="text-center pt-2">PKR: $$$</p>
            <div className="flex justify-center pt-5"><button className="px-10 py-4 bg-blue-600 text-white rounded-md">Buy now</button></div>
            </div>

            <div className="w-full mb-7 p-6 pt-7 ml-5 mr-5 bg-gray-100 rounded-3xl"> 
            <div className="flex justify-center"><Image src='/Honda_City.png' width={400} height={450} className="rounded-3xl" alt="Honda_City"/></div>
            <p className="text-lg text-center font-bold pt-2">Honda City</p>
            <p className="text-center pt-2">PKR: $$$</p>
            <div className="flex justify-center pt-5"><button className="px-10 py-4 bg-blue-600 text-white rounded-md">Buy now</button></div>
            </div>

            <div className="w-full mb-7 p-6 pt-7 ml-5 mr-5 bg-gray-100 rounded-3xl">
            <div className="flex justify-center"><Image src='/Honda_Civic.png' width={400} height={450} className="rounded-3xl" alt="Honda_Civic"/></div>
            <p className="text-lg text-center font-bold pt-2">Honda Civic</p>
            <p className="text-center pt-2">PKR: $$$</p>
            <div className="flex justify-center pt-5"><button className="px-10 py-4 bg-blue-600 text-white rounded-md">Buy now</button></div>
            </div>

        </div>
    )
}
export default FeatureProducts