import React from 'react';
import Header from './Header';
import SearchBook from './SearchBook';
import Viewers from './Viewers';
import ImgSlider from './ImgSlider';
import Books from './Books';

import Corousal from './Corousal';



function Home(props) {
    
    

    return (
        <div>
            <Header />
            < ImgSlider />
            <Viewers />
            <Books />

            { <main className="mb-4 mt-5">
               
                <section>
                    <Corousal />
                </section>

                <section style={styling.section_bg}>
                    <SearchBook />
                </section>
                

                
            </main> }

        </div>
    );
}

let styling = {
    subheading : {
        textAlign: "center",
        color: "#333333",
        fontFamily: "Verdana",
        padding: 20
    },
    section_bg : {
        background : "linear-gradient(180deg, transparent, #0c60b6)",
        textAlign: "center",
    }
    
}

export default Home;