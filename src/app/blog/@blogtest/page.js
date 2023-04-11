import styles from "./style.module.css";

export default function Blogdetail({ params }) {
  console.log(params);
  return (
    <h1 className={styles.dashboard}>
      {"this is blog test page " + params.blogtest}
    </h1>
  );
}
