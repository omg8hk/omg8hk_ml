import React from 'react';
import'./css/main.css';
import'./css/font-awesome.css';
import'./css/myStyle2.css';
import Banner from './Banner';
import Menu from './Menu';
import Footer from './Footer';
import Header from './Header';
import GridAccordion from './GridAccordion';
import Loading from './Loading';
class Homepage extends React.Component{
    constructor(props){
      super(props);
      this.state={
        pageArr:[],menuArr:[], dataIsReturned : false
      }
      this.page=props.page;
      var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };
    if( isMobile.any() )
        this.jpgName="-1.jpg"
    else
        this.jpgName=".jpg"
    }
    componentWillMount(){
        fetch("https://script.google.com/macros/s/AKfycbz_bCXOHyJKO9j5Qx4COWRD1zYgCoClrbtRyIHZDOMiMTX1Ar-L/exec?sheet="+this.page.toUpperCase())
        .then(response => response.json())
        .then((jsonData) => {
            this.setState({pageArr:jsonData.page,menuArr:jsonData.menu,slideArr:jsonData.slide,dataIsReturned:true});
        })
        .catch((error) => {
            console.error(error);
        })
    }
    render(){
        if (this.state.dataIsReturned)
            return(
            <div className="Main">
			    <Header/>

			    <Menu arr={this.state.pageArr} arrM={this.state.menuArr}/>

                <Banner page={this.page} jpgName={this.jpgName} arr={this.state.slideArr}/>
            
			    <GridAccordion arr={this.state.pageArr} page={this.page} jpgName={this.jpgName}/>

			    <Footer/>
            </div>
            )
        else
            return(
                <Loading/>
            );
    }
}
export default Homepage;
