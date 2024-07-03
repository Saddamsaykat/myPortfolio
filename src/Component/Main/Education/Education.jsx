// import CustomHooks from "../../CustomHooks/CustomHooks";

import CustomHooks from "../../CustomHooks/CustomHooks";

const Education = () => {
    return (
        <div>
            <CustomHooks text="Education"></CustomHooks>

          
                

                <div className=" container text-white mx-auto flex w-full flex-col lg:flex-row">
                    <div className="  rounded-box grid h-32 flex-grow place-items-center">

                    <div>
                    <h1>College</h1>
                    <h1>Mohammadpur Goverment College</h1>
                    <h2>University</h2>
                    <h2>Z. H. Sikder University of Science & Techonology</h2>
                    </div>


                    </div>
                    <div className="divider divider-primary text-white lg:divider-horizontal"></div>
                    <div className="  rounded-box grid h-32 flex-grow place-items-center">

                    <h1>Course Study</h1>
                    </div>
                </div>

               
            </div>
       
    );
};

export default Education;