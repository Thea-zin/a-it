'use client';
import * as React from 'react';
import { useState,useEffect } from "react";
function BlogContent(){
    const [blog,setBlog]=useState(null);
        useEffect(() => {
            const fetchData = async () => {
                try {
                    const response = await fetch('/api/getAllBlog/{id}', {
                        method: 'GET',
                        headers: {
                            'Cache-Control': 'no-cache', // Instructs the browser not to cache the response
                        },
                    });
                    const result = await response.json();
                    setBlog(result['message']);
                } catch (error) {
                    console.log(error);
                }
            };
            fetchData();
        });
        
   console.log(blogList)
    return (
      
     <div>
        <div>{blog}</div>
     </div>
    )
}
export default BlogContent;