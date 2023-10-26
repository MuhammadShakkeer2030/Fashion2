import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
 


export default function Announcement() {
    return (
        <div className="h-2.5  bg-black font-Lora">
            <div className='flex text-white  justify-evenly w-11/12 h-full items-center m-auto '>
                <AiOutlineLeft className='opacity-50 hover:opacity-100' />
                <p className='text-xx tracking-xx'>Hi Bestie! Welcome to our store   🤍</p>
               <AiOutlineRight className='opacity-50 hover:opacity-100'/>
            </div>
        </div>
    )
}
