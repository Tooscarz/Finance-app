export default function Login() {
    return (
        <main className="min-h-screen flex justify-center items-center px-20 py-20">
            <div className="w-full md:w-100 md:flex md:flex-col md:gap-3">
                <h1 className="text-xl text-gray-700 md:text-gray-700 md:font-bold md:text-2xl md:-gray-700 md:font-bold ">Welcome to Finance App</h1>
                <p className="text-sm text-gray-600 md:text-gray-600 md:text-center">Finance Management App</p>
            </div>
            <form>
                <button type="subnmit" className="w-full h-11 rounded-full shadow-md bg-gray-600 flex items-center justify-center gap-3">
                    <span className="text-xl  text-white">Login with Google</span>

                </button>
            </form>
        </main>
    )
}