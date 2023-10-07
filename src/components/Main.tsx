import React, {
  createContext,
  RefObject,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Homecontext, hometype } from "./Home";
import Pick from "./Pick";
import Plan from "./Plan";
import Summary from "./Summary";
import Switch from "react-switch";

export interface maintype {
  setplantype: (s: string) => void;
}

export const MainContext = createContext<maintype | null>(null);

export interface Addonstype {
  name: string;
  amount: string;
}

function Main() {
  const homecontext = useContext<hometype | null>(Homecontext);
  const nameref: RefObject<HTMLInputElement> = useRef();
  const phoneref: RefObject<HTMLInputElement> = useRef();
  const mailref: RefObject<HTMLInputElement> = useRef();
  const [plantype, setplantype] = useState<string>("");
  const [planduration, setplanduration] = useState<string>("Monthly");
  const [duration, setduration] = useState<HTMLInputElement>();
  const [planamount, setamount] = useState<string>();
  const [planadds, setplanadds] = useState<Addonstype[]>([]);
  const [checked, setchecked] = useState<boolean>(false);

  const totalprice = () => {
    let totalprice: number = 0;
    planadds.map((each) => {
      totalprice += Number(each.amount);
      return totalprice;
    });
    totalprice += Number(planamount);
    return totalprice;
  };

  useEffect(() => {
    setduration(document.getElementById("yearcheck") as HTMLInputElement);
  }, []);

  const pickadds = (obj: Addonstype, type: string) => {
    var addons: Addonstype[] = [];
    let num = addons.indexOf(obj);
    type === "add" ? addons.push(obj) : addons.splice(num, 1);
    setplanadds([...addons]);
  };

  const unselectplans = () => {
    var plans: Element[] = Array.from(document.getElementsByClassName("plan"));
    plans.forEach((each) => {
      each.classList.remove("border-blue-700");
      each.classList.remove("active");
    });
    setplantype("");
  };

  const data = {
    name: "damilare",
    duration: duration?.checked ? "Yearly" : "Monthly",
    type: plantype,
    amount: planamount,
  };

  const authstepone = () => {
    if (
      mailref.current.value.trim() !== "" &&
      nameref.current.value.trim() !== "" &&
      phoneref.current.value.length > 10
    ) {
      homecontext.activeNav(2);
      homecontext.setverified(2);
    } else {
      document.getElementById("nameinfo").classList.add("hidden");
      document.getElementById("mailinfo").classList.add("hidden");
      document.getElementById("phoneinfo").classList.add("hidden");
      nameref.current.value.trim() === "" &&
        document.getElementById("nameinfo").classList.remove("hidden");
      mailref.current.value.trim() === "" &&
        document.getElementById("mailinfo").classList.remove("hidden");
      phoneref.current.value.length < 11 &&
        document.getElementById("phoneinfo").classList.remove("hidden");
    }
  };

  const errorplan = () => {
    document.getElementById("errorplan").classList.remove("hidden");
  };

  return (
    <MainContext.Provider value={{ setplantype }}>
      <div className="main">
        <div className="main-body" id="1">
          <div className="main-content">
            <div className="">
              <h1 className="form-heading"> Personal Info </h1>
              <p className="font-light mb-10">
                {" "}
                Please Provide your name, email address and phone number{" "}
              </p>
            </div>

            <div className="info-form flex flex-col sm:mt-5 my-3 sm:my-4">
              <div className="flex">
                <span className="mb-2"> Name </span>
                <span className="ml-auto hidden text-red-700" id="nameinfo">
                  {" "}
                  This Field is Required{" "}
                </span>
              </div>

              <input
                className="info-input"
                placeholder="Input your name"
                type="text"
                ref={nameref}
              />
            </div>

            <div className="info-form flex flex-col my-3">
              <div className="flex">
                <span className="mb-2"> Email </span>
                <span className="ml-auto hidden text-red-700" id="mailinfo">
                  {" "}
                  This Field is Required{" "}
                </span>
              </div>
              <input
                className="info-input"
                placeholder="example@email.com"
                type="text"
                ref={mailref}
              />
            </div>

            <div className="info-form flex flex-col my-3">
              <div className="flex">
                <span className="mb-2"> Phone No </span>
                <span className="ml-auto hidden text-red-700" id="phoneinfo">
                  {" "}
                  Input a Valid number{" "}
                </span>
              </div>
              <input
                className="info-input"
                placeholder="Input Your Phone Number"
                type="number"
                ref={phoneref}
              />
            </div>
          </div>

          <div className="links mt-20 flex flex-row">
            <div
              onClick={() => authstepone()}
              className="next block font-bold ml-auto px-4 hover:bg-blue-800 transition-all cursor-pointer py-2 text-white rounded-md w-fit"
            >
              Next Step
            </div>
          </div>
        </div>

        <div className="main-body hided" id="2">
          <div className="main-content">
            <div className="">
              <h1 className="form-heading"> SELECT YOUR PLAN </h1>
              <p className="font-light">
                {" "}
                You have the option of monthly or yearly billing{" "}
              </p>
              <p id="errorplan" className="hidden  text-red-700 mt-1">
                {" "}
                Please select a plan
              </p>
            </div>

            <div className="plans my-3 flex flex-col sm:flex-row">
              <Plan
                name="Arcade"
                amount={planduration === "Yearly" ? "72" : "19"}
                duration={planduration}
                click={() => setamount(planduration === "Yearly" ? "72" : "19")}
              />

              <Plan
                name="Pro"
                amount={planduration === "Yearly" ? "82" : "15"}
                duration={planduration}
                click={() => setamount(planduration === "Yearly" ? "82" : "15")}
              />
              <Plan
                name="Advanced"
                amount={planduration === "Yearly" ? "82" : "20"}
                duration={planduration}
                click={() => setamount(planduration === "Yearly" ? "82" : "20")}
              />
            </div>

            <div className="planswitch bg-blue-100 p-2 rounded-md">
              <div className="flex flex-row justify-center">
                <span className="mr-2"> Monthly </span>
                <Switch
                  className="mt-1"
                  id="yearcheck"
                  onChange={() => {
                    setplanduration(!duration.checked ? "Yearly" : "Monthly");
                    setchecked(!checked);
                    unselectplans();
                  }}
                  height={20}
                  width={40}
                  onColor={"white"}
                  onClick={() => {
                    setchecked(!checked);
                  }}
                  checked={checked}
                />
                <span className="ml-2"> Yearly</span>
              </div>
            </div>
          </div>

          <div className="links mt-10 flex flex-row">
            <div
              onClick={() => homecontext.activeNav(1)}
              className="cursor-pointer opacity-75 font-bold block mr-auto py-2 text-blue-900 rounded-md w-fit"
            >
              Go Back
            </div>

            <div className="next block ml-auto px-3 py-2 text-white rounded-md bg-blue-900 w-fit">
              <button
                onClick={() => {
                  document
                    .getElementById("errorplan")
                    .classList.remove("hidden");
                  plantype.length > 1 ? homecontext.activeNav(3) : errorplan();
                  homecontext.setverified(4);
                }}
              >
                {" "}
                Next Step{" "}
              </button>
            </div>
          </div>
        </div>

        <div className="main-body hided" id="3">
          <div className="main-content">
            <div className="">
              <h1 className="form-heading"> Pick add-ons </h1>
              <p className="font-light">
                {" "}
                Add-ons helps enhance your gaming experience{" "}
              </p>
            </div>

            <div className="picks my-3 flex flex-col">
              <Pick
                name="Online Services"
                amount={planduration === "Yearly" ? "32" : "9"}
                info="Access to multiplyer game"
                duration={planduration}
                check={(arr, type) => pickadds(arr, type)}
              />
              <Pick
                name="Larger Storage"
                amount={planduration === "Yearly" ? "52" : "15"}
                info="Extra 1tb of cloud space"
                duration={planduration}
                check={(arr, type) => pickadds(arr, type)}
              />
              <Pick
                name="Customizable Profile"
                amount={planduration === "Yearly" ? "72" : "20"}
                info="Custom theme on your profile"
                duration={planduration}
                check={(arr, type) => pickadds(arr, type)}
              />
            </div>
          </div>

          <div className="links mt-10 flex flex-row">
            <div
              onClick={() => homecontext.activeNav(2)}
              className="cursor-pointer opacity-75 font-bold block mr-auto py-2 text-blue-900 rounded-md w-fit"
            >
              Go Back
            </div>

            <div className="next block ml-auto px-3 py-2 text-white rounded-md bg-blue-900 w-fit">
              <button
                onClick={() => {
                  homecontext.activeNav(4);
                  homecontext.setverified(5);
                }}
              >
                {" "}
                Next Step{" "}
              </button>
            </div>
          </div>
        </div>

        <div className="main-body hided" id="4">
          <div className="main-content">
            <div className="">
              <h1 className="form-heading"> Finishing Up </h1>
              <p className="font-light mb-1">
                {" "}
                Double Check Everything looks ok before submiting{" "}
              </p>
            </div>

            <div className="summary mt-5">
              <div className="summary-content">
                <h3 className="font-bold">
                  {" "}
                  {data.type}({data.duration}){" "}
                </h3>

                <div className="pricing flex">
                  <span
                    className="text-blue-700 cursor-pointer"
                    onClick={() => homecontext.activeNav(2)}
                  >
                    {" "}
                    Change{" "}
                  </span>
                  <span className="justify-right ml-auto">
                    {" "}
                    ${planamount}/{planduration === "Monthly" ? "mo" : "yr"}{" "}
                  </span>
                  <hr className="font-bold" />
                </div>

                <div className="flex flex-col">
                  {planadds.map((each, index) => {
                    return (
                      <Summary
                        name={each.name}
                        amount={each.amount}
                        duration={planduration}
                        key={index}
                      />
                    );
                  })}
                </div>
              </div>

              <div className="flex total pt-2 pb-1 mt-4">
                <span>
                  Total(per {planduration === "Monthly" ? "month" : "year"})
                </span>
                <span className="ml-auto">
                  ${totalprice()}/{planduration === "Monthly" ? "mo" : "yr"}
                </span>
              </div>
            </div>
          </div>

          <div className="links mt-10 flex flex-row">
            <div
              onClick={() => homecontext.activeNav(3)}
              className="cursor-pointer opacity-75 font-bold block mr-auto py-2 text-blue-900 rounded-md w-fit"
            >
              Go Back
            </div>

            <div className="next block ml-auto px-3 py-2 text-white rounded-md bg-blue-900 w-fit">
              <button
                onClick={() => {
                  homecontext.activeNav(5);
                  homecontext.setverified(6);
                }}
              >
                {" "}
                Confirm{" "}
              </button>
            </div>
          </div>
        </div>

        <div className="main-body hided" id="5">
          <div className="main-content md:mt-7">
            <div className="">
              <h1 className="form-heading">
                {" "}
                <span className="flex justify-center">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="80"
                    height="80"
                    viewBox="0 0 80 80"
                  >
                    <g fill="none">
                      <circle cx="40" cy="40" r="40" fill="#F9818E" />
                      <path
                        fill="#E96170"
                        d="M48.464 79.167c.768-.15 1.53-.321 2.288-.515a40.04 40.04 0 0 0 3.794-1.266 40.043 40.043 0 0 0 3.657-1.63 40.046 40.046 0 0 0 12.463-9.898A40.063 40.063 0 0 0 78.3 51.89c.338-1.117.627-2.249.867-3.391L55.374 24.698a21.6 21.6 0 0 0-15.332-6.365 21.629 21.629 0 0 0-15.344 6.365c-8.486 8.489-8.486 22.205 0 30.694l23.766 23.775Z"
                      />
                      <path
                        fill="#FFF"
                        d="M40.003 18.333a21.58 21.58 0 0 1 15.31 6.351c8.471 8.471 8.471 22.158 0 30.63-8.47 8.47-22.156 8.47-30.627 0-8.47-8.472-8.47-22.159 0-30.63a21.594 21.594 0 0 1 15.317-6.35Zm9.865 15c-.316.028-.622.15-.872.344l-12.168 9.13-5.641-5.642c-1.224-1.275-3.63 1.132-2.356 2.356l6.663 6.663c.56.56 1.539.63 2.173.156l13.326-9.995c1.122-.816.43-2.993-.956-3.013a1.666 1.666 0 0 0-.17 0Z"
                      />
                    </g>
                  </svg>{" "}
                </span>{" "}
              </h1>
              <p className="font-bold thankyou mb-4 my-5"> Thank You</p>
              <p className="text-center mb-1">
                {" "}
                Thank You for confirming your subcription. We hope you have fun
                using our platform. If you ever need support feel free to reach
                out to us at support@gmail.com.
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainContext.Provider>
  );
}

export default Main;
