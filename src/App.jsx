import React, { useState } from 'react'
import appreciationImg from './assets/1.png'
import memoriesImg from './assets/2.png'

const ChevronLeft = () => (
  <svg
    width='20'
    height='20'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='m15 18-6-6 6-6' />
  </svg>
)

const ChevronRight = () => (
  <svg
    width='20'
    height='20'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='m9 18 6-6-6-6' />
  </svg>
)

const Sparkles = ({ className }) => (
  <svg
    width='20'
    height='20'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className={className}
  >
    <path d='m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z' />
    <path d='M5 3v4' />
    <path d='M19 17v4' />
    <path d='M3 5h4' />
    <path d='M17 19h4' />
  </svg>
)

const Flower2 = ({ className }) => (
  <svg
    width='20'
    height='20'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className={className}
  >
    <path d='M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1' />
    <circle cx='12' cy='8' r='2' />
    <path d='M12 10v12' />
    <path d='M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z' />
    <path d='M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z' />
  </svg>
)

const Sprout = ({ className }) => (
  <svg
    width='20'
    height='20'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className={className}
  >
    <path d='M7 20h10' />
    <path d='M10 20c5.5-2.5.8-6.4 3-10' />
    <path d='M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8Z' />
    <path d='M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2Z' />
  </svg>
)

const RosePresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentImage, setCurrentImage] = useState(0)

  const bestMomentImages = [
    {
      src: appreciationImg,
      alt: 'Work Appreciation - These appreciation means the world to me',
      title: '💼 Work Appreciation',
      bg: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
    },
    {
      src: memoriesImg,
      alt: 'Best Memories - Goa Offsite, Family, Eid & Mini Trips',
      title: '🏠 Personal Memories',
      bg: 'linear-gradient(135deg, #d4a574 0%, #c9a57a 100%)',
    },
  ]

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % bestMomentImages.length)
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + bestMomentImages.length) % bestMomentImages.length)

  const slides = [
    {
      title: 'My Year 2025',
      subtitle: 'A Journey of Growth & Impact',
      type: 'title',
      content:
        ' ',
    },
    {
      title: "2025: A Rose's Journey",
      type: 'overview',
      content: {
        intro:
          'Every rose begins as a bud, faces thorns, and blooms into beauty',
        sections: [
          {
            icon: '🌹',
            label: 'Roses',
            text: 'Moments of pride, joy, and achievement',
          },
          {
            icon: '🌵',
            label: 'Thorns',
            text: 'Challenges that shaped and strengthened me',
          },
          {
            icon: '🌱',
            label: 'Buds',
            text: 'Seeds of possibility for tomorrow',
          },
        ],
      },
    },
    {
      title: '🌹 Roses: Moments That Made Me Proud',
      subtitle: 'Achievements, Wins & Flow States',
      type: 'roses-detail',
      sections: [
        {
          question: 'Professional Blooms',
          items: [
            '✨ 3 Years at Niswey – grateful for the journey!',
            '✨ Amboss Project – delivered on-time, quality praised by client',
            '✨ GEP Project – learned a lot; proud moment the partner portal demo, Pranav even mentioned in Hugs & High-Fives that the client gave great feedback',
            '✨ Internal App Niswave (LinkedIn Integration) – learned so much while building it end-to-end with Manoj; we used to sit every weekend planning features and UI, and whenever we got stuck, DP sir guided us. Grateful to Manoj, DP sir, and Niswey for the opportunity',
            '✨ HubSpot + AI skills – applied practically across projects',
          ],
        },
        {
          question: 'Personal Victories',
          items: [
            '💰 Salary hike – biggest rose!',
            '💪 Cleared personal loan + house loan → financial freedom',
            '🏠 Successfully moved to new home – a dream realized',
            "❤️ Meaningful gifts: Gifted a phone to Abba & small trip",
          ],
        },
        {
          question: 'Recognition That Mattered',
          items: [
            '🏆 Top Performer 2024-25 – validation of consistent effort',
            'Client appreciation for Amboss & GEP deliveries',
          ],
        },
      ],
    },
    {
      title: '🌵 Thorns: Challenges That Shaped Me',
      subtitle: '',
      type: 'thorns-detail',
      sections: [
        {
          question: 'What Drained My Energy?',
          items: [
            '🔥 Tight deadlines aur late nights',
            '🔥 Loans clear hone tak paison ka tension rehta tha',
            '🔥 Ghar shift karna + project deadlines = bohot stress',
          ],
        },
        {
          question: 'When Did I Feel Stuck?',
          items: [
            'Learning ke liye time nikalna mushkil tha',
            'Kabhi kabhi lagta tha sab kuch ek saath aa gaya hai',
            'Kaam aur personal life ke beech balance banana challenging tha',
            'Ghar banne tak ka safar – self-doubt aaya, par himmat nahi haari',
          ],
        },
        {
          question: 'Patterns That Made Things Harder',
          items: [
            'Har cheez perfect karne ki zid – thak jaati thi',
            'Sab kuch khud karna chahti thi – delegation seekhna padha',
            'Bohot zyada sochna – overthinking was real 😅',
          ],
        },
        {
          question: 'What These Thorns Taught Me',
          items: [
            '💡 Paise ka planning = mental peace – ab samajh aaya',
            '💡 Help maangna weakness nahi, smartness hai',
            '💡 Consistent effort leads to excellence',
            '💡 Apni health ignore karna sabse badi galti hai',
          ],
        },
      ],
    },
    {
      title: '🌱 Buds: Goals for 2026',
      subtitle: 'Opportunities, Dreams & Future Growth',
      type: 'buds-detail',
      sections: [
        {
          question: 'What Excites Me About the Future?',
          items: [
            '🚀 Getting better at HubSpot + AI every day',
            '🚀 Taking on more challenging projects',
            '🚀 Career growth – excited for what\'s next!',
          ],
        },
        {
          question: 'Skills I Want to Develop',
          items: [
            'Backend – Node.js',
            'HubSpot deep dive – Custom Integrations, APIs & UI Extensions',
            'AI – to learn faster & work smarter',
          ],
        },
        {
          question: "If Fear Wasn't a Factor...",
          items: [
            "I'd pursue leadership roles with confidence",
            "I'd start sharing knowledge publicly (blogs/teaching)",
          ],
        },
        {
          question: 'Habits & Seeds to Plant Now',
          items: [
            '🌱 Daily learning routine – 1 hr Backend, AI & HubSpot exploration',
            '🌱 Quarterly skill assessments – track growth',
          ],
        },
      ],
    },
    {
      title: 'My Vision for 2026 🌅',
      type: 'vision',
      content: {
        statement:
          'Professional Excellence + Personal Balance + Financial Freedom + Continuous Growth',
        goal: 'To be better than who I was yesterday, every single day',
        metaphor: '',
        commitments: [],
      },
    },
    {
      title: 'Best Moments of the Year ✨',
      type: 'best-moments',
      content: {
        subtitle: 'Memories Worth Cherishing',
        placeholder: 'Add your banner/image here',
      },
    },
    {
      title: 'Thank You 🙏',
      type: 'thankyou',
    },
  ]

  const nextSlide = () =>
    setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1))
  const prevSlide = () => setCurrentSlide((prev) => Math.max(prev - 1, 0))

  const slide = slides[currentSlide]

  return (
    <div
      style={{
        minHeight: '100vh',
        background:
          'linear-gradient(to bottom right, #fff1f2, #ffffff, #ecfdf5)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '16px 32px',
          overflowY: 'auto',
        }}
      >
        <div style={{ width: '100%', maxWidth: '1152px', height: '100%' }}>
          {slide.type === 'title' && (
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '72px', marginBottom: '32px' }}>🌹</div>
              <h1
                style={{
                  fontSize: '48px',
                  fontWeight: 'bold',
                  color: '#881337',
                  marginBottom: '16px',
                }}
              >
                {slide.title}
              </h1>
              <h2
                style={{
                  fontSize: '24px',
                  color: '#047857',
                  marginBottom: '32px',
                }}
              >
                {slide.subtitle}
              </h2>
              <p
                style={{
                  fontSize: '18px',
                  color: '#6b7280',
                  fontStyle: 'italic',
                }}
              >
                {slide.content}
              </p>
            </div>
          )}

          {slide.type === 'overview' && (
            <div>
              <h1
                style={{
                  fontSize: '40px',
                  fontWeight: 'bold',
                  color: '#881337',
                  marginBottom: '24px',
                }}
              >
                {slide.title}
              </h1>
              <p
                style={{
                  fontSize: '20px',
                  color: '#374151',
                  fontStyle: 'italic',
                  marginBottom: '48px',
                }}
              >
                {slide.content.intro}
              </p>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '32px',
                }}
              >
                {slide.content.sections.map((section, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: 'white',
                      borderRadius: '16px',
                      padding: '32px',
                      boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
                      border: '2px solid #fecdd3',
                    }}
                  >
                    <div style={{ fontSize: '48px', marginBottom: '16px' }}>
                      {section.icon}
                    </div>
                    <h3
                      style={{
                        fontSize: '20px',
                        fontWeight: 'bold',
                        color: '#9f1239',
                        marginBottom: '12px',
                      }}
                    >
                      {section.label}
                    </h3>
                    <p style={{ color: '#374151' }}>{section.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {slide.type === 'roses-detail' && (
            <div>
              <h1
                style={{
                  fontSize: '32px',
                  fontWeight: 'bold',
                  color: '#881337',
                  marginBottom: '8px',
                }}
              >
                {slide.title}
              </h1>
              <h2
                style={{
                  fontSize: '18px',
                  color: '#047857',
                  marginBottom: '24px',
                }}
              >
                {slide.subtitle}
              </h2>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '24px',
                }}
              >
                {slide.sections.map((section, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: 'white',
                      borderRadius: '12px',
                      padding: '20px',
                      boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
                      borderLeft: '4px solid #fb7185',
                    }}
                  >
                    <h3
                      style={{
                        fontSize: '16px',
                        fontWeight: 'bold',
                        color: '#9f1239',
                        marginBottom: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                      }}
                    >
                      <Sparkles className='text-rose-600' />
                      {section.question}
                    </h3>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px',
                      }}
                    >
                      {section.items.map((item, i) => (
                        <div
                          key={i}
                          style={{ fontSize: '14px', color: '#374151' }}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {slide.type === 'thorns-detail' && (
            <div>
              <h1
                style={{
                  fontSize: '32px',
                  fontWeight: 'bold',
                  color: '#1f2937',
                  marginBottom: '8px',
                }}
              >
                {slide.title}
              </h1>
              <h2
                style={{
                  fontSize: '18px',
                  color: '#4b5563',
                  marginBottom: '24px',
                }}
              >
                {slide.subtitle}
              </h2>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '24px',
                }}
              >
                {slide.sections.map((section, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: 'white',
                      borderRadius: '12px',
                      padding: '20px',
                      boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
                      borderLeft: '4px solid #9ca3af',
                    }}
                  >
                    <h3
                      style={{
                        fontSize: '16px',
                        fontWeight: 'bold',
                        color: '#1f2937',
                        marginBottom: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                      }}
                    >
                      <Flower2 className='text-gray-600' />
                      {section.question}
                    </h3>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px',
                      }}
                    >
                      {section.items.map((item, i) => (
                        <div
                          key={i}
                          style={{ fontSize: '14px', color: '#374151' }}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {slide.type === 'buds-detail' && (
            <div>
              <h1
                style={{
                  fontSize: '32px',
                  fontWeight: 'bold',
                  color: '#064e3b',
                  marginBottom: '8px',
                }}
              >
                {slide.title}
              </h1>
              <h2
                style={{
                  fontSize: '18px',
                  color: '#047857',
                  marginBottom: '24px',
                }}
              >
                {slide.subtitle}
              </h2>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '24px',
                }}
              >
                {slide.sections.map((section, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: 'white',
                      borderRadius: '12px',
                      padding: '20px',
                      boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
                      borderLeft: '4px solid #34d399',
                    }}
                  >
                    <h3
                      style={{
                        fontSize: '16px',
                        fontWeight: 'bold',
                        color: '#065f46',
                        marginBottom: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                      }}
                    >
                      <Sprout className='text-emerald-600' />
                      {section.question}
                    </h3>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px',
                      }}
                    >
                      {section.items.map((item, i) => (
                        <div
                          key={i}
                          style={{ fontSize: '14px', color: '#374151' }}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {slide.type === 'vision' && (
            <div style={{ textAlign: 'center' }}>
              <h1
                style={{
                  fontSize: '40px',
                  fontWeight: 'bold',
                  color: '#881337',
                  marginBottom: '32px',
                }}
              >
                {slide.title}
              </h1>
              <div
                style={{
                  background: 'linear-gradient(to right, #ffe4e6, #d1fae5)',
                  borderRadius: '16px',
                  padding: '32px',
                  boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
                  maxWidth: '768px',
                  margin: '0 auto',
                }}
              >
                <p
                  style={{
                    fontSize: '20px',
                    fontWeight: 'bold',
                    color: '#1f2937',
                    marginBottom: '16px',
                  }}
                >
                  {slide.content.statement}
                </p>
                <p
                  style={{
                    fontSize: '18px',
                    color: '#9f1239',
                    marginBottom: '24px',
                  }}
                >
                  {slide.content.goal}
                </p>
                {/* <p
                  style={{
                    fontSize: '16px',
                    fontStyle: 'italic',
                    color: '#374151',
                    marginBottom: '24px',
                  }}
                >
                  "{slide.content.metaphor}"
                </p> */}
                <div
                  style={{
                    textAlign: 'left',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                  }}
                >
                  {slide.content.commitments.map((c, i) => (
                    <div
                      key={i}
                      style={{ color: '#1f2937', fontWeight: '500' }}
                    >
                      {c}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {slide.type === 'best-moments' && (
            <div
              style={{
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
              }}
            >
              <h1
                style={{
                  fontSize: '40px',
                  fontWeight: 'bold',
                  color: '#881337',
                  marginBottom: '24px',
                }}
              >
                {slide.title}
              </h1>
              
              {/* Image Slider */}
              <div
                style={{
                  position: 'relative',
                  maxWidth: '1100px',
                  width: '100%',
                }}
              >
                {/* Image Container */}
                <div
                  style={{
                    position: 'relative',
                    background: bestMomentImages[currentImage].bg,
                    borderRadius: '20px',
                    padding: '16px',
                    boxShadow: '0 25px 50px -12px rgba(0,0,0,0.4)',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <img
                    src={bestMomentImages[currentImage].src}
                    alt={bestMomentImages[currentImage].alt}
                    style={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: '12px',
                      display: 'block',
                      transition: 'opacity 0.3s ease',
                    }}
                  />

                  {/* Left Arrow */}
                  <button
                    onClick={prevImage}
                    style={{
                      position: 'absolute',
                      left: '-20px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.95)',
                      border: 'none',
                      boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'
                      e.currentTarget.style.background = '#e11d48'
                      e.currentTarget.style.color = 'white'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(-50%) scale(1)'
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.95)'
                      e.currentTarget.style.color = 'black'
                    }}
                  >
                    <ChevronLeft />
                  </button>

                  {/* Right Arrow */}
                  <button
                    onClick={nextImage}
                    style={{
                      position: 'absolute',
                      right: '-20px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.95)',
                      border: 'none',
                      boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'
                      e.currentTarget.style.background = '#e11d48'
                      e.currentTarget.style.color = 'white'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(-50%) scale(1)'
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.95)'
                      e.currentTarget.style.color = 'black'
                    }}
                  >
                    <ChevronRight />
                  </button>
                </div>
              </div>
            </div>
          )}

          {slide.type === 'thankyou' && (
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '72px', marginBottom: '32px' }}>🌹</div>
              <h1
                style={{
                  fontSize: '48px',
                  fontWeight: 'bold',
                  color: '#881337',
                  marginBottom: '24px',
                }}
              >
                {slide.title}
              </h1>
            </div>
          )}
        </div>
      </div>

      <div
        style={{
          background: 'white',
          borderTop: '1px solid #e5e7eb',
          padding: '16px',
        }}
      >
        <div
          style={{
            maxWidth: '1152px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 24px',
              background: currentSlide === 0 ? '#fda4af' : '#e11d48',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: currentSlide === 0 ? 'not-allowed' : 'pointer',
              opacity: currentSlide === 0 ? 0.5 : 1,
            }}
          >
            <ChevronLeft />
            Previous
          </button>

          <div style={{ color: '#374151', fontWeight: '500' }}>
            Slide {currentSlide + 1} of {slides.length}
          </div>

          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 24px',
              background:
                currentSlide === slides.length - 1 ? '#fda4af' : '#e11d48',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor:
                currentSlide === slides.length - 1 ? 'not-allowed' : 'pointer',
              opacity: currentSlide === slides.length - 1 ? 0.5 : 1,
            }}
          >
            Next
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  )
}

export default RosePresentation
