import Image from 'next/image';
import styles from './DesktopItem.module.scss';
import { useMemo } from 'react';

interface Props {
    name?: string;
    src: string;
    srcHover?: string;
    alt?: string;
    iconWidth?: number;
    iconHeight?: number;
    label?: string;
    active?: boolean;
    onClick: Function;
}

const DesktopItem = (props: Props) => {
    const iconWidth = props.iconWidth || 50;
    const iconHeight = props.iconHeight || 50;

    const injectItemClass = useMemo(() => props.active ? styles.active : '', [props.active]);

    return (
        <div className={styles.container}>
            <div
                onClick={(e) => { e.stopPropagation(); props.onClick([props.name]); }}
                className={styles.desktop_item + ' ' + injectItemClass}>
                <Image
                    src={props.src}
                    alt={props.alt || ''}
                    width={iconWidth}
                    height={iconHeight}
                    className={styles.image}
                />
                {props.label}
            </div>
        </div>
    )
}

export default DesktopItem;