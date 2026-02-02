import elipse from "../../assets/home/elipse.png"
import momo from "../../assets/home/momo.png"
import { HiOutlineArrowRight } from "react-icons/hi";



const Hero = () => {
  return (
    <section className=' flex  bg-white min-h-250 flex-wrap justify-end gap-2  '>
        <div className=' w-[500px] p-6 space-y-4 mt-30 mr-30'>

            <p>RESTAURANT</p>
            <h1 className="text-4xl font-black">The <span  className="text-white">#One</span></h1>
            <h1 className="text-4xl font-bold">Momo <span className="text-orange-600 ">Resturant</span></h1>
            <p className="font-semibold mb-4">More than <span className="text-orange-600">20+ Varieties</span> of momo available for you</p>
            <button className=" flex justify-center items-center bg-teal-600 p-5 text-white rounded-3xl">Explore Food Menu
                <HiOutlineArrowRight/>

            </button>
        </div>



        <div className=' relative w-[700px] overflow-hidden flex justify-center items-center'>
            <img src={elipse} alt="elipse" className="absolute -top-10 right-0 " />
            <img src={momo} alt="momo" className="absolute top-40 right-20" />

        </div>




    </section>
    
  )
}

export default Hero