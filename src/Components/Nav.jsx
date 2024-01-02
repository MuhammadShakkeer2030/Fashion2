import { useState } from 'react';
import { AiOutlineMenuFold, AiOutlineSearch, AiOutlineUser } from 'react-icons/ai';
import { FaShoppingBag } from 'react-icons/fa';

export default function Nav() {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <nav className='navbar'>
            <Top setToggleMenu={setToggleMenu} toggleMenu={toggleMenu} />
            <Menu setToggleMenu={setToggleMenu} toggleMenu={toggleMenu} />
        </nav>
    );
}

function Top({ setToggleMenu, toggleMenu }) {
    return (
        <div className='grid grid-cols-top xl:p-4 px-14 mob:h-[4em] mob:items-center mob:grid-cols-xxfr'>
            <AiOutlineSearch className='icon-large w-[26px] h-[26px] mob:w-14 mob:h-[2.5rem]' />
            <img
                src='https://www.theplor.in/cdn/shop/files/PLOR_Registered_LOGO_10.png?v=1689319775&width=100'
                alt='logo'
                className='mob:w-60'
            />
            <div className='grid grid-cols-nav  '>
                <AiOutlineUser className='icon-large' />
                <FaShoppingBag />
                <button onClick={() => setToggleMenu(!toggleMenu)}>
                    <AiOutlineMenuFold />
                </button>
            </div>
        </div>
    );
}

function Menu({ toggleMenu }) {
    return (
        <nav
            className={`${
                toggleMenu ? 'block ' : 'hidden xl:block'
            } absolute z-50 flex flex-col xl:flex-row bg-white xl:static  justify-center xl:gap-7 xl:h-[3em] w-full mt-4 text-nav tracking-nav  mb-12 font-Cardo text-light-black leading-4`}
        >
            <a href='#' className='opacity-80 hover:opacity-100 underline  hover:underline '>
                Home
            </a>
            <a href='#' className='opacity-80 hover:opacity-100 py-2 px-3 xl:p-0  hover:underline'>
                Shop Products{' '}
            </a>
            <a href='#' className='opacity-80 hover:opacity-100 py-2 px-3 xl:p-0  hover:underline'>
                Bestie Club
            </a>
            <a href='#' className='opacity-80 hover:opacity-100 py-2 px-3 xl:p-0  hover:underline'>
                Reviews
            </a>
            <a href='#' className='opacity-80 hover:opacity-100 py-2 px-3 xl:p-0  hover:underline'>
                Questions?
            </a>
            <a href='#' className='opacity-80 hover:opacity-100 py-2 px-3 xl:p-0  hover:underline'>
                Blogs
            </a>
            <a href='#' className='opacity-80 hover:opacity-100 py-2 px-3 xl:p-0 hover:underline'>
                Order Tracking
            </a>
        </nav>
    );
}
