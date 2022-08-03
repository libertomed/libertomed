import React, { useEffect } from "react";

const TranslationSwitch = ({translation, t}) => {

    const changeLang = () => {
        let inputSwitch = document.getElementById('switcher-1')
        // document.getElementById('switcher-1').checked ? i18n.changeLanguage ("en") : i18n.changeLanguage ("es")
        translation.changeLanguage (inputSwitch.checked ? "en" : "es")
        setLang(inputSwitch)
    }
    
    useEffect(() => {
        changeLang()
    });


    const setLang = (inputSwitch) => {
        inputSwitch.setAttribute('before', t('languages.english'))
        inputSwitch.setAttribute('after', t('languages.spanish'))
    }

    return (
        <div id="mydiv">
            <span class="switcher switcher-1">
                <input onClick={() => {changeLang()}} type="checkbox" id="switcher-1" />
                <label for="switcher-1"></label>
            </span>
        </div>
    )
};

export default TranslationSwitch;
