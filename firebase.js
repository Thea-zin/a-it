const { initializeApp, applicationDefault, cert} = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');
const admin = require('firebase-admin')
// const serviceAccount = require('./serviceAccountKey.json');
const serviceAccount = JSON.parse(
  process.env.FIREBASE_SERVICE_ACCOUNT_KEY 
);
if (admin.apps.length==0){
  initializeApp({
    credential: cert(serviceAccount),
    storageBucket:process.env.FIREBASE_STORAGE_BUCKET
  });
}

const db = getFirestore();
const storage = admin.storage().bucket("gs://a-it-f5457.appspot.com");

module.exports={db,storage};

