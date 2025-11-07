// IMPORTANT! This file should not be used in a production environment.
// It is a temporary mock server that will be replaced with a real implementation.
// It is used to mock the response of the widget configuration.

import { NextResponse } from 'next/server';
import { initializeApp, getApps } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { credential } from "firebase-admin";

// This is a temporary solution to get the widget configuration.
// In a real-world scenario, you would use a proper admin SDK initialization.
const serviceAccount = process.env.FIREBASE_SERVICE_ACCOUNT
  ? JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT)
  : undefined;

if (!getApps().length) {
  initializeApp({
    credential: serviceAccount ? credential.cert(serviceAccount) : undefined,
  });
}

const db = getFirestore();

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const widgetId = searchParams.get('id');

  if (!widgetId) {
    return NextResponse.json({ message: 'Widget ID is required' }, { status: 400 });
  }

  try {
    // This is not a secure way to fetch data.
    // In a real application, you would perform a query across all users' subcollections.
    // This requires a more complex data structure or a different approach for multi-tenant apps.
    // For this prototype, we'll iterate through users to find the widget. This is highly inefficient.
    const usersSnapshot = await db.collection('users').get();
    let widgetData = null;
    let found = false;

    for (const userDoc of usersSnapshot.docs) {
      const widgetRef = db.doc(`users/${userDoc.id}/chatWidgets/${widgetId}`);
      const widgetSnapshot = await widgetRef.get();
      if (widgetSnapshot.exists) {
        widgetData = widgetSnapshot.data();
        found = true;
        break;
      }
    }

    if (!found) {
      return NextResponse.json({ message: 'Widget not found' }, { status: 404 });
    }

    return NextResponse.json({ widget: widgetData });
  } catch (error) {
    console.error("Error fetching widget config:", error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
