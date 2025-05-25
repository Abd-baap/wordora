import dynamic from 'next/dynamic';
import Script from 'next/script';  
import "./globals.css";
import Navbar from "./components/navbar";
const Footer = dynamic(() => import('./components/footer'));

export const metadata = {
  title: "Wordora - Stay Awake While Reading with Dynamic Text",
  description:
    "Wordora is a dynamic reading platform designed to keep you awake and focused. With features like Sleep Mode, customizable color highlights, and interactive reading settings, Wordora transforms how you read and learn. Say goodbye to drowsiness and hello to engagement.",
  robots: "index, follow",
  
  verification: {
    google: "MIDLOYFbs4SS5EOC6oQcQd2CU6R4U0gxy70ESi1oLew",
  },
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
        <head>
    
  
    
  <meta name="robots" content="index, follow" />
  
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
</head>
    
        <body className="poppins-regular">
          <ToastContainer draggablePercent={60} toastStyle={{ backgroundColor: "cadetblue", color: "white" }} />
          <Navbar />
          {children}
          <Footer />
        </body>
        
<Script async src="https://www.googletagmanager.com/gtag/js?id=G-NQJ9X9ZQTQ"></Script>
<Script>
       {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-NQJ9X9ZQTQ');`}
</Script>

          {/* Google AdSense */}
          <Script
            strategy="afterInteractive"
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6836466532865002"
            crossOrigin="anonymous"
          />
            
      
    </html>
  );
    }