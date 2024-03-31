import Auth from "../components/Auth";
import Quote from "../components/Quote";

const SignIn = () => {
  return (
    <div className=" flex  lg:flex-row flex-col ">
      <div className="flex-1">
        <Auth type={"signin"} />
      </div>
      <div className="flex-1">
        <Quote />
      </div>
    </div>
  );
};

export default SignIn;
