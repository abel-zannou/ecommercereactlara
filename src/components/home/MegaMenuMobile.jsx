import React, { Fragment, useEffect, useState } from 'react';

const MegaMenuMobile = () => {
    // Utilisation du hook useState pour gérer l'état du menu
    const [isOpen, setIsOpen] = useState(false);

    // Fonction pour basculer l'état d'ouverture du menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Utilisation d'un effet pour ajouter et supprimer la classe "active"
    useEffect(() => {
        const acc = document.getElementsByClassName("accordionMobile");

        const clickHandler = function () {
            this.classList.toggle("active");
            const panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        };

        for (let i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", clickHandler);
        }

        // Nettoyer les écouteurs d'événements lorsque le composant est démonté
        return () => {
            for (let i = 0; i < acc.length; i++) {
                acc[i].removeEventListener("click", clickHandler);
            }
        };
    }, []); // Le tableau vide [] signifie que cet effet s'exécute une seule fois, équivalent à componentDidMount

    return (
        <Fragment>
            <div className="accordionMenuDivMobile">
                <div className="accordionMenuDivInsideMobile">
                    <button className="accordionMobile" onClick={toggleMenu}>
                        <img className="accordionMenuIconMobile" src="https://cdn-icons-png.flaticon.com/128/4361/4361809.png" alt="" />
                        &nbsp; Men's Clothing
                    </button>
                    <div className="panelMobile">
                        <ul>
                            <li>
                                <a className="accordionItemMobile" href="#">Mens Tshirt 1</a>
                            </li>
                            <li>
                                <a className="accordionItemMobile" href="#">Mens Tshirt 1</a>
                            </li>
                        </ul>
                    </div>

                    <button className="accordionMobile" onClick={toggleMenu}>
                        <img className="accordionMenuIconMobile" src="https://cdn-icons-png.flaticon.com/128/4361/4361809.png" alt="" />
                        &nbsp; Men's Clothing
                    </button>
                    <div className="panelMobile">
                        <ul>
                            <li>
                                <a className="accordionItemMobile" href="#">Mens Tshirt 1</a>
                            </li>
                            <li>
                                <a className="accordionItemMobile" href="#">Mens Tshirt 1</a>
                            </li>
                        </ul>
                    </div>

                    <button className="accordionMobile" onClick={toggleMenu}>
                        <img className="accordionMenuIconMobile" src="https://cdn-icons-png.flaticon.com/128/4361/4361809.png" alt="" />
                        &nbsp; Men's Clothing
                    </button>
                    <div className="panelMobile">
                        <ul>
                            <li>
                                <a className="accordionItemMobile" href="#">Mens Tshirt 1</a>
                            </li>
                            <li>
                                <a className="accordionItemMobile" href="#">Mens Tshirt 1</a>
                            </li>
                        </ul>
                    </div>

                    <button className="accordionMobile" onClick={toggleMenu}>
                        <img className="accordionMenuIconMobile" src="https://cdn-icons-png.flaticon.com/128/4361/4361809.png" alt="" />
                        &nbsp; Men's Clothing
                    </button>
                    <div className="panelMobile">
                        <ul>
                            <li>
                                <a className="accordionItemMobile" href="#">Mens Tshirt 1</a>
                            </li>
                            <li>
                                <a className="accordionItemMobile" href="#">Mens Tshirt 1</a>
                            </li>
                        </ul>
                    </div>

                    {/* Répétez les boutons et les panneaux ici */}
                </div>
            </div>
        </Fragment>
    );
};

export default MegaMenuMobile;


// import React, { Fragment, useEffect, useState } from 'react'

// const MegaMenuMobile = () => {

//     const toggleMenu = () => {
//         // Utilisation d'un effet pour ajouter et supprimer la classe "active"
//         const acc = document.getElementsByClassName("accordionAll");
//         for (let i = 0; i < acc.length; i++) {
//             acc[i].addEventListener("click", function () {
//             this.classList.toggle("active");
//             const panel = this.nextElementSibling;
//             if (panel.style.maxHeight) {
//                 panel.style.maxHeight = null;
//             } else {
//                 panel.style.maxHeight = panel.scrollHeight + "px";
//             }
//         })
//         }
           
//         }
//   return (
//         <Fragment>
//             <div className="accordionMenuDivMobile">
//             <div className="accordionMenuDivInsideMobile">
//             <button className="accordionMobile" onClick={toggleMenu}>
//                     <img className="accordionMenuIconMobile" src="https://cdn-icons-png.flaticon.com/128/4361/4361809.png" alt="" />
//                     &nbsp; Men's Clothing
//                 </button>
//                 <div className="panelMobile">
//                     <ul>
//                         <li>
//                             <a className="accordionItemMobile" href="#">Mens Tshirt 1</a>
//                         </li>
//                         <li>
//                             <a className="accordionItemMobile" href="#">Mens Tshirt 1</a>
//                         </li>
//                     </ul>
//                 </div>

