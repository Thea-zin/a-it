'use strict';
import firebase_app from '../firebase'
import { NextResponse,NextRequest } from 'next/server'
import { getStorage, uploadBytes,ref,getDownloadURL,getSignedURL } from 'firebase/storage';
import { setDoc,getFirestore,doc,query,collection,getDocs,where, addDoc } from 'firebase/firestore';
export  async function POST(request,response){
    //Initialization 
        const db = getFirestore(firebase_app);
        const storage = getStorage(firebase_app);
    //Get all the request data
        const data = await request.formData();
        const title =data.get('title');
        const imageFile = data.get('image');
        const publishedAt = data.get('publishedAt');
        const imageData = await imageFile.arrayBuffer();
        const userID = "AIT00000" + Math.floor(Math.random() * 900000) 
        const blogID = Math.floor(Math.random() * 10000)
        const tags = data.get('tags').split(',');
        const content = data.get('content');
      //Find the available blog to ensure non-duplication
       const q_blog =query(collection(db, "BLOGS"), where('title','==',title));
       const my_blog = await getDocs(q_blog);
        try{
           if (my_blog.size == 0){
            //Adding Image
               const path = `blogs/${userID}/images/${imageFile.name}`;
               const buffer = new Uint8Array(imageData)
               const storageRef= ref(storage,path)
            //Upload image
               const isUpload = await uploadBytes(storageRef,buffer);
            //Get the download URL for adding inside the firestore document
               const imageUrl = await getDownloadURL(storageRef);
               console.log(imageUrl)
            //Add blog document 
               const res = await addDoc(collection(db,'blogs'),{
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
            return  NextResponse.json({message:error.message},{status:400})
        }
};
