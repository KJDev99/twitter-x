import Image from "next/image";
import Button from "../ui/button";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";

export default function Auth() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center h-screen">
        <Image
          src={"/images/logo.svg"}
          alt="logo"
          width={450}
          height={450}
          className=" justify-self-center hidden md:block"
        />

        <div className="flex flex-col justify-center md:justify-between gap-6 h-full md:h-[70vh]">
          <div className="block md:hidden">
            <Image
              src={"/images/logo.svg"}
              alt="logo"
              width={100}
              height={100}
            />
          </div>
          <h1 className="text-6xl font-bold">Happening now</h1>
          <div className="w-full md:w-[60%]">
            <div className="text-bold text-3xl mb-4">Join today.</div>
            <div className="flex flex-col space-y-2">
              <Button
                fullWidth
                secondary
                label={
                  <div className="flex gap-2 items-center justify-center">
                    <FcGoogle />
                    Sign up with Google
                  </div>
                }
              />
              <Button
                fullWidth
                secondary
                label={
                  <div className="flex gap-2 items-center justify-center">
                    <AiFillGithub />
                    Sign up with Github
                  </div>
                }
              />
              <div className="flex items-center justify-center">
                <div className="h-px bg-gray-700 w-1/2"></div>
                <p className="mx-4">or</p>
                <div className="h-px bg-gray-700 w-1/2"></div>
              </div>
              <Button label={"Create account"} fullWidth />
              <div className="text-[10px] text-gray-400">
                By signing up, you agree to the{" "}
                <span className="text-sky-500">Terms of Servise</span> and
                <span className="text-sky-500">Privacy Policy</span>, including
                <span className="text-sky-500"> Cookie Use</span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[60%]">
            <h3 className="font-medium text-xl mb-4">
              Already have an account
            </h3>
            <Button label={"Create account"} fullWidth outline />
          </div>
        </div>
      </div>
    </>
  );
}
