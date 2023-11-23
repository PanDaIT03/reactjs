import { collection, getDocs, query } from "firebase/firestore";
import { fireStoreDatabase } from "~/firebase-config";
import { IRole } from "~/types/RoleType";

export const getRole = async () => {
    const queryStmt = query(collection(fireStoreDatabase, 'roles'));
    const querySnapshot = await getDocs(queryStmt);
    const role: IRole[] = [];

    querySnapshot.docs.map(doc => {
        role.push({ id: doc.id, role: doc.data().role });
    });

    return role;
};