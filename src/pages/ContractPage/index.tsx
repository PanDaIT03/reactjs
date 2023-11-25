import classNames from "classnames/bind";

import { Contract } from "~/component/Contract";
import AuthorizationContractPage from "../AuthorizationContractPage";

import styles from "~/sass/Contract.module.scss";
const cx = classNames.bind(styles);

function ContractPage() {
    return (
        <Contract>
            <AuthorizationContractPage />
        </Contract>
    )
};

export default ContractPage;