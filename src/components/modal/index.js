import { useRef, useEffect } from "react";
import styles from "./modal.module.scss";

const Modal = props => 
{
    const { children, visible, cancel = () => {}, isConfirm } = props
    const modalRef = useRef(null)
    const visibleRef = useRef(visible)


    visibleRef.current = visible

    const handleClose = e => 
    {
        const modalBody = modalRef.current
        if(!modalBody || modalBody.contains(e.target))
        {
            if(visibleRef.current)
                cancel()
        }
    }

    const handleEscape = e => 
    {
        if (visibleRef.current && e.key ==="Escape")
        {
            cancel()
        }
    }

    useEffect(() => 
    {
        if (!isConfirm)
        {
            window.addEventListener("mousedown", handleClose);
            window.addEventListener("keydown", handleEscape)

            return () => 
            {
                window.removeEventListener("mousedown", handleClose);
                window.removeEventListener("keydown", handleEscape);
            }
        }
        return () => {}
    }, [])

    return(
        <div 
            className={[
                styles.backdrop,
                visible && styles.active,
                isConfirm && styles["confirm-backdrop"]
            ].join(" ")}
        >
            <div 
                ref={modalRef}
                className={[
                    styles["modal-wrapper"],
                    visible && styles.active,
                    isConfirm && styles.confirm
                ].join(" ")}
            >
                {children}
                {cancel && 
                <div onClick={cancel}>
                    <img alt="close" src="/delete.svg" className={styles.bar}/>
                </div>
                }
            </div>
        </div>
    )
}


export default Modal
