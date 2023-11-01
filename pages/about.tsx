import QA from "@/components/QA";
import { useState } from "react";
import ja from "@/components/locale/ja";
import en from "@/components/locale/en";
import vn from "@/components/locale/vn";
import Header from "@/components/Navbar";
import Footer from "@/components/Footer";

const AboutPage = () => {
  const [language, setLanguage] = useState("en");
  const [t, setT] = useState(en);
  const [page, setPage] = useState("home");
  const changeLanguage = (e: any) => {
    setLanguage(e);
    if (e === "ja") {
      setT(ja);
    } else {
      if (e === "en") {
        setT(en);
      } else {
        setT(vn);
      }
    }
  };
  const changePage = (e: any) => {
    setPage(e);
  };
  return (
    <div className="bg-white dark:text-black">
      <div className="sticky top-0 z-50">
        <Header
          language={language}
          setLanguage={changeLanguage}
          t={t}
          changePage={changePage}
        />
      </div>
      <div className="mt-5">
        <div>
          <div className="mx-auto p-2 w-full ">
            <h1 className="text-4xl font-bold text-center my-5 pt-10">
              General Introduction
            </h1>
            <hr className="max-w-4xl h-1 mx-auto my-4 w-full bg-green-300 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
            <h6 className="text-2xl mx-10 text-center">
              Trang web giới thiệu các tổ chức từ thiện và các dự án thiện
              nguyện đang hoạt động để giúp đỡ người khó khăn. Mỗi tổ chức được
              mô tả chi tiết về mục tiêu, phạm vi hoạt động, và cách mọi người
              có thể tham gia.
            </h6>
            <div className="flex flex-row gap-5 justify-around my-5 py-10 bg-emerald-500">
              <div className="flex-1 flex flex-col items-center">
                <img src="/imgVN.png" alt="" className="w-32 h-52" />
                <div className="text-center font-bold text-4xl my-5">
                  TẦM NHÌN
                </div>
                <div className="text-center">
                  Đến năm 2025 trở thành mạng xã hội thiện nguyện đầu tiên tại
                  Việt Nam dành cho cộng đồng thiện nguyện minh bạch
                </div>
              </div>
              <div className="flex-1 flex flex-col items-center">
                <img src="/imgN.png" alt="" className="w-32 h-52" />
                <div className="text-center font-bold text-4xl my-5">
                  SỨ MỆNH
                </div>
                <div className="text-center w-auto">
                  Ứng dụng công nghệ vào hoạt động nhân đạo, thiện nguyện, cộng
                  đồng, thúc đẩy tính minh bạch
                </div>
              </div>
              <div className="flex-1 flex flex-col items-center">
                <img src="/imgKC.png" alt="" className="w-32 h-52" />
                <div className="text-center font-bold text-4xl my-5">
                  GIÁ TRỊ CỐT LÕI
                </div>
                <div className="text-center">
                  Minh bạch, sẻ chia, kết nối, thuận tiện
                </div>
              </div>
            </div>

            <h1 className="text-4xl font-bold text-center my-5 pt-10">Q & A</h1>
            <hr className="max-w-4xl h-1 mx-auto my-4 w-full bg-green-300 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
            <div className="flex flex-col items-center gap-2 mx-3">
              <QA />
              <QA />
              <QA />
            </div>

            <h1 className="text-4xl font-bold text-center my-5 pt-10">
              Liên hệ chúng tôi
            </h1>
            <hr className="max-w-4xl h-1 mx-auto my-4 w-full bg-green-300 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
            <div className="flex flex-row w-full justify-between gap-2 mx-3">
              <div>dashdaj</div>
              <div className="mx-5 w-full">
                <form>
                  <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Your email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name@flowbite.com"
                      required
                    ></input>
                  </div>
                  <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Your phone
                    </label>
                    <input
                      placeholder="0123456789"
                      type="phone"
                      id="phone"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    ></input>
                  </div>
                  <label
                    for="message"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Leave a comment..."
                  ></textarea>
                  <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default AboutPage;
