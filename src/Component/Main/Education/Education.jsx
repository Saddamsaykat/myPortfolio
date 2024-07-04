// import CustomHooks from "../../CustomHooks/CustomHooks";

import CustomHooks from "../../CustomHooks/CustomHooks";

const Education = () => {
    return (
        <div className="">
            <CustomHooks text="Education"></CustomHooks>




            <div className=" container text-white mx-auto flex w-full flex-col lg:flex-row">
                <div className="  grid flex-grow place-items-center">

                    <div>
                        <h1 className="flex justify-center text-2xl font-bold">College</h1>
                        <div className="divider divider-primary"></div>
                        <h1 className="flex justify-center text-2xl">Mohammadpur Goverment College</h1>
                        <h1 className="flex justify-center text-2xl">Science</h1>

                        <div className="divider divider-primary"></div>
                        <h2 className="flex justify-center text-2xl">University</h2>
                        <h2 className="flex justify-center text-2xl">Z. H. Sikder University of Science & Techonology</h2>
                        <h1 className="flex justify-center text-2xl">Depertment of Computer Science & Enginnnering</h1>
                    </div>


                </div>
                <div className="divider divider-primary text-white lg:divider-horizontal"></div>
                <div className="  rounded-box grid flex-grow place-items-center">
                    <div>

                        <h1 className="flex justify-center text-2xl font-bold">Course Study</h1>
                        <div className="divider divider-primary"></div>
                    </div>
                   
                    <div>
                        <h1 className="flex justify-center text-2xl font-bold">Programming Hero(2023-2024)</h1>
                        <div className="divider divider-primary "></div>
                        <h1 className="flex justify-center text-2xl font-bold">LEDP(2020-2021)</h1>

                        <div className="divider divider-primary"></div>
                        <h1 className="flex justify-center text-2xl font-bold">Programming Bootcamp(2022-2023)</h1>
                    </div>
                </div>
            </div>


        </div>

    );
};

export default Education;