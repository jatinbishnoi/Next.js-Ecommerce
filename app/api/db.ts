import { MongoClient, Db } from 'mongodb';

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error('❌ MONGODB_URI is not defined in .env.local');
}

export async function connectToDb() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  try {
    console.log('🔌 Connecting to MongoDB...');
    const client = new MongoClient(uri!); // ✅ TypeScript happy
    await client.connect();

    const db = client.db('ecommerce-nextjs');
    cachedClient = client;
    cachedDb = db;

    console.log('✅ Connected to MongoDB');
    return { client, db };
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    throw error;
  }
}
