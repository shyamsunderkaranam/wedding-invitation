import React, { useEffect, useRef } from 'react';
import './Invitation.css';
import './loader.css'
const Invitation = () => {
  const mainCardsRef = useRef(null);
  useEffect(() => {
    const leftCard = document.querySelector('.left-card');
    const rightCard = document.querySelector('.right-card');
    
    setTimeout(() => {
      leftCard.style.transform = 'translateX(0)';
      rightCard.style.transform = 'translateX(0)';
    }, 500);
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
    };
  }, []);

  const bride = { name: "VAISHNAVI", img: "vaishu.jpg" };
  const groom = { name: "KARTHIK", img: "karthik.jpg" };
  const venue = { title: "Venue Details", details: "Location, Address" };
  const date = { title: "Wedding Date", details: "Date and Time" };
  const invitees = ["Invitee 1", "Invitee 2"]; // Add more invitees as needed

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
            <h3>{venue.title}</h3>
            <p>{venue.details}</p>
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
