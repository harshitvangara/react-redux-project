import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import { setProducts } from "../redux/actions/productAction";
import axios from "axios"
const ProductListing=()=>{

    const products =useSelector((state)=>state)
    const dispatch=useDispatch()
    const fetchProducts =async ()=>{

        const response=await axios
        .get('https://fakestoreapi.com/products')
        .catch((err)=>{
            console.log("err",err)
        });
        dispatch(setProducts(response.data))
        console.log(response,"response")
    }

    
    useEffect(()=>{
        fetchProducts()
    },[])
    return (
        <div className="ui grid container">
            <ProductComponent/>
        </div>
    )
}

export default ProductListing