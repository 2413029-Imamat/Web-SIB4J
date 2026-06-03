export default function Account() {
    return (
        <div className="p-4 font-sans flex flex-col">
            <div className="flex justify-start gap-3 p-4">
            <img src="/profile.svg" alt="ikon" />
            <p>Profile</p>
            </div>
            <div className="flex justify-start gap-3 p-4">
            <img src="/settings.svg" alt="ikon" />
            <p>Settings</p>
            </div>
        </div>
    )
}