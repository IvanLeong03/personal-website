import React from "react";
import pomodoroImg from "./assets/pomodoro.png"
import fbrefImg from "./assets/fbref_compare.png"

const Work = () => {

    return (
        <div id='work' className="bg-cream">
            <h1 className="text-3xl p-12 font-Roboto">My work</h1>
            <div className="flex flex-col md:flex-row items-center py-4">

                <div className="w-full md:w-1/2 mx-16 p-6">
                    <img src={fbrefImg}></img>                
                </div>
                <div className="w-full md:w-1/2 mx-16 p-6 text-left">
                    <h2 className="text-xl font-bold">FBREF percentiles comparison tool</h2>
                    <p className="mt-6 mb-4">
                        Obtained data from FBREF using web scraping, cleaned it 
                        and plot bar charts for easy comparison.
                    </p>
                    <a className="text-sm underline text-blue-600" href="https://github.com/IvanLeong03/percentile_viz" target="_blank">
                        view it here
                    </a>
                </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center py-4">
                <div className="w-full md:w-1/2 mx-16 p-6">
                    <img src={pomodoroImg}></img>                
                </div>
                <div className="w-full md:w-1/2 mx-16 p-6 text-left">
                    <h2 className="text-xl font-bold">Pomodoro Clock (FreeCodeCamp)</h2>
                    <p className="mt-6 mb-4">An interactive pomodoro timer that allows users to customise session and break length.</p>
                    <a className="text-sm underline text-blue-600" href="https://ivanleong03.github.io/pomodoro/" target="_blank">
                        view it here
                    </a>
                </div>
            </div>

            <div className="h-24"></div>

        </div>

    );

};

export default Work