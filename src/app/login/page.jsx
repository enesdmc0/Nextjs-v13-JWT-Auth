'use client';
import {useSearchParams, useRouter} from 'next/navigation';

const Login = () => {
    const searchParams = useSearchParams();
    const router = useRouter();

    const handleSubmit = async e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const username = formData.get("username");
        const password = formData.get("password");

        const res = await fetch("/api/login", {method: "POST", body: JSON.stringify({username, password})})
        const {success} = await res.json();
        if (success) {
            const nextUrl = searchParams.get("next");
            router.push(nextUrl ?? "/");
            router.refresh();
        }else {
            alert("Login failed")
        }
    };
    return (
        <div className="flex h-full gap-5 items-center justify-center flex-col">
            <h1 className="text-3xl font-bold">Log In</h1>
            <form onSubmit={handleSubmit} className="p-5 gap-5 flex flex-col border rounded bg-gray-200 ">
                <label className="flex flex-col gap-2">
                    Username:
                    <input name="username" className="p-2 outline-none border border-black rounded bg-transparent" type="text" placeholder="Username"/>
                </label>
                <label className="flex flex-col gap-2">
                    Password:
                    <input name="password" className="p-2 outline-none border-black border rounded bg-transparent" type="password" placeholder="Password"/>
                </label>
                <button className="border rounded border-black bg-gray-100 py-2 font-bold" type="submit">Log In</button>
            </form>
        </div>
    );
};

export default Login;
