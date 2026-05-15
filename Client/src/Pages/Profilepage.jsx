import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Profile from '../Components/Profile'

const Profilepage = () => {
    const { isAuthenticated } = useSelector(state => state.auth)
    const navigate = useNavigate()

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login')
        }
    }, [isAuthenticated, navigate])

    if (!isAuthenticated) {
        return null;
    }

    return (
        <div className='min-h-[60vh]'>
            <Profile />
        </div>
    )
}

export default Profilepage
