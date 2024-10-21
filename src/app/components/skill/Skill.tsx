import { item } from "@/types";

type Props = {
  item: item;
  setClick: (item: item) => void;
};

export const Skill = ({ item: skillItem, setClick }: Props) => {
  return (
    <li
      className="flex flex-col items-center gap-8 py-9 rounded cursor-pointer border-black border-2 hover:bg-black hover:text-white w-[186px]"
      onClick={() => setClick(skillItem)}
    >
      {skillItem.icon}
      <h3 className="textSkill">{skillItem.name}</h3>
    </li>
  );
};
