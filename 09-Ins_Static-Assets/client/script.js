const button = document.querySelector('.fun-button');
const donation = document.querySelector('.donation');
//

// import { loadStripe } from '@stripe/stripe-js';


// const stripePromise = loadStripe('pk_test_51P8xUcG2NM1wzTlBstX2NfqvexaN50kp2wCkMtUkk8dYeQnYrkaGWdZp5p5y1Vl05IaI47WIQWEVg8fZ32IVMqYR00RwM7gEsb');

donation.addEventListener('click', () => {


   console.log("hehehehe")

   fetch('http://localhost:3001/create-payment-intent')
   .then(res =>{console.log(res)})
   .then(data =>{console.log(data)})
   .catch(error =>{
      console.log(error)
   })
})





button.addEventListener('click', () => {


   console.log("hehehehe")

   fetch('http://localhost:3001/create-checkout-seesion', {
      method: 'POST',
      headers: {
         "Content-Type": 'application/json'
      },
      body: JSON.stringify({
         item_Data: [
            { id: 1, qty: 2 },
            { id: 2, qty: 100 }

         ]
      })
   }).then(res => {
      if (res.ok)
         return res.json();

         return res.json().then(json=>Promise.reject(json))

   }).then(({ url }) => {
      window.location=url
   })

   .catch(e=>
   {
      console.error(e.error)
   })

})
