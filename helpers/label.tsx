'use client';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

interface LabelProps {
   action: {
      text?: string;
      type?: number;
   };
}
const Label: React.FC<LabelProps> = ({ action: { text, type } }) => {
   return (
      <span
         className={cn(
            'absolute top-0 left-0 translate-x-1/4 translate-y-1/2 text-white px-2 py-1 text-xs uppercase font-bold',
            type === 1 && 'bg-green-600',
            type === 2 && 'bg-red-500',
            type === 3 && 'bg-black',
         )}
      >
         {text}
      </span>
   );
};
export default Label;
