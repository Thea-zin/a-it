'use client';
import * as React from 'react';
import { useState,useEffect } from "react";
import { IconButton } from "@mui/material";
import { DeleteOutlineOutlined } from "@mui/icons-material";
import { BookmarkAddOutlined } from "@mui/icons-material";
import { ModeEditOutlineOutlined } from "@mui/icons-material";
import UpdateBlog from "./updatePopUp";

function UpdateBody(){
    const reviewList = [
        {id:1,author:"Sopheak Khoeurn",profile:'people-1.png',blog_pic:'../updates/blog1.png',date:"2023-09-23",title:"Favorite AI toos for designers in 2023",pic:"",content:"Lorem ipsum dolor sit amet consectetur. Urna neque ac sit velit velit non. Tellus nibh tortor aliquam sollicitudin urna a vulputate. Nunc nunc volutpat tempor et sit faucibus non. Amet tortor vitae dictumst morbi augue volutpat orci non. Donec elit cursus non sit scelerisque. Sit amet senectus proin nulla adipiscing amet interdum in et. Sed nisl erat blandit donec malesuada lorem." },
        {id:2,author:"Park Jihoon",profile:'people-4.png',date:"2023-09-21",title:"Favorite AI toos for designers in 2023",blog_pic:'../updates/blog2.png',content:"Lorem ipsum dolor sit amet consectetur. Urna neque ac sit velit velit non. Tellus nibh tortor aliquam sollicitudin urna a vulputate. Nunc nunc volutpat tempor et sit faucibus non. Amet tortor vitae dictumst morbi augue volutpat orci non. Donec elit cursus non sit scelerisque. Sit amet senectus proin nulla adipiscing amet interdum in et. Sed nisl erat blandit donec malesuada lorem." },
        {id:3,author:"Kim Taehyung",profile:'people-5.png',date:"2023-09-02",title:"Favorite AI toos for designers in 2023",blog_pic:'../updates/blog3.png',content:"Lorem ipsum dolor sit amet consectetur. Urna neque ac sit velit velit non. Tellus nibh tortor aliquam sollicitudin urna a vulputate. Nunc nunc volutpat tempor et sit faucibus non. Amet tortor vitae dictumst morbi augue volutpat orci non. Donec elit cursus non sit scelerisque. Sit amet senectus proin nulla adipiscing amet interdum in et. Sed nisl erat blandit donec malesuada lorem." },
        {id:4,author:"Jeon Jungkook",profile:'people-6.png',date:"2023-09-23",title:"Favorite AI toos for designers in 2023",blog_pic:'../updates/blog1.png',content:"Lorem ipsum dolor sit amet consectetur. Urna neque ac sit velit velit non. Tellus nibh tortor aliquam sollicitudin urna a vulputate. Nunc nunc volutpat tempor et sit faucibus non. Amet tortor vitae dictumst morbi augue volutpat orci non. Donec elit cursus non sit scelerisque. Sit amet senectus proin nulla adipiscing amet interdum in et. Sed nisl erat blandit donec malesuada lorem." },
        {id:5,author:"Sopheak Khoeurn",profile:'people-7.png',date:"2023-05-23",title:"Favorite AI toos for designers in 2023",blog_pic:'../updates/blog1.png',content:"Lorem ipsum dolor sit amet consectetur. Urna neque ac sit velit velit non. Tellus nibh tortor aliquam sollicitudin urna a vulputate. Nunc nunc volutpat tempor et sit faucibus non. Amet tortor vitae dictumst morbi augue volutpat orci non. Donec elit cursus non sit scelerisque. Sit amet senectus proin nulla adipiscing amet interdum in et. Sed nisl erat blandit donec malesuada lorem." },

    ]
    const [selectedBlog, setSelectedBlog] = useState(null);
    const [updateBlogOpen, setUpdateBlogOpen] = React.useState(false);
    const handleOpenUpdateBlog = (blog) => {
        setSelectedBlog(blog)
        setUpdateBlogOpen(true);
      };
    const handleCloseUpdateBlog =()=>{
        setSelectedBlog(null)
        setUpdateBlogOpen(false);
    }
    const [blogList,setBlogList]=useState([]);
    const deleteBlog = async (blogId) =>{
        
            console.log(blogId)
            try{
                const response = await fetch('/api/updates/deleteBlog', {
                    method:'DELETE',
                    headers:{'Content-Type':'application/json'},
                    body:JSON.stringify({
                        blogId:blogId
                    })
                })
                const message = await response.json()
                console.log(message)
                
               
                if (response.status){
                    console.log("Add successfully")
                }else{
                    // setErrorMessage(message['message'])
                    // setNullWarning(true)
                    console.log("fail to add")
                }
            } catch(error){
                // setErrorMessage(error)
                // setNullWarning(true)
                console.log(error.message)
            }
        }
    
    useEffect(()=>{
        const fetchData= async()=>{
            try{
                const response = await fetch('/api/updates/getAllBlog')
                const result = await response.json();
                setBlogList(result['message'])
            }catch(error){
                console.log(error)
            }
        };
        fetchData()
    },[])
   console.log(blogList)
    return (
        <div id="Body" className="space-y-2 p-3">
                {
                    reviewList.map((review)=>(
                            <div className="flex-cols p-4 rounded-lg bg-base space-y-4" key={review.id}>
                                <div className="lg:grid lg:grid-cols-3 md:grid md:grid-cols-3 p-5 ">
                                    <div className="lg:col-span-2 md:col-span-2   content-center">
                                        <div className="flex space-x-1 text-body-sm text-basedark  ">
                                            <div className="display-flex justify-center"> <img src={"../updates/"+review.profile} className="rounded-full w-14 h-14 "></img></div>
                                            <div className="content-center">
                                            <div className="lg:text-body-lg">{review.author}</div>
                                            <div className="lg:text-body-md">{review.date}</div>
                                        </div>
                                    </div>
                                    <div className="text-display-md font-bold">
                                        {review.title}
                                    </div>
                                    <div className="lg:text-body-md md:text-body-md sm:text-body-sm xsm:text-body-sm">
                                        {review.content}
                                    </div>
                        

                                    </div>
                                    <div className="lg:ml-[55%] mt-[15%]" >
                                    <img src={review.imageRef} className="w-[100%]"></img>
                                </div>
                   
                            </div>
                            <div className="grid grid-cols-3 lg:space-x-[70%] sm:space-x-[50%] xsm:space-x-[25%]" >
                                <div className="col-span-2"> <button className="rounded-full bg-divider hover:bg-divider_hover text-center p-2" >Design</button></div>
                                    <div className="flex mr-8  space-x-2">
                                        <IconButton >
                                            <BookmarkAddOutlined></BookmarkAddOutlined>
                                        </IconButton>
                                        <IconButton onClick={()=>handleOpenUpdateBlog(review)} >
                                            <ModeEditOutlineOutlined></ModeEditOutlineOutlined>
                                        </IconButton>
                                       
                                        <IconButton onClick={()=>deleteBlog(review.blogId)} aria-label="delete">
                                            <DeleteOutlineOutlined></DeleteOutlineOutlined>
                                        </IconButton>
                                    </div>
                                    {updateBlogOpen && (<UpdateBlog oldBlog={selectedBlog} open={updateBlogOpen} handleAddBlogClose={handleCloseUpdateBlog}></UpdateBlog>)}
                                </div>
                            </div>
                 

           
                     

                        
                    ))
                }
             </div>
         

    )
}
export default UpdateBody;