import { NextResponse } from "next/server";
import firebase_app from "../../firebase";
import {
  getFirestore,
  getDoc,
  doc,
  collection,
  query,
  orderBy,
  startAt,
  endAt,
  getDocs,
  limit,
  startAfter,
  getCountFromServer,
  setDoc,
  addDoc,
  connectFirestoreEmulator,
} from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  verifyPasswordResetCode,
  confirmPasswordReset,
  checkActionCode,
  applyActionCode,
  sendPasswordResetEmail,
  sendEmailVerification,
  updateProfile,
  connectAuthEmulator,
} from "firebase/auth";
import {
  ApiClient,
  BodyPart,
  EmailMessageData,
  EmailRecipient,
  EmailsApi,
} from "@elasticemail/elasticemail-client";

// export async function POST(req) {
//   try {
//     const firestore = getFirestore(firebase_app);
//     const request = await req.json();
//     // let q = query(
//     //   collection(firestore, "softwares"),
//     //   orderBy("nci"),
//     // );

//     // const documentSnapshots = await getDocs(q);

//     let softwares = [];
//     // for (let doc of documentSnapshots.docs) {
//     //   let temp = doc.data();
//     //   softwares.push(temp.nci);
//     // }

//     const docRef = doc(firestore, "categories", "categories");
//     const docSnap = await getDoc(docRef);

//     let categories = docSnap.data();
//     categories.categories.sort()

//     const temp = await setDoc(docRef, categories)

//     return NextResponse.json({ softwares: softwares }, { status: 200 });
//   } catch (e) {
//     console.log(e);
//     return NextResponse.json(
//       { message: "something wrong on the server side!" },
//       { status: 500 }
//     );
//   }
// }

// export async function POST(req) {
//   try {
//     let defaultClient = ApiClient.instance;

//     let apikey = defaultClient.authentications["apikey"];
//     apikey.apiKey =
//       "9221C78870B21BC5DE9FCE0FB7CE9CF42C6D354F55B680A4845632EEF271C7594CE35265398D0EF0D6D83BAF8A7E5E74";

//     let api = new EmailsApi();

//     const emailData = {
//       Recipients: {
//         To: ["serey.vathg@gmail.com"],
//       },
//       Content: {
//         Body: [
//           {
//             ContentType: "HTML",
//             Charset: "utf-8",
//             Content: "Mail content.",
//           },
//           {
//             ContentType: "PlainText",
//             Charset: "utf-8",
//             Content: "Mail content.",
//           },
//         ],
//         From: "ksvdevtester@gmail.com",
//         Subject: "Example transactional email",
//       },
//     };

//     // let email = EmailMessageData.constructFromObject({
//     //   Recipients: [new EmailRecipient("MeowWow ")],
//     //   Content: {
//     //     Body: [
//     //       BodyPart.constructFromObject({
//     //         ContentType: "HTML",
//     //         Content: "My test email content ;)",
//     //       }),
//     //     ],
//     //     Subject: "JS EE lib test",
//     //     From: "MyEmail ",
//     //   },
//     // });

//     var callback = function (error, data, response) {
//       if (error) {
//         console.error(error);
//       } else {
//         console.log("API called successfully.");
//       }
//     };
//     api.emailsTransactionalPost(emailData, callback);

//     return NextResponse.json({ data: "" }, { status: 200 });
//   } catch (e) {
//     console.log(e);
//     return NextResponse.json(
//       { message: "something wrong on the server side!" },
//       { status: 500 }
//     );
//   }
// }

// const auth = getAuth();
// connectAuthEmulator(auth, "http://127.0.0.1:9099");
// const firestore = getFirestore();
// connectFirestoreEmulator(firestore, "127.0.0.1", 8080);

const auth = getAuth(firebase_app);
const firestore = getFirestore(firebase_app);

export async function POST(req) {
  try {
    const request = await req.json();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        request.email,
        request.password
      );
      const user = userCredential.user;
      const userProfile = {
        displayName: `${request.name}!បំបែក!${request.occupation}`,
      };
      const temp = await addDoc(collection(firestore, "verifyemail"), {
        email: request.email,
        uid: user.uid,
      });
      console.log("firestore data id", temp.id);

      await sendEmailVerification(user);
      await updateProfile(user, userProfile);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      return NextResponse.json({ data: "" }, { status: 405 });
    }

    return NextResponse.json({ data: "" }, { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { message: "something wrong on the server side!" },
      { status: 500 }
    );
  }
}
