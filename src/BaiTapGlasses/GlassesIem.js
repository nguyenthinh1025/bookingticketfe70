import React, { Component } from 'react'
import { connect } from 'react-redux';
class GlassesIem extends Component {
    render () {
        let { sp } = this.props;
        return (
            <button style={{ outline: 'none', border: 'none', backgroundColor: 'white' }}>

                <img src={sp.url} style={{ width: '100%' }} onClick={() => {
                    this.props.xemChiTietSP(sp);
                }}></img>
            </button>


        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

        xemChiTietSP: (sanPhamClick) => {

            const action = {
                type: 'XEM_CHI_TIET_SP',
                sanPhamClick
            }
            dispatch(action);
        }
    }
}

export default connect(null, mapDispatchToProps)(GlassesIem);