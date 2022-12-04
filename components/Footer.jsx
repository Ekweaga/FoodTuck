import React from 'react'
import Image from "next/image"

function Footer() {
  return (
   <>
   <footer style={{backgroundImage:'url("/unsplash_Y6O6PHJRQms.png")',backgroundSize:'cover',backgroundRepeat:'no-repeat'}} className="h-[350px] w-[100%] mt-[50px] relative">
<div className='w-full h-full bg-black/50 relative'>



</div>
<div className="absolute -bottom-[50px] right-0">
<Image src="/unsplash_yCuVsIknzhY.png" width={160} height={200} alt="icon"/>
</div>
<div className="absolute -top-[120px] left-0">
<Image src="/unsplash_x1ZZWyDU8sU.png" width={160} height={200} alt="icon"/>
</div>
   </footer>
   <div className="bg-[#195A00] h-[050px] flex justify-around items-center text-white text-sm ">
    <p>Copyright @ 2022 by Ayeman.All Rights reserved</p>
   <Image src="/Sociali icon.png" width={160} height={200} alt="icon"/>
    </div>

  


   </>
  )
}

export default Footer