//                 <button className="accordionMobile" onClick={toggleMenu}>
//                     <img className="accordionMenuIconMobile" src="https://cdn-icons-png.flaticon.com/128/4361/4361809.png" alt="" />
//                     &nbsp; Men's Clothing
//                 </button>
//                 <div className="panelMobile">
//                     <ul>
//                         <li>
//                             <a className="accordionItemMobile" href="#">Mens Tshirt 1</a>
//                         </li>
//                         <li>
//                             <a className="accordionItemMobile" href="#">Mens Tshirt 1</a>
//                         </li>
//                     </ul>
//                 </div>

//                 <button className="accordionMobile" onClick={toggleMenu}>
//                     <img className="accordionMenuIconMobile" src="https://cdn-icons-png.flaticon.com/128/4361/4361809.png" alt="" />
//                     &nbsp; Men's Clothing
//                 </button>
//                 <div className="panelMobile">
//                     <ul>
//                         <li>
//                             <a className="accordionItemMobile" href="#">Mens Tshirt 1</a>
//                         </li>
//                         <li>
//                             <a className="accordionItemMobile" href="#">Mens Tshirt 1</a>
//                         </li>
//                     </ul>
//                 </div>

//                 <button className="accordionMobile" onClick={toggleMenu}>
//                     <img className="accordionMenuIconMobile" src="https://cdn-icons-png.flaticon.com/128/4361/4361809.png" alt="" />
//                     &nbsp; Men's Clothing
//                 </button>
//                 <div className="panelMobile">
//                     <ul>
//                         <li>
//                             <a className="accordionItemMobile" href="#">Mens Tshirt 1</a>
//                         </li>
//                         <li>
//                             <a className="accordionItemMobile" href="#">Mens Tshirt 1</a>
//                         </li>
//                     </ul>
//                 </div>

//                 <button className="accordionMobile" onClick={toggleMenu}>
//                     <img className="accordionMenuIconMobile" src="https://cdn-icons-png.flaticon.com/128/4361/4361809.png" alt="" />
//                     &nbsp; Men's Clothing
//                 </button>
//                 <div className="panelMobile">
//                     <ul>
//                         <li>
//                             <a className="accordionItemMobile" href="#">Mens Tshirt 1</a>
//                         </li>
//                         <li>
//                             <a className="accordionItemMobile" href="#">Mens Tshirt 1</a>
//                         </li>
//                     </ul>
//                 </div>

//                 <button className="accordionMobile" onClick={toggleMenu}>
//                     <img className="accordionMenuIconMobile" src="https://cdn-icons-png.flaticon.com/128/4361/4361809.png" alt="" />
//                     &nbsp; Men's Clothing
//                 </button>
//                 <div className="panelMobile">
//                     <ul>
//                         <li>
//                             <a className="accordionItemMobile" href="#">Mens Tshirt 1</a>
//                         </li>
//                         <li>
//                             <a className="accordionItemMobile" href="#">Mens Tshirt 1</a>
//                         </li>
//                     </ul>
//                 </div>

//                 <button className="accordionMobile" onClick={toggleMenu}>
//                     <img className="accordionMenuIconMobile" src="https://cdn-icons-png.flaticon.com/128/4361/4361809.png" alt="" />
//                     &nbsp; Men's Clothing
//                 </button>
//                 <div className="panelMobile">
//                     <ul>
//                         <li>
//                             <a className="accordionItemMobile" href="#">Mens Tshirt 1</a>
//                         </li>
//                         <li>
//                             <a className="accordionItemMobile" href="#">Mens Tshirt 1</a>
//                         </li>
//                     </ul>
//                 </div>

//                 <button className="accordionMobile" onClick={toggleMenu}>
//                     <img className="accordionMenuIconMobile" src="https://cdn-icons-png.flaticon.com/128/4361/4361809.png" alt="" />
//                     &nbsp; Men's Clothing
//                 </button>
//                 <div className="panelMobile">
//                     <ul>
//                         <li>
//                             <a className="accordionItemMobile" href="#">Mens Tshirt 1</a>
//                         </li>
//                         <li>
//                             <a className="accordionItemMobile" href="#">Mens Tshirt 1</a>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//             </div>
//         </Fragment>
//   )
// }

// export default MegaMenuMobile