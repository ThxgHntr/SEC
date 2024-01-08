import Image from "next/image";

interface Props {
  t: any;
}
const Footer = (props: Props) => {
  return (
    <div className="bg-emerald-600 w-full h-auto  flex flex-col justify-between mt-5 items-center">
      <div className=" px-5 md:px-10 lg:px-20 xl:px-36 2xl:px-48 text-white flex flex-row w-full justify-center gap-5 items-start py-2 ">
        <div className="flex flex-col gap-5 max-w-xs w-full my-5">
          <div className="text-center">
            <a className="flex flex-row items-center gap-5 mx-5" href="#">
              <Image src="/logo.svg" alt="logo" width={30} height={30} />
              <p className="font-bold text-xl">SMILE EYES CHARITY</p>
            </a>
          </div>
          <div>
            {props.t.ADDRESSS}: {props.t.LOCATION}
          </div>
          <div>Hotline: 0962 414 125</div>
          <div>Email: dinhthidongphuong@gmail.com</div>
        </div>
        <div className="flex flex-col max-w-xs w-full gap-5 my-5">
          <div className="text-left" style={{ fontSize: "18px" }}>
            {props.t.INFO}
          </div>
          <hr className=" h-0.5 bg-white border-0 rounded "></hr>
          <div>
            {props.t.COMPANY_NAME}: {props.t.NAME}
          </div>
          <div>{props.t.THUE}: 4001273487</div>
          <div>{props.t.STK}: MB bank, 020166669999, Smile Eye Charity</div>
          <div>Techcombank, 2296699, Smile Eye Charity</div>
        </div>
        <div className="flex flex-col max-w-xs w-full gap-5 my-5">
          <div className="text-left" style={{ fontSize: "18px" }}>
            {props.t.TIME}
          </div>
          <hr className=" h-0.5 bg-white border-0 rounded "></hr>
          <div>{props.t.TIME_DETAIL}</div>
          <div>{props.t.HELP}</div>
          <Image
            src="/imageFooter.jpg"
            alt="logo"
            layout="responsive"
            width={500}
            height={300}
          />
        </div>
      </div>
      <div className="text-center bg-green-900 w-full text-white">
        Copyright 2023 © <b>SMILE EYE CHARITY</b>
      </div>
    </div>
  );
};

export default Footer;

{
  /* <div className="bg-emerald-600 w-full h-auto flex flex-col sm:flex-row justify-between mt-5 items-center">
  <div className="px-48 text-white flex flex-row w-full justify-between items-start py-2">
    <div className="flex flex-col gap-5 max-w-xs w-full my-5">
      <div className="text-center" style={{ fontSize: "20px", fontWeight: "bold" }}>
        <a className="flex flex-row items-center gap-5 mx-5" href="#">
          <Image src="/logo.svg" alt="logo" width={30} height={30} />
          <p className="font-bold text-xl">SMILE EYES CHARITY</p>
        </a>
      </div>
      <div>
        {props.t.ADDRESSS}: {props.t.LOCATION}
      </div>
      <div>Hotline: 0962 414 125</div>
      <div>Email: dinhthidongphuong@gmail.com</div>
    </div>
    <div className="flex flex-col max-w-xs w-full gap-5 my-5">
      <div className="text-left" style={{ fontSize: "18px" }}>
        {props.t.INFO}
      </div>
      <hr className="h-0.5 bg-white border-0 rounded" />
      <div>
        {props.t.COMPANY_NAME}: {props.t.NAME}
      </div>
      <div>{props.t.THUE}: 4001273487</div>
      <div>{props.t.STK}: MB bank, 020166669999, Smile Eye Charity</div>
      <div>Techcombank, 2296699, Smile Eye Charity</div>
    </div>
    <div className="flex flex-col max-w-xs w-full gap-5 my-5">
      <div className="text-left" style={{ fontSize: "18px" }}>
        {props.t.TIME}
      </div>
      <hr className="h-0.5 bg-white border-0 rounded" />
      <div>{props.t.TIME_DETAIL}</div>
      <div>{props.t.HELP}</div>
      <Image
        src="/imageFooter.jpg"
        alt="logo"
        layout="responsive"
        width={500}
        height={300}
      />
    </div>
  </div>
  <div className="text-center bg-green-900 w-full text-white">
    Copyright 2023 © <b>SMILE EYE CHARITY</b>
  </div>
</div> */
}
