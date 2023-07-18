import { loadStripe } from "@stripe/stripe-js";

export async function checkout({lineItems}){
	let stripePromise = null

	const getStripe = () => {
		if(!stripePromise) {
			stripePromise = loadStripe(process.env.NEXT_PUBLIC_API_KEY)
		}
		return stripePromise
	}

	const stripe = await getStripe()

	await stripe.redirectToCheckout({
		mode: 'payment',
		lineItems,
		// billingAddressCollection: "required",
		// successUrl: `${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
		successUrl: `${window.location.origin}/thank-you`,
		cancelUrl: `${window.location.origin}/buy`
	})

}