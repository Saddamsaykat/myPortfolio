
import { Typewriter } from 'react-simple-typewriter'

const Banner = () => {
   
    return (
        <div className="container mx-auto mt-5 grid grid-cols-2" style={{ backgroundImage: 'url("https://i.ibb.co/xHvVJ19/banner.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>




          <div className="text-white ml-28">
                
                {/* Typewriter */}

                <div>
                    <h1 className='text-4xl mt-6'>Hello!</h1>
                </div>

                <div className='App text-4xl'>
                    <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
                         {' '}
                        <span style={{ color: 'White', fontWeight: 'bold' }}>
                            {/* Style will be inherited from the parent element */}
                            <Typewriter
                                words={["I am Md Saddam Hossain Saykat", "A MERN Stack Developer at InfinitiBIT"]}
                                loop={Infinity}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                               
                            
                            />
                        </span>
                    </h1>
                </div>

            </div>

            <div className="mt-24 mb-24 relative">
                <img className="rounded-lg  rotate-45" src="https://i.ibb.co/cCGFTBr/unnamed.jpg" alt="Saykat" />
                <img className="rounded-lg absolute top-0 border-4 border-black" src="https://i.ibb.co/cCGFTBr/unnamed.jpg" alt="Saykat" />
            </div>


          </div>


    );
};

export default Banner;
