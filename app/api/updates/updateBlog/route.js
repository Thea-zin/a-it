'use strict';
import firebase_app from '../../firebase'
import { NextResponse,NextRequest } from 'next/server'
import {doc,setDoc,getDocs,getDoc,query,where,collection,getFirestore,updateDoc} from "firebase/firestore";
import { getStorage, uploadBytes,ref,getDownloadURL,getSignedURL } from 'firebase/storage';
export  async function PUT(request,response){
        var imageUrl;
        const userID = "AIT00000" + Math.floor(Math.random() * 900000) 
        const db = getFirestore(firebase_app);
        const storage=getStorage(firebase_app);
        const data = await request.formData();
        const title =data.get('title');
        const imageFile = data.get('image');
        const publishedAt = data.get('publishedAt');
        const tags = data.get('tags').split(',');
        const content = data.get('content');
        const blogId = data.get('blogId')
        console.log(blogId)
        const q_blog = query(collection(db, "blogs"), where('blogId', '==', parseInt(blogId)));
        const my_blog = await getDocs(q_blog);
        console.log(imageFile)
        try{
           if (my_blog.size != 0 ){
             if (typeof imageFile!='string'){
                      //Adding Image
               const imageFile = data.get('image');
               const imageData = await imageFile.arrayBuffer();
               const path = `blogs/${userID}/images/${imageFile.name}`;
               const buffer = new Uint8Array(imageData)
               const storageRef= ref(storage,path)
               console.log(storageRef)
            //Upload image
              await uploadBytes(storageRef,buffer);
          
               
            //Get the download URL for adding inside the firestore document
               imageUrl = await getDownloadURL(storageRef);
               console.log(imageData)
             }else{
                imageUrl= imageFile;
             }
               const res = await my_blog.forEach(async (mydoc)=>{
                await setDoc(doc(db,"blogs",mydoc.id),
                {
                      blogId:parseInt(blogId),
                      title:title,
                      content:content,
                      tags:tags,
                      imageRef:imageUrl,
                      publishedAt:publishedAt,
                      updatedAt:new Date()
                        }
                )
               })}

        }catch(error){
            return  NextResponse.json({message:error.message},{status:400})
        }
};
