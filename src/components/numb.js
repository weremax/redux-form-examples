import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNumb } from '../actions';


class Numb extends Component {
    constructor(props) {
        super(props);
        this.onClicked = this.onClicked.bind(this);
    }

    onClicked() {
        this.props.getNumb();
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <button onClick={this.onClicked}>Click</button>
                <b>{this.props.numb}</b>
            </div>
        )
    }
}

function mapStateToProps({ numb }) {
    console.log('&&', numb);
    return { numb: numb.numb };
}

export default connect(mapStateToProps, { getNumb } )(Numb);