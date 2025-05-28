import { useEffect, useState } from "react"

export default function Logout() {
    const [flag, setFlag] = useState(false);
    const handleLogout = async () => {
        setFlag(false);
        const res = await fetch('http://localhost:3000/auth/logout', {
            method: 'POST',
            credentials: 'include'
        });
        if (res.status === 200) {
            setFlag(true);

        }
    }
    useEffect(() => {
        handleLogout();
    }, [])
    return (
        <div className="">
            Logged Out
        </div>
    )
}
