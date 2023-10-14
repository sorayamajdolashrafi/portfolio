import Link from 'next/link';
import styles from '../../styles/Header.module.css';

const Header = () => {
    return (
        <div className={styles.header}>
            <header>
                <Link href='/'>
                    <h1>SORAYA BENSON</h1>
                </Link>
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
                href="/soraya-benson-resume-2023.pdf"    
                target="_blank"
                >
                cv
            </a>
        </nav>
        </div>
    )
}

export default Header;