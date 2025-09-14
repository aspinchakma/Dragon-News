import { firebaseConfig } from "../firebase/firebase.init";

const SignIn = () => {
  const firebase = firebaseConfig;
  console.log(firebase);
  return (
    <div>
      <h2>This is Sign In</h2>
    </div>
  );
};

export default SignIn;
