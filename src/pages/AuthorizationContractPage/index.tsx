import classNames from "classnames/bind";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { Table } from "~/component/Table";
import { Input } from "~/component/Input";
import { ActionBar } from "~/component/ActionBar";
import { OptionMenu } from "~/component/OptionMenu";
import { IGlobalConstantsType } from "~/types";
import { CB_OWNER_ITEMS, VALIDITY_CONTRACT_ITEMS } from "~/constants";

import styles from "~/sass/AuthorizationContractPage.module.scss";
import { ActionBarItem } from "~/component/ActionBar/ActionBarItem";
const cx = classNames.bind(styles);

interface AuthorizationContractProps { };

const initialState = {
    id: 1,
    title: ""
};

function AuthorizationContractPage({ }: AuthorizationContractProps) {
    const navigate = useNavigate();

    const [ownership, setOwnerShip] = useState<IGlobalConstantsType>(initialState);
    const [validity, setValidity] = useState<IGlobalConstantsType>(initialState);
    const [searchValue, setSearchValue] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };

    const handleClickSearch = () => { };

    return (
        <div className={cx("wrapper")}>
            <div className={cx("action")}>
                <div className={cx("filter")}>
                    <OptionMenu
                        title="Quyền sở hữu"
                        data={CB_OWNER_ITEMS}
                        setState={setOwnerShip}
                    />
                    <OptionMenu
                        title="Hiệu lực hợp đồng"
                        data={VALIDITY_CONTRACT_ITEMS}
                        setState={setValidity}
                    />
                </div>
                <div className={cx("search")}>
                    <Input
                        id="search"
                        name="search"
                        value={searchValue}
                        placeholder="Tên hợp đồng, số hợp đồng, người uỷ quyền..."
                        size="custom"
                        iconRight="./images/search_icon.png"
                        onChange={(event) => handleChange(event)}
                        onIconRightClick={handleClickSearch}
                    />
                </div>
            </div>
            <Table
                className="contract"
                loading={false}
            >
                <tbody>
                    <tr className={cx("contract_title")}>
                        <th className={cx("numerical-order", "title")}>STT</th>
                        <th className={cx("contract-code", "title")}>Số hợp đồng</th>
                        <th className={cx("contract-name", "title")}>Tên hợp đồng</th>
                        <th className={cx("authorized-person", "title")}>Người uỷ quyền</th>
                        <th className={cx("ownership", "title")}>Quyền sở hữu</th>
                        <th className={cx("effective-contract", "title")}>Hiệu lực hợp đồng</th>
                        <th className={cx("date-created", "title")}>Ngày tạo</th>
                        <th className={cx("action-detail", "title")}>&nbsp;</th>
                        <th className={cx("reason", "title")}>&nbsp;</th>
                    </tr>
                    <tr className={cx("contract_item")}>
                        <td className={cx("numerical-order", "content")}>1</td>
                        <td className={cx("contract-code", "content")}>HD123</td>
                        <td className={cx("contract-name", "content")}>Hợp đồng uỷ quyền bài hát</td>
                        <td className={cx("authorized-person", "content")}>Vương Anh Tú</td>
                        <td className={cx("ownership", "content")}>Người biểu diễn</td>
                        <td className={cx("effective-contract", "content")}>
                            <span className={cx("--center-flex")}>
                                <img src="./images/ellipse_effect.png" />
                                <p>Còn thời hạn</p>
                            </span>
                        </td>
                        <td className={cx("date-created", "content")}>01/04/2021 15:53:13</td>
                        <td
                            className={cx("action-detail", "content")}
                            onClick={() => navigate(`/contract-management/authorization-contract/HD123`)}
                        >
                            Xem chi tiết
                        </td>
                        <td className={cx("reason", "content")}>Lý do huỷ</td>
                    </tr>
                    <tr className={cx("contract_item")}>
                        <td className={cx("numerical-order", "content")}>1</td>
                        <td className={cx("contract-code", "content")}>HD123</td>
                        <td className={cx("contract-name", "content")}>Hợp đồng uỷ quyền bài hát</td>
                        <td className={cx("authorized-person", "content")}>Vương Anh Tú</td>
                        <td className={cx("ownership", "content")}>Người biểu diễn</td>
                        <td className={cx("effective-contract", "content")}>
                            <span className={cx("--center-flex")}>
                                <img src="./images/ellipse_effect.png" />
                                <p>Còn thời hạn</p>
                            </span>
                        </td>
                        <td className={cx("date-created", "content")}>01/04/2021 15:53:13</td>
                        <td className={cx("action-detail", "content")}>Xem chi tiết</td>
                        <td className={cx("reason", "content")}>Lý do huỷ</td>
                    </tr>
                </tbody>
            </Table>
            <ActionBar visible={true}>
                <ActionBarItem title="Thêm hợp đồng" icon="./images/u_plus.png" />
            </ActionBar>
        </div>
    );
};

export default AuthorizationContractPage;