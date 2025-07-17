"use client"

import React, {useState} from 'react';
import {registerUser} from "../../../Redux/Slices/usersSlice";
import {useDispatch, useSelector} from "react-redux";

const Page = () => {
    const dispatch = useDispatch();

    const {error, loading } = useSelector((state) => state.users);
    const [form, setForm] = useState({ username: "", email: "", password: "" });

    const handleChange = (e) =>
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(registerUser(form));
    };



    return (
        <div

            className="bg-[#efeeee] p-[50px] m-[30px] w-[35%]
             h-[450px] flex items-center justify-center"
            >
            <form
                className="flex flex-col gap-[20px] items-center justify-center text-center w-full"
                onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="username"
                    className="p-[10px] h-[40px] w-full border border-[gray] rounded-[10px]"
                    value={form.username}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="p-[10px] h-[40px] w-full border border-[gray] rounded-[10px]"
                    value={form.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="p-[10px] h-[40px] w-full border border-[gray] rounded-[10px]"
                    value={form.password}
                    onChange={handleChange}
                    required
                />

                {error && <p className="text-red-600">{error}</p>}
                {loading && <p className="text-blue-500">Loading...</p>}

                <button type={"submit"}>Add</button>
            </form>


        </div>
    );
};

export default Page;