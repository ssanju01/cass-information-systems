import React, { useEffect } from "react";
import { connect } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import { showNotification } from '../store/global/actions';

function Notification(props) {
    const { globalState, showNotification } = props;
    useEffect(() => {
        const { notification } = globalState;
        if (globalState.showNotification > 0)
            toast(notification.message, {
                type: notification.variant,
                onClose: () => showNotification()
            });
    }, [globalState.showNotification]);

    return (
        <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop
            rtl={false}
            pauseOnFocusLoss={false}
            closeOnClick
            draggable={false}
            pauseOnHover={false}
            theme="light"
        />
    )
}

export default connect(state => ({ globalState: state.global, }), { showNotification })(Notification);