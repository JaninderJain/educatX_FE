// import { FcGoogle } from "react-icons/fc"
import { useSelector } from "react-redux"

// import frameImg from "../../../assets/Images/frame.png"
import LoginForm from "./LoginForm"
import SignupForm from "./SignupForm"
// import bg from "../../../assets/Images/bg.png"

function Template({ title, description1, description2, image, formType }) {
  const { loading } = useSelector((state) => state.auth)

  return (
    <div style={{backgroundImage:`url(${image})` , backgroundSize: "cover", backgroundRepeat: 'no-repeat'}}>
      <div className="grid h-screen place-items-center "  style={{overflow:"hidden"}} >
        
        {loading ? (
          <div className="spinner"></div>
        ) : (
          <div className="mx-auto flex w-11/12 max-w-maxContent flex-col-reverse justify-between gap-y-12 py-12 md:flex-row md:gap-y-0 md:gap-x-12 " >
            
              
            <div className="relative content-center  max-w-[550px] py-0 w-2/4 align-middle ">
              {/* <img
                src={image}
                alt="Students"
                width={550}
                height={504}
                loading="lazy"
                className="absolute right-20 z-10 my-10 shadow-[30px_5px_50px_-5px] shadow-yellow-300 "
                
              /> */}
            </div>
            <div className="mx-auto w-11/12 max-w-[450px] md:mx-0 pl-5 " >
              <h1 className="text-[1.875rem] font-semibold leading-[2.375rem] text-richblack-100">
                {title}
              </h1>
              <p className="mt-4 text-[1.125rem] leading-[1.625rem]">
                <span className="text-richblack-100">{description1}</span>{" "}
                <span className="font-edu-sa font-bold italic text-blue-100">
                  {description2}
                </span>
              </p>
              {formType === "signup" ? <SignupForm /> : <LoginForm />}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Template
