import Link from 'next/link';
import styles from '../../styles/Header.module.css';

const Header = () => {
    return (
        <div className={styles.header}>
        <header>
            <h1>SORAYA BENSON</h1>
        </header>
        <nav>
            <Link href='/'>
                home
            </Link>
            <Link href='/projects'>
                projects
            </Link>
            <Link href='/about'>
                about
            </Link>
            <a 
                href="/SorayaBensonResume2021.pdf"    
                target="_blank"
                >
                cv
            </a>
            {/* <Link 
                href='/resume'
            >
                cv
            </Link> */}
        </nav>
        </div>
    )
}

export default Header;