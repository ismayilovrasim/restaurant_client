import React, {useEffect, useState, useRef} from "react";

const BackToTopBtn = (props) => {

  const {circleColor = "#e4c590", circleBgColor = "#fff"} = props;
  
  const backToTop = useRef();

  const scrollPercentage = () => {

    const scrollProgress = document.querySelector('.fl-progress');

    if (!scrollProgress) return;
    
    const progressValue = document.querySelector('.fl-progress-number');
    const pos = document.documentElement.scrollTop;
    const calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollValue = Math.round(pos * 100 / calcHeight); 

    scrollProgress.style.background = `conic-gradient(${circleColor} ${scrollValue}%, ${circleBgColor} ${scrollValue}%)`;
    isNaN(scrollValue) ? progressValue.textContent = '0%' : progressValue.textContent = `${scrollValue}%`;
    
    document.documentElement.scrollTop > 100 ? scrollProgress.classList.add('bottom-spacing') : scrollProgress.classList.remove('bottom-spacing');

  }

  useEffect(() => {
    window.addEventListener('scroll', scrollPercentage);
    scrollPercentage(); 
    backToTop.current.addEventListener('click', () => { document.documentElement.scrollTop = 0; });  
  }, [])

  return (
      <div className="fl-progress">
        <span className="fl-progress-number"></span>
        <i className="fa fa-chevron-up fl-progress-back-to-top" ref={backToTop}></i>
      </div> 
  );

};

export default BackToTopBtn;