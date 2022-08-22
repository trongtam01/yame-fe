import React from 'react'
import AppRoutes from '../../routers/AppRoutes'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

interface Layout {

}

const Layout: React.FC<Layout> = (props) => {
    return (
        <div className="app-main">
            <Header/>
            <AppRoutes />
            <Footer />
        </div>
    )
}

export default Layout