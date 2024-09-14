import React from "react";
import { useState } from "react";
import myPic from './assets/IMG_4164.jpg';



const About = () => {

    const [fact, setFact] = useState('Click the button to see a fact about me!');
    const [buttonVisibile, setButtonVisible] = useState(true);

    const facts = [
        "I love fresh pineapples but hate cooked pineapples.",
        "I have perfect pitch.",
        "I travelled alone to Germany to watch the Euros.",
        "I was at Old Trafford when Kobbie Mainoo made his Premier League debut.",
        "I once got so ill after eating a salad that I ended up in hospital, and I didn't dare to eat salads for a whole decade.",
        "I've seen wild bears.",
        "I don't have a favourite color.",
        "I can easily remember melodies but I keep getting lyrics wrong (in any language).",
        "I like plushies.",
    ];

    const getFact = () => {
        const randomIndex = Math.floor(Math.random() * facts.length);
        setFact(facts[randomIndex]);
        setButtonVisible(false);
    };


    return (
        <div id="about" className="bg-cream">
            <h1 className="text-3xl p-12 font-Roboto">About me</h1>
            <div className="flex flex-col items-center">

                <div className="flex justify-center items-start w-2/5 p-2 mb-4">
                    <img src={myPic} className="shadow-md rounded-lg"></img>
                </div>

                <div className="flex flex-col justify-center p-10 my-4">
                    <p className="px-5 py-6 leading-relaxed">
                        Having just graduated from UCL with a degree in Computer Science, my time at university 
                        has equipped me with a wide range of skills required for different areas of computing, including Machine Learning and Data Analysis, programming skills and knowledge of algorithms,
                        as well as experience with the latest practices used in the real world, such as AGILE methodology. I am prepared to apply my skills into the professional world and contribute to developing things that make the world better.                
                    </p>        
                    <p className="px-5 py-6 leading-relaxed">
                        I have a particular appreciation for clean designs. For every website or app I use, I feel that a design that's easy on the eyes, in addition to delivering on its intended purpose (which is obviously non-negotiable),
                        makes the user experience a lot more enjoyable. This is why I have spent time self-learning front end development, as my goal is to combine quality code with pleasing aesthetics to create products that are appealing visually and comfortable to use.
                    </p>    

                    <p className="px-5 py-6 leading-relaxed">
                        When I'm not on my laptop, I'm most likely exercising, watching sports (especially football), playing the piano/guitar, or playing games.
                    </p>    

                    <p className="px-5 py-6">
                        Other interests of mine include travelling, photography, reading and fashion.
                    </p>

                    <p className="px-5 py-6">I'm currently based in London, but I was born and grew up in Hong Kong.</p>

                    <p className="px-5 py-6">This website was built using React and tailwind css.</p>
                </div>  
                
            </div>  
            
            <div className='flex flex-col justify-center items-center py-10 border-dotted border-4 border-black rounded-xl bg-bgwhite'>
                <div className="text-2xl py-6 px-2 text-center">{fact}</div>
                {buttonVisibile && 
                (<button className="border border-dotted border-darkgrey bg-beige rounded-lg px-4 py-2 mt-3 shadow-md" onClick={getFact}>
                    click
                </button>)}
            </div>
            <div className="h-24"></div>
        </div>
    );
};

export default About