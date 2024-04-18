"use client";
import { useUserAuth } from "./utils/auth-context";

const Page = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleLogin = async () => {
    await gitHubSignIn();
  };

  const handleLogout = async () => {
    await firebaseSignOut();
  };

  return (
    <div className=" flex flex-col justify-center items-center h-screen w-screen">
      <div className="flex flex-col justify-center items-center bg-slate-500 rounded-3xl w-6/12 h-52">
        {!user ? (
          <button
            onClick={handleLogin}
            className=" bg-blue-500 hover:bg-blue-600 duration-300 ease-in-out rounded-lg p-5"
          >
            Login with GitHub
          </button>
        ) : (
          <div className="flex flex-col justify-center items-center w-full h-full">
            <p className=" text-3xl font-bold">
              Welcome, {user.displayName} ({user.email})
            </p>
            <div className="flex flex-row justify-center items-center w-full h-full">
              <button onClick={handleLogout}>Logout</button>
              <a
                href="./week-10/Shopping-list"
                className=" ml-16  bg-blue-500 hover:bg-blue-600 duration-300 ease-in-out rounded-lg p-5 "
              >
                Shopping List
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
