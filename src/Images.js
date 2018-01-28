import React from 'react';
import Proptypes from "prop-types"

class  Images extends React.Component{ 
  state = {
    imgSrc: "",
  }
  eventHandler = () => {
    if(this.isElementInViewport(this.myImg)) {
      if(this.state.imgSrc === "") {
        window.removeEventListener("scroll", this.eventHandler)
        this.setState({
          imgSrc: this.props.src
        })
      }
    }
  }
  componentWillMount() {
    
  }
  componentDidMount() {
    if(this.isElementInViewport(this.myImg)) {
      this.setState({
        imgSrc:  this.props.src,
      })
    } else {
      window.addEventListener("scroll", this.eventHandler)
    }
    
  }
  componentWillUnMount() {
    window.removeEventListener("scroll", this.eventHandler)
  }
  isElementInViewport(el) {
    const { depth } = this.props
    if (!el) {
      return false
    }
  const rect = el.getBoundingClientRect();
  return (
    rect.top <= ((window.innerHeight || document.documentElement.clientHeight) + depth) &&
    rect.left >= 0 &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
  );
}

  render() {
    const { isDefer, stylesValue, alt=""} = this.props
    const {imgSrc} = this.state
    if(isDefer) {
      return (
        <img alt={alt} defer style={stylesValue} ref={img => this.myImg = img} src={imgSrc} />
      )
    } else {
      return (
        <img alt={alt} style={stylesValue} ref={img => this.myImg = img} src={imgSrc} />
      )
    } 
    
  }
}

export default Images;
