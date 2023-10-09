function UpdateBody(){
    const reviewList = [
        {id:1,author:"Sopheak Khoeurn",profile:'people-1.png',blog_pic:'../updates/blog1.png',date:"2023-09-23",title:"Favorite AI toos for designers in 2023",pic:"",content:"Lorem ipsum dolor sit amet consectetur. Urna neque ac sit velit velit non. Tellus nibh tortor aliquam sollicitudin urna a vulputate. Nunc nunc volutpat tempor et sit faucibus non. Amet tortor vitae dictumst morbi augue volutpat orci non. Donec elit cursus non sit scelerisque. Sit amet senectus proin nulla adipiscing amet interdum in et. Sed nisl erat blandit donec malesuada lorem." },
        {id:2,author:"Park Jihoon",profile:'people-4.png',date:"2023-09-21",title:"Favorite AI toos for designers in 2023",blog_pic:'../updates/blog2.png',content:"Lorem ipsum dolor sit amet consectetur. Urna neque ac sit velit velit non. Tellus nibh tortor aliquam sollicitudin urna a vulputate. Nunc nunc volutpat tempor et sit faucibus non. Amet tortor vitae dictumst morbi augue volutpat orci non. Donec elit cursus non sit scelerisque. Sit amet senectus proin nulla adipiscing amet interdum in et. Sed nisl erat blandit donec malesuada lorem." },
        {id:3,author:"Kim Taehyung",profile:'people-5.png',date:"2023-09-02",title:"Favorite AI toos for designers in 2023",blog_pic:'../updates/blog3.png',content:"Lorem ipsum dolor sit amet consectetur. Urna neque ac sit velit velit non. Tellus nibh tortor aliquam sollicitudin urna a vulputate. Nunc nunc volutpat tempor et sit faucibus non. Amet tortor vitae dictumst morbi augue volutpat orci non. Donec elit cursus non sit scelerisque. Sit amet senectus proin nulla adipiscing amet interdum in et. Sed nisl erat blandit donec malesuada lorem." },
        {id:4,author:"Jeon Jungkook",profile:'people-6.png',date:"2023-09-23",title:"Favorite AI toos for designers in 2023",blog_pic:'../updates/blog1.png',content:"Lorem ipsum dolor sit amet consectetur. Urna neque ac sit velit velit non. Tellus nibh tortor aliquam sollicitudin urna a vulputate. Nunc nunc volutpat tempor et sit faucibus non. Amet tortor vitae dictumst morbi augue volutpat orci non. Donec elit cursus non sit scelerisque. Sit amet senectus proin nulla adipiscing amet interdum in et. Sed nisl erat blandit donec malesuada lorem." },
        {id:5,author:"Sopheak Khoeurn",profile:'people-7.png',date:"2023-05-23",title:"Favorite AI toos for designers in 2023",blog_pic:'../updates/blog1.png',content:"Lorem ipsum dolor sit amet consectetur. Urna neque ac sit velit velit non. Tellus nibh tortor aliquam sollicitudin urna a vulputate. Nunc nunc volutpat tempor et sit faucibus non. Amet tortor vitae dictumst morbi augue volutpat orci non. Donec elit cursus non sit scelerisque. Sit amet senectus proin nulla adipiscing amet interdum in et. Sed nisl erat blandit donec malesuada lorem." },

    ]
    return (
        <div className="space-y-2 p-3">
                {
                    reviewList.map((review)=>(
                            <div className="flex-cols p-4 rounded-lg bg-base space-y-4">
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
                                    <img src={review.blog_pic} className="w-[100%]"></img>
                                </div>
                   
                            </div>
                            <div className="grid grid-cols-3 lg:space-x-[70%] sm:space-x-[50%] xsm:space-x-[25%]" >
                                <div className="col-span-2"> <button className="rounded-full bg-divider hover:bg-darkbase text-center p-2" >Design</button></div>
                                    <div className="flex  space-x-3">
                                        <div className=" rounded-full w-10 h-10 text-center "><button><img src={"../updates/bookMark.png"}></img></button></div>
                                        <div className=" rounded-full w-10 h-10 text-center"><button><img src={"../updates/edit.png"}></img></button></div>
                                    </div>
        
                                </div>
                            </div>
                 

           
                     

                        
                    ))
                }
             </div>
         

    )
}
export default UpdateBody;