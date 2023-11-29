import QA from "@/components/QA";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

interface Props {
  t: any;
}

const AboutPage = (props: Props) => {
  return (
    <div>
      <p className="text-4xl font-bold text-center my-5 pt-10">
        General Introduction
      </p>
      <hr className="max-w-4xl h-0.5 mx-auto my-4 bg-xanh-le border-0 rounded"></hr>
      <p className="text-2xl m-12 text-center">
        Trang web giới thiệu các tổ chức từ thiện và các dự án thiện nguyện đang
        hoạt động để giúp đỡ người khó khăn. Mỗi tổ chức được mô tả chi tiết về
        mục tiêu, phạm vi hoạt động, và cách mọi người có thể tham gia.
      </p>
      <div className="flex flex-row gap-5 justify-around my-5 py-10 px-4 bg-xanh-dam">
        <div className="flex-1 flex flex-col items-center">
          <Image src="/imgVN.png" alt="" width={128} height={208} />
          <div className="text-center font-bold text-white text-4xl my-5">
            TẦM NHÌN
          </div>
          <div className="text-center text-white">
            Đến năm 2025 trở thành mạng xã hội thiện nguyện đầu tiên tại Việt
            Nam dành cho cộng đồng thiện nguyện minh bạch
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center">
          <Image src="/imgN.png" alt="" width={128} height={208} />
          <div className="text-center font-bold text-4xl my-5 text-white">
            SỨ MỆNH
          </div>
          <div className="text-center w-auto text-white">
            Ứng dụng công nghệ vào hoạt động nhân đạo, thiện nguyện, cộng đồng,
            thúc đẩy tính minh bạch
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center">
          <Image src="/imgKC.png" alt="" width={128} height={208} />
          <div className="text-center font-bold text-4xl my-5 text-white">
            GIÁ TRỊ CỐT LÕI
          </div>
          <div className="text-center text-white">
            Minh bạch, sẻ chia, kết nối, thuận tiện
          </div>
        </div>
      </div>

      <p className="text-4xl font-bold text-center my-5 pt-10">Q & A</p>
      <hr className="max-w-4xl h-0.5 mx-auto my-4 bg-xanh-le border-0 rounded"></hr>
      <div className="flex flex-col items-center gap-2 m-3" id="QA">
        <QA t={props.t} />
      </div>

      <p className="text-4xl font-bold text-center my-5 pt-10">
        Liên hệ chúng tôi
      </p>
      <hr className="max-w-4xl h-0.5 mx-auto my-4 bg-xanh-le border-0 rounded"></hr>
      <div className="flex flex-row gap-2 w-full justify-between">
        <div className="flex flex-col">
        </div>
        <div className="mx-5 w-full flex-1">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
