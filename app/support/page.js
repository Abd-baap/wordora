
import Link from "next/link";

export default function Support() {
  return (
    <div>

      {/* Hero Section */}
      <div className="w-screen flex flex-col h-[100%] justify-center items-center">
        <div className="heading w-[100%] shadow-sm hover:shadow-lg p-8 py-20 bg-cyan-600 text-white text-center gap-2 flex flex-col justify-center items-center">
          <h1 className="text-5xl font-bold">Wordora - Support Center</h1>
        </div>

        {/* Welcome Card */}
        <div className="card my-8 p-10 shadow-sm hover:shadow-lg w-[100%] justify-center items-center flex flex-col gap-5">
          <div className="card sm:w-[50%] w-[90%] h-[100%] gap-5 rounded-sm bg-cyan-600 shadow-sm hover:shadow-lg text-white flex flex-col justify-center items-center sm:p-7 text-center p-4 my-8">
            <p className="w-[90%] lg:w-[70%] text-xl">Wordora is a web-based tool designed to help readers stay awake, alert, and focused by applying randomized color highlights to blocks of text. Our goal is to turn ordinary reading into a visually stimulating experience, making it ideal for students, casual readers, and individuals with attention difficulties.

Whether you are studying, reading an article, or revising for an exam, Wordora aims to boost your comprehension and retention through a simple, innovative interface.

            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="text flex flex-col w-[100%]">
     
          {/* FAQs Section */}
          <div className="faq flex shadow-sm hover:shadow-lg flex-col gap-5 p-12">
            <h2 className="text-3xl font-bold text-cyan-600">
              Frequently Asked Questions:
            </h2>
            <ul className="gap-14 text-xl flex flex-col list-decimal">
              <li className="font-bold shadow-sm hover:shadow-lg rounded-md p-3 flex w-[90%] lg:w-[70%] flex-col gap-3 list-decimal">Is Wordora free?
                <span className="text-xl font-medium">
                  ⇒
Yes! Wordora is completely free and open to everyone. There are no hidden costs, subscriptions, or account signups required.

                </span>
              </li>
              <li className="font-bold shadow-sm hover:shadow-lg rounded-md p-3 flex w-[90%] lg:w-[70%] flex-col gap-3 list-decimal">Do I need to install anything?
                <span className="text-xl font-medium">
                  ⇒ No installation is needed. Wordora is a fully browser-based tool. Simply visit the website and start reading.

                </span>
              </li>
              <li className="font-bold shadow-sm hover:shadow-lg rounded-md p-3 flex w-[90%] lg:w-[70%] flex-col gap-3 list-decimal">
                Can I use Wordora on mobile devices?
                <span className="text-xl font-medium">
                  ⇒ Yes! Wordora is fully optimized for use on desktops, tablets,
                  and mobile devices.
                </span>
              </li>
              <li className="font-bold shadow-sm hover:shadow-lg rounded-md p-3 flex w-[90%] lg:w-[70%] flex-col gap-3 list-decimal">Does it work offline?
                <span className="text-xl font-medium">
                  ⇒ Currently, Wordora is an online-only tool. Offline functionality may be considered in future updates.

                </span>
              </li>
              <li className="font-bold shadow-sm hover:shadow-lg rounded-md p-3 flex w-[90%] lg:w-[70%] flex-col gap-3 list-decimal">Is my data saved or tracked?
                <span className="text-xl font-medium">
                  ⇒ 
Yes. Wordora  store, your input. All text is processed in real time and  stored on servers.

                </span>
              </li>
            </ul>
          </div>

          {/* Troubleshooting Section */}
          <div className="troubleshoot shadow-sm hover:shadow-lg flex flex-col gap-5 p-12">
            <h2 className="text-3xl font-bold text-cyan-600">Troubleshooting:</h2>
            <ul className="gap-14 text-xl flex flex-col list-decimal">
              <li className="font-bold shadow-sm hover:shadow-lg rounded-md p-3 flex w-[90%] lg:w-[70%] flex-col gap-3 list-decimal">
                My toast notifications aren’t appearing.
                <span className="text-xl font-medium">⇒ Check your internet connection.
<br></br> Try refreshing the page (`Ctrl + R` or `Cmd + R`).
<br></br> Clear browser cache and cookies.
<br></br> Disable browser extensions that may block content.
<br></br> Try using a different browser.

                </span>
              </li>
              <li className="font-bold shadow-sm hover:shadow-lg rounded-md p-3 flex w-[90%] lg:w-[70%] flex-col gap-3 list-decimal">
Text Not Highlighting
                <span className="text-xl font-medium">
                  ⇒ Ensure there is no special formatting in the pasted text.
<br></br> Reload the page and try again.
<br></br> Make sure JavaScript is enabled in your browser.

                </span>
              </li>
              <li className="font-bold shadow-sm hover:shadow-lg rounded-md p-3 flex w-[90%] lg:w-[70%] flex-col gap-3 list-decimal">Weird Color Output or Visibility Issues
                <span className="text-xl font-medium">
                  ⇒  We use a random color palette for emphasis. If you find the colors too harsh or unreadable, let us know — we are working on custom color themes.
<br></br> Try zooming in (`Ctrl + +`) or out (`Ctrl + -`) to adjust layout.

                </span>
              </li>
            </ul>
          </div>
               <div className="core-values shadow-sm hover:shadow-lg flex flex-col gap-5 p-12">
            <h2 className="text-3xl font-bold text-cyan-600">Accessibility Commitment:</h2>
              <span className="font-bold text-xl">
              We believe reading should be inclusive. Our current accessibility features include:


              </span>
            <ul className="gap-3 text-xl justify-start flex w-[90%] lg:w-[70%] flex-col list-decimal">
              <li> Keyboard navigability
              </li>
              <li>
            Mobile responsiveness
              </li>
              <li>
             
 High-contrast interface
              </li>
              <li>Clear, readable font sizes
</li>
            </ul>
          </div>
               <div className="core-values shadow-sm hover:shadow-lg flex flex-col gap-5 p-12">
            <h2 className="text-3xl font-bold text-cyan-600">Feedback and Bug Reports:</h2>
            <ul className="gap-3 text-xl justify-start flex w-[90%] lg:w-[70%] flex-col ">
              <li>
                <span className="font-bold text-xl">
We love constructive feedback! If you encountered a bug or want to suggest improvements, please contact us:
</span> 
              </li>
              <li>
                <span className="font-bold">Email:</span> Codeora@gmail.com
              </li>
              <li>
                <span className="font-bold">What To Include</span> 
              </li>
              <li>
                
   A description of the issue

              </li>
              <li> Your device and browser

              </li>
              <li>   Steps to reproduce the problem


              </li>
              <li>    Screenshots if available

              </li>
            </ul>
          </div>



          {/* Call to Action */}
          <div className="flex flex-col shadow-sm hover:shadow-lg gap-5 p-12 justify-center items-center">
            
          
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
  );
}