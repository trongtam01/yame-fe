import React, { ReactNode } from 'react'
import { Route, Routes } from 'react-router-dom'
import NotFound from '../components/NotFound/NotFound'
import Home from '../pages/Home'
import PrivateRoutes from './PrivateRoutes'

interface AppRoutes {
    children?: ReactNode
}

const AppRoutes: React.FC<AppRoutes> = (props) => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/login" element={<Login />} /> */}
                {/* <Route path="/users" element={
                    <PrivateRoutes>
                        <TableUsers/>
                    </PrivateRoutes>
                } /> */}
                <Route path="*" element={<NotFound />} />
            </Routes>
            {/* <PrivateRoutes path="/users">
                <TableUsers/>
            </PrivateRoutes> */}
        </>
    )
}

export default AppRoutes