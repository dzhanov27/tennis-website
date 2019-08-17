import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBSkLrg5RS9UNvn75XGkq65skiy-K5krEI",
  authDomain: "tennis-federation-website.firebaseapp.com",
  databaseURL: "https://tennis-federation-website.firebaseio.com",
  projectId: "tennis-federation-website",
  storageBucket: "",
  messagingSenderId: "329287307693",
  appId: "1:329287307693:web:12406f04354410c1"
};
firebase.initializeApp(firebaseConfig);

export default firebase;