import React from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";

const CardModal = (props) => {
  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton></Modal.Header>

      <div className="modal-body space-y-20 pd-40">
        <h3>Obtén tu participación</h3>
        <p className="text-center">
          Puedes invertir desde{" "}
          <span className="price color-popup">150 USD</span>
        </p>
        <input type="text" className="form-control" placeholder="00.00 USD" />
        <p>
          Ingresa cantidad.{" "}
          <span className="color-popup">900 m2 disponibles</span>
        </p>
        <input type="number" className="form-control" placeholder="1" />
        <div className="hr"></div>
        <div className="d-flex justify-content-between">
          <p> Necesitar tener mínimo:</p>
          <p className="text-right price color-popup"> 150 USD </p>
        </div>
        <div className="d-flex justify-content-between">
          <p> Servicio Fee:</p>
          <p className="text-right price color-popup"> 0,89 ETH </p>
        </div>
        <div className="d-flex justify-content-between">
          <p> Total a invertir:</p>
          <p className="text-right price color-popup"> x m2 </p>
        </div>
        <Link
          to="/wallet-connect"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#popup_bid_success"
          data-dismiss="modal"
          aria-label="Close"
        >
          {" "}
          Invertir
        </Link>
      </div>
    </Modal>
  );
};

export default CardModal;
