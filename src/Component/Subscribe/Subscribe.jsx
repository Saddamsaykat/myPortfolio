import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2';
import CustomHooks from '../CustomHooks/CustomHooks';
import "./Custom.css"

const Subscribe = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
        axios.post('https://my-portfolio-pi-beige-66.vercel.app/emailApi', data)
            .then(response => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your message has been sent successfully!",
                    showConfirmButton: false,
                    timer: 1500
                });
                console.log(response.data);
                reset();
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong! Please try again later.'
                });
                console.error('Error submitting form:', error);
            });
    };

    return (
        <>
            <div className="mt-8">
                <CustomHooks text="Send me Email" />
            </div>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="p-6 max-w-lg mx-auto bg-slate-600 rounded-xl shadow-md space-y-4 animated-border"
            >
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                        Name
                    </label>
                    <input
                        id="name"
                        className={`w-full px-3 py-2 border-2 rounded focus:outline-none animated-border ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                        {...register('name', { required: true })}
                    />
                    {errors.name && <span className="text-red-500 text-sm">This field is required</span>}
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        className={`w-full px-3 py-2 border-2 rounded focus:outline-none animated-border ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                        {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                    />
                    {errors.email && <span className="text-red-500 text-sm">Please enter a valid email</span>}
                </div>

                <div className="mb-4">
                    <label htmlFor="comment" className="block text-gray-700 font-bold mb-2">
                        Comment
                    </label>
                    <textarea
                        id="comment"
                        className={`w-full px-3 py-2 border-2 rounded focus:outline-none animated-border ${errors.comment ? 'border-red-500' : 'border-gray-300'}`}
                        {...register('comment', { required: true })}
                    />
                    {errors.comment && <span className="text-red-500 text-sm">Please enter your comment</span>}
                </div>

                <button
                    type="submit"
                    className="w-full py-2 bg-pink-500 text-white font-bold rounded hover:bg-pink-700 transition-colors duration-300"
                >
                    Subscribe Me
                </button>
            </form>
        </>
    );
};

export default Subscribe;
