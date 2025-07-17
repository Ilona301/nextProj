"use client"

import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchUsers} from "../../Redux/Slices/usersSlice";
import {log} from "next/dist/server/typescript/utils";


export default function Home() {

    const dispatch = useDispatch()
    const {users, loading} = useSelector(state => state.users || {});
    useEffect(() => {
        dispatch(fetchUsers())

    }, [])

    return (
        <div>
            <ul>
                {!loading && users.length > 0 ?
                    users.map(user => (
                        <li key={user.id}>
                            {user.name}
                        </li>
                    )) :
                    <span>loading</span>}
            </ul>
        </div>
    );
}
