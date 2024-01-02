import { products } from '../assets/ProductsData';

const section1 = products.slice(0, 3);
const section2 = products.slice(3, 6);
function Card() {
    return (
        <div>
            <div className=' px-4 xl:px-12 mb-4 xl:mb-10 md:px-6 md:mt-4'>
                <h2 className='font-Lora text-light-black text-[2em] xl:text-[4em] xl:leading-52 mb-2 md:leading-[2em] mob:text-sm'>
                    Unisex College Totes
                </h2>
                <h4 className='font-Cardo text-text leading-30 text-1.25 md:font-black md:text-[1.25em] mob:text-sm'>
                    Introducing the game-changer in tote bags
                </h4>
            </div>
            <div className='slider '>
                <ul className='px-2 my-1 xl:my-0 md:overflow-scroll md:px-0 bg-[#9ca3af82]'>
                    <div className='row1 flex md:flex-row justify-between overflow-x-scroll'>
                        {section1?.map((product, index) => (
                            <li key={index} className='mb-16 md:m-5 m-5 xl:w-1/3'>
                                <div className='relative group'>
                                    <img
                                        src={product.images[0]}
                                        alt='bag'
                                        className='max-w-full h-[15em] xl:h-40 object-cover blur-xx opacity-100'
                                    />
                                    <img
                                        src={product.images[1]}
                                        alt='girl with bag'
                                        className='absolute top-0 right-0 left-0 bottom-0 opacity-0 max-w-full h-[15em] xl:h-40 object-cover group-hover:opacity-100'
                                    />
                                    <button
                                        type='button'
                                        className='font-Lora bg-black text-xx text-white leading-17 px-3 py-1 rounded-xl absolute bottom-44 left-3 mob:text-[.5em]'
                                    >
                                        Sale
                                    </button>
                                    <div>
                                        <p className='text-center font-Lora text-xx leading-17 text-light-black hover:underline my-3 mob:text-[20px]'>
                                            {product.description}
                                        </p>
                                        <div className='regular-price gap-2 text-center text-light-black font-Lora text-1.25 '>
                                            <span className='mr-5 mob:text-[.5em]'>
                                                <s>{product.originalPrice}</s>
                                            </span>
                                            <span>{product.salePrice}</span>
                                        </div>
                                        <button
                                            type='button'
                                            className='border-xxs border-black text-light-black bg-white xl:px-28 xl:py-3 rounded-xl mt-6 w-full md:px-0 mob:text-[.5em]'
                                        >
                                            Choose options
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </div>
                </ul>
                <ul className='px-2 my-1 xl:my-0 md:overflow-scroll md:px-0 bg-[#9ca3af82]'>
                    <div className='row1 flex md:flex-row justify-between overflow-x-scroll'>
                        {section2?.map((product, index) => (
                            <li key={index} className='mb-16 md:m-5 m-5 xl:w-1/3'>
                                <div className='relative group'>
                                    <img
                                        src={product.images[0]}
                                        alt='bag'
                                        className='max-w-full h-[15em] xl:h-40 object-cover blur-xx opacity-100'
                                    />
                                    <img
                                        src={product.images[1]}
                                        alt='girl with bag'
                                        className='absolute top-0 right-0 left-0 bottom-0 opacity-0 max-w-full h-[15em] xl:h-40 object-cover group-hover:opacity-100'
                                    />
                                    <button
                                        type='button'
                                        className='font-Lora bg-black text-xx text-white leading-17 px-3 py-1 rounded-xl absolute bottom-44 left-3 mob:text-[.5em]'
                                    >
                                        Sale
                                    </button>
                                    <div>
                                        <p className='text-center font-Lora text-xx leading-17 text-light-black hover:underline my-3 mob:text-[20px]'>
                                            {product.description}
                                        </p>
                                        <div className='regular-price gap-2 text-center text-light-black font-Lora text-1.25 '>
                                            <span className='mr-5 mob:text-[.5em]'>
                                                <s>{product.originalPrice}</s>
                                            </span>
                                            <span>{product.salePrice}</span>
                                        </div>
                                        <button
                                            type='button'
                                            className='border-xxs border-black text-light-black bg-white xl:px-28 xl:py-3 rounded-xl mt-6 w-full md:px-0 mob:text-[.5em]'
                                        >
                                            Choose options
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </div>
                </ul>
            </div>
        </div>
    );
}

export default Card;
