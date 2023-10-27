const express = require('express');
const Stripe = require ('stripe');
const stripe = Stripe('sk_test_51O5pUtHjRTUmtPRGgDeeRrj1GDmocSv1KMvIlSvBJooAM4zwqjxRA2QJBjzzMzb1I3jsP1FgJWIIO3WmESs5516t000D7tzM69')

const routerPayment= express.Router()

routerPayment.post('/create-checkout-session', async(req,res)=>{
    const line_items=req.body.products.map(item=>{
        return {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: item.product.name,
                        images:[item.product.image],  
                        description: item.product.description,
                        metadata:{
                            id:item.product._id
                        }
                    },
                    unit_amount: item.product.price*100,
                },
                quantity: item.quantity,
            }
        
    })
    const session = await stripe.checkout.sessions.create({
        line_items,
        mode: 'payment',
        success_url: 'http://localhost:3000/success',
        cancel_url: 'http://localhost:3000/cancel',
    });
    res.send({url:session.url });
})
module.exports= routerPayment