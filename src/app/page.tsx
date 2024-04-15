'use client';

import { CartProvider } from '@/context/CartContext';
import { Cart } from '@/pages/cart';
import { Store } from '@/pages/store';
import {
  QueryClient,
  QueryClientProvider
} from 'react-query';

const queryClient = new QueryClient()

export default function Home() {
  return (
    <>
      <CartProvider>
        <QueryClientProvider client={queryClient}>
          <Store />
          <Cart />
        </QueryClientProvider>
      </CartProvider>
    </>
  );
}
