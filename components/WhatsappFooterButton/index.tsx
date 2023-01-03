import React from 'react';

const WhatsappFooterButton = () => {
    return (
        <div className='whatsapp-button-wraper'>
            <div className='whatsapp-button-wraper-box'>
                <div className='whatsapp-button-main'>
                    <div className='row' style={{alignItems : 'center'}}>
                        <div className='col-10' style={{paddingRight : '0px'}}>
                            <div className='whatsapp-text'>
                                Facing a Challenge;
                                <br></br>
                                <p style={{fontSize : '15px', paddingBottom : '0px', marginBottom : '0px'}}>Want to Talk?</p>
                            </div>
                        </div>
                        <div className='col-2' style={{paddingLeft : '0px', paddingRight : '0px'}}>
                            <div className='whatsapp-icon'>
                                <img src='/icons/whatsapp.svg' width= '34' alt="whats App" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatsappFooterButton