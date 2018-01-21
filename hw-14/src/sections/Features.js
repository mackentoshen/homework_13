import React from 'react';

const Features = () => {
    return (
        <div>

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


        </div>
    );
};

export default Features;



//
// <section className="cards-section pd-section" id="features">
//     <div className="container">
//         <ul className="row cards-wrapper">
//             <li className="col-lg-4 col-md-6 col-sm-12 cards-list">
//                 <p className="cards-title">Easily Customised</p>
//                 <p className="cards-description">
//                     Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam quis risus eget urna mollis
//                     ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla.
//                 </p>
//             </li>
//             <li className="col-lg-4 col-md-6 col-sm-12 cards-list">
//                 <p className="cards-title">Responsive Ready</p>
//                 <p className="cards-description">
//                     Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam quis risus eget urna mollis
//                     ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla.
//                 </p>
//             </li>
//             <li className="col-lg-4 col-md-6 col-sm-12 cards-list">
//                 <p className="cards-title">Modern Design</p>
//                 <p className="cards-description">
//                     Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam quis risus eget urna mollis
//                     ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla.
//                 </p>
//             </li>
//             <li className="col-lg-4 col-md-6 col-sm-12 cards-list">
//                 <p className="cards-title">Clean Code</p>
//                 <p className="cards-description">
//                     Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam quis risus eget urna mollis
//                     ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla.
//                 </p>
//             </li>
//             <li className="col-lg-4 col-md-6 col-sm-12 cards-list">
//                 <p className="cards-title">Ready to Ship</p>
//                 <p className="cards-description">
//                     Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam quis risus eget urna mollis
//                     ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla.
//                 </p>
//             </li>
//             <li className="col-lg-4 col-md-6 col-sm-12 cards-list">
//                 <p className="cards-title">Download for Free</p>
//                 <p className="cards-description">
//                     Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam quis risus eget urna mollis
//                     ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla.
//                 </p>
//             </li>
//         </ul>
//     </div>
// </section>
