'use strict';
import { db ,storage} from '../../../../firebase'
import { NextResponse,NextRequest } from 'next/server'
import {doc,deleteDoc} from "firebase/firestore";
export const config ={
    api:{
        bodyParser:false
    },
};

export  async function DELETE(request,response){
        const body = await request.json()
        const blogId = await body["blogId"]
        const my_blog = await db.collection('blogs').
                                         where('blogId','==',parseInt(blogId)).
                                         get();
        try{
           if (my_blog.size != 0){
           const res = await my_blog.forEach(async (doc)=>{
            db.collection("blogs").doc(doc.id).delete()
           })
 
          
            return NextResponse.json({message:"Blog is addes successfully"},{status:200})
             
           } else{
         
            return NextResponse.json({message:"Blog doesn't exist !"},{status:400})
           }

        }catch(error){
            return  NextResponse.json({message:error},{status:400})
        }
};