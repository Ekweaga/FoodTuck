import React from 'react'

function Chef() {

    interface Chef{
        name:string,
        pos:string
    }
  return (
  <>
    <div style={{backgroundImage:'url("/unsplash_4ycv3Ky1ZZU.png")',backgroundSize:'cover',backgroundRepeat:'no-repeat'}} className="h-[200px] text-white flex flex-col items-center justify-center" >
        <h1 className="text-3xl font-bold mb-[10px]">Our Chef</h1>
        <p className='text-[#195A00] '>Chef</p>
    </div>

  </>
  )
}

export default Chef