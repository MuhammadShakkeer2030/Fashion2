import { AiOutlineSearch } from 'react-icons/ai';

export default function Nav() {
    return (
        <nav className='navbar'>
            <Top />
            <Menu />
        </nav>
    );
}

function Top() {
    return (
        <div className='grid grid-cols-top xl:p-4 px-14 mob:h-[4em] mob:items-center mob:grid-cols-xxfr'>
            <AiOutlineSearch className='icon-large w-[26px] h-[26px] mob:w-14 mob:h-[2.5rem]' />
            <span>
                <img
                    src='https://www.theplor.in/cdn/shop/files/PLOR_Registered_LOGO_10.png?v=1689319775&width=100'
                    alt='logo'
                    className='mob:w-60'
                />
            </span>
            <span className='grid grid-cols-nav w-20 '>
                <AiOutlineUser />
                <FaShoppingBag className='icon-large' />
            </span>
        </div>
    );
}
function AiOutlineUser() {
    return (
        <>
            <span>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    aria-hidden='true'
                    focusable='false'
                    className='icon icon-account w-6 h-8 mob:h-[50px] mob:w-14'
                    fill='none'
                    viewBox='0 0 18 19'
                >
                    <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M6 4.5a3 3 0 116 0 3 3 0 01-6 0zm3-4a4 4 0 100 8 4 4 0 000-8zm5.58 12.15c1.12.82 1.83 2.24 1.91 4.85H1.51c.08-2.6.79-4.03 1.9-4.85C4.66 11.75 6.5 11.5 9 11.5s4.35.26 5.58 1.15zm0 1c-2.5 0-4.65.24-6.17 1.35C1.27 12.98.5 14.93.5 18v.5h17V18c0-3.07-.77-5.02-2.33-6.15-1.52-1.1-3.67-1.35-6.17-1.35z'
                        fill='currentColor'
                    ></path>
                </svg>
            </span>
        </>
    );
}

function FaShoppingBag() {
    return (
        <span>
            <svg
                className='icon icon-cart-empty icon-large mob:w-12 mob:h-[3em] '
                aria-hidden='true'
                focusable='false'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 40 40'
                fill='none'
            >
                <path
                    d='m15.75 11.8h-3.16l-.77 11.6a5 5 0 0 0 4.99 5.34h7.38a5 5 0 0 0 4.99-5.33l-.78-11.61zm0 1h-2.22l-.71 10.67a4 4 0 0 0 3.99 4.27h7.38a4 4 0 0 0 4-4.27l-.72-10.67h-2.22v.63a4.75 4.75 0 1 1 -9.5 0zm8.5 0h-7.5v.63a3.75 3.75 0 1 0 7.5 0z'
                    fill='currentColor'
                    fillRule='evenodd'
                ></path>
            </svg>
        </span>
    );
}

function Menu() {
    return (
        <div className='flex justify-center gap-7 mt-4 text-nav   tracking-nav  mb-12 font-Cardo text-light-black leading-4 md:hidden'>
            <a href='#' className='opacity-80 hover:opacity-100 underline  hover:underline '>
                Home
            </a>
            <a href='#' className='opacity-80 hover:opacity-100  hover:underline'>
                Shop Products{' '}
            </a>
            <a href='#' className='opacity-80 hover:opacity-100  hover:underline'>
                Bestie Club
            </a>
            <a href='#' className='opacity-80 hover:opacity-100  hover:underline'>
                Reviews
            </a>
            <a href='#' className='opacity-80 hover:opacity-100  hover:underline'>
                Questions?
            </a>
            <a href='#' className='opacity-80 hover:opacity-100  hover:underline'>
                Blogs
            </a>
            <a href='#' className='opacity-80 hover:opacity-100 hover:underline'>
                Order Tracking
            </a>
        </div>
    );
}
