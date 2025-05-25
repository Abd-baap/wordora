'use client';
import {SignedIn,SignIn ,SignedOut } from '@clerk/nextjs'
import { useState, useEffect } from 'react';
import Manager from '../components/manager';

export default function HighlightText() {

  return (
    <div className="min-h-screen w-[100%] flex justify-center items-center flex-col">
   <SignedOut>
    </SignIn>
    </SignedOut>
    <SignedIn>
    <Manager />
    </SignedIn>
  </div>
    );
}
