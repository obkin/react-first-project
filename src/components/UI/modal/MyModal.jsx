import React, { useEffect } from 'react';
import classes from './MyModal.module.css';

const MyModal = ({ children, visible, setVisible }) => {

    const rootClasses = [classes.myModal];

    if (visible) {
        rootClasses.push(classes.active);
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            setVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [])

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={classes.myModalContent} onClick={(e) => e.stopPropagation()}>
                <div className={classes.myModalCloseBtn} onClick={() => setVisible(false)}>×</div>
                {children}
            </div>
        </div>
    );
};

export default MyModal;