const { initializeApp, applicationDefault, cert} = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');
const admin = require('firebase-admin')
const serviceAccount = require('./serviceAccountKey.json');

if (admin.apps.length==0){
  initializeApp({
    credential: cert(serviceAccount)
  });
}

export const db = getFirestore();

