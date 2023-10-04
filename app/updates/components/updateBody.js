function UpdateBody(){
    const reviewList = [
        {author:"Sopheak Khoeurn",profile:'people-1.png',blog_pic:'blog1.png',date:"2023-09-23",title:"Favorite AI toos for designers in 2023",pic:"",content:"Lorem ipsum dolor sit amet consectetur. Urna neque ac sit velit velit non. Tellus nibh tortor aliquam sollicitudin urna a vulputate. Nunc nunc volutpat tempor et sit faucibus non. Amet tortor vitae dictumst morbi augue volutpat orci non. Donec elit cursus non sit scelerisque. Sit amet senectus proin nulla adipiscing amet interdum in et. Sed nisl erat blandit donec malesuada lorem." },
        {author:"Sopheak Khoeurn",date:"2023-09-23",title:"Favorite AI toos for designers in 2023",blog_pic:'blog2.png',content:"Lorem ipsum dolor sit amet consectetur. Urna neque ac sit velit velit non. Tellus nibh tortor aliquam sollicitudin urna a vulputate. Nunc nunc volutpat tempor et sit faucibus non. Amet tortor vitae dictumst morbi augue volutpat orci non. Donec elit cursus non sit scelerisque. Sit amet senectus proin nulla adipiscing amet interdum in et. Sed nisl erat blandit donec malesuada lorem." },
        {author:"Sopheak Khoeurn",date:"2023-09-23",title:"Favorite AI toos for designers in 2023",blog_pic:'blog3.png',content:"Lorem ipsum dolor sit amet consectetur. Urna neque ac sit velit velit non. Tellus nibh tortor aliquam sollicitudin urna a vulputate. Nunc nunc volutpat tempor et sit faucibus non. Amet tortor vitae dictumst morbi augue volutpat orci non. Donec elit cursus non sit scelerisque. Sit amet senectus proin nulla adipiscing amet interdum in et. Sed nisl erat blandit donec malesuada lorem." },
        {author:"Sopheak Khoeurn",date:"2023-09-23",title:"Favorite AI toos for designers in 2023",blog_pic:'blog1.png',content:"Lorem ipsum dolor sit amet consectetur. Urna neque ac sit velit velit non. Tellus nibh tortor aliquam sollicitudin urna a vulputate. Nunc nunc volutpat tempor et sit faucibus non. Amet tortor vitae dictumst morbi augue volutpat orci non. Donec elit cursus non sit scelerisque. Sit amet senectus proin nulla adipiscing amet interdum in et. Sed nisl erat blandit donec malesuada lorem." },
        {author:"Sopheak Khoeurn",date:"2023-09-23",title:"Favorite AI toos for designers in 2023",blog_pic:'blog1.png',content:"Lorem ipsum dolor sit amet consectetur. Urna neque ac sit velit velit non. Tellus nibh tortor aliquam sollicitudin urna a vulputate. Nunc nunc volutpat tempor et sit faucibus non. Amet tortor vitae dictumst morbi augue volutpat orci non. Donec elit cursus non sit scelerisque. Sit amet senectus proin nulla adipiscing amet interdum in et. Sed nisl erat blandit donec malesuada lorem." },

    ]
    return (
        <div className="space-y-2 p-3">
                {
                    reviewList.map((review)=>(
                            <div className="flex-cols p-4 rounded-lg bg-base space-y-4">
                                <div className="lg:grid lg:grid-cols-3 md:grid md:grid-cols-3 p-5 ">
                                    <div className="lg:col-span-2 md:col-span-2  content-center">
                                        <div className="flex space-x-1 text-body-sm text-basedark  ">
                                            <img src={review.profile} className="rounded-full w-10 h-10"></img>
                                            <div className="content-center">
                                            <div>{review.author}</div>
                                            <div>{review.date}</div>
                                            
                                        </div>
                                    </div>
                                    <div className="text-title-md font-bold">
                                        {review.title}
                                    </div>
                                    <div className="lg:text-body-md md:text-body-sm sm:text-body-sm xsm:text-body-sm">
                                        {review.content}
                                    </div>
                        

                                    </div>
                                    <div className="lg:w-[90%] sm:w-[60%] md:w-[60%]">
                                    <img src={review.blog_pic} className="lg:w-[90%] sm:w-[100%] md:w-[90%] xsm:w-[95%] "></img>
                                </div>
                   
                                </div>
                                <button>Design</button>

                            </div>
                     

                        
                    ))
                }
             </div>
         

    )
}
export default UpdateBody;