'use strict';
import { db ,storage} from '../../../../firebase'
import { NextResponse,NextRequest } from 'next/server'

export  async function PUT(request,response){
        const data = await request.formData();
        const title =data.get('title');
        const imageFile = data.get('image');
        const publishedAt = data.get('publishedAt');
        const tags = data.get('tags').split(',');
        const content = data.get('content');
        const blogId = data.get('blogId')
        const my_blog = await db.collection('blogs').
        where('blogId','==',parseInt(blogId)).
        get();
        console.log(blogId)
        try{
           if (my_blog.size !== 0 && typeof imageFile !== 'string'){
               const imageData = await imageFile.arrayBuffer();
               const path = `blogs/${userID}/images/${imageFile.name}`;
               const storageRef = storage.file(path)
               console.log(imageData)
               const buffer = new Uint8Array(imageData)
               console.log(buffer)
               const isUpload = await storageRef.save(buffer,{contentType:imageFile.type})
               const imageUrl = await storageRef.getSignedUrl({
                action:'read',
                expires:'03-09-2090'
               })
               const res = await my_blog.forEach(async (doc)=>{
                db.collection("blogs").doc(doc.id).update(
                    {
                        title:title,
                  content:content,
                  tags:tags,
                  imageRef:imageUrl,
                  publishedAt:publishedAt,
                  updatedAt:new Date()
                    }
                )
               })
              
                  return NextResponse.json({message:"Blog is update successfully"},{status:200})
               
           } else if(my_blog.size !== 0 && typeof imageFile === 'string'){
            const res = await my_blog.forEach(async (doc)=>{
                db.collection("blogs").doc(doc.id).update(
                    {
                  
                        title:title,
                        content:content,
                        tags:tags,
                        publishedAt:publishedAt,
                        updatedAt:new Date()
                    }
                )
               })
            
            
                return NextResponse.json({message:"Blog is update successfully"},{status:200})
             

           }
           else{
         
            return NextResponse.json({message:"Blog doesn't exist"},{status:400})
           }

        }catch(error){
            return  NextResponse.json({message:error},{status:400})
        }
};