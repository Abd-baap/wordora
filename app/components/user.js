import React from 'react'

const Users = () => {
  return (
    <section className='min-w-full flex flex-col w-full justify-between items-center p-8 shadow-sm hover:shadow-xl rounded-md gap-6 herosection text-center'>
      <h2 className="text-3xl font-bold text-center">Built for Every Reader:</h2>
      <ol className="w-[100%] text-left flex flex-col gap-2 sm:p-16 sm:px-32">
        <li className="text-xl inline-block gap-2"><span className="font-bold"> Students: </span> Enhance your study sessions with engaging text and improved focus.</li>
        <li className="text-xl inline-block gap-2"><span className="font-bold"> Professionals: </span> Read reports, articles, and documents without fatigue.</li>
        <li className="text-xl inline-block gap-2"><span className="font-bold"> Casual Readers: </span> Enjoy novels and stories with a fresh, dynamic reading experience.</li>
        <li className="text-xl inline-block gap-2"><span className="font-bold"> Researchers: </span> Dive into academic papers with reduced eye strain and increased comprehension.</li>
        <li className="text-xl inline-block gap-2"><span className="font-bold"> Anyone who reads:</span> Wordora is for everyone who wants to make reading more enjoyable!</li>
      </ol>
    </section>
  )
}

export default Users
