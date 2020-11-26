import React from 'react';

import Navbar from './Navbar';
import Footer from './Footer';

function Layout(props){
    return(
        <React.Fragment>
            <Navbar />
            <Footer />
            {props.children}
            
        </React.Fragment>
    );
}

export default Layout;