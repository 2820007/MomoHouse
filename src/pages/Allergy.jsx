import React from 'react'
import AllergyCom from '../components/about/Allergy'
import first from "../assets/first.png"
import vector from "../assets/allergy/vector.png"
import spices from "../assets/allergy/spices.png"



const Allergy = () => {
  return (
    <div>
  
      <div>
        <div className="  flex justify-between p-10 pl-60 pr-40 bg-white ">
        <div className=" flex flex-col justify-center mb-20 gap-15 w-180 ">
          <div className=" text-[50px] font-bold">
            <h2>Allergy Advices</h2>
          </div>

          <div className=" space-y-2">
            <p className="text-[#6B788E] text-[20px] tracking-wide ">AT OUT RESTAURANT</p>
            <div>
              <h3 className="text-4xl font-bold text-[#101828]">
                We use only the freshest and highest quality ingredients in all our dishes,
              </h3>
              <h3 className="text-4xl font-bold text-orange-600 ">
               and offer transparency in our ingredient labeling.
              </h3>
            </div>
          </div>
        </div>
        <div className="">
          <img src={first} alt="" />
        </div>
      </div>

      <div className="bg-white  relative">
  {/* Heading */}
  <div className='flex justify-center items-center gap-4'>
        <img className='h-2' src="src/img/BRUSHES.png" alt="" />

    <h1 className="text-4xl p-10 font-bold text-center text-orange-600">
    Ingredients <span className="text-[#101828]">used</span>
  </h1>
      <img className='h-2' src="src/img/BRUSHES.png" alt="" />

  </div>
  

  {/* Image */}
  <div className="flex ml-120 mt-10">
    <img
      src={vector}
      alt="Allergy"
      className=""
    />
  </div>

  {/* Overlay Component */}
  <div className="absolute inset-0 flex top-20 flex-col gap-20 justify-center items-center">
 <div >
    <AllergyCom
    head={<>For the Dough</>}
    list={<>
    <li>120 gms refined flour</li>
    <li>1/4 tsp baking powder</li>
    <li>1/2 tsp salt water (for kneading)</li>
    </>}
    />
  </div>

  <div>
    <AllergyCom
    head={<>For The Chicke Filling</>}
    list={<>
     <li>1 cup chicken (minced)</li>
    <li>1/2 cup onions, finely chopped</li>
    <li>1/4 tsp black pepper powder</li>
    <li>1/2 tsp garlic paste</li>
    <li>1/2 tsp soya sauce</li>
    <li>Salt</li>
    <li>1/4 tsp vinegar</li>
    </>}/>
  </div>

  <div>
    <AllergyCom
    head={<>For the Vegetarian Filling::</>}
    list={<>
     <li>1 cup cabbage and carrots, grated</li>
    <li>2 tbsp onions , finely chopped</li>
    <li>1/2 tsp garlic, finely chopped</li>
    <li>1 tbsp oil</li>
    <li>1/4 tsp vinegar</li>
    <li>1/2 tsp soya sauce</li>
    <li>to taste salt</li>
    <li>to taste pepper</li>
    <li>1 tbsp cornflour</li>
    </>}/>
  </div>

   <div>
    <AllergyCom
    head={<>For Chilli Sauce:</>}
    list={<>
     <li>25 gram garlic, peeled</li>
    <li>6 gms whole red chillies</li>
    <li>3 tbsp vinegar</li>
    <li>3 tbsp vinegar</li>
    <li>1 tbsp oil</li>
    <li>to taste salt</li>
    <li>to taste salt</li>
    <li>to taste sugar</li>
    <li>1 tbsp cornflour</li>
    </>}/>
  </div>
  </div>
 

   <div className=' bg-white flex justify-center items-center'>
    <img className='' src={spices} alt="" />
    </div>

    <div className=' bg-white flex justify-end p-6'>
    <img className='mr-90' src="src/img/allergy4.png" alt="" />
    </div>
  </div>


<div className='bg-white p-8'>
  <div className=' bg-white flex justify-center items-center gap-5 '>
    <img className='h-2' src="src/img/BRUSHES.png" alt="" />
    <h1 className='text-4xl text-center font-bold font-sans text-orange-600'>Allergy <span className='text-[#101828]'>Advice</span> </h1>
    <img className='h-2' src="src/img/BRUSHES.png" alt="" />
    </div>

    <div className='p-50 pt-10 pb-6 text-lg leading-relaxed text-gray-700 text-justify space-y-6' >
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio quia facilis suscipit laborum neque asperiores rerum error, id amet, iure exercitationem quas nihil? Ad laudantium adipisci quos, nisi error Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, officia? Consequatur laboriosam velit magni doloremque, expedita doloribus unde veniam aliquid tempora animi eius est voluptate voluptatum, ducimus quod dolorum, recusandae quo modi eveniet possimus amet. Corporis nostrum doloribus expedita mollitia suscipit reprehenderit reiciendis quaerat maxime alias omnis, architecto quidem sunt.expedita cumque alias? Explicabo veritatis itaque at magnam non! Cumque reiciendis quod excepturi facilis dolore, quas eligendi fuga temporibus? Facilis quas illum rerum numquam possimus et excepturi omnis iste asperiores harum!</p>
       <p>Lorem ipsum dolor sit amet Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus quos mollitia dolore consequuntur nobis necessitatibus voluptatem tempora accusamus ipsam quis? consectetur, adipisicing elit. Nesciunt fugit suscipit nostrum nobis id, quos magnam fugiat placeat rerum ipsa fuga beatae vel ad quas maxime officia culpa eligendi minima accusamus dolores eos eaque? Nostrum veritatis odit, magnam iste sed, sunt eius praesentium totam atque in necessitatibus quo harum eum!</p>
       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt fugit suscipit nostrum nobis id, quos magnam fugiat placeat Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente atque accusamus voluptatibus ipsa voluptatum est nemo quod illum quidem earum reprehenderit eveniet distinctio magnam quo amet cupiditate officia, ipsam eligendi alias Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis accusantium aperiam eius exercitationem deserunt itaque hic totam eligendi architecto. In ea consectetur corporis eaque, quod facilis, iste rerum perspiciatis necessitatibus est maiores minus vitae illum aut commodi blanditiis tempore suscipit dolorum non nulla enim alias nisi. A voluptates, ipsa sequi modi optio quae voluptatem dolores reprehenderit dolore saepe quam velit quas accusamus repudiandae incidunt ducimus ut dignissimos? Esse laborum dolorum maxime alias et nostrum consequuntur illum doloremque consequatur maiores amet saepe repellat, beatae, velit fuga corrupti. Placeat sapiente temporibus quisquam.harum minima architecto aspernatur labore. Cum labore molestias hic? rerum ipsa fuga beatae vel ad quas maxime officia culpa eligendi minima accusamus dolores eos eaque? Nostrum veritatis odit, magnam iste sed, sunt eius praesentium totam atque in necessitatibus quo harum eum!</p>
       <p>Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur adipisicing elit. In modi, minima consequatur eos, laudantium laborum vitae sapiente iste fugiat voluptatibus vero temporibus necessitatibus debitis recusandae unde repellat quis incidunt nesciunt. Amet fuga qui architecto iure fugit, animi accusantium facilis placeat consectetur praesentium odio ipsum quas magni perferendis quod voluptate eaque a tempora sunt? Fugit provident repudiandae quo vitae magnam ab? amet consectetur, adipisicing elit. Nesciunt fugit suscipit nostrum nobis id, quos magnam fugiat placeat rerum ipsa fuga beatae vel ad quas maxime officia culpa eligendi minima accusamus dolores eos eaque? Nostrum veritatis odit, magnam iste sed, sunt eius praesentium totam atque in necessitatibus quo harum eum!</p>
    </div>
</div>



      </div>
    </div>
  )
}

export default Allergy