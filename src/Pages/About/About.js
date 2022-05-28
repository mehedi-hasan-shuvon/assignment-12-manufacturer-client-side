import React from 'react';
import me from '../../Images/dfsdfsdf.jpg'

const About = () => {

    return (
        <div >
            <div class="hero min-h-screen ">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={me} className="max-w-sm rounded-lg shadow-2xl " />
                    <div>
                        <h1 class="text-5xl font-bold">About Me</h1>
                        {/* <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
                        <p className='text-xl'>Hi! I am Mehedi Hasan Shuvon</p>
                        <p className='text-xl'>Email: mehedi.hasan.shuvon@gmail.com</p>
                        <p className='text-xl'>I am graduated from Brac University</p>
                        <p className='text-xl'>I am a java and python programmer. Moreover, i have professional experince in MERN web development with(HTML,CSS,Javascript,MongoDB,NodeJS,ReactJS,ExpressJs etc).</p>
                        <p className='text-xl'>Skills: Python/ Java/ MySQL/ JavaScript/ HTML/ CSS/ React/ MongoDB/ NodeJS/ ExpressJS /Machine Learning(Pandas , Scikit-learn, TensorFlow)/ Git/ Bootstarp,Tailwind</p>

                        <button class="btn btn-primary" ><a href="https://github.com/mehedi-hasan-shuvon" target="_blank">Contact Me</a></button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default About;