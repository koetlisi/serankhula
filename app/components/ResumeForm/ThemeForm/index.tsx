
import {
  DEFAULT_THEME_COLOR,
  GeneralSetting,
  changeSettings,
  selectSettings,
} from "@/app/lib/appRedux/slice/settingsSlice";
import { BaseForm } from "../Form";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import { InlineInput } from "./InlineInput";
import { THEME_COLORS } from "./constants";
import { InputGroupWrapper } from "../Form/InputGroup";
import {
  DocumentSizeSelections,
  FontFamilySelectionCSR,
  FontSizeSelections,
} from "./Selection";
import { FontFamily } from "../../fonts/constants";
import {useDispatch, useSelector} from "react-redux";

export const ThemeForm = () => {
  const settings = useSelector(selectSettings);
  const { fontSize, fontFamily, documentSize } = settings;
  const themeColor = settings.themeColor || DEFAULT_THEME_COLOR;
  const dispatch = useDispatch();

  const handleSettingsChange = (field: GeneralSetting, value: string) => {
    dispatch(changeSettings({ field, value }));
  };

  return (
    <BaseForm>
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-2">
          <Cog6ToothIcon className="h-6 w-6 text-gray-600" aria-hidden="true" />
          <h1 className="text-lg font-semibold tracking-wide text-gray-900">
            Resume Setting
          </h1>
        </div>
        <div>
          <InlineInput
            label="Theme Color"
            name="themeColor"
            value={settings.themeColor}
            placeholder={DEFAULT_THEME_COLOR}
            onChange={handleSettingsChange}
            inputStyle={{ color: themeColor }}
          />
          <div className="mt-2 flex flex-wrap gap-2">
            {THEME_COLORS.map((color, idx) => (
              <div
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md text-sm text-white"
                style={{ backgroundColor: color }}
                key={idx}
                onClick={() => handleSettingsChange("themeColor", color)}
                onKeyDown={(e) => {
                  if (["Enter", " "].includes(e.key)) {
                    handleSettingsChange("themeColor", color);
                  }
                }}
                tabIndex={0}
              >
                {settings.themeColor === color ? "$" : ""}
              </div>
            ))}
          </div>
        </div>
        <div>
          <InputGroupWrapper label="Font Family" />
          <FontFamilySelectionCSR
            selectedFontFamily={fontFamily}
            themeColor={themeColor}
            handleSettingsChange={handleSettingsChange}
          />
        </div>
        <div>
          <InlineInput
            label="Font Size (pt)"
            name="fontSize"
            value={fontSize}
            placeholder="11"
            onChange={handleSettingsChange}
          />
          <FontSizeSelections
            fontFamily={fontFamily as FontFamily}
            themeColor={themeColor}
            selectedFontSize={fontSize}
            handleSettingsChange={handleSettingsChange}
          />
        </div>
        <div>
          <InputGroupWrapper label="Document Size" />
          <DocumentSizeSelections
            themeColor={themeColor}
            selectedDocumentSize={documentSize}
            handleSettingsChange={handleSettingsChange}
          />
        </div>
      </div>
    </BaseForm>
  );
};
