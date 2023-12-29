'use strict';
import app from '../../firebase'
import { NextResponse,NextRequest } from 'next/server'
import {doc,deleteDoc,getDocs,getDoc,query,where,collection,getFirestore} from "firebase/firestore";
export const config ={
    api:{
        bodyParser:false
    },
};

export  async function DELETE(request,response){
        const db = getFirestore(app); 
        const body = await request.json()
        const blogId = await body["blogId"]
        // const my_blog = await db.collection('blogs').
        //                                  where('blogId','==',parseInt(blogId)).
        //                                  get();
        //Find the available blog to ensure non-duplication
        
        // Assuming 'db' is your Firestore database instance and 'blogId' is defined
        const q_blog = query(collection(db, "blogs"), where('blogId', '==', parseInt(blogId)));
       const my_blog = await getDocs(q_blog);
        try{
           if (my_blog.size != 0){
           const res = await my_blog.forEach(async (mydoc)=>{
               await deleteDoc(doc(db,"blogs",mydoc.id))
           })
 
            return NextResponse.json({message:"Blog is deleted successfully"},{status:200})
             
           } else{
         
            return NextResponse.json({message:"Blog doesn't exist !"},{status:400})
           }

        }catch(error){
            return  NextResponse.json({message:error},{status:400})
        }
};