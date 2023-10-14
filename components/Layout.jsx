import Meta from './Meta';
import Header from './header/Header';
import Footer from './footer/Footer';

function Layout ({ children }) {
    return (
        <section>
            <Meta />
            <Header/>
                {children}
            <Footer/>
        </section>
    )
}

export default Layout;
