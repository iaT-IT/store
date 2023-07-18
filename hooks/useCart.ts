import { Product } from '@/type';
import toast from 'react-hot-toast';
import { persist, createJSONStorage } from 'zustand/middleware';
import { create } from 'zustand';

interface CartStore {
   items: Product[];
   likes: Product[];
   addItem: (data: Product) => void;
   heartItem: (data: Product) => void;
   removeItem: (id: string) => void;
   removeHeartItem: (id: string) => void;
   removeAll: () => void;
}

const useCart = create(
   persist<CartStore>(
      (set, get) => ({
         items: [],
         likes: [],
         addItem: (data: Product) => {
            const currentItems = get().items;
            const existingItem = currentItems.find(
               (item) => item.id === data.id,
            );
            if (existingItem) return toast('Item already in cart.');
            set({
               items: [...get().items, data],
            }),
               toast.success('Item added to cart.');
         },
         heartItem: (data: Product) => {
            const currentItems = get().likes;
            const existingItem = currentItems.find(
               (item) => item.id === data.id,
            );
            if (existingItem) return toast('Item already in wish list.');
            set({
               likes: [...get().likes, data],
            }),
               toast.success('Item added to cart.');
         },
         removeItem: (id: string) => {
            set({
               items: [...get().items.filter((item) => item.id !== id)],
            }),
               toast.success('Item removed from the cart.');
         },
         removeHeartItem: (id: string) => {
            set({
               likes: [...get().likes.filter((item) => item.id !== id)],
            }),
               toast.success('Item removed from the wish list.');
         },
         removeAll: () => set({ items: [] }),
      }),
      {
         name: 'cart-storage',
         storage: createJSONStorage(() => localStorage),
      },
   ),
);
export default useCart;
