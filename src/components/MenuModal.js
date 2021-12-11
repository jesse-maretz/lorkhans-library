import React from 'react';
import '../style/MenuModal.css'


function MenuModal({props, visible}) {

    

    return (
        <div
        className="menu-modal"
        style={{
            backgroundColor: "rgba(0, 0, 0, .7)",
            height: "100vh",
            width: "100vw",
            padding: 0,
            margin: 0,
            display: visible ? "flex" : "none",
            justifyContent: "center",
            alignItems: "center"
        }}>
                <section
                id="modal-menu"
                style={{
                    backgroundColor: "white",
                    height: "300px",
                    width: "300px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column"
                  }}>
                      <h3>{props}</h3>
                </section>
            </div>
    )
}

export default MenuModal