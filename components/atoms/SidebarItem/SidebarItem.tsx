import Image from "next/image";
import styles from "./SidebarItem.module.scss";

interface Props {
    name?: string;
    src: string;
    srcHover?: string;
    alt?: string;
    status?: 'one' | 'multi' | 'none';
    active?: boolean;
    onClick: Function;
    iconWidth?: number;
    iconHeight?: number;
} 

const SidebarItem = (props: Props) => {
    const status = props.status || 'none';
    const srcHover = props.srcHover || props.src;
    const iconWidth = props.iconWidth || 22;
    const iconHeight = props.iconHeight || 22;

    return (
        <div
            onClick={() => props.onClick()}
            className={`${styles.sidebar_item} ${props.active ? styles.active : ''}`}>
            <div className={styles.icon}>
                <Image 
                    src={props.src}
                    alt={props.alt || ''}
                    width={iconWidth}
                    height={iconHeight}
                    className={styles.image}
                />
                <Image 
                    src={srcHover}
                    alt={props.alt || ''}
                    width={iconWidth}
                    height={iconHeight}
                    className={styles.image_hover}
                />
            </div>
            <div className={styles[status]}></div>
        </div>
    )
}

export default SidebarItem;