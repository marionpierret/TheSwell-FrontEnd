const Footer = () => {

return(
<div className = "footer">
    <div className = "footerLinks">
{/* <h4>Githubs' links</h4> */}
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Font_Awesome_5_brands_github.svg/langfr-800px-Font_Awesome_5_brands_github.svg.png" alt="github"/>
<button><a href="https://github.com/draosi">P</a></button>
<button><a href="https://github.com/marionpierret">M</a></button>
    </div>
    <div className="footerContact">
        <h4>Contact</h4>
        <p>Address: 3 rue Maillard, 75011 Paris</p>
        <p>Phone: +(33)10 79 00 00 00</p>
        <p>Email: theswell@ironhack.com</p>
        </div>

</div>
)
}

export default Footer



