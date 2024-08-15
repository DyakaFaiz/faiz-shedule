function Footer (){
    const year = new Date().getFullYear();
    return(
        <div className="footer animate__animated animate__fadeIn animate__delay-2s">
            <footer>&copy;copyright {year} Dyakafaiz</footer>
        </div>
    )
}

export default Footer;