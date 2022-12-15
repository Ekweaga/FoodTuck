import React from 'react'
import {Cart} from '../../components/Context/context'
import {useState,useEffect,useContext
} from "react"

import {ProductItems, ProductModel} from "../DataJson"
import Image from "next/image"
import Link from "next/link"
import Head from 'next/head'
function Checkout() {
  const {cartitems,increase,decrease,clear,total} = useContext(Cart)
  return (
   <>
   <Head><title>CheckOut page</title></Head>
    <div style={{backgroundImage:'url("/unsplash_4ycv3Ky1ZZU.png")',backgroundSize:'cover',backgroundRepeat:'no-repeat'}} className="h-[200px] text-white flex flex-col items-center justify-center" >
        <h1 className="text-3xl font-bold mb-[10px]">CheckOut Page</h1>
        <p className='text-[#195A00] '>Checkout</p>
    </div>


<div className="mt-[100px]">

  <div className='w-[80%] mx-auto'>



  <div>

    <h3 className="font-bold">Shipping Address</h3>


    <div className='flex justify-between flex-col md:flex-row'>

<div>

<div className="mt-[15px] grid grid-cols-1 md:grid-cols-2 gap-[10px]">
      <div className="flex flex-col gap-[5px] ">
        <label>First name</label>
        <input type="text" className='border-[1px] border-[#EFEFEF] w-[350px] h-[40px] px-2'/>
      </div>
      <div className="flex flex-col gap-[5px] ">
      <label>Email address</label>
        <input type="text" className='border-[1px] border-[#EFEFEF] w-[350px] h-[40px] px-2'/>
      </div>
      <div className="flex flex-col gap-[5px] ">
      <label>Company</label>
        <input type="text" className='border-[1px] border-[#EFEFEF] w-[350px] h-[40px] px-2'/>
      </div>
      <div className="flex flex-col gap-[5px] ">
      <label>City</label>
        <input type="text" className='border-[1px] border-[#EFEFEF] w-[350px] h-[40px] px-2'/>
      </div>
      <div className="flex flex-col gap-[5px] ">
      <label>Address</label>
        <input type="text" className='border-[1px] border-[#EFEFEF] w-[350px] h-[40px] px-2'/>
      </div>
      <div className="flex flex-col gap-[5px] ">
      <label>Last name</label>
        <input type="text" className='border-[1px] border-[#EFEFEF] w-[350px] h-[40px] px-2'/>
      </div>
      <div className="flex flex-col gap-[5px] ">
      <label>Phone number</label>
        <input type="text" className='border-[1px] border-[#EFEFEF] w-[350px] h-[40px] px-2'/>
      </div>
      <div className="flex flex-col gap-[5px] ">
      <label>Country</label>
        <input type="text" className='border-[1px] border-[#EFEFEF] w-[350px] h-[40px] px-2'/>
      </div>
      <div className="flex flex-col gap-[5px] ">
      <label>Zip code</label>
        <input type="text" className='border-[1px] border-[#EFEFEF] w-[350px] h-[40px] px-2'/>
      </div>
      <div className="flex flex-col gap-[5px] ">
      <label>Address 2</label>
        <input type="text" className='border-[1px] border-[#EFEFEF] w-[350px] h-[40px] px-2'/>
      </div>

    </div>

    <div className="mt-[50px] flex gap-[15px] flex-col md:flex-row ">
     <Link href="/shop/shopcart"> <button className="w-[250px] border-[1px] border-gray-400 text-black p-2">Back to cart</button></Link>
      <button className="w-[250px] bg-[green] text-white p-2">Proceed to shipping</button>
      
    </div>

  

</div>
    


<div className="border-[1px] border-gray-200 p-4 rounded-md shadow-lg">
    <div className="">
         <div className="flex flex-col gap-[15px]">
   
           {
             cartitems.map((item:ProductModel,index:number)=>{
               return (

                <div key={index} className="flex gap-[15px] ">
                  <div>
                 <Image src={item.image} width={100} height={100} alt="icon" /></div>
              
                 <div>
                  <h3 className="font-bold text-sm">{item.name}</h3>
                  {item.price}
                 </div>
                 <div>
                 
                 </div>
                 </div>
               )
             })
           }
         </div>
         <div className="flex justify-between mt-[20px]">
          <h6>Total</h6>
          <h3>{ cartitems.reduce(
            (price:any,item:any) => price + item.quantity *  item.price  , 0
        )}</h3>
         </div>

         <button className="w-[250px] bg-[green] text-white p-2 mt-[30px]">Place an order</button>
   
       </div>
    </div>


    </div>

</div>






  </div>

 


</div>
   </>
  )
}

export default Checkout
