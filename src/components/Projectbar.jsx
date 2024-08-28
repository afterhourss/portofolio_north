import { MdOutlineArrowOutward } from "react-icons/md";
import Tag from "./Tag";

export default function Projectbar({projectName, subTitle, image, desc, source}) {
  return (
    <div className="text-white lg:h-[250px] flex flex-col lg:flex-row bg-[#141414] border border-[#292929] brightness-75 hover:brightness-100 transition-all">
        <img src={image} alt="" className="object-cover lg:rounded-l-md w-full"/>
        <div className="p-8 flex flex-col justify-between">
          <div>
            <div className="text-[#9C9C9C]">{projectName}</div>
            <div className="text-[#9C9C9C]" >{subTitle}</div>
            <div className="text-[#5B5B5B] text-justify">{desc}</div>
          </div>
            <div className="flex justify-between">
                <Tag text="Website"/>
                <a href={source} target="_blank">
                  <MdOutlineArrowOutward className="text-[#5B5B5B] hover:text-[#9C9C9C] transiton-colors text-3xl cursor-pointer"/>
                </a>
            </div>
        </div>
    </div>
  )
}
