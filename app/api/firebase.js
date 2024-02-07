import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import {
  doc,
  getDoc,
  getFirestore,
  setDoc,
  updateDoc,
  getDocs,
  query,
  where,
  collection,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.messagingSenderId,
};

// export default storage;

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
  if (!id) throw new Error("id is null!");
  try {
    const dataRef = await getDoc(doc(firestore, "softwares", `${id}`));
    return dataRef.data();
  } catch (e) {
    throw new Error("Something wrong when getting document!");
  }
}

export async function getReivews(id) {
  try {
    const q = query(
      collection(firestore, "reviews"),
      where("soft_id", "==", id)
    );
    const querySnapshot = await getDocs(q);
    let data = [];
    querySnapshot.forEach((doc) => {
      data.push(doc.data());
    });
    return data;
  } catch (e) {
    console.log(e);
    throw new Error("Something wrong when getting document!");
  }
}

// for updating demo data
export async function populate() {
  // const software_demo = [
  //   {
  //     function: {
  //       file_sharing: {
  //         rating: 3.5,
  //         quantity: 20,
  //       },
  //       doc_colab: {
  //         rating: 3.5,
  //         quantity: 20,
  //       },
  //       search: {},
  //       messaging: {},
  //       task_manage: {
  //         rating: 3.5,
  //         quantity: 20,
  //       },
  //     },
  //     rating: {
  //       satisfaction: {
  //         rating: 3.5,
  //         quantity: 20,
  //       },
  //       ease_use: {
  //         rating: 3.5,
  //         quantity: 20,
  //       },
  //       support_quality: {},
  //       price: {},
  //       ease_implement: {
  //         rating: 3.5,
  //         quantity: 20,
  //       },
  //     },
  //     pricing: {
  //       free: {
  //         value: true,
  //       },
  //       free_trial: {
  //         value: false,
  //       },
  //       paid: {
  //         value: true,
  //       },
  //     },
  //     reviews: {
  //       like_recommend: {
  //         review: "1",
  //       },
  //     },
  //   },
  //   {
  //     function: {
  //       file_sharing: {},
  //       doc_colab: {
  //         rating: 3.5,
  //         quantity: 20,
  //       },
  //       search: {
  //         rating: 3.5,
  //         quantity: 20,
  //       },
  //       messaging: {},
  //       task_manage: {
  //         rating: 3.5,
  //         quantity: 20,
  //       },
  //     },
  //     rating: {
  //       satisfaction: {},
  //       ease_use: {
  //         rating: 3.5,
  //         quantity: 20,
  //       },
  //       support_quality: {
  //         rating: 3.5,
  //         quantity: 20,
  //       },
  //       price: {},
  //       ease_implement: {
  //         rating: 3.5,
  //         quantity: 20,
  //       },
  //     },
  //     pricing: {
  //       free: {
  //         value: false,
  //       },
  //       free_trial: {
  //         value: true,
  //       },
  //       paid: {},
  //     },
  //     reviews: {
  //       like_recommend: {
  //         review: "0",
  //       },
  //     },
  //   },
  //   {
  //     function: {
  //       file_sharing: {
  //         rating: 3.5,
  //         quantity: 20,
  //       },
  //       doc_colab: {},
  //       search: {
  //         rating: 3.5,
  //         quantity: 20,
  //       },
  //       messaging: {
  //         rating: 3.5,
  //         quantity: 20,
  //       },
  //       task_manage: {
  //         rating: 3.5,
  //         quantity: 20,
  //       },
  //     },
  //     rating: {
  //       satisfaction: {
  //         rating: 3.5,
  //         quantity: 20,
  //       },
  //       ease_use: {},
  //       support_quality: {
  //         rating: 3.5,
  //         quantity: 20,
  //       },
  //       price: {
  //         rating: 3.5,
  //         quantity: 20,
  //       },
  //       ease_implement: {
  //         rating: 3.5,
  //         quantity: 20,
  //       },
  //     },
  //     pricing: {
  //       free: {
  //         value: false,
  //       },
  //       free_trial: {
  //         value: true,
  //       },
  //       paid: {
  //         value: false,
  //       },
  //     },
  //     reviews: {
  //       like_recommend: {
  //         review: "2",
  //       },
  //     },
  //   },
  //   {
  //     function: {
  //       file_sharing: {
  //         rating: 3.5,
  //         quantity: 20,
  //       },
  //       doc_colab: {
  //         rating: 3.5,
  //         quantity: 20,
  //       },
  //       search: {
  //         rating: 3.5,
  //         quantity: 20,
  //       },
  //       messaging: {
  //         rating: 3.5,
  //         quantity: 20,
  //       },
  //       task_manage: {},
  //     },
  //     rating: {
  //       satisfaction: {
  //         rating: 3.5,
  //         quantity: 20,
  //       },
  //       ease_use: {
  //         rating: 3.5,
  //         quantity: 20,
  //       },
  //       support_quality: {
  //         rating: 3.5,
  //         quantity: 20,
  //       },
  //       price: {
  //         rating: 3.5,
  //         quantity: 20,
  //       },
  //       ease_implement: {},
  //     },
  //     pricing: {
  //       free: {},
  //       free_trial: {
  //         value: false,
  //       },
  //       paid: {
  //         value: true,
  //       },
  //     },
  //     reviews: {
  //       like_recommend: {
  //         review: "0",
  //       },
  //     },
  //   },
  // ];
  const software_demo = [
    {
      icon: "19",
      id: "1",
      reviews: 0,
      features: { pricing: true, reviews: { like_recommend: { review: "0" } } },
      name: "Copy.ai",
    },
    {
      reviews: 0,
      features: { pricing: true, reviews: { like_recommend: { review: "1" } } },
      name: "AI Software",
      icon: "image 2022",
      id: "10",
    },
    {
      icon: "9",
      reviews: 0,
      features: { pricing: true, reviews: { like_recommend: { review: "2" } } },
      name: "MidJourney",
      id: "11",
    },
    {
      reviews: 0,
      features: { pricing: true, reviews: { like_recommend: { review: "0" } } },
      name: "ZimmWriter",
      id: "12",
      icon: "16",
    },
    {
      id: "13",
      icon: "14",
      reviews: 0,
      features: { pricing: true, reviews: { like_recommend: { review: "1" } } },
      name: "Weverse",
    },
    {
      icon: "20",
      id: "14",
      reviews: 0,
      features: { pricing: true, reviews: { like_recommend: { review: "2" } } },
      name: "Jasper",
    },
    {
      reviews: 0,
      features: { pricing: true, reviews: { like_recommend: { review: "0" } } },
      name: "AutoBlog",
      id: "2",
      icon: "21",
    },
    {
      id: "3",
      reviews: 0,
      features: { pricing: true, reviews: { like_recommend: { review: "1" } } },
      name: "Dropbox",
      icon: "dropbox",
    },
    {
      reviews: 0,
      features: { pricing: true, reviews: { like_recommend: { review: "2" } } },
      name: "ChatGPT",
      icon: "7",
      id: "4",
    },
    {
      id: "5",
      icon: "4",
      reviews: 0,
      features: { pricing: true, reviews: { like_recommend: { review: "0" } } },
      name: "Google Doc",
    },
    {
      id: "6",
      reviews: 0,
      features: { pricing: true, reviews: { like_recommend: { review: "1" } } },
      name: "BingAI",
      icon: "5",
    },
    {
      id: "7",
      reviews: 0,
      features: { pricing: true, reviews: { like_recommend: { review: "2" } } },
      name: "Adobe Illustrator",
      icon: "10",
    },
    {
      id: "8",
      icon: "28",
      reviews: 0,
      features: { pricing: true, reviews: { like_recommend: { review: "0" } } },
      name: "Trello",
    },
    {
      icon: "17",
      id: "9",
      reviews: 0,
      features: { pricing: true, reviews: { like_recommend: { review: "1" } } },
      name: "Grammarly",
    },
  ];

  // for (let i = 1; i < 15; i++) {
  //   const data = await getSoftware(i);
  //   await updateDoc(doc(firestore, "softwares", `${i}`), {
  //     name: `${data.name}`,
  //     icon: `${data.icon}`,
  //     features: software_demo[i % 4],
  //   });
  // }

  for (let i = 1; i < 15; i++) {
    await setDoc(
      doc(firestore, "softwares", software_demo[i - 1].id),
      software_demo[i - 1]
    );
  }
}
