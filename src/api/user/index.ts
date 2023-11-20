import { collection, doc, getDoc, getDocs, onSnapshot, query, updateDoc, where } from "firebase/firestore";
import { sendPasswordResetEmail } from "firebase/auth";

import { IUser } from "../../types";
import { auth, fireStoreDatabase } from "../../firebase-config";

export const checkLogin =
    async ({ userName, password }: Pick<IUser, "userName" | "password">) => {
        const queryStmt = query(
            collection(fireStoreDatabase, 'users'),
            where('userName', '==', `${userName}`),
            where('password', '==', `${password}`)
        ),
            querySnapshot = await getDocs(queryStmt);

        if (querySnapshot.docs.map(doc => doc.data()).length !== 0)
            return querySnapshot.docs.map(doc => doc.id)[0];
        return null;
    };

export const getUserByDocId = async (param: string) => {
    return (await getDoc(doc(fireStoreDatabase, 'users', param))).data();
};

export const getDocIdByField = async (field: string, param: string) => {
    const queryStmt = query(
        collection(fireStoreDatabase, 'users'),
        where(`${field}`, '==', `${param}`)
    ),
        querySnapshot = await getDocs(queryStmt);

    if (querySnapshot.docs.map(doc => doc.data()).length !== 0)
        return querySnapshot.docs.map(doc => doc.id)[0];
};

export const forgotPassword = (email: string) => {
    return sendPasswordResetEmail(auth, email);
};

export const resetPassword = async (id: string, password: string) => {
    const collectionRef = collection(fireStoreDatabase, 'users');
    const updateUserPassword = {
        password: password
    };

    const userRef = doc(collectionRef, id);
    await updateDoc(userRef, updateUserPassword);
};