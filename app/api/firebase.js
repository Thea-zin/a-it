import { initializeApp } from "firebase/app";
import { doc, getDoc, getFirestore, setDoc, updateDoc } from "firebase/firestore";
import { getDownloadURL, getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.messagingSenderId,
};

const firebase_app = initializeApp(firebaseConfig);
const storage = getStorage(firebase_app);
const firestore = getFirestore(firebase_app);
export default firebase_app;

export async function getIconURL(name) {
  const imgref = ref(storage, `icons/${name}`);
  const url = await getDownloadURL(imgref);
  return url;
}

export async function getSoftware(id) {
  const dataRef = await getDoc(doc(firestore, "softwares", `${id}`));
  return dataRef.data();
}

// for updating demo data
export async function populate() {
  const software_demo = [
    {
      function: {
        file_sharing: {
          rating: 3.5,
          quantity: 20,
        },
        doc_colab: {
          rating: 3.5,
          quantity: 20,
        },
        search: {},
        messaging: {},
        task_manage: {
          rating: 3.5,
          quantity: 20,
        },
      },
      rating: {
        satisfaction: {
          rating: 3.5,
          quantity: 20,
        },
        ease_use: {
          rating: 3.5,
          quantity: 20,
        },
        support_quality: {},
        price: {},
        ease_implement: {
          rating: 3.5,
          quantity: 20,
        },
      },
      pricing: {
        free: {
          value: true,
        },
        free_trial: {
          value: false,
        },
        paid: {
          value: true,
        },
      },
      reviews: {
        like_recommend: {
          review: "1",
        },
      },
    },
    {
      function: {
        file_sharing: {},
        doc_colab: {
          rating: 3.5,
          quantity: 20,
        },
        search: {
          rating: 3.5,
          quantity: 20,
        },
        messaging: {},
        task_manage: {
          rating: 3.5,
          quantity: 20,
        },
      },
      rating: {
        satisfaction: {},
        ease_use: {
          rating: 3.5,
          quantity: 20,
        },
        support_quality: {
          rating: 3.5,
          quantity: 20,
        },
        price: {},
        ease_implement: {
          rating: 3.5,
          quantity: 20,
        },
      },
      pricing: {
        free: {
          value: false,
        },
        free_trial: {
          value: true,
        },
        paid: {},
      },
      reviews: {
        like_recommend: {
          review: "0",
        },
      },
    },
    {
      function: {
        file_sharing: {
          rating: 3.5,
          quantity: 20,
        },
        doc_colab: {},
        search: {
          rating: 3.5,
          quantity: 20,
        },
        messaging: {
          rating: 3.5,
          quantity: 20,
        },
        task_manage: {
          rating: 3.5,
          quantity: 20,
        },
      },
      rating: {
        satisfaction: {
          rating: 3.5,
          quantity: 20,
        },
        ease_use: {},
        support_quality: {
          rating: 3.5,
          quantity: 20,
        },
        price: {
          rating: 3.5,
          quantity: 20,
        },
        ease_implement: {
          rating: 3.5,
          quantity: 20,
        },
      },
      pricing: {
        free: {
          value: false,
        },
        free_trial: {
          value: true,
        },
        paid: {
          value: false,
        },
      },
      reviews: {
        like_recommend: {
          review: "2",
        },
      },
    },
    {
      function: {
        file_sharing: {
          rating: 3.5,
          quantity: 20,
        },
        doc_colab: {
          rating: 3.5,
          quantity: 20,
        },
        search: {
          rating: 3.5,
          quantity: 20,
        },
        messaging: {
          rating: 3.5,
          quantity: 20,
        },
        task_manage: {},
      },
      rating: {
        satisfaction: {
          rating: 3.5,
          quantity: 20,
        },
        ease_use: {
          rating: 3.5,
          quantity: 20,
        },
        support_quality: {
          rating: 3.5,
          quantity: 20,
        },
        price: {
          rating: 3.5,
          quantity: 20,
        },
        ease_implement: {},
      },
      pricing: {
        free: {},
        free_trial: {
          value: false,
        },
        paid: {
          value: true,
        },
      },
      reviews: {
        like_recommend: {
          review: "0",
        },
      },
    },
  ];
  for (let i = 1; i < 15; i++) {
    const data = await getSoftware(i);
    await updateDoc(doc(firestore, "softwares", `${i}`), {
      name: `${data.name}`,
      icon: `${data.icon}`,
      features: software_demo[i%4]
    });
  }
}
