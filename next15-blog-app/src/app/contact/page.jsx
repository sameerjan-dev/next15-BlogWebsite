// "use client";
import Image from "next/image";
import styles from "./contact.module.css";
import dynamic from "next/dynamic";
// import { useEffect, useState } from "react";
import HydrationTest from "@/components/hydrationTest";

// const HydrationTestNoSSR = dynamic(() => import("@/components/hydrationTest"), {
//   ssr: false,
// });

// export const metadata = {
//   title: "Contact Page",
//   description: "Contact description",
// };

const ContactPage = () => {
  // const a = Math.random();
  // const [isClient, setIsClient] = useState(false);
  const a = Math.random();

  // console.log(a);
  // useEffect(() => {
  //   setIsClient(true);
  // }, []);
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/2.jpg" alt="" fill className={styles.img} />
      </div>
      <div className={styles.formContainer}>
        <div>
          <HydrationTest />
        </div>
        {/* <div suppressHydrationWarning>{a}</div> */}
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name and Surname" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number (Optional)" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
