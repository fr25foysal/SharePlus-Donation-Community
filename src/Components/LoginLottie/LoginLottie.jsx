import Lottie from "lottie-react";
import loginloti from '../../assets/anims/login.json'

const LoginLottie = () => {
    return (
        <div>
            <Lottie animationData={loginloti} loop={false}></Lottie>
        </div>
    );
};

export default LoginLottie;