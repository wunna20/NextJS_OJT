import '../globals.css'
import styles from './breaking.module.css';

export default function Page() {
  return (
    <div className={styles.component}>
      <div>BREAKING</div>
      <div>
        <button onClick={() => console.log('ehll0')}>
          break this
        </button>
      </div>
    </div>
  );
}