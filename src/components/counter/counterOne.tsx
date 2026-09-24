import useOnScreen from '@/hooks/useOnScreen';
import { useEffect, useRef, useState } from 'react';

const counterData = [
  {
    value: 2012,
    // suffix: '',
    label: 'Foundation Established',
    style: 'style-2',
  },
  { value: 3, suffix: 'k+', label: 'Saplings Planted', style: '' },
  {
    value: 1000,
    suffix: 'k+',
    label: 'Water Bowls for Birds & Animals',
    style: '',
  },
  {
    value: 13,
    suffix: '+',
    label: 'Dedicated Social Service',
    style: 'style-2',
  },
];

const CounterOne = () => {
  const counterRef = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(counterRef);
  const [counts, setCounts] = useState(counterData.map(() => 0));

  useEffect(() => {
    if (isVisible) {
      counterData.forEach((item, idx) => {
        let start = 0;
        const end = item.value;
        const duration = 1000;
        const increment = end / (duration / 20);
        const timer = setInterval(() => {
          start += increment;
          setCounts((prev) => {
            const updated = [...prev];
            updated[idx] = Math.min(Math.floor(start), end);
            return updated;
          });
          if (start >= end) clearInterval(timer);
        }, 20);
      });
    }
  }, [isVisible]);

  return (
    <div className='counter-section fix section-bg-1'>
      <div className='right-shape'>
        <img src='/img/home-1/feature/shape-2.png' alt='img' />
      </div>
      <div className='container'>
        <div className='counter-wrapper'>
          <div className='row g-4 align-items-center'>
            <div className='col-lg-6'>
              <div className='counter-image'>
                {/* <img src="/img/home-1/feature/01.jpg" alt="img" /> */}
                <img
                  src='/imgs/WhatsApp Image 2026-09-10 at 12.49.54 PM.jpeg'
                  alt='img'
                  width={'100%'}
                  height={'100%'}
                  style={{ aspectRatio: 4 / 3 }}
                />
                <div className='shape'>
                  <img src='/img/home-1/feature/shape-1.png' alt='img' />
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='counter-content'>
                <div className='section-title mb-0'>
                  <span className='sub-title wow fadeInUp'>
                    Our Impact at a Glance
                  </span>
                  <h2 className='sec-title text-capitalize'>
                    {/* <span>W</span>e Always Help The <br /> Needy People */}
                    Every Contribution Can Create a Lasting Impact
                  </h2>
                </div>
                <p className='text wow fadeInUp' data-delay='.3s'>
                  For more than a decade,{' '}
                  <strong>Swarna Bharat Foundation</strong> has worked with
                  communities to support people in need, empower women and
                  youth, protect the environment, and promote health and social
                  well-being.
                </p>
                <div className='counter-main-item' ref={counterRef}>
                  <div className='counter-item wow fadeInUp' data-delay='.5s'>
                    {counterData.slice(0, 2).map((item, idx) => (
                      <div className={`content ${item.style}`} key={item.label}>
                        <h2>
                          <span className='count'>{counts[idx]}</span>
                          {item.suffix}
                        </h2>
                        <p>{item.label}</p>
                      </div>
                    ))}
                  </div>
                  <div
                    className='counter-item style-border wow fadeInUp'
                    data-delay='.3s'>
                    {counterData.slice(2, 4).map((item, idx) => (
                      <div className={`content ${item.style}`} key={item.label}>
                        <h2>
                          <span className='count'>{counts[idx + 2]}</span>
                          {item.suffix}
                        </h2>
                        <p>{item.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterOne;
