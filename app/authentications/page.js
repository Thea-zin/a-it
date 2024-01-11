import SignUp from "./components/signUpEmailPassword";
import SignUpWithThirdParty from "./components/signUpWith3rdParty";

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
            <SignUp></SignUp>
            <SignUpWithThirdParty></SignUpWithThirdParty>
        </div>
    )
}
export default Authentication;