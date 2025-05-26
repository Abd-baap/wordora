'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useUser } from "@clerk/nextjs";
const Manager = (props) => {
 const User=useUser()
 const [text, settext] = useState([])
const [form, setForm] = useState({
  title:"",
  text:""
})

const [delay, setDelay] = useState(2)
const [highlightIndex, setHighlightIndex] = useState(0)
const [array, setArray] = useState([
  
])
const [words, setWords] = useState(4)
const [issettingopen, setIssettingopen] = useState(false)
const color = [
  { text: "text-emerald-400", bg: "bg-emerald-900" },
  { text: "text-neutral-300", bg: "bg-neutral-900" },
  { text: "text-fuchsia-400", bg: "bg-fuchsia-900" },
  { text: "text-indigo-300", bg: "bg-indigo-900" },
  { text: "text-gray-300", bg: "bg-gray-900" },
  { text: "text-pink-400", bg: "bg-pink-900" },
  { text: "text-cyan-400", bg: "bg-cyan-900" },
  { text: "text-rose-400", bg: "bg-rose-900" },
  { text: "text-white", bg: "bg-black" },
  { text: "text-amber-400", bg: "bg-amber-900" },
  { text: "text-teal-400", bg: "bg-teal-900" },
  { text: "text-purple-400", bg: "bg-purple-900" },
  { text: "text-lime-400", bg: "bg-lime-900" },
  { text: "text-indigo-400", bg: "bg-indigo-900" },
  { text: "text-yellow-400", bg: "bg-yellow-900" },
  { text: "text-stone-300", bg: "bg-stone-900" },
  { text: "text-sky-400", bg: "bg-sky-900" },
  { text: "text-rose-300", bg: "bg-rose-900" },
  { text: "text-green-400", bg: "bg-green-900" },
  { text: "text-cyan-300", bg: "bg-cyan-900" },
  { text: "text-orange-400", bg: "bg-orange-900" },
  { text: "text-sky-300", bg: "bg-sky-900" },
  { text: "text-fuchsia-300", bg: "bg-fuchsia-900" },
  { text: "text-violet-400", bg: "bg-violet-900" },
  { text: "text-pink-300", bg: "bg-pink-900" },
  { text: "text-green-300", bg: "bg-green-900" },
  { text: "text-blue-400", bg: "bg-blue-900" },
  { text: "text-red-400", bg: "bg-red-900" }, // << ✅ missing earlier, added now
];
const texting=(item) => {
  console.log('item.text', item.text)
  settext(item.text.split(" "))
}
const fetchdata=async() => {
  let a=await fetch("https://wordora.vercel.app/api/get")
  let b=await a.json()

  if(b.body.length>0){
    setArray(b.body)
  }
}

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightIndex(prev => (prev + 1) % text.length);
 
    }, parseInt(delay)*1000); // every 5 seconds

    return () => clearInterval(interval);
  }, [text.length,delay,words]);
useEffect(() => {
  
  fetchdata()
}, [])

 const handleSettingsToggle = () => {
    setIssettingopen(!issettingopen);
  };

