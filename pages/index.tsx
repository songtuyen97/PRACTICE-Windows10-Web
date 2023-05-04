import styles from '@/styles/Modules/Index.module.scss';
import Sidebar from '@/components/organisms/Sidebar/Sidebar';

export default function Home() {
  return (
    <div className={styles.container}>
      <Sidebar />
    </div>
  )
}
