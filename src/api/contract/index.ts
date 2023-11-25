import { collection, getDocs, query } from "firebase/firestore";
import { orderByChild } from "firebase/database";

import { fireStoreDatabase } from "~/firebase-config";
import { IContract } from "~/types";

export const getContract = async () => {
    const queryStmt = query(collection(
        fireStoreDatabase,
        'contract'
    ));
    const querySnapshot = await getDocs(queryStmt);
    const contracts: IContract[] = [];

    querySnapshot.docs.map(doc => {
        contracts.push({
            docId: doc.id,
            censored: doc.data().censored,
            contractCode: doc.data().contractCode,
            contractTypesId: doc.data().contractTypesId,
            customer: doc.data().customer,
            dateCreated: doc.data().dateCreated,
            effectiveDate: doc.data().effectiveDate,
            expirationDate: doc.data().expirationDate,
            status: doc.data().status
        });
    });

    return contracts;
};