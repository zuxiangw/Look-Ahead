import HeaderUnderbar from "./headerUnderbar";
const Footer = () => {
  return (
    <div className="h-64 grid grid-col-3 border-t-4 border-black">
      <div className="h-full col-start-1 p-8 flex justify-center tracking-wider">
        <div>
          <h1 className="text-3xl font-bold">Look Ahead</h1>
          <HeaderUnderbar />
        </div>
      </div>
      <div className="h-full col-start-2 p-8 flex flex-col items-center tracking-wider">
        <div>
          <h1 className="text-3xl font-bold">Legal</h1>
          <HeaderUnderbar />
        </div>
        <p className="mt-8">Terms of Use</p>
        <p className="mt-8">Privacy Policy</p>
      </div>
      <div className="h-full col-start-3 p-8 flex flex-col items-center tracking-wider">
        <div>
          <h1 className="text-3xl font-bold">Contacts</h1>
          <HeaderUnderbar />
        </div>
        <p className="mt-8">thelookaheadofficial@gmail.com</p>
        <p className="mt-8">1(234)-567-8912</p>
      </div>
    </div>
  );
};

export default Footer;
