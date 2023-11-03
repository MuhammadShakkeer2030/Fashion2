import { useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
 
export default function Announcement() {
  const announcement = [
    'Hi Bestie! Welcome to our store 🤍',
    'Dont forget the code PLOR25 at checkout  '
  ]

  const [currentIndex, setCurrentIndex] = useState(0);
  function handleNext() {
    if (currentIndex < announcement.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setCurrentIndex(0);
    }
  }
  function handlePrev() {
    if (currentIndex === 0) {
      setCurrentIndex(announcement.length - 1);
    } else {
      setCurrentIndex(prev => prev - 1);
    }
  }
  
   
    return (
        <div className="h-2.5  bg-black font-Lora">
            <div className='flex text-white  justify-between  max-w-4xl h-full items-center m-auto '>
                <AiOutlineLeft className='opacity-50 hover:opacity-100'  onClick={handlePrev}/>
                    <p className='text-xx tracking-xx'>{ announcement[currentIndex]}</p>
               <AiOutlineRight className='opacity-50 hover:opacity-100' onClick={handleNext}/>
            </div>
        </div>
    )
}
