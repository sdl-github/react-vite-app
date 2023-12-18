import { Outlet } from "react-router-dom";
import reactSvg from '@/assets/react.svg'
import { Avatar } from '@douyinfe/semi-ui';

export default function DefaultLayout() {

    return (
        <div className="flex flex-col min-h-screen" >
            <div className="h-[60px] flex items-center justify-between px-6 border-b-1 border-grey-100">
                <div className="flex items-center ">
                    <img src={reactSvg} />
                    <div className="ml-2">React Vite App</div>
                </div>
                <div>
                    <Avatar color="red" size="small" alt='User'>
                        User
                    </Avatar>
                </div>
            </div>
            <main className="p6 flex-grow">
                <Outlet />
            </main>
        </div>
    );
}