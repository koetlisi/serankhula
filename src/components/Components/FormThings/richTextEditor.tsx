import React from "react";
import {
    BtnBold, BtnBulletList, BtnClearFormatting,
    BtnItalic, BtnLink, BtnNumberedList,
    BtnRedo, BtnStrikeThrough, BtnStyles,
    BtnUnderline, BtnUndo, Editor,
    EditorProvider, HtmlButton, Separator, Toolbar
} from "react-simple-wysiwyg";

export const RichTextEditor: React.FC<{ value: string, onChange: (value: string) => void }> = ({ value, onChange }) => {
    return (
        <EditorProvider>
            <Editor
                className="text-sm p-2 border rounded-md"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            >
                <Toolbar>
                    <BtnUndo />
                    <BtnRedo />
                    <Separator />
                    <BtnBold />
                    <BtnItalic />
                    <BtnUnderline />
                    <BtnStrikeThrough />
                    <Separator />
                    <BtnNumberedList />
                    <BtnBulletList />
                    <Separator />
                    <BtnLink />
                    <BtnClearFormatting />
                    <HtmlButton />
                    <Separator />
                    <BtnStyles />
                </Toolbar>
            </Editor>
        </EditorProvider>
    );
};
