
import { useLocation } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { CheckoutForm } from '../../components/index';

import stripePromise from '../../config/stripeConfig';

export function Checkout() {
    const {
        state: { clientSecret },
    } = useLocation();

    if (!clientSecret) {
        return <div>Erro, volte e tente novamente</div>
    }
    const appearance = {
        theme: 'stripe',
        variables: {
          colorPrimary: '#9400de',
        },
      };

    return (
        <Elements stripe={stripePromise} options={{clientSecret, appearance}}>
            <CheckoutForm/>
        </Elements>
    )
}