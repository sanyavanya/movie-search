import styles from "./Atom.Layout.module.scss";

export default function Layout({ children }) {
  return <div className={styles.container}>{children}</div>;
}
