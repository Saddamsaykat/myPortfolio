import { useEffect, useState } from "react";
import CustomHooks from "../CustomHooks/CustomHooks";

const MyProject = () => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://my-portfolio-pi-beige-66.vercel.app/liveLink');
            const dataValue = await response.json();
            setData(dataValue);
        };
        fetchData();
    }, []);

    console.log(data);

    return (
        <div className="container mx-auto">
            <CustomHooks text="My Project"></CustomHooks>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {data.map((item, index) => (
                    <div key={index} className="card glass w-96 my-4">
                        <figure>
                            <img src={item.image} alt={item.name} />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{item.name}</h2>
                            <p>{item.description}</p>
                            <div className="card-actions justify-end">
                                <a href={item.url} target="_blank" rel="noopener noreferrer">
                                    <button className="btn btn-primary">Live Link</button>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyProject;
