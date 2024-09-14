import React from "react";

const buttons = [
    "work",
    "about",
    "contact"
];


const buttonItems = buttons.map((button, index) =>
    <li key={index}><a href={`#${button}`} className="hover:text-teal-500">{button}</a></li>
);

const Header = () => {
    return (
        <header className='w-full h-32 flex items-center justify-between px-12 py-20'>        

        <div className='text-5xl font-bold text-left px-6'>
        <a href='index.html'>
          Ivan
          <br/>
          Leong          
        </a>
          
        </div>

        <nav>
          <ul className='flex space-x-12 text-md px-6'>
            {buttonItems}
          </ul>
        </nav>
      </header>
    );

};

export default Header;