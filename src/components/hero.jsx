import photoBio from "../assets/saya.png";
import { useState } from "react";
import { TiSocialLinkedinCircular, TiSocialTwitter } from "react-icons/ti";
import Skeleton from "./skeleton";


export default function Hero() {
// logic to change the skeleton 
  const [loading, setLoading] = useState(false);

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        {/* card */}
        <div className="card w-96">
          <div className="card-body">
            {!loading && <Skeleton />}

            <img
              data-aos="zoom-in"
              src={photoBio}
              className="max-w-sm" 
              loading="lazy"
              onLoad={() => setLoading(true)}
            />
          </div>
        </div>

        {/* card end */}

        <div>
          <h1
            className="text-5xl font-bold "
            data-aos="zoom-in-left"
          >
            Hi I'am Dimas!
          </h1>
          <p className="py-6"
          data-aos="zoom-in-right">
            Loved" is a dynamic and innovative backend development company based
            in Indonesia, specializing in creating robust and scalable
            server-side solutions. Our team is dedicated to designing and
            implementing high-performance backend systems that cater to a
            diverse range of business needs, from startups to established
            enterprises.
          </p>
          <div className="flex gap-4">
            <button className="btn btn-primary" >Get Started</button>
            <TiSocialLinkedinCircular className="text-5xl" />
            <TiSocialTwitter className="text-5xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
