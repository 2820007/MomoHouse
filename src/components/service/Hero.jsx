
import chef from "../../assets/services/service.png"

const Hero = () => {
  return (
    <section className="min-h-screen flex justify-around items-center bg-white pt-10 ">
      <div className="mb-10 w-[600px space-y-4">
        <h1 className="text-4xl font-semi-bold text-teal-500  ">Our Services</h1>
        <p className="font-semi-bold">KNOWING OUR CUSTOMERS NEEDS</p>
        <p className="text-4xl font-bold"><span className="text-orange-700" >We're more than just momos.  
          <br /></span>We're a full-service dining experience.</p>
      </div>

    
      <div className='mt-6 lg:mt-0'>
                <img src={chef} alt="about1" className='w-114 h-157.57 object-cover rounded-lg' />
              </div>
    </section>
  );
};

export default Hero;
