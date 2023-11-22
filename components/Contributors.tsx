import CardVolunteer from "./CardVolunteer";
import CardSponsors from "./CardSponsors";
import Image from "next/image";
import Url from "../public/founder.jpg";

const Contributors = () => {
  return (
    <div className="mx-auto my-0 w-full max-w-7xl z-0">
      <p className="text-4xl font-bold text-center my-5 pt-10">
        Contributors
      </p>
      <hr className="max-w-4xl h-0.5 mx-auto my-4 bg-xanh-le border-0 rounded"></hr>
      <p className="text-4xl font-bold text-start w-fit my-5 pt-10 pb-3 border-b border-b-xanh-le">VOLUNTEERS</p>
      <div className="flex flex-col gap-4 m-12">
        <div className="flex flex-row gap-2">
          <CardVolunteer />
          <CardVolunteer />
          <CardVolunteer />
        </div>
        <div className="flex flex-row gap-2">
          <CardVolunteer />
          <CardVolunteer />
          <CardVolunteer />
        </div>
      </div>
      <p className="text-4xl font-bold text-start w-fit my-5 pt-10 pb-3 border-b border-b-xanh-le">
        SPONSORS
      </p>
      <div className="flex flex-row gap-4 m-12" id="sponsors">
        <CardSponsors />
        <CardSponsors />
        <CardSponsors />
        <CardSponsors />
      </div>
      <p className="text-4xl font-bold text-start w-fit my-5 pt-10 pb-3 border-b border-b-xanh-le">FOUNDER</p>
      <div className="m-3">
        <a
          className="flex flex-row items-center"
        >
          <Image
            className="object-cover rounded-lg"
            style={{ objectFit: "cover", width: "30%", height: "100%" }}
            src={Url}
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h2 className="mb-2 text-4xl font-bold tracking-tight">
              Đinh Thị Đông Phương
            </h2>
            <p className="mb-3 font-normal">
              PHD. chuyên ngành công nghệ thông tin, Nhật Bản BA chuyên ngành
              sư phạm toán tin, tâm lý, giáo dục
            </p>
            <p className="mb-3 font-normal">
              Tôi được sinh ra và lớn lên ở 1 vùng quê tỉnh Quảng Nam. Tuổi
              thơ của tôi đầy ắp những trải nghiệm với tự nhiên và đầy tình
              yêu thương. Tôi và đám bạn trẻ con chơi đủ thứ trò, nào là trốn
              tìm, bắn trổng, bắn bi, chơi kèn lá, chơi ô quan, nhảy dây, đan
              lờ bắt cá bắt cua, leo cây hái trái, vào hang bắt dơi, etc. Bố
              tôi là giáo viên nhưng ông cũng là nông dân rất giỏi. Ngoài giờ
              làm việc, ông làm đủ thứ. Vỡ đất trồng lúa, chăn nuôi, nấu rượu,
              làm bún, làm mì, cắt tóc, sửa xe, làm nhà, etc. Mẹ tôi cũng là
              giáo viên, và bà cũng làm đủ thứ ngoài giờ. Bà làm thuốc nam,
              dạy thêm, buôn bán, etc. Bố mẹ tôi luôn hỗ trơ nhau khi làm
              việc. Tôi theo chân bố, chân mẹ trong hầu hết các công việc của
              ông bà nên tôi được trải nghiệm và học hỏi rất nhiều điều thú
              vị.
            </p>
            <p className="mb-3 font-normal">
              Tôi vào đại học, đi làm, rồi đi du học và làm việc ở Nhật từ năm
              2026 đến 2020. Tôi đã tham gia rất nhiều các hoạt động thực tế ở
              Nhật, từ trồng lúa trồng khoai trồng rau nấu ăn làm bánh nướng
              thịt cắm trại ngoài trời diễn tập phòng cháy chữa cháy, etc đến
              làm quản lý dự án IT, làm tiến sĩ, làm giảng viên của đại học
              Ritsumeikan. Những người bạn vừa có kỹ năng cao trong lĩnh vực
              họ yêu thích, có kỹ năng xử lý vấn đề rất nhạy bén, và đầy tình
              yêu thương. Tình yêu thương của người thân, bạn bè giúp tôi phát
              triển trí tuệ, chữa lành những tổn thương, và trưởng thành qua
              các trải nghiệm thực tế. Tôi được chữa lành, trở nên tự tin lạc
              quan yêu đời yêu người, yêu cuộc sống này vô cùng.
            </p>
            <p className="mb-3 font-normal">
              Tôi hiểu ra rằng, mỗi khi tôi tham gia hoạt động gì đó để giúp
              đỡ người khác, tôi không những phát triển trí tuệ và còn được
              chữa lành. Tình yêu thương trong tôi lớn thêm. Tôi thêm yêu con
              người và yêu cuộc sống này. Đây quả thực là điều kì diệu. Càng
              giúp người, chúng ta càng phát triển trí tuệ và càng hạnh phúc
              hơn. Hãy tham gia dự án để trải nghiệm những điều kỳ diệu này
              với chúng tôi.
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Contributors;
