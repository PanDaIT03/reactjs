import classNames from "classnames/bind";
import { useSelector } from "react-redux";

import { RootState } from "../../state";
import styles from "../../sass/Home.module.scss";
const cx = classNames.bind(styles);

function Home() {
    const userState = useSelector((state: RootState) => state.user);

    return (
        <div className={cx("wrapper")}>
            <h2>Home</h2>
        </div>
    );
};

export default Home;