import React from 'react'

export const Paiement = () => {
  return (
    <div> <div className='pl-3 pb-[60px]'>
      <p className='text-gray-600 text-sm italic'>Votre panier</p>
      <p className='font-bold text-lg'>Récapitulatif de la commande</p>
      <div className='flex justify-center gap-10 mt-5'>
        <div className='border border-pink-500 uppercase font-semibold text-white bg-pink-500 rounded-tr-lg rounded-bl-lg py-1 px-2'>1. Résumé</div>
        <div className='border border-pink-500 uppercase font-semibold bg-pink-500 text-white rounded-tr-lg rounded-bl-lg py-1 px-2'>2. identifiez-vous</div>
        <div className='border border-pink-500 uppercase font-semibold bg-pink-500 text-white rounded-tr-lg rounded-bl-lg py-1 px-2'>3. adresse</div>
        <div className='border border-pink-500 uppercase font-semibold bg-pink-500 text-white rounded-tr-lg rounded-bl-lg py-1 px-2'>4. frais de port</div>
        <div className='border border-pink-500 uppercase font-semibold bg-white text-pink-500 rounded-tr-lg rounded-bl-lg py-1 px-2'>5. paiement</div>
      </div>
      <div className='my-14 relative h-[1px] w-full bg-black'>

        <div className='absolute left-16 -top-3 bg-black rounded-full p-3'></div>
        <div className='absolute left-[250px] -top-3 bg-black rounded-full p-3'></div>
        <div className='absolute left-[410px] -top-3 bg-black rounded-full p-3'></div>
        <div className='absolute left-[570px] -top-3 bg-black rounded-full p-3'></div>
        <div className='absolute left-[740px] -top-3 bg-pink-500 rounded-full p-3'></div>


      </div>





      <div className="row">
        <div className="col-75">
          <div className="container">
            <form action="">

              <div className="row">


                <div className="col-50">
                  <h3>Payment</h3>
                  <label for="fname">Accepted Cards</label>
                  <div className="icon-container flex gap-4 text-pink-500">
                    <i className="fa fa-cc-visa"></i>
                    <i className="fa fa-cc-amex" ></i>
                    <i className="fa fa-cc-mastercard" ></i>
                    <i className="fa fa-cc-discover"></i>
                  </div>
                  <label for="cname">Name on Card</label>
                  <input type="text" id="cname" name="cardname" placeholder="John More Doe" />
                  <label for="ccnum">Credit card number</label>
                  <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" />
                  <label for="expmonth">Exp Month</label>
                  <input type="text" id="expmonth" name="expmonth" placeholder="September" />

                  <div className="row">
                    <div className="col-50">
                      <label for="expyear">Exp Year</label>
                      <input type="text" id="expyear" name="expyear" placeholder="2018" />
                    </div>
                    <div className="col-50">
                      <label for="cvv">CVV</label>
                      <input type="text" id="cvv" name="cvv" placeholder="352" />
                    </div>
                  </div>
                </div>

              </div>
              <label>
                <input type="checkbox" checked="checked" name="sameadr" /> Shipping address same as billing
              </label>
              <input type="submit" value="Continue to checkout" className="btn" />
            </form>
          </div>
        </div>


      </div>
    </div></div>
  )
}
