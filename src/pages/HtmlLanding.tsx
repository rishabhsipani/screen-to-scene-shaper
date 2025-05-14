
import React from 'react';

const HtmlLanding = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: '0', padding: '0', boxSizing: 'border-box' }}>
      {/* Navbar */}
      <nav style={{ 
        backgroundColor: '#ffffff', 
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)', 
        padding: '12px 16px', 
        position: 'sticky', 
        top: '0', 
        zIndex: '50' 
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between' 
        }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ 
              height: '40px', 
              width: '40px', 
              backgroundColor: '#1a237e', 
              borderRadius: '6px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              color: 'white', 
              fontWeight: 'bold', 
              fontSize: '20px' 
            }}>D</div>
            <span style={{ 
              marginLeft: '8px', 
              fontSize: '20px', 
              fontWeight: 'bold', 
              display: 'block' 
            }}>Digital Services</span>
          </div>
          
          <div style={{ display: 'flex', gap: '24px' }}>
            <a href="#" style={{ color: '#4b5563', textDecoration: 'none' }}>Home</a>
            <a href="#leadership" style={{ color: '#4b5563', textDecoration: 'none' }}>Leadership</a>
            <a href="#services" style={{ color: '#4b5563', textDecoration: 'none' }}>Services</a>
            <a href="#dashboard" style={{ color: '#4b5563', textDecoration: 'none' }}>Dashboard</a>
            <a href="#partners" style={{ color: '#4b5563', textDecoration: 'none' }}>Partners</a>
          </div>
          
          <div style={{ display: 'flex', gap: '8px' }}>
            <button style={{ 
              backgroundColor: 'transparent', 
              border: 'none', 
              borderRadius: '50%', 
              padding: '8px',
              cursor: 'pointer'
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
            <button style={{ 
              backgroundColor: '#1a237e', 
              color: 'white', 
              border: 'none', 
              borderRadius: '4px', 
              padding: '8px 16px',
              fontWeight: '500',
              cursor: 'pointer'
            }}>Login</button>
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section style={{ 
        position: 'relative', 
        overflow: 'hidden',
        background: 'linear-gradient(90deg, #1a237e 0%, #7b1fa2 100%)', 
        padding: '64px 0' 
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '0 16px',
          display: 'flex', 
          flexDirection: 'row', 
          alignItems: 'center',
          flexWrap: 'wrap'
        }}>
          <div style={{ 
            width: '100%', 
            flex: '0 0 58.333333%', 
            marginBottom: '32px'
          }}>
            <h1 style={{ 
              fontSize: '48px', 
              fontWeight: 'bold', 
              color: 'white', 
              lineHeight: '1.2', 
              marginBottom: '24px' 
            }}>
              INDIA LEADING THE WAY<br />
              <span style={{ color: '#facc15' }}>IN AFFORDABLE INTERNET ACCESS</span>
            </h1>
            <div style={{ 
              backgroundColor: 'rgba(255,255,255,0.1)', 
              backdropFilter: 'blur(4px)', 
              padding: '16px', 
              borderRadius: '8px', 
              display: 'inline-block', 
              marginBottom: '24px' 
            }}>
              <p style={{ color: 'white', fontSize: '18px', marginBottom: '4px' }}>Lowest Data Tariffs</p>
              <p style={{ color: '#facc15', fontWeight: '500', fontSize: '20px' }}>16 cents per GB in India</p>
              <p style={{ color: 'white', fontSize: '14px' }}>Among the lowest in the world.</p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
              <button style={{ 
                backgroundColor: 'white', 
                color: '#1a237e', 
                border: 'none', 
                borderRadius: '4px', 
                padding: '8px 16px',
                fontWeight: '500',
                cursor: 'pointer'
              }}>Explore Services</button>
              <button style={{ 
                backgroundColor: 'transparent', 
                color: 'white', 
                border: '1px solid white', 
                borderRadius: '4px', 
                padding: '8px 16px',
                fontWeight: '500',
                cursor: 'pointer'
              }}>Learn More</button>
            </div>
          </div>
          <div style={{ 
            width: '100%', 
            flex: '0 0 41.666667%', 
            display: 'flex', 
            justifyContent: 'center' 
          }}>
            <div style={{ 
              position: 'relative', 
              width: '288px', 
              height: '288px'
            }}>
              <div style={{ 
                position: 'absolute', 
                inset: '0', 
                backgroundColor: '#2563eb', 
                borderRadius: '50%', 
                opacity: '0.2',
                animation: 'pulse 2s infinite'
              }}></div>
              <img 
                src="/placeholder.svg" 
                alt="Digital India" 
                style={{ 
                  position: 'absolute', 
                  inset: '0', 
                  objectFit: 'contain',
                  animation: 'float 6s ease-in-out infinite'
                }}
              />
            </div>
          </div>
        </div>
        <div style={{ 
          position: 'absolute', 
          bottom: '0', 
          left: '0', 
          right: '0', 
          height: '64px', 
          background: 'linear-gradient(to top, white, transparent)' 
        }}></div>
      </section>
      
      {/* Leadership Section */}
      <section id="leadership" style={{ 
        padding: '64px 0', 
        backgroundColor: '#f9fafb' 
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px' }}>
          <h2 style={{ 
            fontSize: '30px', 
            fontWeight: 'bold', 
            textAlign: 'center', 
            marginBottom: '48px' 
          }}>Our Leadership</h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '32px', 
            maxWidth: '896px', 
            margin: '0 auto' 
          }}>
            <div style={{ 
              backgroundColor: 'white', 
              borderRadius: '8px', 
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)', 
              padding: '24px', 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              textAlign: 'center',
              transition: 'transform 0.2s, box-shadow 0.2s'
            }}>
              <div style={{ 
                width: '96px', 
                height: '96px', 
                backgroundColor: '#e5e7eb', 
                borderRadius: '50%', 
                marginBottom: '16px', 
                overflow: 'hidden' 
              }}>
                <img src="/placeholder.svg" alt="Shri Sarvottam Mandela" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '4px' }}>Shri Sarvottam Mandela</h3>
              <p style={{ color: '#6b7280', marginBottom: '16px' }}>Minister of Digital Services</p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: 'auto' }}>
                <a href="#" style={{ color: '#6b7280' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" style={{ color: '#6b7280' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a href="#" style={{ color: '#6b7280' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>
            
            <div style={{ 
              backgroundColor: 'white', 
              borderRadius: '8px', 
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)', 
              padding: '24px', 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              textAlign: 'center',
              transition: 'transform 0.2s, box-shadow 0.2s'
            }}>
              <div style={{ 
                width: '96px', 
                height: '96px', 
                backgroundColor: '#e5e7eb', 
                borderRadius: '50%', 
                marginBottom: '16px', 
                overflow: 'hidden' 
              }}>
                <img src="/placeholder.svg" alt="Dr. Rameshwar Prasad Kadam" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '4px' }}>Dr. Rameshwar Prasad Kadam</h3>
              <p style={{ color: '#6b7280', marginBottom: '16px' }}>Secretary, Digital Services</p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: 'auto' }}>
                <a href="#" style={{ color: '#6b7280' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" style={{ color: '#6b7280' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a href="#" style={{ color: '#6b7280' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="services" style={{ padding: '64px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px' }}>
          <h2 style={{ 
            fontSize: '30px', 
            fontWeight: 'bold', 
            textAlign: 'center', 
            marginBottom: '48px' 
          }}>Unified Services</h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '24px' 
          }}>
            <div style={{ 
              backgroundColor: 'white', 
              borderRadius: '8px', 
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)', 
              overflow: 'hidden',
              transition: 'transform 0.2s, box-shadow 0.2s'
            }}>
              <div style={{ 
                height: '160px', 
                backgroundColor: '#eff6ff', 
                padding: '16px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center' 
              }}>
                <img src="/placeholder.svg" alt="Broadband Services" style={{ height: '96px', width: '96px', objectFit: 'contain' }} />
              </div>
              <div style={{ padding: '24px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '8px' }}>Broadband Services</h3>
                <p style={{ color: '#6b7280' }}>High-speed internet connectivity for urban and rural regions of India.</p>
              </div>
            </div>
            
            <div style={{ 
              backgroundColor: 'white', 
              borderRadius: '8px', 
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)', 
              overflow: 'hidden',
              transition: 'transform 0.2s, box-shadow 0.2s'
            }}>
              <div style={{ 
                height: '160px', 
                backgroundColor: '#f5f3ff', 
                padding: '16px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center' 
              }}>
                <img src="/placeholder.svg" alt="Digital Identity" style={{ height: '96px', width: '96px', objectFit: 'contain' }} />
              </div>
              <div style={{ padding: '24px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '8px' }}>Digital Identity</h3>
                <p style={{ color: '#6b7280' }}>Secure digital identity solutions for citizens and businesses.</p>
              </div>
            </div>
            
            <div style={{ 
              backgroundColor: 'white', 
              borderRadius: '8px', 
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)', 
              overflow: 'hidden',
              transition: 'transform 0.2s, box-shadow 0.2s'
            }}>
              <div style={{ 
                height: '160px', 
                backgroundColor: '#fff7ed', 
                padding: '16px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center' 
              }}>
                <img src="/placeholder.svg" alt="Mobile Services" style={{ height: '96px', width: '96px', objectFit: 'contain' }} />
              </div>
              <div style={{ padding: '24px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '8px' }}>Mobile Services</h3>
                <p style={{ color: '#6b7280' }}>Affordable and reliable mobile connectivity across the nation.</p>
              </div>
            </div>
            
            <div style={{ 
              backgroundColor: 'white', 
              borderRadius: '8px', 
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)', 
              overflow: 'hidden',
              transition: 'transform 0.2s, box-shadow 0.2s'
            }}>
              <div style={{ 
                height: '160px', 
                backgroundColor: '#f0fdf4', 
                padding: '16px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center' 
              }}>
                <img src="/placeholder.svg" alt="Smart Infrastructure" style={{ height: '96px', width: '96px', objectFit: 'contain' }} />
              </div>
              <div style={{ padding: '24px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '8px' }}>Smart Infrastructure</h3>
                <p style={{ color: '#6b7280' }}>Connected solutions for smart cities and digital governance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Dashboard Section */}
      <section id="dashboard" style={{ 
        padding: '64px 0', 
        background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)' 
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px' }}>
          <h2 style={{ 
            fontSize: '30px', 
            fontWeight: 'bold', 
            textAlign: 'center', 
            color: 'white', 
            marginBottom: '48px' 
          }}>DoT Dashboard</h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', 
            gap: '16px', 
            marginBottom: '32px' 
          }}>
            <div style={{ 
              gridColumn: 'span 3',
              backgroundColor: '#7e22ce', 
              borderRadius: '8px', 
              padding: '16px', 
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              transition: 'transform 0.2s, box-shadow 0.2s'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                <h3 style={{ fontSize: '14px', fontWeight: '500', color: 'rgba(255,255,255,0.7)' }}>Overall Score</h3>
              </div>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: 'white' }}>119.032 Crore</div>
            </div>
            
            <div style={{ 
              backgroundColor: '#d97706', 
              borderRadius: '8px', 
              padding: '16px', 
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              transition: 'transform 0.2s, box-shadow 0.2s'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                <h3 style={{ fontSize: '14px', fontWeight: '500', color: 'rgba(255,255,255,0.7)' }}>Revenue Target</h3>
              </div>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: 'white' }}>84.9%</div>
            </div>
            
            <div style={{ 
              backgroundColor: '#e11d48', 
              borderRadius: '8px', 
              padding: '16px', 
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              transition: 'transform 0.2s, box-shadow 0.2s'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                <h3 style={{ fontSize: '14px', fontWeight: '500', color: 'rgba(255,255,255,0.7)' }}>BharatNet</h3>
              </div>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: 'white' }}>9715 Crore</div>
            </div>
            
            <div style={{ 
              background: 'linear-gradient(to right, #9333ea, #db2777)', 
              borderRadius: '8px', 
              padding: '16px', 
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              transition: 'transform 0.2s, box-shadow 0.2s'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                <h3 style={{ fontSize: '14px', fontWeight: '500', color: 'rgba(255,255,255,0.7)' }}>Network</h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12.55a11 11 0 0 1 14.08 0"></path>
                  <path d="M1.42 9a16 16 0 0 1 21.16 0"></path>
                  <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
                  <line x1="12" y1="20" x2="12.01" y2="20"></line>
                </svg>
              </div>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: 'white' }}>₹72.57</div>
            </div>
            
            {/* Remaining stat cards would follow the same pattern */}
            {/* I'm showing just a few for brevity */}
          </div>
          <div style={{ textAlign: 'center' }}>
            <a href="#" style={{ 
              display: 'inline-block', 
              padding: '8px 24px', 
              backgroundColor: 'white', 
              color: '#1a237e', 
              borderRadius: '9999px', 
              fontWeight: '500', 
              textDecoration: 'none',
              transition: 'background-color 0.2s'
            }}>
              Explore Full Dashboard
            </a>
          </div>
        </div>
      </section>
      
      {/* Partners Section */}
      <section id="partners" style={{ 
        padding: '64px 0', 
        background: 'radial-gradient(circle, #0d1233 0%, #090a1a 100%)', 
        position: 'relative', 
        overflow: 'hidden' 
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '0 16px', 
          position: 'relative', 
          zIndex: '10' 
        }}>
          <h2 style={{ 
            fontSize: '30px', 
            fontWeight: 'bold', 
            textAlign: 'center', 
            color: 'white', 
            marginBottom: '24px' 
          }}>Empowering India Through</h2>
          <h3 style={{ 
            fontSize: '24px', 
            fontWeight: '600', 
            textAlign: 'center', 
            color: '#93c5fd', 
            marginBottom: '48px' 
          }}>Strategic Partnerships</h3>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', 
            gap: '24px', 
            justifyItems: 'center' 
          }}>
            {/* Partner logo placeholders */}
            {Array(12).fill(0).map((_, i) => (
              <div 
                key={i}
                style={{ 
                  width: '64px', 
                  height: '64px', 
                  backgroundColor: 'rgba(255,255,255,0.1)', 
                  backdropFilter: 'blur(4px)', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  transition: 'transform 0.2s'
                }}
              >
                <div style={{ color: 'white', fontWeight: '600', fontSize: '12px' }}>Partner {i + 1}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ 
          position: 'absolute', 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)', 
          width: '240px', 
          height: '240px', 
          backgroundColor: 'rgba(59, 130, 246, 0.2)', 
          borderRadius: '50%', 
          filter: 'blur(48px)' 
        }}></div>
      </section>
      
      {/* Achievements Section */}
      <section id="achievements" style={{ padding: '64px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px' }}>
          <h2 style={{ 
            fontSize: '30px', 
            fontWeight: 'bold', 
            textAlign: 'center', 
            marginBottom: '48px' 
          }}>Key Achievements</h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '24px' 
          }}>
            <div style={{ 
              backgroundColor: 'white', 
              borderRadius: '8px', 
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)', 
              overflow: 'hidden' 
            }}>
              <div style={{ 
                backgroundColor: '#dbeafe', 
                padding: '16px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between' 
              }}>
                <div>
                  <h3 style={{ fontWeight: 'bold', fontSize: '18px' }}>SMARTPHONES</h3>
                  <p style={{ fontWeight: 'bold', fontSize: '24px' }}>#1 EXPORT</p>
                </div>
                <img src="/placeholder.svg" alt="Smartphones" style={{ height: '64px', width: '64px', objectFit: 'contain' }} />
              </div>
              <div style={{ padding: '16px', display: 'flex', justifyContent: 'space-between' }}>
                <a href="#" style={{ color: '#1a237e', fontSize: '14px', textDecoration: 'none' }}>View Details</a>
                <button style={{ 
                  fontSize: '12px', 
                  backgroundColor: '#f3f4f6', 
                  padding: '4px 8px', 
                  borderRadius: '4px', 
                  border: 'none',
                  cursor: 'pointer'
                }}>Share</button>
              </div>
            </div>
            
            <div style={{ 
              backgroundColor: 'white', 
              borderRadius: '8px', 
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)', 
              overflow: 'hidden' 
            }}>
              <div style={{ 
                backgroundColor: '#dcfce7', 
                padding: '16px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between' 
              }}>
                <div>
                  <h3 style={{ fontWeight: 'bold', fontSize: '18px' }}>SanChar Health App</h3>
                  <p style={{ fontWeight: 'bold', fontSize: '24px' }}>ONE STOP SOLUTION</p>
                </div>
                <img src="/placeholder.svg" alt="Health App" style={{ height: '64px', width: '64px', objectFit: 'contain' }} />
              </div>
              <div style={{ padding: '16px', display: 'flex', justifyContent: 'space-between' }}>
                <a href="#" style={{ color: '#1a237e', fontSize: '14px', textDecoration: 'none' }}>View Details</a>
                <button style={{ 
                  fontSize: '12px', 
                  backgroundColor: '#f3f4f6', 
                  padding: '4px 8px', 
                  borderRadius: '4px', 
                  border: 'none',
                  cursor: 'pointer'
                }}>Share</button>
              </div>
            </div>
            
            <div style={{ 
              backgroundColor: 'white', 
              borderRadius: '8px', 
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)', 
              overflow: 'hidden' 
            }}>
              <div style={{ 
                backgroundColor: '#ffedd5', 
                padding: '16px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between' 
              }}>
                <div>
                  <h3 style={{ fontWeight: 'bold', fontSize: '18px' }}>6.19 LAKH</h3>
                  <p style={{ fontWeight: 'bold', fontSize: '24px' }}>4G MOBILE COVERAGE</p>
                </div>
                <img src="/placeholder.svg" alt="Mobile Coverage" style={{ height: '64px', width: '64px', objectFit: 'contain' }} />
              </div>
              <div style={{ padding: '16px', display: 'flex', justifyContent: 'space-between' }}>
                <a href="#" style={{ color: '#1a237e', fontSize: '14px', textDecoration: 'none' }}>View Details</a>
                <button style={{ 
                  fontSize: '12px', 
                  backgroundColor: '#f3f4f6', 
                  padding: '4px 8px', 
                  borderRadius: '4px', 
                  border: 'none',
                  cursor: 'pointer'
                }}>Share</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Counter */}
      <section style={{ 
        padding: '48px 0', 
        backgroundColor: '#1a237e', 
        color: 'white' 
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '0 16px', 
          textAlign: 'center' 
        }}>
          <h2 style={{ fontSize: '30px', fontWeight: 'bold', marginBottom: '8px' }}>38,64,240+</h2>
          <p style={{ color: '#bfdbfe' }}>Total Digital Service Users</p>
        </div>
      </section>
      
      {/* Footer */}
      <footer style={{ 
        backgroundColor: '#0f172a', 
        color: 'white' 
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '48px 16px' 
        }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '32px' 
          }}>
            <div>
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '16px' }}>Digital Services</h3>
              <p style={{ color: '#cbd5e1', marginBottom: '16px' }}>Empowering India through digital transformation and affordable connectivity solutions.</p>
              <div style={{ display: 'flex', gap: '16px' }}>
                <a href="#" style={{ color: 'white' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" style={{ color: 'white' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a href="#" style={{ color: 'white' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '16px' }}>Quick Links</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li><a href="#" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Home</a></li>
                <li><a href="#leadership" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Leadership</a></li>
                <li><a href="#services" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Services</a></li>
                <li><a href="#dashboard" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Dashboard</a></li>
                <li><a href="#partners" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Partners</a></li>
                <li><a href="#achievements" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Achievements</a></li>
              </ul>
            </div>
            
            <div>
              <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '16px' }}>Contact</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', color: '#cbd5e1' }}>
                <li>Email: contact@digitalservices.com</li>
                <li>Phone: +91 98765 43210</li>
                <li>Address: Digital Services HQ, New Delhi, India</li>
              </ul>
            </div>
          </div>
          
          <div style={{ 
            borderTop: '1px solid #334155', 
            marginTop: '32px', 
            paddingTop: '32px', 
            fontSize: '14px', 
            color: '#94a3b8', 
            textAlign: 'center' 
          }}>
            <p>&copy; {new Date().getFullYear()} Digital Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HtmlLanding;
