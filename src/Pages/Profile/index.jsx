import React from 'react'
import { IoIosPerson } from "react-icons/io";
import ChangeFormFiels from '../../Components/common/ChangeFormFiels';

function Profile() {
    return (
        <>
            <div className='max-w-4xl mx-auto border my-8 p-6 bg-white rounded-md shadow-sm flex flex-col items-center gap-6'>
                <div className='rounded-full p-2 bg-white'
                    style={{ filter: 'drop-shadow(3px 3px 8px var(--shadow-color)) drop-shadow(0px 3px 10px rgba(121, 85, 29))' }}
                >
                    <IoIosPerson className='text-5xl sm:text-6xl text-[var(--primary-color)]' />
                </div>

                <div className='w-full'>
                    <form className='flex flex-col gap-4 px-2 sm:px-6'>
                        <ChangeFormFiels type='text' placeholder='ex:John' label='User Name' name={'name'} />

                        <ChangeFormFiels type='email' placeholder='John@gmail.com' label='Email' name={'email'} />

                        <ChangeFormFiels type='tel' placeholder='01010700700' label='Phone Number' name={'phone'} />

                        <ChangeFormFiels type='password' placeholder='reset Password' label='Password' name={'password'} />

                    </form>
                </div>
            </div>
        </>
    )
}

export default Profile
