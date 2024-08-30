
import {
  changeCustom,
  changeSkills,
  selectCustom,
  selectSkills,
} from "@/app/lib/appRedux/slice/defaultResumeSlice";
import {
  changeShowBulletPoints,
  selectShowBulletPoints,
  selectThemeColor,
} from "@/app/lib/appRedux/slice/settingsSlice";
import { Form } from "./Form";
import { BulletListTextArea, InputGroupWrapper } from "./Form/InputGroup";
import { BulletListIconButton } from "./Form/IconButton";
import { FeaturedSkillInput } from "./Form/FeaturedSkillInput";
import {useAppDispatch, useAppSelector} from "@/app/lib/appRedux/hooks";

export const CustomForm = () => {
  const custom = useAppSelector(selectCustom);
  const dispatch = useAppDispatch();
  const { descriptions } = custom;
  const form = "custom";
  const showBulletPoints = useAppSelector(selectShowBulletPoints(form));

  const handleCustomChange = (field: "descriptions", value: string[]) => {
    dispatch(changeCustom({ field, value }));
  };

  const handleShowBulletPoints = (value: boolean) => {
    dispatch(changeShowBulletPoints({ field: form, value }));
  };

  return (
    <Form form={form}>
      <div className="col-span-full grid grid-cols-6 gap-3">
        <div className="relative col-span-full">
          <BulletListTextArea
            label="Custom Textbox"
            labelClassName="col-span-full"
            name="descriptions"
            placeholder="Bullet points"
            value={descriptions}
            onChange={handleCustomChange}
            showBulletPoints={showBulletPoints}
          />
          <div className="absolute left-[7.7rem] top-[0.07rem]">
            <BulletListIconButton
              showBulletPoints={showBulletPoints}
              onClick={handleShowBulletPoints}
            />
          </div>
        </div>
      </div>
    </Form>
  );
};
