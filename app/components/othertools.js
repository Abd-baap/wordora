import Link from 'next/link'
import React from 'react'

const OtherTools = () => {
  return (
    <section className='min-w-full flex flex-col w-full justify-between items-center p-8 shadow-sm hover:shadow-xl rounded-md gap-6 herosection text-center'>
      <h2 className="text-3xl font-bold text-center">Beyond Wordora our tools:</h2>
     { <ol className="w-[100%] flex flex-col text-left gap-6 sm:p-16 sm:px-32">
        <li className="text-xl inline-block gap-2"><Link href="https://bitaegiris.vercel.app" className="font-bold underline text-purple-700"> Bitaegiris: </Link> Step into a safer digital future with Bitaegiris, your ultimate password manager designed for simplicity and security. Built with a sharp focus on cybersecurity, Bitaegiris lets you store and manage your credentials with ease and confidence. Its clean, user-friendly interface makes navigating sensitive data feel effortless, while robust security measures work silently in the background. Whether you are tech-savvy or just security-conscious, Bitaegiris ensures that your digital life stays protected — and always within reach.

</li>
        <li className="text-xl inline-block gap-2"><Link href="https://goal-go.vercel.app" className="font-bold underline text-purple-700"> Goalgo: </Link> Take charge of your ambitions with GoalGo, a modern goal-tracking platform built to keep you inspired and organized. Whether you are planning daily tasks or chasing long-term dreams, GoalGo offers a sleek, distraction-free interface that makes progress feel rewarding. With intuitive design and powerful features, it transforms goal setting into a fun, focused journey. Say goodbye to procrastination and hello to productivity — GoalGo is your digital partner for a more motivated you.

</li>
      </ol>}
    </section>
  )
}

export default OtherTools
