import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2 className='text-4xl text-center my-5'>Answer to the Questions</h2>
            <div>
                <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div class="collapse-title text-xl font-medium">
                        How will you improve the performance of a React Application?
                    </div>
                    <div class="collapse-content">
                        <p className='text-xl'>Some ways to improve the performance is given bellow:</p>
                        <ul className='mx-5'>
                            <li className='list-disc'> Keeping component state local where necessary</li>
                            <li className='list-disc'>Memoizing React components to prevent unnecessary re-renders</li>
                            <li className='list-disc'>Code-splitting in React using dynamic import()</li>
                            <li className='list-disc'>Windowing or list virtualization in React</li>
                            <li className='list-disc'>Lazy loading images in React</li>
                        </ul>
                    </div>
                </div>

                <div tabindex="1" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div class="collapse-title text-xl font-medium">
                        What are the different ways to manage a state in a React application?
                    </div>
                    <div class="collapse-content">
                        <p className='text-xl'>There are four main types of state you need to properly manage in a React application:</p>
                        <ul className='mx-5'>
                            <li className='list-disc'>Local (UI) state: Local state is data we manage in one or another component.</li>
                            <li className='list-disc'>Global (UI) state: Global state is data we manage across multiple components.</li>
                            <li className='list-disc'>Server state: Data that comes from an external server that must be integrated with our UI state.</li>
                            <li className='list-disc'>URL state: Data that exists on our URLs, including the pathname and query parameters.</li>
                        </ul>
                    </div>
                </div>

                <div tabindex="3" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div class="collapse-title text-xl font-medium">
                        How does prototypical inheritance work?
                    </div>
                    <div class="collapse-content">
                        <p className='text-xl'>Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, Object.getPrototypeOf and Object.setPrototypeOf is used. </p>
                    </div>
                </div>

                <div tabindex="4" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div class="collapse-title text-xl font-medium">
                        Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts
                    </div>
                    <div class="collapse-content">
                        <p className='text-xl'>The reasons are given bellow:</p>
                        <ul className='mx-5'>
                            <li className='list-disc'>If we update it directly, calling the setState() afterward may just replace the update you made.</li>
                            <li className='list-disc'>When we directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.</li>
                            <li className='list-disc'>we will lose control of the state across all components.</li>
                        </ul>
                    </div>
                </div>

                <div tabindex="5" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-8">
                    <div class="collapse-title text-xl font-medium">
                        What is a unit test? Why should write unit tests?
                    </div>
                    <div class="collapse-content">
                        <p className='text-xl'>Unit Testing is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. </p>
                        <p className='text-xl'>Unit Testing is important because software developers sometimes try saving time doing minimal unit testing and this is myth because inappropriate unit testing leads to high cost Defect fixing during System Testing, Integration Testing and even Beta Testing after application is built. If proper unit testing is done in early development, then it saves time and money in the end.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Blog;