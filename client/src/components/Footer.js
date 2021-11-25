import React from "react";

const Footer = (props) => {

    const {setModalOpen} = props;

    return (
        <div>
            <div><button onClick={() => setModalOpen(true)}>Subscribe to newsletter</button></div>
        </div>
    );
};

export default Footer;