const { error } = require('console');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const path = require('path');
const cors = require('cors')

app.use(cors({
  origin:"http://localhost:5500"
}))

// Creates individual routes for every static asset
// Note: Not good practice - Very painstaking


require('dotenv').config()
app.use(express.json())

const stripe = require('stripe')('sk_test_51P8xUcG2NM1wzTlBt75Srj2QRMVklMPKmADpqsSdZNgaNsV3CL5jwIxBl8G8FtAxQOWLunZXbVIUGAXEuKPjk7Au00ElExjxFT');
// app.get('/', (req, res) => res.send('Static assets!'));

app.use(express.static("public"))

const storeItems= new Map([
  [1, {priceInCents: 10000,itemName:'learnReact'}],
  [2, {priceInCents: 210000,itemName:'learn Javasctript'}],

])




app.post('/create-checkout-seesion', async (req,res)=>{


  try{
    const session = await stripe.checkout.sessions.create(
      {
        payment_method_types:['card'],
        mode:'payment',

        line_items: req.body.item_Data.map(item=>
        {
          const storeItem = storeItems.get(item.id)
          return{
            price_data:{
              currency:'usd',
              product_data:{
                 name: storeItem.itemName
                },
              unit_amount: storeItem.priceInCents
            
            },


            quantity: item.qty
          }
        }),
      
        success_url:'https://www.google.com/',
        cancel_url:'https://www.google.com/'
      }
    )
    res.json({url:session.url})
  } catch (e){
    res.status(505).json({error:e.message})
  }

})

// Serve the home page
// app.get('/home', (req, res) =>
//   res.sendFile(path.join(__dirname, '/public/index.html'))
// );

// // Serve the cat image
// app.get('/image', (req, res) =>
//   res.sendFile(path.join(__dirname, '/public/images/cat.jpg'))
// );

// // Serve the CSS file
// app.get('/css', (req, res) =>
//   res.sendFile(path.join(__dirname, '/public/styles/jass.css'))
// );



app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}!`);
  console.log(`Use GraphQL at http://localhost:${PORT}`);
});





// app.post('/create-payment-intent', async (req, res) => {
//   const { amount } = req.body;
//   try {
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount,
//       currency: 'usd',
//       payment_method_types: ['card'],
//     });

//     res.send(paymentIntent);
//     console.log(paymentIntent)
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });




// app.post('/secret', async (req, res) => {
 
//     try {
//       const paymentIntent = await stripe.paymentIntents.create({
//         amount:1099,
//         currency: 'usd',
//         payment_method_types: ['card'],
//       });
//       res.json({ clientSecret: paymentIntent.client_secret });
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   res.json({client_secret: intent.client_secret});
// });

