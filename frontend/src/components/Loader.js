import React from 'react';
import Loader from "react-loader-spinner";

const Loaders = () => {
    return (
        <Loader
            type="Grid"
            color="#212121"
            height={150}
            width={150}
            timeout={3000} //3 secs
            style={{
                marginTop: '90px',
                textAlign: 'center',
            }}
        />
    );
}

export default Loaders;