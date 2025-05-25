export const metadata = {
  title: "About Wordora - Smarter Reading, Less Sleepiness",
  description:
    "Discover Wordora's mission to make reading more engaging and effective using neuroscience-inspired visual stimulation. Learn how we help readers stay awake and focused.",
  openGraph: {
    title: "About Wordora - Smarter Reading",
    description:
      "Explore how Wordora transforms reading through dynamic visual stimulation, helping users fight drowsiness and improve focus.",
    url: "https://wordora.vercel.app/about",
    type: "website",
  },
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}
