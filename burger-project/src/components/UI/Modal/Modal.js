import React, {Component} from 'react';
import classes from './Modal.css'
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';

class Modal extends Component{
    shouldComponentUpdate(nextProps){
        return (nextProps.show!==this.props.show || (nextProps.children !== this.props.children && nextProps.show));
    }
    // componentWillUpdate(){
    //     console.log('updating');
    // }
    render(){
        return(
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.closeBackdrop}/>
                <div className={classes.Modal}
                    style={{transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)', opacity:this.props.show ? '1' : '0'}}>
                    {this.props.children}
                </div>
            </Aux>
        )
    }
} 

export default Modal;