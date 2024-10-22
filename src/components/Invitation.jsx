import React, { useEffect, useRef } from 'react';
import wedding from './data/data';
import './Invitation.css';
import './loader.css'
const Invitation = () => {
  const mainCardsRef = useRef(null);
  const lastScrollY = useRef(0);
  useEffect(() => {
    const leftCard = document.querySelector('.left-card');
    const rightCard = document.querySelector('.right-card');
    
    setTimeout(() => {
      leftCard.style.transform = 'translateX(0)';
      rightCard.style.transform = 'translateX(0)';
    }, 500);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current) {
        leftCard.classList.add('disappear');
        rightCard.classList.add('disappear');
      } else {
        leftCard.classList.remove('disappear');
        rightCard.classList.remove('disappear');
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    /*
    const observerOptions = {
      root: null,
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          leftCard.style.transform = 'translateX(0)';
          rightCard.style.transform = 'translateX(0)';
        } else {
          leftCard.style.transform = 'translateX(-100vw)';
          rightCard.style.transform = 'translateX(100vw)';
        }
      });
    }, observerOptions);

    if (mainCardsRef.current) {
      observer.observe(mainCardsRef.current);
    }

    return () => {
      if (mainCardsRef.current) {
        observer.unobserve(mainCardsRef.current);
      }
    };*/

  }, []);

  // const bride = { name: "VAISHNAVI", img: "vaishu.jpg" };
  // const groom = { name: "KARTHIK", img: "karthik.jpg" };
  // const venue = { title: "Sri Siddi Vinayaka Temple", 
  //   details: "Rejinthal Village,Zaheerabad, Mirzapur[B], Telangana 502249", 
  //   map: "https://maps.app.goo.gl/Vwajr2koTKJmPEmV7"
  // };
  // const date = { title: 'Date & Time:', details: "8th December 2024 and Muhurtham time" };
  // const invitees = ["KULKARNI'S FAMILY"]; // Add more invitees as needed
  const {bride, groom, venue, date, invitees} = wedding;
  return (
    <div className="App">
      <header className="header">
        <h1>OUR WEDDING INVITATION</h1>
      </header>
      <main>
        <section className="main-cards" ref={mainCardsRef}>
          <div className="card left-card">
            <img src={bride.img} alt="Bride" />
            <h2>{bride.name}</h2>
          </div>
          <div className="card middle-card">
            <img src="hindu-wedding.png" alt="WEDS" />
            <h2>WEDS</h2>
          </div>
          {/* <div className="loader"></div> */}
          <div className="card right-card">
            <img src={groom.img} alt="Groom" />
            <h2>{groom.name}</h2>
          </div>
        </section>
        <section className="details">
          <div className="card detail-card">
            <h3>Venue:</h3>
            <p>{venue.title}</p>
            <p>{venue.details}</p>
            <a href={venue.map} target="_blank" rel="noreferrer">View on Map</a>
          </div>
          <div className="card detail-card">
            <h3>{date.title}</h3>
            <p>{date.details}</p>
          </div>
        </section>
        <section className="invitees">
          <div  className="card invitee-card">
            <h3>Invited By:</h3>
              {invitees.map((invitee, index) => (
                <p key={index}>{invitee+", "}</p>
              ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Invitation;
