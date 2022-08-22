import React, { ReactNode, useContext, useEffect } from 'react';

interface PrivateRoutes {
    children?: ReactNode
}

const PrivateRoutes: React.FC<PrivateRoutes> = (props) => {
    return (
        <>
            {props.children}
        </>
    );
};

export default PrivateRoutes;