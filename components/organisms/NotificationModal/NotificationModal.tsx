import NotiSettingItem from '@/components/atoms/NotiSettingItem/NotiSettingItem';
import { useMemo } from 'react';
import styles from './NotificationModal.module.scss';

interface Props {
    active?: boolean;
    onClick: Function;
}

const NotificationModal = (props: Props) => {
    const injectModalClass = useMemo(() => props.active ? styles.active : styles.inactive, [props.active]);

    return (
        <div
            onClick={() => props.onClick()}
            className={styles.notification_modal + " " + injectModalClass}>
            <div onClick={(e) => e.stopPropagation()} className={styles.card}>
                <div className={styles.card_header}>
                    <p>Manage Notifications</p>
                </div>
                <div className={styles.card_content}>
                    <p>No New Notifications</p>
                </div>
                <div className={styles.card_footer}>
                    <p className={styles.expand_title}>Expand</p>

                    <div className={styles.notification_setting}>
                        <NotiSettingItem />
                        <NotiSettingItem />
                        <NotiSettingItem />
                        <NotiSettingItem />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotificationModal;