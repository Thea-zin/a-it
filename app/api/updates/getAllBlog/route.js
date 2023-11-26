import { NextResponse,NextRequest } from 'next/server'
import { db ,storage} from '../../../../firebase'
export  async function GET(request,response){
    const blogs_list=[]
    const my_blog = await db.collection('blogs').get()
    if (my_blog.size!==0){
        my_blog.forEach(doc=>{
                blogs_list.push(doc.data())
        })
        return  NextResponse.json({message:blogs_list},{status:200})
    }else{
        return NextResponse.json({message:[]},{status:200})
    }
}