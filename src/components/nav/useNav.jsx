import "./nav.css";
export const useNav = () => {

    const changeActive = (className) => {
        let nav = document.querySelector('nav');
        nav.querySelector('.active').classList.remove('active')        
        nav.querySelector('.'+className).classList.add('active')
    };
    
    return {
        changeActive,
    }
};
