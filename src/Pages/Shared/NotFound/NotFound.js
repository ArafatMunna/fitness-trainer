import React from "react";

const NotFound = () => {
    const notFound = process.env.PUBLIC_URL + "images/not-found.jpg";
    return (
        <div className="w-50 mx-auto mt-5" style={{ height: "100vh" }}>
            <img src={notFound} alt="" />
        </div>
    );
};

export default NotFound;
