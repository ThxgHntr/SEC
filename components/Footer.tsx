const Footer = () => {
  return (
    <div className="bg-emerald-600 w-full h-auto flex flex-col justify-between mt-5 items-center">
      <div className="mx-5 text-white flex flex-row w-full px-5 justify-between gap-5 items-center">
        <div className="flex flex-col gap-5 max-w-xs w-full my-5">
          <div className="text-center">Về Chúng tôi</div>
          <hr className=" h-0.5 bg-white border-0 rounded "></hr>
          <div>Tên tổ chức</div>
          <div>Cành Lá, Cành Cây</div>
          <div>da19001189sjdas</div>
          <div>daemail@gmail.comsjd</div>
        </div>
        <div className="flex flex-col max-w-xs w-full gap-5 my-5">
          <div className="text-center">Các chương trình</div>
          <hr className=" h-0.5 bg-white border-0 rounded "></hr>
          <div>chương trình 1</div>
          <div>chương trình 2</div>
          <div>chương trình 3</div>
          <div>chương trình 4</div>
        </div>
        <div className="flex flex-col max-w-xs w-full gap-5 my-5">
          <div className="text-center">Hướng dẫn</div>
          <hr className=" h-0.5 bg-white border-0 rounded "></hr>
          <div>hướng dẫn tham gia</div>
          <div>hướng dẫn đóng góp</div>
          <div>quy chế tác viên</div>
        </div>
      </div>
      <div className="text-start bg-green-900 w-full text-white">
        ©2023 ABC DEF GHIJ
      </div>
    </div>
  );
};

export default Footer;
