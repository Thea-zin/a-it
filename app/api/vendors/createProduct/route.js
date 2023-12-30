// import { db } from '../../../../firebase'
// export  async function POST(request,reponse){
//         const body = await request.json()
//         console.log(body)
//         try{
          
//            const res = await db.collection('requestProducts').add(body)
//            if (res){
//             return new Response({message:"Add successfully",status:200})
//            }else{
//             return new Response({message:"Fail to create product",status:400})
//            }
//         }catch(error){
//             return new Response({message:"Fail to create product",status:400})
//         }
// }
// // export default function handler(req,res){
// //     if (req.method === 'POST'){
// //         console.log(req.body)
// //     }
// // }