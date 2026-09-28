import PageHeader from '@/components/pageHeader';
import { MDXContent } from '@content-collections/mdx/react';
import { visionAndMission } from 'content-collections';

export default function VisionAndMissionPage() {
  return (
    <>
      <PageHeader currentPage='Vision & Mission' title='Vision & Mission' />

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
