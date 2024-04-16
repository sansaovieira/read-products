'use client';

import { CartProvider } from '@/context/CartContext';
import { Store } from '@/app/components/pages/store';
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
        </QueryClientProvider>
      </CartProvider>
    </>
  );
}
