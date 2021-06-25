import Link from 'next/link';
import styles from '../../styles/Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <h1>SORAYA BENSON</h1>
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
                <Link href='/connect'>
                    connect
                </Link>
                <Link href='/resume'>
                    cv
                </Link>
            </nav>
        </header>
    )
}

export default Header;