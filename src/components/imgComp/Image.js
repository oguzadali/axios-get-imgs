import React, { Component } from 'react'

export default class Image extends Component {

    constructor(props) {
        super(props);
        this.state = { spanCount: 1 };
        this.myRef = React.createRef();
    }

    componentDidMount() {
        this.myRef.current.addEventListener('load', () => {
            // console.log(this.myRef.current.clientHeight);
            const spanIn = Math.round(this.myRef.current.clientHeight / 5) + 1;
            this.setState({ spanCount: spanIn })
        })
    }

    render() {
        const { i } = this.props;
        return (
            <img style={{ gridRowEnd: `span ${this.state.spanCount}` }}
                ref={this.myRef} key={i.id} src={i.urls.small} alt="" />
        )
    }
}
