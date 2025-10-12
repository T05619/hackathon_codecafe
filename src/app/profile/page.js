"use client"
import { useState } from "react"

export default function Profile() {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")

    const nameCharLimit = 30
    const descCharLimit = 200

    return (
        <div className="min-h-screen flex justify-center bg-gray-100 sm:py-5">
            <div className="bg-white rounded-lg shadow p-8 w-full max-w-xl flex-1">
                <h1 className="text-2xl font-bold mb-4 text-center">Profile</h1>
                
                <label htmlFor="name" className="block mb-2 font-semibold">
                    Name
                </label>
                <input
                    id="name"
                    type="text"
                    className="w-full p-2 border rounded mb-4"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    maxLength={nameCharLimit}
                    placeholder={`Your Name (max ${nameCharLimit} characters)`}
                />
                <div className="text-right text-sm text-gray-500">
                    {description.length}/{nameCharLimit}
                </div>

                <label htmlFor="description" className="block mb-2 font-semibold">
                    About Me
                </label>
                <textarea
                    id="description"
                    className="w-full p-2 border rounded mb-4 resize-none"
                    rows={4}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    maxLength={descCharLimit}
                    placeholder={`Description (max ${descCharLimit} characters)`}
                />
                <div className="text-right text-sm text-gray-500">
                    {description.length}/{descCharLimit}
                </div>
            </div>
        </div>
    );
}