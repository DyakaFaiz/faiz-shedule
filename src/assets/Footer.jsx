function Footer (){
    const year = new Date().getFullYear();
    return(
        <div className="footer animate__animated animate__bounceInDown animate__delay-1s">
            <footer>&copy;Copyright {year} dyakafaiz</footer>
        </div>
    )
}

export default Footer;