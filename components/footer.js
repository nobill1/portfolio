import Logo from "../components/logo";

export default function Footer() {
  return (
    <>
      <div className="bg-primary">
        <div className="container mx-auto flex flex-col px-4 sm:px-0 pt-8 sm:flex-row sm:justify-between lg:px-6">
          <div className="flex flex-col text-white sm:w-3/6">
            <Logo className="h-10 w-10" />
            <h3 className="text-lg font-body mt-2">Nguimeya Bill-gates</h3>
            <p>Web Developer</p>
            <p>bnguimeya007@gmail.com</p>
          </div>
          <div className="flex flex-col mt-9 text-white sm:text-right sm:mt-0 sm:max-w-xs">
            <h2 className="text-hd2">Let&apos;s Talk!</h2>
            <p>
              I am always open to discuss your project, improve your online
              presence or help with your UX/UI design challenges
            </p>
          </div>
        </div>
        <div className="container mx-auto lg:px-6">
          <hr className="border border-white w-full mt-8" />
          <p className="text-center text-white py-4">
            &copy; Made by Nguimeya Bill-gates with{" "}
            <span className="text-secondary">&#10084;</span>
          </p>
        </div>
      </div>
    </>
  );
}
