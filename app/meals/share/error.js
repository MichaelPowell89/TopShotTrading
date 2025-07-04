'use client';

export default function Error({error}) {
    return (
        <main className="error">
            <h1>Failed to share meal</h1>
            <p>{error}</p>
        </main>
    )
}