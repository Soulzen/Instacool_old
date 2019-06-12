import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: 'AIzaSyDdCbKNmDk00k0f3DMxN_SOCEHUx9H8jhU',
	authDomain: 'instacool-6fc11.firebaseapp.com',
	databaseURL: 'https://instacool-6fc11.firebaseio.com',
	projectId: 'instacool-6fc11',
	storageBucket: 'instacool-6fc11.appspot.com',
	messagingSenderId: '617643411295',
	appId: '1:617643411295:web:2b5f575941bc75ac'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();
