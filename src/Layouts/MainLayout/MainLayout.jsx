import { Toaster } from "react-hot-toast";
import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/NavBar/NavBar";

const MainLayout = () => {
    return (
        <div className="dark:bg-accent bg-white text-success font-raleway">
                <NavBar></NavBar>
                <Footer></Footer>
                <Toaster
                toastOptions={{
                    success: {
                      style: {
                        background: '#13c78e',
                        color: 'white'
                      },
                    },
                    error: {
                      style: {
                        background: 'red',
                        color: 'white'
                      },
                    },
                  }} />
        </div>
    );
};

export default MainLayout;