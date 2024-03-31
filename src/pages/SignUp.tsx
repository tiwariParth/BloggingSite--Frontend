import Quote from "../components/Quote";
import Auth from "../components/Auth";

const SignUp = () => {
  return (
    <div className=" flex  lg:flex-row flex-col ">
      <div className="flex-1">
        <Auth type={"signup"} />
      </div>
      <div className="flex-1">
        <Quote />
      </div>
    </div>
  );
};

export default SignUp;
