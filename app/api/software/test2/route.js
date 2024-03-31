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
  where,
  deleteDoc,
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
} from "firebase/auth";

export async function POST(req) {
  try {
    const auth = getAuth(firebase_app);
    const firestore = getFirestore(firebase_app);
    const request = await req.json();
    let verified = false;
    const q = query(
      collection(firestore, "verifyemail"),
      where("email", "==", request.email)
    );
    const querysnapshot = await getDocs(q);
    let user = null;
    for (let doc of querysnapshot.docs) {
      user = doc;
    }

    try {
      switch (request.mode) {
        case "verifyEmail":
          if (user != null) {
            verified = await handleVerifyEmail(
              auth,
              request.actionCode,
              user.ref
            );
          }
          break;
        // Error: invalid mode.
      }
    } catch (e) {
      return NextResponse.json({ data: "" }, { status: 401 });
    }

    if (verified) {
      return NextResponse.json({ data: "" }, { status: 200 });
    } else {
      return NextResponse.json({ data: "" }, { status: 402 });
    }
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { message: "something wrong on the server side!" },
      { status: 500 }
    );
  }
}

function handleResetPassword(auth, actionCode) {
  // Localize the UI to the selected language as determined by the lang
  // parameter.

  // Verify the password reset code is valid.
  verifyPasswordResetCode(auth, actionCode)
    .then((email) => {
      const accountEmail = email;

      // TODO: Show the reset screen with the user's email and ask the user for
      // the new password.
      const newPassword = "...";

      // Save the new password.
      confirmPasswordReset(auth, actionCode, newPassword)
        .then((resp) => {
          // Password reset has been confirmed and new password updated.
          // TODO: Display a link back to the app, or sign-in the user directly
          // if the page belongs to the same domain as the app:
          // auth.signInWithEmailAndPassword(accountEmail, newPassword);
          // TODO: If a continue URL is available, display a button which on
          // click redirects the user back to the app via continueUrl with
          // additional state determined from that URL's parameters.
        })
        .catch((error) => {
          // Error occurred during confirmation. The code might have expired or the
          // password is too weak.
        });
    })
    .catch((error) => {
      // Invalid or expired action code. Ask user to try to reset the password
      // again.
    });
}

async function handleVerifyEmail(auth, actionCode, useref) {
  try {
    const resp = await applyActionCode(auth, actionCode);
    const temp = await deleteDoc(useref);
    console.log("Successfully Verify email!");
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}
