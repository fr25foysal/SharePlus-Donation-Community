import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/NavBar/NavBar";

const MainLayout = () => {
    return (
        <div className="dark:bg-accent bg-white text-success font-raleway">
                <NavBar></NavBar>
                <Footer></Footer>
        </div>
    );
};

export default MainLayout;