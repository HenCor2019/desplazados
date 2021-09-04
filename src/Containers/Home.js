import React, { useState } from 'react';
import house1 from '../Img/Home/House1.png';
import house2 from '../Img/Home/House2.png';
import house3 from '../Img/Home/House3.png';
import house4 from '../Img/Home/House4.png';
import firstLine from '../Img/Home/FirstLine.png';
import secondLine from '../Img/Home/SecondLine.png';
import topPaper from '../Img/Home/TopPaper.png';
import Footer from '../Components/Footer';

function Home() {
    const [isReasonsShown, setIsReasonsShown] = useState(false);
    const [isWaitingTimeShown, setIsWaitingTimeShown] = useState(false);
    const [isDreamsShown, setIsDreamsShown] = useState(false);
    const [isHelpShown, setIsHelpShown] = useState(false);

    return (
        <div className="bg-background bg-cover bg-center h-screen">
            <img src={topPaper} alt="Top paper" className="absolute -top-5 left-0 z-20 h-15/1 2xl-1:hidden" loading="lazy" />
            <main>
                <section className="absolute top-4 right-4 w-3/12 h-1/6 z-30 d overflow-y-auto">
                    {isReasonsShown && (
                        <p>
                            I'll appear when you hover over the button reasons.
                            I'll appear when you hover over the button reasons.
                            I'll appear when you hover over the button reasons.
                        </p>
                    )}
                    {isWaitingTimeShown && (
                        <p>
                            I'll appear when you hover over the button waiting time.
                        </p>
                    )}
                    {isDreamsShown && (
                        <p>
                            I'll appear when you hover over the button dreams.
                        </p>
                    )}
                    {isHelpShown && (
                        <p>
                            I'll appear when you hover over the button help.
                        </p>
                    )}
                </section>
                <section className="h-87/100 flex flex-wrap items-end justify-center overflow-y-auto absolutes">
                    <div className="h-72 w-160 z-10 flex absolute items-center justify-center relative lg-1:items-end">
                        <img src={house1} alt="House1" className="w-2/6" onMouseEnter={() => setIsReasonsShown(true)} onMouseLeave={() => setIsReasonsShown(false)} loading="lazy" />
                    </div>
                    <div className="h-72 w-160 z-10 flex items-center justify-center lg-1:items-end lg-1:justify-start 2xl-1:justify-center">
                        <img src={house2} alt="House2" className="w-2/6" onMouseEnter={() => setIsWaitingTimeShown(true)} onMouseLeave={() => setIsWaitingTimeShown(false)} loading="lazy" />
                    </div>
                    <div className="h-72 w-160 z-10 flex items-center justify-center lg-1:items-end">
                        <img src={house3} alt="House3" className="w-3/6 lg-1:w-70/100 2xl-1:2/6" onMouseEnter={() => setIsDreamsShown(true)} onMouseLeave={() => setIsDreamsShown(false)} loading="lazy" />
                    </div>
                    <div className="h-72 w-160 z-10 flex items-center justify-center lg-1:items-end">
                        <img src={house4} alt="House4" className="w-3/6 lg-1:w-70/100 2xl-1:2/6" onMouseEnter={() => setIsHelpShown(true)} onMouseLeave={() => setIsHelpShown(false)} loading="lazy" />
                    </div>
                    <div className="absolute hidden top-40/100 right-20/100 left-15/100 lg-1:block 2xl-1:hidden">
                        <img src={firstLine} alt="First Line" loading="lazy" />
                    </div>
                    <div className="absolute hidden bottom-20/100  lg-1:block lg-1:block 2xl-1:hidden">
                        <img src={secondLine} alt="Second Line" loading="lazy" />
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default Home;