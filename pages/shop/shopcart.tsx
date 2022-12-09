import React from 'react'
import {ProductItems, ProductModel} from "../DataJson"
import Image from "next/image"
import {useRouter} from "next/router"
import {useState,useEffect,useContext
} from "react"
import productDetail from './productDetail'
import Link from "next/link"
import {Cart} from '../../components/Context/context'

function Shopcart() {

  const {cartitems,increase,decrease,clear} = useContext(Cart)

  if(cartitems.length < 1){
    return(

      <>
         <div style={{backgroundImage:'url("/unsplash_4ycv3Ky1ZZU.png")',backgroundSize:'cover',backgroundRepeat:'no-repeat'}} className="h-[200px] text-white flex flex-col items-center justify-center" >
           <h1 className="text-3xl font-bold mb-[10px]">Shopping Cart</h1>
           <p className='text-[#195A00] '>Shopping cart</p>
       </div>

         <div className="mt-[100px] flex items-center justify-center  flex-col">
        <h3 className="text-3xl">
        Cart  empty
          </h3><br/>  <button  className="bg-[#195A00] text-white p-2 rounded-md w-[150px] mb-[15px]" >Go shopping</button>
      </div>
      </>
    
    )
  }

  else{
    return (
      <>
      <div style={{backgroundImage:'url("/unsplash_4ycv3Ky1ZZU.png")',backgroundSize:'cover',backgroundRepeat:'no-repeat'}} className="h-[200px] text-white flex flex-col items-center justify-center" >
           <h1 className="text-3xl font-bold mb-[10px]">Shopping Cart</h1>
           <p className='text-[#195A00] '>Shopping cart</p>
       </div>
   
   
   
   
       <div className="mt-[100px] flex items-center justify-center">
         <div className="flex flex-col gap-[15px]">
   
           {
             cartitems.map((item:ProductModel,index:number)=>{
               return (

                <div key={index} className="grid grid-cols-4 gap-[50px]">
                  <div>
                 <Image src={item.image} width={100} height={100} alt="icon" /></div>
                <div className="flex gap-[9px] items-center justify-center "> <button onClick={()=>increase(item.id)}>+</button>  <span>{item.quantity}</span>
                  <button onClick={()=>decrease(item.id)}>-</button></div>
                 <div>
                  {item.price}
                 </div>
                 <div>
                 
                 </div>
                 </div>
               )
             })
           }
         </div>
   
       </div>  </>
       )
  }
 
 
  
}

export default Shopcart