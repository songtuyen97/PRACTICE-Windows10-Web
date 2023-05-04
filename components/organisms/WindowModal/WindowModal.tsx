import { useMemo } from 'react';
import styles from './WindowModal.module.scss';

interface Props {
    active?: boolean;
    onClick: Function;
}

const WindowModal = (props: Props) => {
    const injectClass = useMemo(() => props.active ? styles.active : styles.inactive, [props.active]);

    return (
        <div
            className={styles.window_modal + " " + injectClass}
            onClick={() => props.onClick()}
        >
            <div className={styles.card} onClick={(e) => e.stopPropagation()}></div>
        </div>
    )
}

export default WindowModal;