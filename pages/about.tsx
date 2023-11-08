import QA from "@/components/QA";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div>
      <div className="mx-auto p-2 w-full ">
        <h1 className="text-4xl font-bold text-center my-5 pt-10">
          General Introduction
        </h1>
        <hr className="max-w-4xl h-0.5 mx-auto my-4 bg-xanh-le border-0 rounded"></hr>
        <h6 className="text-2xl mx-10 text-center">
          Trang web giới thiệu các tổ chức từ thiện và các dự án thiện nguyện
          đang hoạt động để giúp đỡ người khó khăn. Mỗi tổ chức được mô tả chi
          tiết về mục tiêu, phạm vi hoạt động, và cách mọi người có thể tham
          gia.
        </h6>
        <div className="flex flex-row gap-5 justify-around my-5 py-10 bg-emerald-500">
          <div className="flex-1 flex flex-col items-center">
            <Image
              src="/imgVN.png"
              alt=""
              width={128}
              height={208}
            />
            <div className="text-center font-bold text-4xl my-5">TẦM NHÌN</div>
            <div className="text-center">
              Đến năm 2025 trở thành mạng xã hội thiện nguyện đầu tiên tại Việt
              Nam dành cho cộng đồng thiện nguyện minh bạch
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <Image
              src="/imgN.png"
              alt=""
              width={128}
              height={208}
            />
            <div className="text-center font-bold text-4xl my-5">SỨ MỆNH</div>
            <div className="text-center w-auto">
              Ứng dụng công nghệ vào hoạt động nhân đạo, thiện nguyện, cộng
              đồng, thúc đẩy tính minh bạch
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <Image
              src="/imgKC.png"
              alt=""
              width={128}
              height={208}
            />
            <div className="text-center font-bold text-4xl my-5">
              GIÁ TRỊ CỐT LÕI
            </div>
            <div className="text-center">
              Minh bạch, sẻ chia, kết nối, thuận tiện
            </div>
          </div>
        </div>

        <h1 className="text-4xl font-bold text-center my-5 pt-10">Q & A</h1>
        <hr className="max-w-4xl h-0.5 mx-auto my-4 bg-xanh-le border-0 rounded"></hr>
        <div className="flex flex-col items-center gap-2 m-3">
          <QA />
          <QA />
          <QA />
        </div>

        <h1 className="text-4xl font-bold text-center my-5 pt-10">
          Liên hệ chúng tôi
        </h1>
        <hr className="max-w-4xl h-0.5 mx-auto my-4 bg-xanh-le border-0 rounded"></hr>
        <div className="flex flex-row gap-2 w-full justify-between m-3">
          <div className="flex flex-col">
            {/* <div className="text-center font-bold text-4xl my-5 flex-1">
              SMILE EYE CHARITY
            </div>
            <div className="text-center">
              Công ty hoạt động từ thiện Smile Eye Charity, viết tắt là Smile
              Eye Charity, là công ty phi lợi nhuận. Smile Eye Charity kết nối
              các nguồn lực trong và ngoài nước để tổ chức các chương trình đào
              tạo thực tế, đồng hành, và hỗ trợ người dân ở các khu vực còn
              nhiều khó khăn. Các chương trình đào tạo nhằm mục đích giúp người
              dân nâng cao kỹ năng sống và kỹ năng làm kinh tế một cách bền
              vững.
            </div> */}
          </div>
          <div className="mx-5 w-full flex-1">
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
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
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
  );
};

export default AboutPage;
