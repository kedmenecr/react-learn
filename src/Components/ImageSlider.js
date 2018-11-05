import React from 'react'

export default class ImageSlider extends React.Component {
  state = {
    images: [
      'http://wowslider.com/sliders/demo-77/data1/images/field175959_1920.jpg',
      'http://wowslider.net/local-sliders/demo-10/data1/images/road220058.jpg',
      'http://www.cubatv.icrt.cu/wp-content/uploads/2018/03/jornada-sobre-carreteras-y-la-vegetacion.jpg',
      'http://slidervilla.com/smooth-slider/files/2014/05/3.jpg'
    ],
    idx: 0
  }

  handleNext = () => {
    console.log(this.state, 'before')
    this.setState({
      idx: this.state.idx + 1 > this.state.images.length - 1
        ? 0
        : this.state.idx + 1
    })
    console.log(this.state, 'after')
  }

  render () {
    return (
      <div>
        <img
          style={{
            width: 400,
            height: 200
          }}
          src={this.state.images[this.state.idx]}
          alt=''
        />
        <button onClick={this.handleNext}>next</button>
      </div>
    )
  }
}
