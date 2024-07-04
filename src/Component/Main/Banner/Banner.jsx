import { Typewriter } from 'react-simple-typewriter';

const Banner = () => {
    return (
        <div
            className="container mx-auto mt-20 p-5 flex flex-col lg:flex-row items-center justify-between"
            style={{ backgroundImage: 'url("https://i.ibb.co/xHvVJ19/banner.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="text-white flex-1 max-w-lg lg:max-w-md xl:max-w-lg">
                {/* Typewriter */}
                <div>
                    <h1 className='text-4xl mt-6'>Hello!</h1>
                </div>

                <div className='App text-2xl'>
                    <h1 style={{ paddingTop: '1rem', margin: 'auto 0', fontWeight: 'normal' }}>
                        <span style={{ color: 'White', fontWeight: 'bold' }}>
                            <Typewriter
                                words={["I am Md Saddam Hossain Saykat", "A MERN Stack Developer at InfinitiBIT"]}
                                loop={Infinity}
                                cursor
                                cursorStyle='_'
                                typeSpeed={20}
                                deleteSpeed={5}
                                delaySpeed={1000}
                            />
                        </span>
                    </h1>
                </div>

                <div className='text-white mt-10'>
                    <p>
                        As a skilled and dedicated MERN stack developer, I have successfully completed a comprehensive web development course in MERN stack. My expertise lies in building dynamic and responsive web applications using MongoDB, Express.js, React, and Node.js.
                    </p>
                </div>
            </div>

            <div className="mt-12 lg:mt-0 lg:ml-12 relative flex-shrink-0">
                <img className="rounded-lg rotate-45 w-40 h-40 lg:w-40 lg:h-40" src="https://i.ibb.co/cCGFTBr/unnamed.jpg" alt="Saykat" />
                <img className="rounded-lg absolute top-0 left-0 border-4 border-black w-40 h-40 lg:w-40 lg:h-40" src="https://i.ibb.co/cCGFTBr/unnamed.jpg" alt="Saykat" />
            </div>
        </div>
    );
};

export default Banner;
