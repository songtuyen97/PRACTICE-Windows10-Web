import WindowModal from '@/components/organisms/WindowModal/WindowModal';
import styles from './Sidebar.module.scss';
import SidebarItem from '@/components/atoms/SidebarItem/SidebarItem';
import { useState } from 'react';
import SmallSettingItem from '@/components/atoms/SmallSettingItem/SmallSettingItem';
import NotificationModal from '@/components/organisms/NotificationModal/NotificationModal';

const Footer = () => {
    const [isActiveWindowModal, setIsActiveWindowModal] = useState(false);
    const [isActiveNotificationModal, setIsActiveNotificationModal] = useState(false);

    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebar_right}>
                <SidebarItem
                    name='windows'
                    src='/icons/windows.svg'
                    srcHover='/icons/windows_active.svg'
                    onClick={() => setIsActiveWindowModal(!isActiveWindowModal)}
                />
                <div className={styles.search_input__container}>
                    <input type="text" className={styles.search_input} placeholder='Type here to search' />
                </div>
                <SidebarItem
                    name='windows'
                    src='/icons/taskview.svg'
                    onClick={() => { }}
                />
                <SidebarItem
                    name='windows'
                    src='/icons/edge.svg'
                    iconHeight={27}
                    iconWidth={27}
                    onClick={() => { }}
                />
                <SidebarItem
                    name='windows'
                    src='/icons/folder.svg'
                    iconHeight={27}
                    iconWidth={27}
                    onClick={() => { }}
                />
                <SidebarItem
                    name='windows'
                    src='/icons/store.svg'
                    iconHeight={27}
                    iconWidth={27}
                    onClick={() => { }}
                />
            </div>
            <div className={styles.sidebar_right}>
                <div className={styles.small_setting}>
                    <SmallSettingItem
                        src='/icons/arrow_top.png'
                        onClick={() => { }}
                        iconWidth={16}
                        iconHeight={16}
                    />
                    <SmallSettingItem
                        src='/icons/volumn.png'
                        onClick={() => { }}
                    />
                    <SmallSettingItem
                        src='/icons/wifi.png'
                        onClick={() => { }}
                    />
                </div>
                <div className={styles.time}>
                    <span>8:54 PM</span>
                    <span>5/3/2023</span>
                </div>
                <SmallSettingItem
                    src='/icons/notification.png'
                    className={styles.notification}
                    onClick={() => setIsActiveNotificationModal(!isActiveNotificationModal)}
                />
                <div className={styles.desktop_shortcut}>
                </div>
            </div>
            <WindowModal active={isActiveWindowModal} onClick={() => setIsActiveWindowModal(!isActiveWindowModal)} />
            <NotificationModal onClick={() => setIsActiveNotificationModal(!isActiveNotificationModal)} active={isActiveNotificationModal} />
        </div>
    )
}

export default Footer;