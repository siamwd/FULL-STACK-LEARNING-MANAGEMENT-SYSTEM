import { fetchProfile, updateProfile } from "../../utils/profile";
import { useState, useEffect } from "react";

function Profile() {
    const [profile, setProfile] = useState(null);
    const [userId, setUserId] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Get user ID from localStorage or context
        const storedUserId = localStorage.getItem("userId");
        if (storedUserId) {
            setUserId(storedUserId);
            loadProfile(storedUserId);
        }
        setLoading(false);
    }, []);

    async function loadProfile(id) {
        const data = await fetchProfile(id);
        setProfile(data);
    }

    async function handleUpdateProfile(e) {
        e.preventDefault();
        if (!userId) return;
        
        await updateProfile(userId, {
            phone: e.target.phone.value,
        });
        await loadProfile(userId);
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!profile) {
        return <div>Profile not found</div>;
    }

    return (
        <div>
            <h1>My Profile</h1>
            <div className="border p-4 m-4 rounded">
                <h2>Profile Information</h2>
                <form onSubmit={handleUpdateProfile} className="mt-4">
                    <input 
                        type="text" 
                        name="phone" 
                        className="border mt-4 p-4 w-full rounded" 
                        placeholder="Phone" 
                        defaultValue={profile.phone || ""}
                        required 
                    />
                    <button type="submit" className="flex items-center justify-center p-4 w-1/2 bg-blue-700 text-white hover:bg-blue-900 text-xm mt-4 rounded-md">Update Profile</button>
                </form>
                <div className="mt-6">
                    <p className="text-gray-700 mt-2"><strong>Phone:</strong> {profile.phone}</p>
                </div>
            </div>
        </div>
    );
}

export default Profile;
