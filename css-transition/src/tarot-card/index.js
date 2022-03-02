import React from "react";
import "./styles.css";

const TarotCard = () => {
  //   $(document).ready(function () {
  //     var count = 0;

  //     $(".tarot-card").click(function () {
  //       var card = $(this);
  //       if (count < 4) {
  //         $(this).removeClass("top").addClass("bottom");

  //         count++;
  //       }
  //       if (count == 4) {
  //         $("div").removeClass("bottom");

  //         count = 0;
  //       }
  //       shuffle(card);
  //     });
  //   });

  //   function shuffle(card) {
  //     TweenLite.fromTo(
  //       card,
  //       0.6,
  //       {
  //         x: 410,
  //         y: -15,
  //         ease: Expo.easeOut,
  //       },
  //       {
  //         x: 0,
  //         y: 0,
  //         ease: Expo.easeIn,
  //       },
  //     );
  //   }
  return (
    <div>
      <div className="container">
        <div className="tarot-card">
          <img src="https://cdn.pixabay.com/photo/2021/02/15/07/52/hermit-6016941_960_720.jpg" />
        </div>

        <div className="tarot-card shuffle">
          <img src="https://cdn.pixabay.com/photo/2021/02/15/07/42/temperance-6016917_960_720.jpg" />
        </div>

        <div className="tarot-card">
          <img src="https://cdn.pixabay.com/photo/2021/02/15/07/52/hanged-man-6016939_960_720.jpg" />
        </div>

        <div className="tarot-card">
          <img src="https://cdn.pixabay.com/photo/2021/02/15/07/53/hierophant-6016942_960_720.jpg" />
        </div>
      </div>

      <a href="https://twitter.com/cmlohr">
        <button className="twitter-btn">
          <i className="fab fa-twitter"></i>
        </button>
      </a>

      <div className="made-with-love">
        Made with
        <i id="heart">💖</i> & <i id="coffee">☕</i> by
        <a href="https://github.com/cmlohr">Colleen Lohr</a>
      </div>

      <a href="https://www.linkedin.com/in/cmlohr/">
        <button className="in-btn">
          <i className="fab fa-linkedin-in"></i>
        </button>
      </a>
    </div>
  );
};
export default TarotCard;
