'use client';
import React, { useEffect, useState } from 'react';

const BlogComponent = ({ params }) => {
    const [blog, setBlog] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!params || !params.blogid) {
                    console.log('Blog ID is undefined');
                    return; // Early return if params.blogid is not available
                }

                const response = await fetch(`/api/getBlog?blogid=${params.blogid}`, {
                    method: 'GET',
                    headers: {
                        'Cache-Control': 'no-cache',
                        'blogid':params.blogid
                    },
          
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const result = await response.json();
                setBlog(result['message']);
            } catch (error) {
                console.error('Failed to fetch blog:', error);
                // Optionally, update the state to reflect the error in the UI
            }
        };

        fetchData();
    }, []); // Ensure params is defined and listen for changes to blogid
    console.log(blog[0])

    // Render your component based on the fetched data
    return (
        <div>
           <div>{blog.map((myblog)=>(
          <article class="max-w-4xl mx-auto px-4 py-8" key={ myblog.blogId}>
          <header class="mb-8">
            <h1 class="font-bold text-4xl text-gray-900 mb-4">{myblog.title}</h1>
            <p class="text-xl text-gray-700 mb-2">An engaging subtitle or summary that hooks the reader.</p>
            <div class="flex items-center space-x-4">
              {/* <img class="w-10 h-10 rounded-full" src="author-profile-url.jpg" alt="Author Name"> */}
              <div class="flex flex-col">
                <span class="text-gray-900 font-semibold">Author Name : Davi</span>
                <span class="text-gray-600 text-sm">Publication Date : {myblog.publishedAt}</span>
              </div>
            </div>
          </header>
          <section class="mb-8">
          <img src={myblog.imageRef} className="w-[300px] h-[300px]"></img>
          </section>
          <section class="prose lg:prose-xl max-w-none">
            <p>{myblog.content}/</p>
    
          </section>
        </article>
        
           ))}</div>
        </div>
    );
};

export default BlogComponent;
