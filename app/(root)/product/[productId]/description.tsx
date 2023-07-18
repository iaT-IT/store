import { Separator } from '@/components/ui/separator';

const text = `Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt loret. Neque porro lorem quisquam est, qui dolorem ipsum quia dolor si. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia ipsu consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Nulla consequat massa quis enim. 
Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.`;
const Description = () => {
   return (
      <div className="flex flex-col gap-4">
         <span className="text-neutral-900 text-base font-semibold flex items-center justify-center gap-10">
            <Separator className="w-1/2" /> Description{' '}
            <Separator className="w-1/2" />
         </span>
         <span className="text-neutral-500 text-sm">{text}</span>
      </div>
   );
};
export default Description;
