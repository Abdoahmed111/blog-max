import classes from "./hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src='' alt='' width={} height={}/>
      </div>
      <h1>Hi, I'm Abdelrahman</h1>
      <p>
        I blog about web development - especially frontend frameworks like
        angular or React
      </p>
    </section>
  );
};

export default Hero;
