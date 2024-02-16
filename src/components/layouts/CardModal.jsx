import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { TransactionContext } from "../../context/TransactionContext";
import { shortenAddress } from '../../utils/shortenAdress';

const Input = ({placeholder, name, type, value, handleChange, step= "1"}) => (
  <input
    placeholder={placeholder}
    type={type}
    step={step}
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="form-control" // Añadí className aquí para ejemplo
  />
  );
const CardModal = (props) => {
  const { currentAccount, handleChange, sendTransaction, formData ,updateFormData} = useContext(TransactionContext);
  const [totalCostInETH, setTotalCostInETH] = useState(0);
  const pricePerTokenInETH = 0.41;
  useEffect(() => {
    // Calcula el costo total cada vez que la cantidad de tokens a comprar cambia
    const cost = formData.tokens * pricePerTokenInETH;
    updateFormData('amount', cost.toString());

    setTotalCostInETH(cost);
  }, [formData.amount, formData.tokens]);  
  const handleSubmit = (e) =>{
    const {amount, tokens} = formData;

    e.preventDefault();

    if( !amount )return;
    sendTransaction();

  };
  return (
    
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton></Modal.Header>
      <Input placeholder="Tokens a comprar" class="form-control"name="tokens" type="number" handleChange={handleChange}   />




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
          <p className="text-right price color-popup">{totalCostInETH.toFixed(4)} ETH </p>
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
