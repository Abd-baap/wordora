import React from 'react'

const Features = () => {
    const features=[
        {head:"Paste Your Own Text",text:"Wordora isn't limited to built-in content. Paste anything — articles, essays, reports — and let Wordora bring it to life."},
        {head:"Dynamic Movement",text:"Experience reading like never before. Our unique 'Sleep Mode' keeps your mind engaged with dynamic text movement."},
        {head:"Random Colors",text:"Every word is a surprise! Our random color feature keeps your reading experience fresh and visually stimulating."},
        {head:"Sleep Mode",text:"A unique feature that helps you stay alert and focused. It keeps your mind engaged, reducing fatigue during long reading sessions."},
    ]
  return (
    <section className='flex flex-col w-full justify-between items-center p-8 shadow-sm hover:shadow-xl rounded-md gap-6 herosection text-center'>
      <h2 className="text-3xl font-bold ">Features</h2>
      <div className="features flex flex-wrap justify-center items-center w-[80%] gap-4">
    {features.map((feature,index) => {
      return(
        <div key={index} className="feature flex flex-col  shadow-xl w-[90%] sm:w-[60%] xl:w-[30%] sm:p-8 p-4 sm:px-16 px-4 shadow-purple-50">
            <span className="text-2xl font-bold">{feature.head}</span>
            <span className="text-xl w-[100%]">{feature.text}</span>
        </div>
      )
    }
    )}
      </div>
   </section>
  )
}

export default Features
