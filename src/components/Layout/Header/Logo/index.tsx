import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <Image
        src="/images/logo/riddletalezwhitemin.png"
        alt="logo"
        width={70}
        height={20}
        style={{ width: "auto", height: "55px" }}
        quality={100}
      />
    </Link>
  );
};

export default Logo;
