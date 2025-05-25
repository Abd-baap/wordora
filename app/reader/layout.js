
export const metadata = {
  title: "Wordora Reader - Stay Awake While Reading",
  description:
    "Boost your focus with Wordora's sleep-resistant reader. Highlighted lines in random colors stimulate the brain and eyes for better concentration. Customize how many lines are highlighted.",
  openGraph: {
    title: "Wordora Reader - Dynamic Reading Mode",
    description:
      "Use Wordora’s reader to fight drowsiness while reading. Activate sleep mode with customizable colorful highlights that enhance visual engagement.",
    url: "https://wordora.vercel.app/reader",
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
