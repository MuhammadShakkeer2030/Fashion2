import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

function Footer() {
    return (
        <footer className='bg-gray-900 text-white py-4'>
            <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
                <div className='text-center md:text-left'>
                    <p className='text-sm'>&copy; 2024 YourCompany</p>
                </div>
                {/* footer nav links */}
                <div className='mt-4 md:mt-0'>
                    <ul className='flex flex-wrap justify-center md:justify-start'>
                        <li className='mr-6 mb-2 md:mb-0'>
                            <a href='#' className='text-sm hover:text-gray-400'>
                                Home
                            </a>
                        </li>
                        <li className='mr-6 mb-2 md:mb-0'>
                            <a href='#' className='text-sm hover:text-gray-400'>
                                About
                            </a>
                        </li>
                        <li className='mr-6 mb-2 md:mb-0'>
                            <a href='#' className='text-sm hover:text-gray-400'>
                                Products
                            </a>
                        </li>
                        {/* Add more links as needed */}
                    </ul>
                </div>
                {/* social icons */}
                <div className='mt-4 md:mt-0'>
                    <ul className='flex flex-wrap justify-center md:justify-start'>
                        <li className='mr-6 mb-2 md:mb-0'>
                            <a href='#' className='text-sm hover:text-gray-400'>
                                <FaInstagram />
                            </a>
                        </li>
                        <li className='mr-6 mb-2 md:mb-0'>
                            <a href='#' className='text-sm hover:text-gray-400'>
                                <FaTwitter />
                            </a>
                        </li>
                        <li className='mr-6 mb-2 md:mb-0'>
                            <a href='#' className='text-sm hover:text-gray-400'>
                                <FaYoutube />
                            </a>
                        </li>

                        {/* Add more links as needed */}
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
