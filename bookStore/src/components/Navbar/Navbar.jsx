import { Link } from 'react-router-dom';
import { useState } from 'react';

import Logo from '../../Img/icon.png'


//icons
import { FiMenu } from 'react-icons/fi'




const Navbar = () => {

        const [open, setOpen] = useState(false);
        
        return(
                <header className='border-b-2 bg-gray-200 py-2'>
                        <div className='flex  text-blue-900 items-center justify-between xl:max-w-7xl mx-auto max-w-full px-[8%] flex-wrap w-full'>
                                <img src={Logo}  alt='Nossa logo'   width={50} height={55}/>
                                <h1 className='font-serif'>Mar de Livros</h1>

                                <FiMenu  className='lg:hidden block h-6 w-6 cursor-pointer hover:text-gray-400' onClick={() => setOpen(!open)}/>
                                
                                <nav className={`${open ? "block" : "hidden"}
                                 w-full lg:flex lg:items-center lg:w-auto`}>

                                        <ul className='text-base text-blue-900 lg:flex lg:justify-between'>
                                                <li>
                                                <Link to={`/quemsomos`} className='lg:px-5 py-2 block text-blue-900 hover:text-gray-400 font-semibold' onClick={() => setOpen(!open)}>Quem somos </Link>
                                                </li>

                                                <li>
                                                <Link to={`/home`} className='lg:px-5 py-2 block text-blue-900 hover:text-gray-400 font-semibold' onClick={() => setOpen(!open)}>Home </Link>
                                                </li>


                                                {/* <li>
                                                <Link to={`/post`} className='lg:px-5 py-2 block text-blue-900 hover:text-gray-400 font-semibold' onClick={() => setOpen(!open)}> Add Livro </Link>
                                                </li>

                                                <li>
                                                <Link to={`/HomeFunc`} className='lg:px-5 py-2 block text-blue-900 hover:text-gray-400 font-semibold' onClick={() => setOpen(!open)}> Home funcionario </Link>
                                                </li> */}

                                                <li>
                                                <Link to={`/singin`} className='lg:px-5 py-2 block text-blue-900 hover:text-gray-400 font-semibold' onClick={() => setOpen(!open)}> Login </Link>
                                                </li>

                                                <li>
                                                <Link to={`/Singnup`} className='lg:px-5 py-2 block text-blue-900 hover:text-gray-400 font-semibold' onClick={() => setOpen(!open)}> Cadastro </Link>
                                                </li>

                                                <li>
                                                <Link to={`/formadm`} className='lg:px-5 py-2 block text-blue-900 hover:text-gray-400 font-semibold' onClick={() => setOpen(!open)}>LoginFunc </Link>
                                                </li>

                                                


                                        </ul>
                                </nav>
                        </div>
                </header>
        )
}

export default Navbar