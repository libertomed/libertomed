import React, { useEffect } from "react";

const TranslationSwitch = ({translation, t}) => {

    const changeLang = () => {
        let inputSwitch = document.getElementById('switcher-1')
        // document.getElementById('switcher-1').checked ? i18n.changeLanguage ("en") : i18n.changeLanguage ("es")
        translation.changeLanguage (inputSwitch.checked ? "en" : "es")
        setLang(inputSwitch)

        return inputSwitch
    }
    
    const setLang = (inputSwitch) => {
        inputSwitch.setAttribute('before', t('languages.english'))
        inputSwitch.setAttribute('after', t('languages.spanish'))
    }

    useEffect(() => {
        changeLang()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);



    return (
        <div id="home">
            <span className="switcher switcher-1">
                <input onClick={() => {changeLang()}} type="checkbox" id="switcher-1" />
                <label htmlFor="switcher-1"></label>
            </span>
        </div>
    )
};

export default TranslationSwitch;
