import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import'./css/myStyle.css';
import'./css/default.css';
import'./css/component.css';
import $ from "jquery";
import './js/jquery.cbpNTAccordion.js';
class GridAccordion extends React.Component{
    constructor(props){
        super(props);
        this.lastD="";
        this.isSubOpen=false;
        this.lastT="";
        this.lvl=1;
        this.isST=false; //Special Trigger
        this.htmlEle="";
    }
    componentDidUpdate(){
        if(this.props.arr!==[]&&!this.isSelect){
            $( '#cbp-ntaccordion' ).cbpNTAccordion();
            this.isSelect=true;
        }
    }
    componentDidMount(){
        // var acc = document.getElementsByClassName("accordion");
        // var i;

        // for (i = 0; i < acc.length; i++) {
        //     acc[i].addEventListener("click", function() {
        //         this.classList.toggle("active");
        //         var panel = this.nextElementSibling;
        //         if (panel.style.maxHeight) {
        //             panel.style.maxHeight = null;
        //         } else {
        //             panel.style.maxHeight = panel.scrollHeight + "px";
        //         }
        //     });
        // }
    }
    render(){
        if (Array.isArray(this.props.arr) && this.props.arr.length) {
            var parse = require('html-react-parser');
            if(this.props.page.toUpperCase()==='INDEX'||this.props.page.toUpperCase()==='FORM'||this.props.page.toUpperCase()==='RESOURCE'){
                return(
                    <section id="one" className="wrapper style2">
                        <div className="inner">
                            <div className="grid-style">
                                {
                                    this.props.arr.map((item,i)=>{
                                        if(item.image.trim()==='')
                                            return(
                                                <div key={i}>
                                                    <div className="box">
                                                        <div className="content">
                                                            <header className="align-center">
                                                                <h2>[{item.title}]</h2>
                                                            </header>
                                                            <footer className="align-center">
                                                                <a href={item.link} className="button alt">Learn More</a>
                                                            </footer>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        else
                                            return(
                                                <div key={i}>
                                                    <div className="box">
                                                        <div className="image fit">
                                                            <LazyLoadImage src={require("./images/"+item.image.split(".")[0]+this.props.jpgName)} alt="" effect="blur"/>
                                                        </div>
                                                        <div className="content">
                                                            <header className="align-center">
                                                                <h2>[{item.title}]</h2>
                                                            </header>
                                                            <footer className="align-center">
                                                                <a href={item.link} className="button alt">Learn More</a>
                                                            </footer>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                    }
                                    
                                    )
                                }
                            </div>
                        </div>
                    </section>
                );
            }else{
                return(
                    <section id="one" className="wrapper style2">			
                        <div className="inner">
                            <ul id="cbp-ntaccordion" className="cbp-ntaccordion">
                            {
                                this.props.arr.map((item,i)=>{
                                    if(item.link==='-'||item.link==='')
                                        item.link='';
                                    if(this.lastD!== item.date)
                                    {   
                                        if(this.lvl===2)
                                        {
                                            this.htmlEle+='</ul>';
                                        }
                                        this.lvl=1;
                                        if(item.subtitle==="")
                                            this.htmlEle+='<li><h3 class="cbp-nttrigger">'+item.date+'</h3><div class="cbp-ntcontent"><p>'+item.title+' '+item.subtitle+'<br /><a href="'+item.link+'" target="_blank">'+item.link+'</a></p>';
                                        else
                                        {
                                            this.htmlEle+= '<li><h3 class="cbp-nttrigger">'+item.date+'</h3><div class="cbp-ntcontent"><ul class="cbp-ntsubaccordion"><li><h4 class="cbp-nttrigger">'+item.title+'</h4><div class="cbp-ntcontent"><p>'+item.subtitle+'<br /><a href="'+item.link+'" target="_blank">'+item.link+'</a></p>';
                                            this.lvl++;
                                        }
                                    }
                                    else
                                    {
                                        if(this.lvl===2)
                                        {
                                            if(this.lastT!==item.title)
                                            {
                                                if(item.subtitle==="")
                                                {
                                                    this.lvl=1;
                                                    this.htmlEle+= '</ul><p>'+item.title+' '+item.subtitle+'<br /><a href="'+item.link+'" target="_blank">'+item.link+'</a></p>';
                                                }
                                                else	
                                                    this.htmlEle+= '<li><h4 class="cbp-nttrigger">'+item.title+'</h4><div class="cbp-ntcontent"><p>'+item.subtitle+'<br /><a href="'+item.link+'" target="_blank">'+item.link+'</a></p>';
                                            }
                                            else
                                                this.htmlEle+= '<p>'+item.subtitle+'<br /><a href="'+item.link+'" target="_blank">'+item.link+'</a></p>';
                                        }
                                        else
                                        {
                                            if(item.subtitle==="")
                                            {
                                                if(this.lastT!==item.title)
                                                    this.htmlEle+= '<p>'+item.title+' '+item.subtitle+'<br /><a href="'+item.link+'" target="_blank">'+item.link+'</a></p>';
                                                else
                                                    this.htmlEle+='<li><h4 class="cbp-nttrigger">'+item.title+'</h4><div class="cbp-ntcontent"><p>'+item.subtitle+'<br /><a href="'+item.link+'" target="_blank">'+item.link+'</a></p>';
                                            }
                                            else
                                            {
                                                this.htmlEle+='<ul class="cbp-ntsubaccordion"><li><h4 class="cbp-nttrigger">'+item.title+'</h4><div class="cbp-ntcontent"><p>'+item.subtitle+'<br /><a href="'+item.link+'" target="_blank">'+item.link+'</a></p>';
                                                this.lvl++;
                                            }
                                        }
                                    
                                    }
                                    this.lastT=item.title;	
                                    this.lastD=item.date;
                                }
                                )
                            }
                            {parse(this.htmlEle)}
                            </ul>
                        </div>
                    </section>
                );
            }
        }else{
            return(
                <section id="one" className="wrapper loading">
                    <center> Loading.....</center>
                </section>
            );
        }

        
    }

}
export default GridAccordion;
