import PageHeader from '@/components/pageHeader';
import { MDXContent } from '@content-collections/mdx/react';
import { award } from 'content-collections';

export default function AwardsPage() {
  return (
    <>
      <PageHeader currentPage='Awards' title='Awards' />
      <div className={'container my-5'}>
        <div className={'row'}>
          <div className={'col-lg-10'} style={{ margin: '0 auto' }}>
            <div
              id={'content-body'}
              // style={{ all: 'revert' }}
            >
              <MDXContent code={award.mdx} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
