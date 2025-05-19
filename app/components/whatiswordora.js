"use client"
import React, { useEffect, useState } from 'react'
import '../globals.css'

const lines = [
  "Stay visually engaged",
  "Improve focus and attention",
  "Read longer without fatigue",
  "Absorb more information"
]

const Whatiswordora = () => {
  const [text, setText] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 40 : 100; // slower when typing, faster when deleting
    const timeout = setTimeout(() => {
      const currentLine = lines[lineIndex];
      if (!isDeleting) {
        setText(currentLine.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);

        if (charIndex + 1 === currentLine.length) {
          setTimeout(() => setIsDeleting(true), 1000); // wait 1s then start deleting
        }
      } else {
        setText(currentLine.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);

        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setLineIndex((prev) => (prev + 1) % lines.length); // go to next line
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, lineIndex]);

  return (
    <section className='flex flex-col w-[100%] justify-between items-center p-8 shadow-sm hover:shadow-xl rounded-md gap-6 herosection text-center'>
      <h2 className="text-3xl font-bold ">What Is Wordora</h2>
      <div className="flex flex-col  gap-8">
        <p className="description-tex text-xl ">
        Wordora is a revolutionary web-based reading platform designed to energize the way you experience written content.
Unlike traditional readers that present plain, static text, Wordora brings your reading to life with smart visual enhancements that keep your mind awake, focused, and fully engaged.

At Wordora&#39;s core is a simple belief: reading shouldn&#39;t be tiring — it should be stimulating.
With intelligent color-based highlighting, dynamic movement through &rdquo;Sleep Mode,&rdquo; and customizable reading paths, Wordora ensures that every sentence feels active, vibrant, and easier to absorb.

Whether you are diving into dense academic material, brushing up on professional articles, or simply enjoying a long novel, Wordora adapts to your needs. You can paste your own text into the platform and instantly transform it into a lively, colorful reading environment that feels tailored just for you.

Thanks to its unique design, Wordora not only improves attention but also reduces reading fatigue, helping users maintain energy and comprehension even during extended sessions.
It&#39;s more than a tool — it&#39;s your reading companion, making sure you stay awake, stay sharp, and enjoy every word.
</p>
        <div className="typewriter-container text-left ml-2">
          <span className="typewriter-text text-xl font-bold bg-gradient-to-r from-blue-500 via-pink-400 to-purple-500 bg-clip-text text-transparent ml-2.5">{text}</span>
          <span className="cursor">|</span>
        </div>
      </div>
    </section>
  )
}

export default Whatiswordora
