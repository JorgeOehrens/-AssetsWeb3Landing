import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";



const CardModal =({show,buyToken,onHide })  => {
  const [nToken, setNToken] = useState(1);


  return (
    
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton></Modal.Header>
      <input placeholder="Tokens a comprar" class="form-control"name="tokens" type="number"    />

      <input
                        type="number"
                        required="required"
                        placeholder="1"
                        id="first-name"
                        min={1}
                        class="form-control"
                        onChange={(e) => setNToken(e.target.value)}
                        name="name"
                      />


      <div className="modal-body space-y-20 pd-40">
        <h3>Obtén tu participación</h3>
        <p className="text-center">
          Puedes invertir desde{" "}
          <span className="price color-popup">150 USD</span>
        </p>
        <p>
          Ingresa cantidad.{" "}
          <span className="color-popup">4900 tokens avalible</span>
        </p>
        <div className="hr"></div>
        <div className="d-flex justify-content-between">
          <p> Necesitar tener mínimo:</p>
          <p className="text-right price color-popup"> 182 USD </p>
        </div>
        <div className="d-flex justify-content-between">
          <p> Servicio Fee:</p>
          <p className="text-right price color-popup"> 0,057 ETH </p>
        </div>
        <div className="d-flex justify-content-between">
          <p> Total a invertir:</p>
          <p className="text-right price color-popup"> ETH </p>
        </div>
         
                            <button 
                            type="button"
                    onClick={() => buyToken(nToken)}
                            className="btn btn-primary"
                            >
                                Buy


                            </button>
                        
    
      </div>
    </Modal>
  );
};

export default CardModal;
