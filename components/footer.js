import Logo from "../components/logo";

export default function Footer() {
  return (
    <>
      <div className="bg-primary dark:bg-red-900">
        <div className="container mx-auto flex flex-col px-4 pt-8 sm:flex-row sm:justify-between sm:px-0 lg:px-6">
          <div className="flex flex-col text-white sm:w-3/6">
            <Logo className="h-10 w-10" />
            <h3 className="mt-2 font-body text-lg">Nguimeya Bill-gates</h3>
            <p>Web Developer</p>
            <p>bnguimeya007@gmail.com</p>
          </div>
          <div className="mt-9 flex flex-col text-white sm:mt-0 sm:max-w-xs sm:text-right">
            <h2 className="text-hd2">Let&apos;s Talk!</h2>
            <p>
              I am always open to discuss your project, improve your online
              presence or help with your UX/UI design challenges
            </p>
          </div>
        </div>
        <div className="container mx-auto lg:px-6">
          <hr className="mt-8 w-full border border-white" />
          <p className="py-4 text-center text-white">
            &copy; Made by Nguimeya Bill-gates with{" "}
            <span className="text-secondary dark:text-rose-500">&#10084;</span>
          </p>
        </div>
      </div>
    </>
  );
}
