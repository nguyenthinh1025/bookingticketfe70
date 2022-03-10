import React, { Component, Fragment } from 'react'
import './BaiTapBookingTicket.css';
import ThongTinGhe from './ThongTinGhe';
import danhSachGhe from './../Data/danhSachGhe.json';
import HangGhe from './HangGhe';
export default class BaiTapBookingTicket extends Component {

    renderHangGhe = () => {
        return danhSachGhe.map((hangGhe, index) => {
            return <div key={index} >
                <HangGhe hangGhe={hangGhe} soHangGhe={index} />
            </div>
        })
    }
    render () {
        return (
            <div>
                <div style={{ position: "fixed", backgroundSize: '100%', width: '100%', height: '100%', backgroundImage: "url('./img/bgmovie.jpg')" }}>

                    <div style={{ position: 'fixed', width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.6)' }}>

                        <div className='container-fluid'>
                            <div className='row'>
                                <div className='col-8 text-center'>
                                    <div className='text-warning display-4  '> ĐẶT  VÉ XEM PHIM CYBERLEARN.VN</div>
                                    <div className='mt-3 text-light' style={{ fontSize: '25px' }}>Màn Hình</div>
                                    <div className='mt-2' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

                                        <div className='screen'></div>
                                        {this.renderHangGhe()};
                                    </div>

                                </div>
                                <div className='col-4'>
                                    <div className='text-light mt-2 text-center' style={{ fontSize: '20px' }}> DANH SÁCH GHẾ BẠN CHỌN</div>
                                    <ThongTinGhe />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

