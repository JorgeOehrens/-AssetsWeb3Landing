import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { db } from '../../Server/Firebase/config';
import { collection, addDoc } from "firebase/firestore";
import { useTranslation } from 'react-i18next';

const CardModal = ({ show, onHide }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [loader, setLoader] = useState(false);
    const [t, i18n] = useTranslation("global");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoader(true);

        if (formData.name && formData.email && formData.subject && formData.message) {
            try {
                await addDoc(collection(db, "queries"), formData);
                alert('Message sent successfully'); // Using alert instead of toast
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            } catch (error) {
                alert(error.message); // Using alert instead of toast
            }
        } else {
            alert('All fields are required'); // Using alert instead of toast
        }

        setLoader(false);
    };

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <h2>{t("Form.tittle")}</h2>
            </Modal.Header>
            <div className="themesflat-container ">
                <h5 className="sub-title style-1">
                    {t("Form.subtitle")}
                </h5>
                <div className="form-inner">
                    <form onSubmit={handleSubmit} noValidate className="form-submit">
                        <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder={t("Form.label_name")}
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="form-control"
                        />
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder={t("Form.label_email")}
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="form-control"
                        />
                        <input
                            id="subject"
                            name="subject"
                            type="text"
                            placeholder={t("Form.label_subject")}
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="form-control"
                        />
                        <textarea
                            name="message"
                            rows="2"
                            placeholder={t("Form.label_message")}
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="form-control"
                        />
                        <button type="submit" disabled={loader} className="submit btn btn-primary">
                            {t("Form.button")}
                        </button>
                    </form>
                </div>
            </div>
        </Modal>
    );
};

export default CardModal;
