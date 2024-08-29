
import {
  changeEducations,
  selectEducations,
  selectProjects,
  changeProjects,
} from "@/app/lib/appRedux/slice/resumeSlice";
import {
  changeShowBulletPoints,
  selectShowBulletPoints,
} from "@/app/lib/appRedux/slice/settingsSlice";
import { Form, FormSection } from "./Form";
import { CreateHandleChangeArgsWithDescriptions } from "./types";
import { ResumeEducation, ResumeProject } from "@/app/lib/types/types";
import { BulletListTextArea, Input } from "./Form/InputGroup";
import {useDispatch, useSelector} from "react-redux";

export const ProjectsForm = () => {
  const projects = useSelector(selectProjects);
  const dispatch = useDispatch();
  const showDelete = projects.length > 1;

  return (
    <Form form="projects" addButtonText="Add Project">
      {projects.map(({ project, date, descriptions }, idx) => {
        const handleProjectChange = (
          ...[
            field,
            value,
          ]: CreateHandleChangeArgsWithDescriptions<ResumeProject>
        ) => {
          dispatch(changeProjects({ idx, field, value } as any));
        };

        const showMoveUp = idx !== 0;
        const showMoveDown = idx !== projects.length - 1;

        return (
          <FormSection
            key={idx}
            form="projects"
            idx={idx}
            showMoveUp={showMoveUp}
            showMoveDown={showMoveDown}
            showDelete={showDelete}
            deleteButtonTooltipText="Delete project"
          >
            <Input
              label="Project Name"
              labelClassName="col-span-4"
              name="project"
              placeholder="XYZ Project"
              value={project}
              onChange={handleProjectChange}
            />
            <Input
              label="Date"
              labelClassName="col-span-2"
              name="date"
              placeholder="Jan 2022 - Present"
              value={date}
              onChange={handleProjectChange}
            />
            <BulletListTextArea
              label="Description"
              labelClassName="col-span-full"
              name="descriptions"
              placeholder="Bullet Points"
              value={descriptions}
              onChange={handleProjectChange}
            />
          </FormSection>
        );
      })}
    </Form>
  );
};
