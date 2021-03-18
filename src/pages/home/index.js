import Wrapper from "../../components/wrapper";
import styles from "./home.module.css";

const index = () => {
    return (
        <Wrapper>
            <div className="flex flex-col">
                <div className="flex justify-between">
                    <div className="w-72 h-32 p-6 text-xl rounded-lg bg-white-300-mobicure text-gray-900">
                        Total Users
                    </div>
                    <div className="w-72 h-32 p-6 text-xl rounded-lg bg-white-300-mobicure text-gray-900">
                        Zone Topics
                    </div>
                    <div className="w-72 h-32 p-6 text-xl rounded-lg bg-white-300-mobicure text-gray-900">
                    Sign Ups
                    </div>
                </div>
                <div className="mt-12 w-216 h-80 p-6 text-xl rounded-lg bg-white-300-mobicure text-gray-900">
                    Active Users
                </div>
            </div>
        </Wrapper>
    )
};

export default index;