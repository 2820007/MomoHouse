import  { useEffect, useState } from 'react'

const useReciepi = () => {
    const [products,setProducts]=useState([])
    const [isError,setIsError]=useState(false)
    const [isLoading,setIsLoading]=useState(false)


    const getProducts=async()=>{
        try {
            setIsLoading(true)
            let res= await fetch('https://dummyjson.com/recipes')
            res=await res.json()
            // console.log(res)
            setProducts(res.recipes)
            setIsLoading(false)
            setIsError(false)



            
        } catch (error) {
            setIsError(true)
            console.log(error)
            
        }

    }
    useEffect(()=>{
        getProducts()
    },[])



  return {products,isError,isLoading}
   
  
}

export default useReciepi
