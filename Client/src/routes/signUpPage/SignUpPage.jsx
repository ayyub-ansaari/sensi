import { SignUp } from '@clerk/react-router'
import './signUpPage.css'

const signUpPage = () => {
    return (
        <div className="signUpPage">
            <SignUp path='/sign-up' signUpUrl='/sign-up' forceRedirect="/dashboard" />
        </div>
    )
}
export default signUpPage