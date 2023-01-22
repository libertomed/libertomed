import React from "react";
import CV from "../../assets/cv_liberto_medina.pdf"
import { useNav } from "../nav/useNav";

const CTA = ({t}) => {

    const { changeActive } = useNav() 
    return (
        <div className="cta">
            <a 
                data-atropos-offset="-15"
                href={CV} download className="btn  
                btn-primary"
            >
                {t('header.download-cv')}
            </a>
            <a
                data-atropos-offset="-15"
                href="#contact" 
                className="btn"
                onClick={() => changeActive("contact")}
            >
                {t('header.lets-talk')}
            </a>
        </div>
    );
};

export default CTA;
