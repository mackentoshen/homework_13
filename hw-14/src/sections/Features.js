import React from 'react';

const Features = () => {

    const cardsList = [
        {
            title: 'Easily Customised',
            content:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla.'
        },
        {
            title: 'Responsive Ready',
            content: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla.'
        },
        {
            title: 'Modern Design',
            content: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla.'
        },
        {
            title: 'Clean Code',
            content: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla.'
        },
        {
            title: 'Ready to Ship',
            content: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla.'
        },
        {
            title: 'Download for Free',
            content: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla.'
        }
    ];


    return (

            <section className="cards-section pd-section" id="features">
                <div className="container">
                    <ul className="row cards-wrapper">

                        {
                            cardsList.map((item, index) => {
                                return (
                                    <li
                                        key={index}
                                        className={'col-lg-4 col-md-6 col-sm-12 cards-list'}>
                                        <p className={'cards-title'}>{item.title}</p>
                                        <p className={'cards-description'}>{item.content}</p>
                                    </li>
                                );
                            })
                        }

                    </ul>
                </div>
            </section>

    );
};

export default Features;

