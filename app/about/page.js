
import Link from "next/link";

export default function About() {
  return (
    <div>

      {/* Hero Section */}
      <div className="w-screen flex flex-col p-2 h-[100%] justify-center items-center">
        <div className="heading w-[100%] p-8 py-20 bg-cyan-700 text-white text-center gap-2 flex flex-col justify-center items-center shadow-sm hover:shadow-lg">
          <h1 className="text-5xl font-bold">About Worodora</h1>
          <h1 className="text-2xl font-bold">Start reading smarter today</h1>
        </div>

        {/* Mission */}
        <div className="mission my-8 shadow-sm hover:shadow-lg p-10 w-[100%] justify-center items-center flex flex-col gap-5">
          <div className="justify-start flex flex-col gap-5 shadow-sm hover:shadow-lg">
            <h2 className="text-3xl font-bold text-cyan-700">Our Mission:</h2>
            <p className="text-xl w-[90%] lg:w-[70%]">Our mission is to make digital reading more effective and human-friendly by blending technology with cognitive design. Wordora aims to help users stay alert, focused, and motivated while reading any type of text — from study notes to online articles.

            </p>
          </div>

          {/* About Card */}
          <div className="card sm:w-[50%] w-[90%] h-[100%] gap-5 rounded-sm bg-cyan-700 shadow-sm hover:shadow-lg text-white flex flex-col justify-center items-center sm:p-7 text-center p-4 my-8">
            <p className="w-[90%] lg:w-[70%] text-xl">Welcome to Wordora — a thoughtfully crafted platform that transforms the way you read digital content. In a world where screens dominate our daily lives, Wordora exists to make reading online not only easier but also more enjoyable, productive, and visually refreshing.

            </p>
          </div>
        </div>

        {/* Vision */}
        <div className="text flex flex-col w-[100%]">
        <div className="projects gap-4 my-8  p-8 shadow-sm hover:shadow-xl w-[100%]">
    <span className="head text-3xl font-bold text-cyan-700">Beyond GoalGo: Our Digital Ecosystem</span>
    <div className="project flex text-xl">
        <Link href="https://goal-go.vercel.app"><span className="font-bold text-cyan-700">Goalgo</span>
        <span> – A platform designed to help people achieve their dreams and goals through planning, motivation, and resources. <br></br>By combining security (GoalGo) and personal growth (Goalgo), we aim to create a safe and productive digital experience for everyone. </span>
        </Link>
    </div>
          <div className="vision flex flex-col gap-5 p-12 shadow-sm hover:shadow-lg">
            <h2 className="text-3xl font-bold text-cyan-700">The Probem We Solve:</h2>
            <p className="text-xl w-[90%] lg:w-[70%]">We live in a digital age filled with endless information — articles, study materials, blogs, reports, and more. While reading is essential, it often becomes tiring, repetitive, and even sleep-inducing, especially for students, avid learners, or professionals working long hours. Static black-and-white text can quickly lead to mental fatigue and a lack of concentration.

            </p>
          </div>
          <div className="vision flex flex-col gap-5 p-12 shadow-sm hover:shadow-lg">
            <h2 className="text-3xl font-bold text-cyan-700">Why Choose Wordora?:</h2>
            <p className="text-xl w-[90%] lg:w-[70%]">Unlike traditional reader tools or apps, Wordora is lightweight, fast, and designed with psychology in mind. Our approach focuses on visual engagement — something that is often overlooked in educational or productivity platforms.

We are not trying to overwhelm you with features. Instead, we focus on doing one thing really well: making reading less boring.
</p>
          </div>
          <div className="vision flex flex-col gap-5 p-12 shadow-sm hover:shadow-lg">
            <h2 className="text-3xl font-bold text-cyan-700">
Our Vision
:</h2>
            <p className="text-xl w-[90%] lg:w-[70%]">At Wordora, we envision a world where learning and reading online is as pleasant as it is productive. We are building a community of readers who care about how they read, not just what they read.

</p>
          </div>

          {/* Core Values */}
          <div className="core-values flex flex-col gap-5 p-12 shadow-sm hover:shadow-lg">
            <h2 className="text-3xl font-bold text-cyan-700">We are here to support:</h2>
            <ul className="gap-3 text-xl justify-start flex w-[90%] lg:w-[70%] flex-col list-disc">
              <li>
                <span className="font-bold">Students : </span>struggling with boring textbooks
              </li>
              <li>
                <span className="font-bold">Writers and bloggers:</span>
Writers and bloggers reviewing large amounts of content
.
              </li>
              <li>
                <span className="font-bold">Professionals:</span> who need to scan documents all day
  </li>
              <li>
                <span className="font-bold">Casual readers:</span> seeking a visually refreshing reading environment
   </li>
            </ul>
          </div>

          {/* Meet the Founder */}
          <div className="meet-the-maker flex flex-col gap-5 p-12 shadow-sm hover:shadow-lg">
            <h2 className="text-3xl font-bold text-cyan-700">Meet the Founder:</h2>
            <ul className="gap-3 text-xl ">
              <li className="font-bold">
                Abhigya Ajmani
                <span className="text-xl font-medium">

                  A beginner web developer dedicated to building user-friendly
                  tools.
                </span>
              </li>
              <li>
                <span className="font-bold">Age: 14 Years</span>
              </li>
            </ul>
          </div>

          {/* How It Works */}
          <div className="how-it-works flex flex-col gap-5 p-12 shadow-sm hover:shadow-lg">
            <h2 className="text-3xl font-bold text-cyan-700">How It Works:</h2>
              <span className="font-bold">Wordora uses a unique color-highlighting algorithm to apply soft, eye-catching colors to text passages. This creates a visual break between lines and paragraphs, which:

              </span>
            <ul className="gap-3 text-xl list-disc">
              <li className="text-xl">

              Reduces eye strain

 </li>
              <li className="text-xl">

              
Keeps the brain stimulated



 
              </li>
              <li className="text-xl">

              Enhances comprehension and memory




 
              </li>
              <li className="text-xl">

              Encourages longer reading sessions





 
              </li>
              <li className="text-xl">
              Simply go to our Reader Page (wordora.vercel.app/reader), paste or type your content, and watch your text transform instantly. No sign-ups. No learning curve. Just color-enhanced clarity.
             
              </li>
            </ul>
          </div>
          <div className="how-it-works flex flex-col gap-5 p-12 shadow-sm hover:shadow-lg">
            <h2 className="text-3xl font-bold text-cyan-700">
Technology Behind Wordora:</h2>
            <ul className="gap-3 text-xl list-disc">
              <li className="text-xl">We use modern web technologies to deliver a seamless experience:

              </li>
              <li className="text-xl">

Next.js + React for dynamic rendering and snappy performance
</li>
              <li className="text-xl">

              Tailwind CSS for a sleek, clean UI



</li>
              <li className="text-xl">

                
Custom color logic for optimized visual comfort





              </li>
              <li className="text-xl">

               Vercel for ultra-fast global hosting and zero downtime







              </li>
            
            </ul>
          </div>
          <div className="how-it-works flex flex-col gap-5 p-12 shadow-sm hover:shadow-lg">
            <h2 className="text-3xl font-bold text-cyan-700">
Features at a Glance:</h2>
            <ul className="gap-3 text-xl list-disc">
              <li className="text-xl">
                Auto-Color Highlighting: Every paragraph gets a refreshing color scheme to keep your mind engaged.

              </li>
              <li className="text-xl">

              
Distraction-Free Interface: We believe less is more. Our minimalist layout helps you focus entirely on the content.

 </li>
              <li className="text-xl">

              
Mobile-Optimized Design: Whether you are on a laptop, tablet, or smartphone, Wordora adapts to your screen perfectly.



 
              </li>
              <li className="text-xl">

              
Fast & Lightweight: Powered by Vercel and Next.js for blazing fast performance.





 
              </li>
              <li className="text-xl">
              
Privacy-Friendly: No cookies, tracking, or data collection — your content stays yours.

             
              </li>
              <li className="text-xl">
              



Completely Free: Wordora is 100% free to use, always.


             
              </li>
            </ul>
          </div>

          {/* FAQs */}
          {/* Call to Action */}
           <div className="vision flex flex-col gap-5 p-12 shadow-sm hover:shadow-lg">
            <h2 className="text-3xl font-bold text-cyan-700">
Lets Read Differently:</h2>
            <p className="text-xl w-[90%] lg:w-[70%]">
Thank you for being part of Wordora. Whether you are here to improve your focus, beat boredom, or simply try something new — you are in the right place.

Lets make digital reading smarter, one word at a time.


</p>
          </div>

          <div className="flex flex-col gap-5 p-12 justify-center items-center shadow-sm hover:shadow-lg">
           
            <Link href="/">
              <button
                type="button"
                className="text-gray-900 w-[100%] bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-lg px-5 py-3 text-center me-2 mb-2"
              >
Start reading smarter today
              </button>
            </Link>
          </div>
        </div>
      </div>
</div>
    </div>
  );
}