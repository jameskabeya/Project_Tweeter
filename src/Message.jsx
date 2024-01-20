export default function Message() {
    return (
        <div className="w-1/3 text-white border-x border-b border-gray-600 border-slate-800">
            <div className="flex justify-between p-3 mt-5">
                <p><strong>Messages</strong></p>
                <div className="flex gap-2">
                    <img src="src/assets/More-2.svg" alt="" />
                    <img src="src/assets/Messages-Fill.svg" alt="" />
                </div>
            </div>
            <div>
                <p><strong className="font-semibold p-3">Welcome to your inbox!</strong></p>
            </div>
        </div>
    )
}