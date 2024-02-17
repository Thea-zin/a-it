import {doc,deleteDoc,getDocs,getDoc,query,where,collection,getFirestore} from "firebase/firestore";
import firebase_app from "../../firebase";


export  async function POST(request,reponse){
    const db = getFirestore(firebase_app)
        const body = await request.json()
        console.log(body)
        try{
          
           //const res = await db.collection('requestProducts').add(body)
           const res = await addDoc(collection(db,'requestProducts'),body)
           if (res){
            return new Response({message:"Add successfully",status:200})
           }else{
            return new Response({message:"Fail to create product",status:400})
           }
        }catch(error){
            return new Response({message:"Fail to create product",status:400})
        }
}
// export default function handler(req,res){
//     if (req.method === 'POST'){
//         console.log(req.body)
//     }
// }
