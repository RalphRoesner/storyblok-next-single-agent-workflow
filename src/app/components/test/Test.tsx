import classNames from "classnames";
import styles from "./Test.module.scss";

export default function Test() {
return (
    <h2 className={classNames("bg-amber-400", styles.test)}>Das ist eine H2</h2>
)
} 