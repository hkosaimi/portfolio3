import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="text-center py-5 mt-20 ">
        Powered by{" "}
        <Link to="https://github.com/hkosaimi" className="font-mono">
          hkosaimi
        </Link>
      </div>
    </>
  );
}

export default Footer;
