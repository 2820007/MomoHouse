import React from "react";

const AllergyCom = ({head,list}) => {
  return (
    <div className="bg-white w-186  ">
      <div class=" border-4 rounded-lg border-[#101828] p-12">
  <h2 class="text-[25px] mb-5 font-semibold ">
     {head}
  </h2>

  <ul class="list-disc pl-6 font-sans font-medium space-y-3">
    {list}
    
  </ul>
</div>
    </div>
  );
};

export default AllergyCom;