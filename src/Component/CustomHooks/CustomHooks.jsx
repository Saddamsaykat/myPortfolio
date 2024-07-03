const CustomHooks = ({text}) => {
    return (
        <div className="flex justify-center mb-7 mt-7">
            <h1 className="text-4xl text-white w-96 flex justify-center mt-16 mb-16 p-10 font-bold border-t-4 border-b-4 border-red-600">{text}</h1>
        </div>
    );
};

export default CustomHooks;