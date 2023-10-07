import SignUp from "./components/signUpEmailPassword";

const { default: SignIn } = require("./components/signIn");

function Authentication(){
    // const [isSingInClick,setSignInClick] = useState(false);
    // const clickSignIn = ()=>{
    //     setSignInClick(true)
    // }
    // const closeSignIN = ()=>{
    //     setSignInClick(false)
    // }
    return (
        <div className="font-dmsan">
            <SignIn></SignIn>
            <button></button>
            <SignUp></SignUp>
        </div>
    )
}
export default Authentication;