'use strict';
import { db ,storage} from '../../../../firebase'
import { NextResponse,NextRequest } from 'next/server'
export  async function POST(request,response){
        const data = await request.formData();
        const title =data.get('title');
        const imageFile = data.get('image');
        const publishedAt = data.get('publishedAt');
        const imageData = await imageFile.arrayBuffer();
        const userID = "AIT00000" + Math.floor(Math.random() * 900000) 
        const blogID = Math.floor(Math.random() * 10000)
        const tags = data.get('tags').split(',');
        const content = data.get('content');
        const my_blog = await db.collection('blogs').
                                         where('title','==',title).
                                         get();
        try{
           if (my_blog.size == 0){
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
               const res = await db.collection('blogs').add({
                  blogId:blogID,
                  authorId:userID,
                  title:title,
                  content:content,
                  tags:tags,
                  imageRef:imageUrl,
                  publishedAt:publishedAt
               })
               if (res ){
                  return NextResponse.json({message:"Blog is addes successfully"},{status:200})
               }else{
                 return NextResponse.json({message:"Fail to add blog"},{status:400})
               }
           } else{
         
            return NextResponse.json({message:"Blog is already exist"},{status:400})
           }

        }catch(error){
            return  NextResponse.json({message:error},{status:400})
        }
};
