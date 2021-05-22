
import React, { useState } from "react";
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import RightPanel from './rightPanel';
import LeftPanel from './leftPanel';

 const Shop = (props) => {
    const { items } = props
    const [cart, setCart] = useState([]);
    //console.log(cart);
  //  console.log(items);
    const [subTotal, setSubTotal] = useState(0);
    const [coupon, setCoupon] = useState(0);


    const addItem = (item) => {
       const check= (temp) => {
           if(temp.name === a.name){
               temp.quantity = temp.quantity +1;
               return true;
           }
           else return false;
       }
        var a= {name : item.name, quantity : 1, totalPrice : item.price };
        if(cart.some(check)){
             var filtered = cart.filter(function(value, index, arr){ 
        return value.quantity > 0;
    });
    setCart(filtered);
   // console.log(cart);
        }
       else {
//console.log("else");
            var x=[ ...cart];
            x.push(a);
           //cart.push(a);
            setCart(x);
       }
     
    }

    const removeItem = (item) => {
         const check= (temp) => {
           if(temp.name === a.name){
               temp.quantity = temp.quantity - 1;
               return true;
           }
           else return false;
       }
        var a= {name : item.name, quantity : 1, totalPrice : item.price };
        if(cart.some(check)){
             var filtered = cart.filter(function(value, index, arr){ 
        return value.quantity > 0;
    });
    setCart(filtered);
   // console.log(cart);
        }
       else{
           
       } 
      
    }

    const calcSubTotal = (newCart, tempCoupon) => {

        if (newCart !== undefined && newCart !== null && newCart !== []) {
            setSubTotal(0);
        //    console.log(newCart);
         //   console.log(tempCoupon);
            var sumt =0;
            for(var i=0;i<newCart.length;i++){
                sumt=sumt + parseInt(newCart[i].totalPrice) * parseInt(newCart[i].quantity);
            }
            sumt = sumt * ((100 - tempCoupon)/100);
            setSubTotal(sumt);
            
        }
    }

     const handleCouponChange = event => {
        setCoupon(event.target.value);
        calcSubTotal(cart, event.target.value);
    };

    return (
        <div>
            <Grid className='GridRoot'>
                <LeftPanel items={items} addItem={addItem} removeItem={removeItem}/>
               <Divider orientation="vertical" />
                 <RightPanel cart={cart} coupon={coupon}
                    handleCouponChange={handleCouponChange} subTotal={subTotal} /> 
            </Grid>
        </div>
    );
}

export default Shop;