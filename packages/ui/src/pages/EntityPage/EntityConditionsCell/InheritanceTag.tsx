import React, { ReactElement } from 'react';
import { Space, Tooltip } from 'antd';

import ColorTag, { ColorTagType } from '../../../components/ColorTag';
import { titleCase } from '../../../utils/stringUtils';
import { SingleValuedInheritance } from '../type';

type GeneticTypes = {
    [key: string]: string | null;
};

const geneticTypes: GeneticTypes = {
    'autosomal dominant': 'AD',
    'autosomal recessive': 'AR',
    'digenic dominant': 'DD',
    'digenic recessive': 'DR',
    'isolated cases': 'IC',
    mitochondrial: 'Mi',
    'mitochondrial inheritance': 'MI',
    multifactorial: 'Mu',
    'no reported transmission': 'NRT',
    'not applicable': 'NA',
    'somatic mosaicism': 'SMo',
    'somatic mutation': 'Smu',
    unknown: null,
    'x-linked': 'XL',
    'x-linked dominant': 'XLD',
    'x-linked recessive': 'XLR',
    'y-linked': 'YL',
};

type OwnProps = {
    inheritances: string[] | SingleValuedInheritance;
};

const InheritanceTag = ({ inheritances }: OwnProps): ReactElement | null => {
    if (!inheritances) return null;

    if (Array.isArray(inheritances)) {
        return (
            <Space direction="horizontal">
                {inheritances.map((inheritance: string, index: number) =>
                    inheritance ? (
                        <Tooltip key={`${inheritance}-${index}`} title={titleCase(inheritance)}>
                            <div>
                                <ColorTag type={ColorTagType.Other}>{geneticTypes[inheritance.toLowerCase()]}</ColorTag>
                            </div>
                        </Tooltip>
                    ) : undefined,
                )}
            </Space>
        );
    }

    return (
        <Tooltip title={inheritances}>
            <div>
                <ColorTag type={ColorTagType.Other}>{geneticTypes[inheritances.toLowerCase()]}</ColorTag>
            </div>
        </Tooltip>
    );
};

export default InheritanceTag;
