import React from 'react';
export  function openWhatsapp(info: any, deviceType : any) {
    // const internationalFormattedNum = getInternationalFormattedNum(info?.mobile);
    let customer_mobile = info?.mobile ? info?.mobile : info?.user?.mobile
    let device_type = !deviceType ? 'DESKTOP' : 'MOBILE'
    if (device_type === 'DESKTOP'){
        window.open(
            'https://web.whatsapp.com/send?phone=' + customer_mobile,
        );
    }else{
        window.open(
            'https://api.whatsapp.com/send?phone=' + customer_mobile,
        );
    }
}

const DeviceTypes = {
    DESKTOP: 'DESKTOP',
    MOBILE: 'MOBILE',
};

export  function useResponsiveDevice() {
    const [device, setDevice] = React.useState(DeviceTypes.DESKTOP);

    React.useLayoutEffect(() => {
        const handleResize = () => {
            setDevice(
                window.innerWidth < 768 ? DeviceTypes.MOBILE : DeviceTypes.DESKTOP,
            );
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return {
        isMobile: device === DeviceTypes.MOBILE,
        isDesktop: device === DeviceTypes.DESKTOP,
    };
}

const WhatsappFooterButton = () => {

    const { isMobile } = useResponsiveDevice();

    return (
        <div className='whatsapp-button-wraper'>
            <div className='whatsapp-button-wraper-box'>
                <div className='whatsapp-button-main'
                onClick={()=>{
                    openWhatsapp({
                        mobile:'7838553377'
                    }, isMobile)
                }}
                >
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
