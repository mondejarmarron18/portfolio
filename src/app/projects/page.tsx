import GeneralLayout from "@/components/layouts/GeneralLayout";
import Heading from "@/components/ui/Heading";
import React from "react";

const ProjectsPage = () => {
  return (
    <GeneralLayout>
      <Heading variant="h1">
        <span className="text-secondary dark:text-primary">Pro</span>jects
      </Heading>
      <p className="opacity-50">Coming Soon</p>
    </GeneralLayout>
  );
};

export default ProjectsPage;
