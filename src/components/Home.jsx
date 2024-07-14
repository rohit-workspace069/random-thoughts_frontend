import React from "react";
import Header from "./Header";
import Footer from "./Footer";

import "./comonent-style/Home.css";
import Post from "./Post";

function Home() {
    return (
        <div> 
            <Header />
            <div className="Home">
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
