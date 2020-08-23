import React, {useEffect} from 'react';
import {createPortal} from "react-dom";


function ModalPortal({children, className}) {
    const UploadScanModalRoot = document.getElementById("modal");
    const element = document.createElement('div');
    element.classList.add(className);

    useEffect(() => {
        UploadScanModalRoot.appendChild(element);

        return () => {
            UploadScanModalRoot.removeChild(element)
        }
    }, [UploadScanModalRoot, element])

    return createPortal(children, element);
}

export default ModalPortal;
