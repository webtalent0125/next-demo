import variables from "./../variables.module.scss";
import Image from "next/image";
import background from "./../../../public/16fb80732c8743468276ff7958c95a71.png";

export const metadata = {
  title: "this is blog",
  description: "generated for a test",
};
export default function RootLayout({ children, blogdetail, blogtest }) {
  return (
    <>
      <h1 style={{ color: variables.primaryColor }}>-------------------blog</h1>
      {children}

      <h2>-------------------blogdetail</h2>
      {blogdetail}

      <h2>--------------------blogtest</h2>
      {blogtest}
      <Image src={background} width={400} alt="background of the author" />
    </>
  );
}