const submit=()=>{
  setArray([...array,form])
   const raw = JSON.stringify({
            title:form.title,
            text:form.title,
    user:User?.user?.id
        });

        fetch("https://wordora.vercel.app/api", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: raw
        }).then(() => {
            setForm({ text:"", title:""});
        }).catch(error => console.error(error));
}





  return ( <>
   {text.length===0 &&  <div className="w-[100%] flex flex-col gap-4 items-center justify-center text-center  p-8 text-xl  ">
  <div className="cards w-[80%] gap-8 flex flex-wrap justify-center items-center">
{array.map((item ,index) => {
   return <div onClick={() => {texting(item)}} key={index} className="w-[400px] h-[300px] justify-center flex flex-col gap-3 items-center p-4 border text-xl bg-black text-white rounded-xl shadow-sm hover:shadow-xl overflow-hidden">
<span className="text-2xl font-bold overflow-hidden w-[80%] ">{item.title}</span>
<span className='text-xl overflow-hidden h-[200px] GAP-0   gap-0 w-[80%]'>{item.text+"..."}</span>
<button className='xl:px-8 xl:h-10  p-1 px-3 h-10 text-lg bg-gray-900 text-center text-white rounded-xl' >Read More</button>
   </div>
}
)  }
      </div>
    <div className="form w-[100%] flex flex-col gap-6 items-center justify-center text-center  p-8   ">
      <h1 className="text-2xl font-bold my-4">Enter Text:</h1>
      <div className="title w-[100%] sm:w-[80%] flex gap-2">
        <label htmlFor="title">Title:</label>
        <input type="text"name='title' placeholder='Enter Your Text Title' className='w-[80%] border rounded-xl p-4' id='title' value={form.title} onChange={e=>setForm({...form,[e.target.name]: e.target.value})} />
      </div>
      <div className="text sm:w-[80%] w-[100%] flex gap-2">
        <label htmlFor="text">Text:</label>
        <textarea name='text' placeholder='Enter Your Text' rows={5} id='text' className='w-[80%] border rounded-xl p-4' cols={60} value={form.text} onChange={e=>setForm({...form,[e.target.name]: e.target.value})}></textarea>
      </div>
      <button className='xl:px-8 xl:h-10  p-1 px-3 h-10 text-lg bg-black text-center text-white rounded-xl' onClick={()=>submit()} >Start Reading!</button>
    </div>
    </div>}
    {text.length>0&&<div className="w-[100%] flex flex-col gap-4 items-center justify-center text-center  p-8 text-xl  bg-black ">
<div className="flex justify-between items-center p-4  w-[100%] -100 cursor-pointer sticky ">
      <span className="font-bold text-[40px] text-white cursor-pointer" onClick={()=>settext([])}>&#8678;</span>
 <div className="relative group flex flex-col">
      <button type='button'
        onClick={()=>handleSettingsToggle()}
        onTouchStart={()=>handleSettingsToggle()} className='drops  invert groupt cursor-pointer group-hover:hidden'><Image src="/settings.png" alt='SETTINGS' 
        onClick={()=>handleSettingsToggle()}
        onTouchStart={()=>handleSettingsToggle()} width={35} height={35} className=' drop'></Image></button>

     {issettingopen&& <div className="box rounded-xl z-index-1 cursor-pointer bg-[#1c1c1c] text-white absolute top-[-70px] w-[325px]  group-hover:flex-col group-hover:flex hover:flex-col right-[-48px]  flex flex-col   p-8  gap-4">
      <span className="text-xl italic text-white">* Start Reading will enable the sleeping mod and highlights the words</span>
      <span className="text-xl italic text-white">* Number of words are the number of words which are being on same colour</span>
      <span className="text-xl italic text-white">* Delay is the timestamp between highlighting text</span>
        <div className="flex flex-col justify-center items-center text-center w-[100%]">
          <span className="w-[100%] justify-left text-xl text-white">Number of random coloured words:</span>
<input type="number" name="lines" id="lines" className='border p-4 border-white rounded-xl' value={words} onChange={e=>setWords(e.target.value)} />
        </div>
      <div className="flex  gap-2 justify-center items-center">
        <label htmlFor="delay">Delay:</label>
        <input type="number" name="delay" className='border flex p-4 border-white rounded-xl
bo' id="delay" value={delay}  onChange={(e)=>setDelay((e.target.value))} />
        </div>
        <button className='p-2 xl:px-6 bg-black text-white flex p-4 rounded-xl cursor-pointer' onClick={()=>setHighlightIndex(0)}>Start Reading!</button>
        
      </div>}
      </div>    </div>
      <div className="w-[90%] flex  gap-4 items-center justify-center text-center  p-8 text-xl  flex-wrap">
      {text.map((item, index) => {
const start = highlightIndex * words;
  const inRange = index >= start && index < start + words;
  
const colorIndex = Math.floor(index / (words || 4)) % color.length;

        return (
          <span

            key={index}
            onClick={()=>setHighlightIndex(index)}
            className={`px-1 transition-all cursor-pointer z-index-0  ${color[colorIndex].text}  transition-all duration-700 ease-in-out flex flex-col  rounded-xl  ${inRange ? `${color[colorIndex].bg}  scale-110  shadow-sm shadow-current  z-index-0` : ''
              }`}
          >
            {item + " "}&nbsp; 
          </span>
        );
      })}
      </div>
    

      </div>}
    </>
  );
}

export default Manager
