import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { NextResponse,NextRequest } from 'next/server'
import app from '../../firebase'
export  async function GET(request,response){
    const db = getFirestore(app);
    const blogs_list=[]
    const my_blog = await getDocs(collection(db,'blogs'))
    if (my_blog.size!==0){
        my_blog.forEach(doc=>{
                blogs_list.push(doc.data())
        })
        return  NextResponse.json({message:blogs_list},{status:200})
    }else{
        return NextResponse.json({message:[]},{status:200})
    }
}