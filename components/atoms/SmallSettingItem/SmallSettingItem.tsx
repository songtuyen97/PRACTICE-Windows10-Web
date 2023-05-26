import Image from 'next/image';
import styles from './SmallSettingItem.module.scss';

interface Props {
    name?: string;
    src: string;
    alt?: string;
    active?: boolean;
    onClick: Function;
    iconWidth?: number;
    iconHeight?: number;
    className?: string;
}

const SmallSettingItem = (props: Props) => {
    const iconWidth = props.iconWidth || 22;
    const iconHeight = props.iconHeight || 22;

    return (
        <div
            onClick={() => props.onClick()}
            className={styles.small_setting_item + " " + props.className}>
            <Image
                src={props.src}
                alt={props.alt || ''}
                width={iconWidth}
                height={iconHeight}
                className={styles.image}
            />
        </div>
    )
}

export default SmallSettingItem;