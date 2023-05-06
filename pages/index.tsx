import styles from '@/styles/Modules/Index.module.scss';
import Sidebar from '@/components/organisms/Sidebar/Sidebar';
import Desktop from '@/components/organisms/Desktop/Desktop';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Desktop />
      </div>
      <Sidebar />
    </div>
  )
}
