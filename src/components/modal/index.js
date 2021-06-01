/* eslint-disable react/prop-types */

import React, { useRef, useEffect } from 'react'
import styles from './modal.module.scss'

const Modal = props => {
  const { children, visible, cancel = () => {}, isConfirm, cancelIcon, className, type } = props
  const modalRef = useRef(null)
  const visibleRef = useRef(visible)

  visibleRef.current = visible

  const handleClose = e => {
    const modalBody = modalRef.current
    if (!modalBody || !modalBody.contains(e.target)) {
      if (visibleRef.current) { cancel() }
    }
  }

  const handleEscape = e => {
    if (visibleRef.current && e.key === 'Escape') {
      cancel()
    }
  }

  useEffect(() => {
    if (!isConfirm) {
      window.addEventListener('mousedown', handleClose)
      window.addEventListener('keydown', handleEscape)

      return () => {
        window.removeEventListener('mousedown', handleClose)
        window.removeEventListener('keydown', handleEscape)
      }
    }
    return () => {}
  }, [])

  return (
        <div
            className={[
              styles[type || 'main'],
              styles.backdrop,
              visible && styles.active,
              isConfirm && styles['confirm-backdrop'],
              className
            ].join(' ')}
        >
            <div
                ref={modalRef}
                className={[
                  styles['modal-wrapper'],
                  visible && styles.active,
                  isConfirm && styles.confirm
                ].join(' ')}
            >
                {children}
                {cancel && cancelIcon
                  ? <div onClick={cancel} className={styles['close-icon']}>
                    <img src="/close.svg" alt="delete icon"/>
                </div>
                  : null
                }
            </div>
        </div>
  )
}

export default Modal
