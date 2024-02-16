import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { TransactionContext } from "../../context/TransactionContext";
import { shortenAddress } from '../../utils/shortenAdress';

const Input = ({placeholder, name, type, value, handleChange}) => (
  <input
  placeholder={placeholder}
  type={type}
  step="0.0001"
  value={value}
  onChange = {(e) => handleChange(e,name)}
  className=""

  />
  );
const CardModal = (props) => {
  const { currentAccount, handleChange, sendTransaction, formData } = useContext(TransactionContext);

  const handleSubmit = (e) =>{
    const {amount, message} = formData;

    e.preventDefault();

    if( !amount || !message )return;
    sendTransaction();

  };
  return (
    
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton></Modal.Header>
      
      <Input placeholder="Monto (ETH)" class="form-control"name="amount" type="number" handleChange={handleChange} />
      <Input placeholder="Enviar mensaje" name="message" type="text" handleChange={handleChange} />

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
          <p className="text-right price color-popup"> x tokens </p>
        </div>
        {!currentAccount?(
                            <h1></h1>
                        ) : (
                            <button 
                            type="button"
                            onClick={handleSubmit}
                            className="btn btn-primary"
                            >
                                Buy


                            </button>
                        )
                        
                    } 
  
      </div>
    </Modal>
  );
};

export default CardModal;
