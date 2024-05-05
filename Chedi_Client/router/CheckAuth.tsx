import React from 'react'
import PrivateRoutes from './private/PrivateRoutes'
import PublicRoutes from './public/PublicRoutes'
import { useSelector } from 'react-redux'

const CheckAuth: React.FC = () => {
    const auth = useSelector((state) => state.authReducer.userData)
    return (
        auth ? <PrivateRoutes /> : <PublicRoutes />
    )
}

export default CheckAuth