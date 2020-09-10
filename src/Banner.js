import React from 'react';
class App extends React.Component{
    componentDidUpdate(){
        // if(this.props.arr!==[]&&!this.isScript){
        //     let script = document.createElement("script");
        //     script.src = "assets/js/main.js";
        //     document.body.appendChild(script);
        //     this.isScript=true;
        // }
    }
    componentDidMount(){
        let script = document.createElement("script");
            script.src = "/omg8hk_ml/assets/js/main.js";
            document.body.appendChild(script);
    }
    render() {
        return (
            <section className="banner full">
            {
                this.props.arr.map((item,i)=>{
                    if(item.page===this.props.page.toUpperCase()){
                        return(
                            <article key={i}>
                                <img data-src={require("./slide/"+this.props.page+"/slide0"+item.seq+this.props.jpgName)} className="lazyload" alt=""/>
                                <div className="inner">
                                    <header>
                                        <p style={{'fontSize':'2vw'}}>{item.sentence}</p>
                                        <h2 style={{'fontSize':'5vw'}}>{item.title}</h2>
                                    </header>
                                </div>
                            </article>
                        );
                    }
                    return null;
                }
                )
            }
            </section>
        );
    }
}

export default App;
