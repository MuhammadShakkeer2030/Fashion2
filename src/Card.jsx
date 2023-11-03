function Card() {
    return (
        <div>
            <div className='px-12 mb-10'>
                <h2 className='font-Lora text-light-black text-40 leading-52 mb-2'>Unisex College Totes</h2>
                <h4 className='font-Cardo text-text leading-30 text-1.25'>Introducing the game-changer in tote bags</h4>
            </div>
            <div className='slider px-6'>
                <ul className='flex'>
                    <li className=''>
                        <div className='relative group'>
                            <img
                                src='https://www.theplor.in/cdn/shop/files/plor-college-tote-bag.jpg?v=1697483698&width=360'
                                alt='bag'
                                className='w-115 h-40 object-cover blur-xx opacity-100'
                            />
                            <img
                                src='https://www.theplor.in/cdn/shop/files/tote-bag-with-zip.jpg?v=1698249082&width=360'
                                alt='girl with bag'
                                className='absolute top-0 right-0 left-0 bottom-0 opacity-0 duration-slow w-115 h-40 object-cover group-hover:opacity-100'
                            />
                            <button
                                type='button'
                                className='font-Lora bg-black text-xx text-white leading-17 px-3 py-1 rounded-xl absolute bottom-44 left-3'
                            >
                                Sale
                            </button>
                            <div>
                                <p className='text-center font-Lora text-xx leading-17 text-light-black hover:underline my-3'>
                                    Black College Tote Bag
                                </p>
                                <div className='regular-price gap-2 text-center text-light-black font-Lora text-1.25 '>
                                    <span className='mr-5'>
                                        <s>1,719.00INR</s>
                                    </span>
                                    <span>1,550.00INR</span>
                                </div>
                                <button
                                    type='button'
                                    className='border-xxs border-black text-light-black bg-white px-28 py-3 rounded-xl mt-6 w-full'
                                >
                                    Choose options
                                </button>
                            </div>
                        </div>
                    </li>
                    {/* <li>
              <div>
                <img
                  src="https://www.theplor.in/cdn/shop/files/tote-bag-with-zip.jpg?v=1698249082&width=360"
                  alt="imager"
                />
              </div>
            </li> */}
                </ul>
            </div>
        </div>
    );
}

export default Card;
