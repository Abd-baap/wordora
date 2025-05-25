
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import Manager from '../components/manager';

export default function HighlightText() {
const { userId } = auth();

  if (!userId) {
    redirect('/sign-in'); // or a custom URL
  }
  return (
    <div className="min-h-screen w-[100%] flex justify-center items-center flex-col">
   
    <Manager />
    
  </div>
    );
}
