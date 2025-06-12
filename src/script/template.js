document.addEventListener('DOMContentLoaded', () => {
  class LandingComponent extends HTMLElement {
    connectedCallback() {
      if (!this.hasChildNodes()) {
        const template = document.getElementById('free-communication-template');
        const clone = template.content.cloneNode(true);
        this.appendChild(clone);
      }
    }
  }
  customElements.define('landing-component', LandingComponent);
  
  function positionLandingComponent() {
    let component = document.querySelector('landing-component');
  
    if (!component) {
      component = document.createElement('landing-component');
    }
  
    const isMobile = window.innerWidth <= 768;
    const mobileTarget = document.querySelector('.section__header-intro');
    const desktopTarget = document.querySelector('.section-universe');
  
    if (isMobile && mobileTarget?.nextElementSibling !== component) {
      mobileTarget?.parentNode.insertBefore(component, mobileTarget.nextSibling);
    } else if (!isMobile && desktopTarget?.nextElementSibling !== component) {
      desktopTarget?.parentNode.insertBefore(component, desktopTarget.nextSibling);
    }
  }
  
  window.addEventListener('load', positionLandingComponent);
  window.addEventListener('resize', positionLandingComponent);
})
