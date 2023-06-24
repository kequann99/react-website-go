import React from 'react'

const Results = () => {
  return (
    //div for Results section
    <div className='h-max w-full max-w-[1280px] text-[#f5f5f5] mt-40 mx-auto'>
        {/* Title design for Results section */}
        <div id='unforgettable' className='w-full mx-auto mt-2'>
            <h1 className='w-max mx-auto md:text-7xl sm:text-6xl text-4xl text-center uppercase font-extrabold border border-[#07DDDA] rounded-[50%] px-5'>Unforgettable</h1>
        </div>
        <h1 className='mx-auto w-max md:text-7xl sm:text-6xl text-4xl text-center uppercase font-extrabold'>Results</h1>
        {/* Results section content, mobile responsive */}
        <div className='h-max md:w-[90%] w-[85%] mx-auto flex flex-row justify-between mt-20'>
            <div className='flex flex-col h-full md:w-[50%] w-full md:mx-10 mx-auto md:pl-10 md:pr-20'>
                <div className='flex flex-col h-max md:w-full w-[70%] my-4'>
                    <h1 className='h-max w-full md:text-7xl sm:text-6xl text-4xl text-[#07DDDA] font-extrabold md:mt-8 sm:mt-6 mt-4'>400%</h1>
                    <div className='h-max w-full text-xs text-[#B4B4B4]'>
                        <p className='my-4 text-[#07DDDA] uppercase font-bold'>Increase in Organic Page Views</p>
                        <p className='my-1'>Using our SEO services, it also resulted in a <b>109% increase in page visibility</b></p>
                    </div>
                </div>
                {/* Results section content, hidden for mobile screens */}
                <div className='md:hidden flex flex-col h-max md:w-full w-[70%] ml-auto my-4'>
                    <h1 className='h-max w-full md:text-7xl sm:text-6xl text-4xl text-[#07DDDA] font-extrabold md:mt-8 sm:mt-6 mt-4'>4.5%</h1>
                    <div className='h-max w-full text-xs text-[#B4B4B4]'>
                        <p className='my-4 text-[#07DDDA] uppercase font-bold'>Increase in Sales</p>
                        <p className='my-1'>Through our creative services, a national automaker experienced a <b>4.5% increase in sales amidst a -4.6% market decline. </b>They also had a <b>2% increase in market share</b>, and a <b>5.6 point shift in brand perception</b></p>
                    </div>
                </div>
                <div className='flex flex-col h-max md:w-full w-[70%] my-4'>
                    <h1 className='h-max w-full md:text-7xl sm:text-6xl text-4xl text-[#07DDDA] font-extrabold md:mt-8 sm:mt-6 mt-4'>96%</h1>
                    <div className='h-max w-full text-xs text-[#B4B4B4]'>
                        <p className='my-4 text-[#07DDDA] uppercase font-bold'>Faster Page Launches</p>
                        <p className='my-1'>Using AEM, a leading telco saw these results</p>
                        <div className="md:w-[70%] sm:w-[65%] w-[80%] h-8 bg-[#07DDDA]/[0.2] rounded">
                            <div className="h-8 w-[29%] my-2 bg-[#07DDDA] rounded"></div>
                        </div>
                        <p className='my-1'>Campaign lauches cut from <b>7 days to 2 days</b></p>
                        <div className="md:w-[70%] sm:w-[65%] w-[80%] h-8 my-2 bg-[#07DDDA]/[0.2] rounded">
                            <div className="h-8 w-[5%] bg-[#07DDDA] rounded"></div>
                        </div>
                        <p className='my-1'>Page launches cut from <b>2 days to 2 hours</b></p>
                    </div>
                </div>
                {/* Results section content, hidden for mobile screens */}
                <div className='md:hidden flex flex-col h-max md:w-full w-[70%] ml-auto my-4 pr-4'>
                    <h1 className='h-max w-full md:text-7xl sm:text-6xl text-4xl text-[#07DDDA] font-extrabold md:mt-8 sm:mt-6 mt-4'>71%</h1>
                    <div className='h-max w-full text-xs text-[#B4B4B4]'>
                        <p className='my-4 text-[#07DDDA] uppercase font-bold'>Reduction in CPL</p>
                        <p className='my-1'>After optimising the performance media funnel, a leading bank saw <b>savings over AUD$300 in the first year</b></p>
                    </div>
                </div>
                <div className='flex flex-col h-max md:w-full w-[70%] my-4'>
                    <h1 className='h-max w-full md:text-7xl sm:text-6xl text-4xl text-[#07DDDA] font-extrabold md:mt-8 sm:mt-6 mt-4'>38%</h1>
                    <div className='h-max w-full text-xs text-[#B4B4B4]'>
                        <p className='my-4 text-[#07DDDA] uppercase font-bold'>Conversion Rate Improvement</p>
                        <p className='my-1'>Using Adobe Target to A/B test landing pages' forms, we saw an <b>increase in conversion rate</b></p>
                    </div>
                </div>
            </div>
            {/* Results section content, hidden for larger screens */}
            <div className='hidden md:flex md:flex-col h-full w-[50%] mx-10 mt-28 mb-auto pl-10 pr-24'>
                <div className='flex flex-col h-max w-full my-4'>
                    <h1 className='h-max w-full md:text-7xl sm:text-6xl text-4xl text-[#07DDDA] font-extrabold md:mt-8 sm:mt-6 mt-4'>4.5%</h1>
                    <div className='h-max w-full text-xs text-[#B4B4B4]'>
                        <p className='my-4 text-[#07DDDA] uppercase font-bold'>Increase in Sales</p>
                        <p className='my-1'>Through our creative services, a national automaker experienced a <b>4.5% increase in sales amidst a -4.6% market decline. </b>They also had a <b>2% increase in market share</b>, and a <b>5.6 point shift in brand perception</b></p>
                    </div>
                </div>
                <div className='flex flex-col h-max w-full my-10'>
                    <h1 className='h-max w-full md:text-7xl sm:text-6xl text-4xl text-[#07DDDA] font-extrabold md:mt-8 sm:mt-6 mt-4'>71%</h1>
                    <div className='h-max w-full text-xs text-[#B4B4B4]'>
                        <p className='my-4 text-[#07DDDA] uppercase font-bold'>Reduction in CPL</p>
                        <p className='my-1'>After optimising the performance media funnel, a leading bank saw <b>savings over AUD$300 in the first year</b></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Results