import React from "react";
import CV from "../../assets/cv_liberto_medina.pdf"

const CTA = ({t}) => {
    return (
        <div className="cta">
            <a data-atropos-offset="-15" href={CV} download className="btn  btn-primary">{t('header.download-cv')}</a>
            <a data-atropos-offset="-15" href="#contact" className="btn">{t('header.lets-talk')}</a>
        </div>
    );
};

export default CTA;
