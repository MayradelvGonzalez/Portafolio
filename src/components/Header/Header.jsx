import './Header.css';
import LogoNsf from '../../assets/LogoNsf.png';
import 'animate.css';
function Header() {
    return (
   
        <div id="header" className='curved' role='banner'>

            <div className='logoName' role='navigation'> <img src={LogoNsf} className="App-logo" alt="logo" /></div>
            <div> <ul className="lista">
                <li><a href="tel:+543815160008" target='_BLANK'  rel="noopener noreferrer" tabIndex={0}>Telefono</a></li>
                <li><a href="https://www.linkedin.com/in/mayra-gonz%C3%A1lez-v/" target='_BLANK'  rel="noopener noreferrer" tabIndex={0}>Linkedin</a></li>
                <li><a href="https://github.com/MayradelvGonzalez" target='_BLANK'  rel="noopener noreferrer" tabIndex={0}>Github</a></li>
                <li><a href="mailto:mayradelvallegonzalez@gmail.com" target='_BLANK'  rel="noopener noreferrer" tabIndex={0}>Email</a>
                    <span className="border border-top"></span>
                    <span className="border border-right"></span>
                    <span className="border border-bottom"></span>
                    <span className="border border-left"></span></li>
            </ul></div>
        </div>


    )
}

export default Header;