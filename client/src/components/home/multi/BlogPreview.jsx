import React from 'react';

const BlogPreview = () => {
    return (
        <>
            <div className='columns'>
                <h2 className='title is-size-3 ml-5 service-title'>Latest Blogs</h2>
                <br />
            </div>
             <div className='columns'>
                <div className='column is-4'>
                    <figure className='image is-96x96'>
                        <img src='https://picsum.photos/seed/picsum/200' />
                    </figure>
                </div>
                <div className='column'>
                    <h3 className='subtitle service-title is-underlined is-size-4'>
                        Blog Post Title
                    </h3>
                    <p className='is-size-6 blog-excerpt'>
                        A brief preview of the blog post content goes here to entice readers to click through and read more.
                    </p>
                </div>
            </div>
            <hr className='services-hr' />
            <div className='columns'>
                <div className='column is-4'>
                    <figure className='image is-96x96'>
                        <img src='https://picsum.photos/seed/picsum/200' />
                    </figure>
                </div>
                <div className='column'>
                    <h3 className='subtitle service-title is-underlined is-size-4'>
                        Blog Post Title
                    </h3>
                    <p className='is-size-6 blog-excerpt'>
                        A brief preview of the blog post content goes here to entice readers to click through and read more.
                    </p>
                </div>
            </div>
            <hr className='services-hr' />
            <div className='columns'>
                <div className='column is-4'>
                    <figure className='image is-96x96'>
                        <img src='https://picsum.photos/seed/picsum/200' />
                    </figure>
                </div>
                <div className='column'>
                    <h3 className='subtitle service-title is-underlined is-size-4'>
                        Blog Post Title
                    </h3>
                    <p className='is-size-6 blog-excerpt'>
                        A brief preview of the blog post content goes here to entice readers to click through and read more.
                    </p>
                </div>
            </div>
            <div className='columns'>
                <a className='about-link' href='/blog'>View All Posts →</a>
            </div>
        </>
    );
};

export default BlogPreview;