import DesktopItem from '@/components/atoms/DesktopItem/DesktopItem';
import styles from './Desktop.module.scss';
import { useState } from 'react';

const Desktop = () => {
    const [itemsChosen, setItemsChosen] = useState<string[]>([]);

    return (
        <div className={styles.desktop} onClick={() => setItemsChosen([])}>
            <DesktopItem
                name="recycle_bin"
                src='/images/recycle_bin.svg'
                label='Recycle Bin'
                onClick={(item: string[]) => setItemsChosen(item)}
                active={itemsChosen.includes('recycle_bin')}
            />
            <DesktopItem
                name="visual_code"
                src='/images/visual_code.png'
                label='Visual Code'
                iconWidth={45}    
                iconHeight={45}
                onClick={(item: string[]) => setItemsChosen(item)}
                active={itemsChosen.includes('visual_code')}
            />
        </div>
    )
};

export default Desktop;