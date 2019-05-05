import React, { Component } from 'react';
import Photoitem from './Photoitem';
import './App.css';

class App extends Component {
  state= {
    Photos:[
      {link: "https://imgnooz.com/sites/default/files/wallpaper/travel/65961/bora-bora-wallpapers-65961-5529879.jpg"},
      {link: "http://thewowstyle.com/wp-content/uploads/2015/07/natural-water-bridge-hd-pictures.jpg.jpg"},
      {link: "https://images.wallpaperscraft.com/image/cornwall_england_celtic_sea_cape_lands_end_105653_1680x1050.jpg"},
      {link: "https://www.aboutmanchester.co.uk/wp-content/uploads/2018/07/57a0b9b0d7c3dbb8028b5e33-750-500.jpg"},
      {link: "http://inn.spb.ru/images/200/DSC100297196.jpg"},
      {link: "http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/42/l6/p042l6j9.jpg"},
      {link: "https://imgnooz.com/sites/default/files/wallpaper/travel/65961/bora-bora-wallpapers-65961-5529879.jpg"},
      {link: "http://thewowstyle.com/wp-content/uploads/2015/07/natural-water-bridge-hd-pictures.jpg.jpg"},
      {link: "https://images.wallpaperscraft.com/image/cornwall_england_celtic_sea_cape_lands_end_105653_1680x1050.jpg"},
      {link: "https://www.aboutmanchester.co.uk/wp-content/uploads/2018/07/57a0b9b0d7c3dbb8028b5e33-750-500.jpg"},
      {link: "http://inn.spb.ru/images/200/DSC100297196.jpg"},
      {link: "http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/42/l6/p042l6j9.jpg"},
    ],
    photoNum : 1,
    backgroundColor: "#FFFFFF"
  }

  handlePhotoNum = (e) => {
    if (e.target.value < 0 || e.target.value > this.state.Photos.length) {
      return 
    }
    this.setState({
      photoNum: e.target.value
    })
  }

  handleColor = (e)=>{
    document.body.style = `background: ${e.target.value};`
    this.setState({
      backgroundColor: e.target.value
    })
  }

render() {
    return (
      <div className="App" style={{ backgroundColor: this.state.backgroundColor }}>
        <h1>IMAGE WORLD </h1>
        <form>
          <label>
            Enter the number of photos! 
          </label> 
          <input type="number"  value={this.state.photoNum}  onChange={this.handlePhotoNum}></input>
          <input type="color" value={this.state.backgroundColor} onChange={this.handleColor}></input>

        </form>
        
          {this.state.Photos.map(
            (el, i)=>{
              if(i < this.state.photoNum){
                return <Photoitem link={el.link}/>
              }   else  return <p> </p>
            }
          )}
      </div>
    );
  }
}

export default App;

