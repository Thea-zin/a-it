// Import Firestore utilities

import { getDocs,collection,query,where, doc, getFirestore,limit } from 'firebase/firestore';
import firebase_app from '../firebase'; // Adjust the import path as needed
import { NextResponse,NextRequest } from 'next/server'
// API Route handler
export  async function GET(req, res) {
  const id = req.url.split("=").pop();
  const db = getFirestore(firebase_app);
  const colRef = collection(db, 'blogs');
  const q = query(colRef, where("blogId", "==",parseInt(id)));
  const querySnapshot = await getDocs(q);
  const blog=[]
  querySnapshot.forEach((doc) => {
    blog.push(doc.data())
  });
  console.log(blog)
  if (blog.length==1) {
    // Document found, return the document data as JSON
    return  NextResponse.json({message:blog},{status:200})
  } else {
    // Document not found, return a 404 response with a custom message
    return  NextResponse.json({message:"None"},{status:404})
  }
}
