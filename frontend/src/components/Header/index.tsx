import logo from '../../assets/img/logo.svg';
import './styles.css';

function Header() {
    return (
        <header>
        <div class="dsmeta-logo-container">
            <img src={logo} alt="DSMeta" />
                <h1>DSMeta</h1>
                <p>
                    Desenvolvido por
                    <a href="https://www.instagram.com/spindobobo/">@spindobobo</a>
                </p>
            </div>
        </header>
    )
}

export default Header;