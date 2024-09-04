import photoBio from '../assets/saya.png'
export default function Hero() {
    return (
 
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src={photoBio}
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Hi I'am Dimas!</h1>
      <p className="py-6">
      Loved" is a dynamic and innovative backend development company based in Indonesia, specializing in creating robust and scalable server-side solutions. Our team is dedicated to designing and implementing high-performance backend systems that cater to a diverse range of business needs, from startups to established enterprises. 
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    )
}