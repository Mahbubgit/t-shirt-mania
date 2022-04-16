import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div>
            <header>Questions and Answers Section</header>
            <div className='question'>Question 1. What is Context API?</div>
            <div className='answer'>
                <h2>Answer:</h2><br />

                <p>The Context API is a React structure that enables to exchange unique details and assists in solving prop-drilling from all levels of an application.

                    It is a new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease. <br /> <br />
                    So we can say the React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent.</p>
            </div>
            <div className='question'>Question 2. What is Semantic Tags? Explain with some example.</div>
            <div className='answer'>
                <h2>Answer:</h2><br />

                <p>
                    Semantic HTML elements are those that clearly describe their meaning in a human and machine-readable way. Elements such as <span>header</span>, <span>footer </span>  and <span> article </span>
                    are all considered semantic because they accurately describe the purpose of the element and the type of content that is inside them. <br /><br />

                    So a semantic element clearly describes its meaning to both the browser and the developer. <br />
                    Examples of non-semantic elements: <span>div</span> and <span>span</span>  - Tells nothing about its content. <br />
                    Examples of semantic elements: <span>form</span>, <span>table</span> and <span>article</span>  - Clearly defines its content. <br /><br />

                    HTML5 semantic tags define the purpose of the element. By using semantic markup, it help the browser to understand the meaning of the content instead of just displaying it. By providing this extra level of clarity, HTML5 semantic elements also help search engines to read the page and find the required information faster.

                </p>
            </div>

        </div>
    );
};

export default Blogs;