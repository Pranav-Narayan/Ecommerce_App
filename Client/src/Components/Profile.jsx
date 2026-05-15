import React from 'react'
import { useSelector } from 'react-redux'
import { FaUserCircle } from 'react-icons/fa'

const Profile = () => {
    const { user } = useSelector(state => state.auth)

    return (
        <div className='mx-4 sm:mx-8 md:mx-16 lg:mx-32 mt-12 mb-20 flex flex-col gap-10 justify-center max-w-4xl xl:mx-auto'>
            <h1 className='text-center text-3xl uppercase font-bold tracking-[0.2em] text-gray-900'>My Profile</h1>

            <div className='bg-white p-6 sm:p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col sm:flex-row gap-8 items-start'>

                <div className='flex flex-col items-center justify-center gap-4 bg-gray-50/50 p-8 rounded-2xl border border-gray-100 min-w-[250px] w-full sm:w-auto h-full'>
                    <FaUserCircle className='text-8xl text-gray-300' />
                    <div className='text-center'>
                        <h3 className='text-xl font-bold text-gray-800'>{user?.name || 'Valued Customer'}</h3>
                        <p className='text-gray-500 text-sm mt-1'>Member</p>
                    </div>
                </div>

                <div className='flex-1 w-full'>
                    <div>
                        <h2 className='text-xl font-semibold text-gray-800'>Account Details</h2>
                        <p className='text-gray-500 mt-2'>Manage your personal information and preferences.</p>
                    </div>

                    <div className='border-t border-gray-100 mt-6 pt-6 flex flex-col gap-6'>
                        <div className='flex flex-col gap-1'>
                            <span className='text-gray-400 text-xs font-semibold uppercase tracking-wider'>Full Name</span>
                            <span className='text-gray-900 font-medium text-lg'>{user?.name || 'User'}</span>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <span className='text-gray-400 text-xs font-semibold uppercase tracking-wider'>Email Address</span>
                            <span className='text-gray-900 font-medium text-lg'>{user?.email || 'Not provided'}</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Profile
