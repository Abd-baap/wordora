'use client';

import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/nextjs';

import Manager from '../components/manager'; // Replace with your actual component

export default function OtherPage() {
  return (
    <>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>

      <SignedIn>
        <Manager />
      </SignedIn>
    </>
  );
}
