import React, { useState } from 'react'
import { IoIosPerson } from "react-icons/io";
import ChangeFormFiels from '../../Components/common/ChangeFormFiels';
import { updateUserData } from '../../Api/updateUserData';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

function Profile() {
    const { handleSubmit, register, formState: { errors } } = useForm()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [apiError, setApiError] = useState("");
    const [password, setPassword] = useState('')




    const updateData = async (data) => {
        try {
            const changed = await updateUserData(data)
            console.log(changed);
            setApiError("");

            setName(changed.name)
            setEmail(changed.email)
            setPhone(changed.phone)
            toast.success('Data Changed Successfully')
        }
        catch (e) {
            console.log(e.response?.data);
            const message = e.response?.data
            console.log('message', message);
            setApiError(message);
            toast.error('Error Changing Data , Try Again!')
        }
    }

    return (
        <>
            <div className='max-w-4xl mx-auto border my-8 p-6 bg-white rounded-md shadow-sm flex flex-col items-center gap-6'>
                <div className='rounded-full p-2 bg-white'
                    style={{ filter: 'drop-shadow(3px 3px 8px var(--shadow-color)) drop-shadow(0px 3px 10px rgba(121, 85, 29))' }}
                >
                    <IoIosPerson className='text-5xl sm:text-6xl text-[var(--primary-color)]' />
                </div>

                <div className='w-full'>
                    <form onSubmit={handleSubmit(updateData)} className='flex flex-col items-center gap-4 px-2 sm:px-6'>
                        <ChangeFormFiels type='text' placeholder={name} label='User Name' name={'name'}
                            {...register("name", {
                                minLength: {
                                    value: 2,
                                    message: "The name Length Must be More than 2 letters",
                                },
                            })}
                        />
                        {errors?.name && (
                            <small className="text-red-600">{errors.name.message}</small>
                        )}

                        {apiError.errors?.param == 'name' ?
                            <div className="w-full text-center bg-red-100 text-red-700 p-2 rounded text-sm font-semibold">
                                {apiError.errors.msg}
                            </div> : ''
                        }


                        <ChangeFormFiels type='email' placeholder={email} label='Email' name={'email'}
                            {...register("email", {
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Invalid Email Format",
                                },
                            })} />
                        {errors?.email && (
                            <small className="text-red-600">{errors.email.message}</small>
                        )}
                        {apiError.errors?.param == 'email' ?
                            <div className="w-full text-center bg-red-100 text-red-700 p-2 rounded text-sm font-semibold">
                                {apiError.errors.msg}
                            </div> : ''
                        }

                        <ChangeFormFiels type='tel' placeholder={phone} label='Phone Number' name={'phone'}
                            {...register("phone", {
                                pattern: {
                                    value: /^01[0125][0-9]{8}$/,
                                    message: "Invalid Phone Number Format",
                                },
                            })} />
                        {errors?.phone && (
                            <small className="text-red-600">{errors.phone.message}</small>
                        )}
                        {apiError.errors?.param == 'phone' ?
                            <div className="w-full text-center bg-red-100 text-red-700 p-2 rounded text-sm font-semibold">
                                {apiError.errors.msg}
                            </div> : ''
                        }

                        <div className='sm:w-36 w-full'>
                            <button
                                type="submit"
                                className='h-10 w-full flex items-center justify-center 
                                bg-[var(--primary-color)] text-white font-semibold rounded-md 
                                hover:bg-[var(--hover-color)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]'
                            >
                                Change
                            </button>

                        </div>
                    </form>

                    {/* <form className='flex flex-col items-center gap-4 px-2 sm:px-6'>
                        <ChangeFormFiels type='text' placeholder={name} label='User Name' name={'name'}
                            {...register("name", {
                                minLength: {
                                    value: 2,
                                    message: "The name Length Must be More than 2 letters",
                                },
                            })}
                        />
                    </form> */}
                </div>
            </div>
        </>
    )
}

export default Profile
