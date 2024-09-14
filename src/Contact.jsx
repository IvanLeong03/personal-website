import React from "react";


const Contact = () => {
    return (
        <div id='contact' className="bg-cream w-full">
            <h1 className="text-3xl p-12 font-Roboto">Contact</h1> 


            <div className="px-12 py-2 mb-8">email: ivanleongyh@gmail.com</div>

            <div className="flex w-2/5 m-auto justify-between">
                <button className="w-24 h-16 border border-black rounded-lg">
                    <a href="https://www.linkedin.com/in/ivanyhleong/" target='_blank'>
                        <i className="fa-brands fa-linkedin"></i>
                    </a>                    
                </button>

                <button className="w-24 h-16 border border-black rounded-lg">
                    <a href='https://www.instagram.com/ivxnleong?igsh=MXVyNmlpZHc5MHF5MQ%3D%3D&utm_source=qr' target='_blank'>
                        <i className="fa-brands fa-instagram"></i>
                    </a>                
                </button>
            </div>

            <div className="h-16"></div>
        </div>

    );

};

export default Contact;