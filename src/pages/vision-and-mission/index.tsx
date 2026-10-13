import PageHeader from '@/components/pageHeader';
import SEO_TAGS from '@/components/seo';
import { MDXContent } from '@content-collections/mdx/react';
import { visionAndMission } from 'content-collections';

const baseUrl = import.meta.env.VITE_APP_BASE_URL;

export default function VisionAndMissionPage() {
  return (
    <>
      <SEO_TAGS
        title='Vision & Mission | Swarna Bharat Foundation'
        description='Welcome to Swarna Bharat, building a brighter future through community-driven initiatives and sustainable development.'
        canonical={`${baseUrl}/`}
        schemaMarkup={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Swarna Bharat',
          url: `${baseUrl}/`,
        }}
      />
      <PageHeader
        currentPage='Vision & Mission'
        title='Vision & Mission'
        imgSrc='/vision-mission.png'
      />

      <div className={'container my-5'}>
        <div className={'row'}>
          <div className={'col-lg-10'} style={{ margin: '0 auto' }}>
            <div
              id={'content-body'}
              // style={{ all: 'revert' }}
            >
              <MDXContent code={visionAndMission.mdx} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
