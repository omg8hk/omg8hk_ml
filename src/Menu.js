import React from 'react';
class Menu extends React.Component{
    render() {
        return (
            <nav id="menu">
				<ul className="links">
                    <li><a href="/">Home</a></li>
                    {this.menu()}	
                </ul>
			</nav>
        );
    }
    menu=()=>{
        if(this.props.arrM>0)
            return(
                this.props.arrM.map((item,i)=><li key={i}><a href={item.link}>{item.title}</a></li>)
            );
        else
            return(
                this.props.arr.map((item,i)=><li key={i}><a href={item.link}>{item.title}</a></li>)
            );
    }
}

export default Menu;