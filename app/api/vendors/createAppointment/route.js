// import { db } from '../../../../firebase'
// import { NextResponse } from 'next/server'
// export  async function POST(request,reponse){
//         const body = await request.json()
//         const my_appointment = await db.collection('appointments').
//                                          where('email','==',body['email']).
//                                          where('date','==',body['date']).
//                                          where('companyName','==',body['companyName']).
//                                          get()
//         try{
//            if (my_appointment.size == 0){
//                const res = await db.collection('appointments').add(body)
//                if (res){
//                 //   return new Response({message:"Book successfully",status:200}).json()
//                 return  NextResponse.json({message:"Book successful"},{status:200})
//                }else{
//                  return new Response({message:"Booking failed",status:400})
//                }
//            } else{
         
//             return NextResponse.json({message:"Booking already exist ! Try another time"},{status:400})
//            }

//         }catch(error){
//             return new Response({message:"Booking failed",status:400})
//         }
// }