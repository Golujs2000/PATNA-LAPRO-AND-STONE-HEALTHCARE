import { initializeApp } from 'firebase/app';
import { getStorage, ref, listAll } from 'firebase/storage';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import fs from 'fs';
import path from 'path';

// Parse .env file manually
const envPath = path.resolve('.env');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  envContent.split('\n').forEach(line => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) return;
    const parts = trimmed.split('=');
    if (parts.length >= 2) {
      const key = parts[0].trim();
      const val = parts.slice(1).join('=').trim().replace(/^['"]|['"]$/g, '');
      process.env[key] = val;
    }
  });
}

const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID,
};

console.log("Firebase config loaded. Storage bucket:", firebaseConfig.storageBucket);

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);

async function checkFolder(folderPath) {
  console.log(`Checking storage folder: "${folderPath}"...`);
  try {
    const listRef = ref(storage, folderPath);
    const res = await listAll(listRef);
    console.log(`- Found ${res.prefixes.length} subfolders:`, res.prefixes.map(p => p.name));
    console.log(`- Found ${res.items.length} items:`, res.items.slice(0, 5).map(i => i.name), res.items.length > 5 ? `...and ${res.items.length - 5} more` : '');
  } catch (err) {
    console.error(`Error listing folder "${folderPath}":`, err.message);
  }
}

async function checkFirestore() {
  console.log("Checking Firestore collections...");
  try {
    const foldersSnap = await getDocs(collection(db, 'galleryFolders'));
    const folders = foldersSnap.docs.map(d => ({ id: d.id, ...d.data() }));
    console.log("- Gallery Folders:", folders);
    
    const gallerySnap = await getDocs(collection(db, 'gallery'));
    const galleryItems = gallerySnap.docs.map(d => ({ id: d.id, ...d.data() }));
    console.log(`- Total gallery items: ${galleryItems.length}`);
    console.log("- Sample gallery items:", galleryItems.slice(0, 5));
  } catch (err) {
    console.error("Error querying Firestore:", err.message);
  }
}

async function run() {
  await checkFolder('awards');
  await checkFolder('gallery');
  await checkFirestore();
}

run();
