import Lottie from 'lottie-react';
import { MdKeyboardBackspace } from 'react-icons/md';
import notFound from '../../assets/anims/404page.json'
import { Link } from 'react-router-dom';
import PageTitle from '../../Components/PageTitle';
const ErrorPage = () => {
    return (
        <div className='w-1/2 mx-auto'>
            <PageTitle>Error 404 | Not Found</PageTitle>
            <Link className='mt-16 text-accent font-semibold flex items-center gap-x-1' to={'/'}> <MdKeyboardBackspace></MdKeyboardBackspace> Back to Home</Link>
            <Lottie loop={false} animationData={notFound}></Lottie>
        </div>
    );
};

export default ErrorPage;