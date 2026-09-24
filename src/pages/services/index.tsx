import PageHeader from '@/components/pageHeader';
import { MDXContent } from '@content-collections/mdx/react';
import { service } from 'content-collections';

export default function ServicesPage() {
  return (
    <>
      <PageHeader currentPage='Services' title='Services' />

      <div className={'container my-5'}>
        <div className={'row'}>
          <div className={'col-lg-10'} style={{ margin: '0 auto' }}>
            <div
              id={'content-body'}
              // style={{ all: 'revert' }}
            >
              <MDXContent code={service.mdx} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
