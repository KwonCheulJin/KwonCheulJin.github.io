/* eslint-disable react/default-props-match-prop-types */
import Head from 'next/head';
import { ReactElement } from 'react';

interface HeadInfoProps {
  title: string;
  keyword: string;
  description: string;
}

const HeadInfo = ({ title, keyword, description }: HeadInfoProps): ReactElement => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keyword} />
    <link rel="icon" href="/favicon.ico" />
  </Head>
);

HeadInfo.defaultProps = {
  title: "Charles's Blog",
  keyword: 'Charles',
  description: "Charles's Practice Blog",
};

export default HeadInfo;
