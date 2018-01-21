import React from 'react';
import Header from './Header';
import Features from './sections/Features';
import Works from './sections/Works';
import OurTeam from './sections/OurTeam';
import Testimonials from './sections/Testimonials';
import Download from './sections/Download';
import Footer from './Footer';

class App extends React.Component {
    render() {
        return(
            <div>
                <Header/>
                <Features/>
                {/*<Works/>*/}
                <OurTeam/>
                <Testimonials/>
                <Download/>
                <Footer/>
            </div>
        );
    }
}

export default App;