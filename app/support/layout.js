export const metadata = {
  title: "Wordora Support - Get Help & Stay Focused",
  description:
    "Need help using Wordora’s dynamic reader? Visit our support page for FAQs, customization guides, and troubleshooting tips to enhance your reading experience.",
  openGraph: {
    title: "Wordora Support - Help & Guidance",
    description:
      "Find answers to your questions about Wordora's features, sleep mode, color settings, and more. We're here to support your focus-friendly reading.",
    url: "https://wordora.vercel.app/support",
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
