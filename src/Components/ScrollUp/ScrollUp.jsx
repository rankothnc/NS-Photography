import React, { useEffect, useState } from 'react';
import { BsArrowUp } from "react-icons/bs";

const ScrollUp = () => {
    const [isVisible,setIsVisible] =useState(false);

    const toggleVisibility = ()=>{
      if (window.pageYOffset > 300) {
        setIsVisible(true);
        } else {
            setIsVisible(false);
        }
     }

        /* scroll to top of the page */
        const scrollToTop=()=>{
            window.scrollTo({top:0,behavior:'smooth'});
        }
        useEffect(()=>{
            window.addEventListener('scroll',toggleVisibility);

            return ()=>{
                window.removeEventListener('scroll',toggleVisibility);
            }
        },[])

    return (
      <div>
        {isVisible && (
          <button
                    className="fixed bottom-8 right-8 text-white w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-yellow-400 z-50 
                    transform transition-transform duration-300 hover:scale-110" 
                    onClick={scrollToTop}
                >
            <BsArrowUp />
          </button>
        )}
      </div>
    );
};

export default ScrollUp;