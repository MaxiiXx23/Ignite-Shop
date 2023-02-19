import type { NextApiRequest, NextApiResponse } from 'next'

import { stripe } from '@/lib/stripe'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

   const { priceId } = req.body // foreign key do price/preço referente ao produto
   

   if(req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed."})
   }

   if(!priceId){
      return res.status(400).json({ error: "priceId doesn't send."})
   }

   const successUrl = `${process.env.Next_APP}/success` // rota a ser redirecionada caso sucesso.
   const cancelUrl = `${process.env.Next_APP}/` // rota a ser redirecionada caso o cliente cancele.

   const checkoutSession = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [
         {
            price: priceId,
            quantity: 1
         }
      ],
      success_url: successUrl,
      cancel_url: cancelUrl
   })

   return res.status(201).json({
      checkoutUrl: checkoutSession.url // rota que redireciona a página de pagamento do stripe(checkout)
   })

}