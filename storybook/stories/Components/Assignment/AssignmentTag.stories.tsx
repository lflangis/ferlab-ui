import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import AssignmentsTag, { TAssignmentsTag } from '@ferlab/ui/components/Assignments/AssignmentsTag';
import { TPractitionnerInfo } from '@ferlab/ui/components/Assignments/types';

export default {
    title: '@ferlab/Components/Assignments/AssignmentsTag',
    component: AssignmentsTag,
    decorators: [
        (Story) => (
            <>
                <h2>{Story}</h2>
                <Story />
            </>
        ),
    ],
} as Meta;

const AssignmentsTagPropsStory = ({
    storyTitle,
    email,
    name,
    organization,
    ...props
}: {
    storyTitle: string;
    email: string;
    name: string;
    organization: string;
    props: TAssignmentsTag;
}) => (
    <>
        <h3>{storyTitle}</h3>
        <AssignmentsTag
            email={email}
            name={name}
            organization={organization}
            {...props}
        />
    </>
);

export const Default = AssignmentsTagPropsStory.bind({});
Default.args = {
    storyTitle: 'Assignment Tag',
    email: 'email@ferlab.bio',
    name: 'Prenom Nom',
    organization: 'LDM-01'
};

export const Closable = AssignmentsTagPropsStory.bind({});
Closable.args = {
    storyTitle: 'Assignment Tag',
    email: 'email@ferlab.bio',
    name: 'Prenom Nom',
    organization: 'LDM-01',
    closable: true
};

export const NoBackground = AssignmentsTagPropsStory.bind({});
NoBackground.args = {
    storyTitle: 'Assignment Tag',
    email: 'email@ferlab.bio',
    name: 'Prenom Nom',
    organization: 'LDM-01',
    background: false,
};


