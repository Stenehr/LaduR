import React from 'react'
import ReactDOM from 'react-dom';

const bottomRoot = document.querySelector("#bottom-content");

interface IState {
    el: HTMLElement
}

export default class BottomComponent extends React.Component<any, IState> {
    state = {
        el: document.createElement("div")
    }
    
    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        bottomRoot!.appendChild(this.state.el);
    }

    componentWillUnmount() {
        bottomRoot!.removeChild(this.state.el);
    }

    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.state.el
        )
    }
}
