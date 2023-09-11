import React, { Fragment, useEffect, useState } from 'react'

const MegaMenuAll = () =>{

    // Utilisation du hook useState pour gérer l'état du menu
    const [isOpen, setIsOpen] = useState(false);

    // Fonction pour basculer l'état d'ouverture du menu
    const toggleMenu = () => {
    setIsOpen(!isOpen);
    };

    useEffect(() => {
    // Utilisation d'un effet pour ajouter et supprimer la classe "active"
    const acc = document.getElementsByClassName("accordionAll");
    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        const panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
        }, [isOpen]);
    }

    
    }); // Le tableau vide [] signifie que cet effet s'exécute une seule fois, équivalent à componentDidMount

  return (
    <div className="accordionMenuDivAll">
    <div className="accordionMenuDivInsideAll">
        <button className={`accordionAll ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <img className="accordionMenuIconAll" src="https://cdn-icons-png.flaticon.com/128/4361/4361809.png" alt="" />
            &nbsp; Men's Clothing
        </button>
        <div className="panelAll">
            <ul>
                <li>
                    <a className="accordionItemAll" href="#">Mens Tshirt 1</a>
                </li>
                <li>
                    <a className="accordionItemAll" href="#">Mens Tshirt 1</a>
                </li>
            </ul>
        </div>

        <button className={`accordionAll ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <img className="accordionMenuIconAll" src="https://cdn-icons-png.flaticon.com/128/4361/4361809.png" alt="" />
            &nbsp; Men's Clothing
        </button>
        <div className="panelAll">
            <ul>
                <li>
                    <a className="accordionItemAll" href="#">Mens Tshirt 1</a>
                </li>
                <li>
                    <a className="accordionItemAll" href="#">Mens Tshirt 1</a>
                </li>
            </ul>
        </div>

        <button className={`accordionAll ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <img className="accordionMenuIconAll" src="https://cdn-icons-png.flaticon.com/128/4361/4361809.png" alt="" />
            &nbsp; Men's Clothing
        </button>
        <div className="panelAll">
            <ul>
                <li>
                    <a className="accordionItemAll" href="#">Mens Tshirt 1</a>
                </li>
                <li>
                    <a className="accordionItemAll" href="#">Mens Tshirt 1</a>
                </li>
            </ul>
        </div>

        <button className={`accordionAll ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <img className="accordionMenuIconAll" src="https://cdn-icons-png.flaticon.com/128/4361/4361809.png" alt="" />
            &nbsp; Men's Clothing
        </button>
        <div className="panelAll">
            <ul>
                <li>
                    <a className="accordionItemAll" href="#">Mens Tshirt 1</a>
                </li>
                <li>
                    <a className="accordionItemAll" href="#">Mens Tshirt 1</a>
                </li>
            </ul>
        </div>

        <button className={`accordionAll ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <img className="accordionMenuIconAll" src="https://cdn-icons-png.flaticon.com/128/4361/4361809.png" alt="" />
            &nbsp; Men's Clothing
        </button>
        <div className="panelAll">
            <ul>
                <li>
                    <a className="accordionItemAll" href="#">Mens Tshirt 1</a>
                </li>
                <li>
                    <a className="accordionItemAll" href="#">Mens Tshirt 1</a>
                </li>
            </ul>
        </div>

        <button className={`accordionAll ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <img className="accordionMenuIconAll" src="https://cdn-icons-png.flaticon.com/128/4361/4361809.png" alt="" />
            &nbsp; Men's Clothing
        </button>
        <div className="panelAll">
            <ul>
                <li>
                    <a className="accordionItemAll" href="#">Mens Tshirt 1</a>
                </li>
                <li>
                    <a className="accordionItemAll" href="#">Mens Tshirt 1</a>
                </li>
            </ul>
        </div>

        
    </div>
    </div>
  )
}

export default MegaMenuAll