function Error({error, fetchQuestion}) {
    return (
        <>
            <div className="flex flex-col gap-7 mt-10 w-full items-center">
                <p className="text-[#5a4aee] text-xs text-center font-jetbrains tracking-widest">{error}</p>
                <button
                    onClick={fetchQuestion}
                    className="w-md bg-[#5a4aee] active:scale-[0.98] active:bg-[#4a3add] text-white font-semibold py-3 px-2 rounded-lg tracking-widest cursor-pointer disabled:opacity-50 text-sm font-jetbrains uppercase"
                >Retry</button>
            </div>
        </>
    )
}

export default Error