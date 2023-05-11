import React, { ElementType } from 'react';
import { DefaultRawDatum, MayHaveLabel, MouseEventHandler, ResponsivePie } from '@nivo/pie';
import { BasicTooltip } from '@nivo/tooltip';
import { Typography } from 'antd';

import styles from './index.module.scss';

type TPieChart = {
    title?: string;
    data: MayHaveLabel[];
    colors?: string[];
    onMouseEnter?: MouseEventHandler<DefaultRawDatum, ElementType>;
    onClick?: MouseEventHandler<DefaultRawDatum, ElementType>;
    margin?: {
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
};

const { Title } = Typography;

const PieChart = ({
    colors,
    data,
    margin = { bottom: 12, left: 24, right: 24, top: 12 },
    onClick,
    onMouseEnter,
    title,
}: TPieChart): JSX.Element => (
    <div className={styles.pieChartWrapper}>
        <div className={styles.pieChartContent}>
            {title && <Title level={5}>{title}</Title>}
            <ResponsivePie
                colors={colors}
                data={data}
                enableArcLabels={false}
                enableArcLinkLabels={false}
                margin={margin}
                onClick={(_: any, e: any) => {
                    if (onClick) {
                        onClick(_, e);
                    }
                }}
                onMouseEnter={(_: any, e: any) => {
                    if (onMouseEnter) {
                        onMouseEnter(_, e);
                    }
                    e.target.style.cursor = 'pointer';
                }}
                tooltip={(value) => (
                    <BasicTooltip color={value.datum.color} id={value.datum.id.toString()} value={value.datum.value} />
                )}
            />
        </div>
    </div>
);

export default PieChart;
