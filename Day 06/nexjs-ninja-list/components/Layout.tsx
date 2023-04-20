import Footer from "../components/Footer";
import NavBar from "../components/Navbar";

const Layout = ({ children }: any) => {
    return (
        <div className="content">
            <NavBar />
            {children}
            <Footer />
        </div>
    );
}

export default Layout;