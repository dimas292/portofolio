import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

export default function Experiens() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-base-200 p-10" id="experiens">
      <h1 className="text-5xl font-bold text-center pt-10 pt-10" id="ex">
        Experiens
      </h1>
      <div>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div
              className="timeline-start mb-10 md:text-end"
              data-aos="fade-right"
            >
              <time className="font-mono italic">2027</time>
              <div className="text-lg font-black">Working Remote At Google</div>
              Comming Soon !
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="blue"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10" data-aos="fade-left">
              <time className="font-mono italic">2024</time>
              <div className="text-lg font-black">
                IT Suppot Lab Data Science at Unas
              </div>
              IT Support di laboratorium universitas mencakup pemeliharaan dan
              perbaikan perangkat keras serta perangkat lunak, memastikan
              jaringan stabil dan aman, serta memberikan bantuan teknis kepada
              staf dan mahasiswa. Selain itu, mereka menangani perangkat dan
              perangkat lunak khusus laboratorium, melindungi data sensitif
              melalui kebijakan keamanan yang ketat.
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="blue"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div
              className="timeline-start mb-10 md:text-end"
              data-aos="fade-right"
            >
              <time className="font-mono italic">2024</time>
              <div className="text-lg font-black">Open Source Contribute</div>
              Kontribusi pada proyek open source melibatkan memberikan kode,
              perbaikan bug, fitur baru, atau dokumentasi, yang memperbaiki dan
              memperluas perangkat lunak sambil memfasilitasi kolaborasi dan
              inovasi komunitas globa
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="blue"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10" data-aos="fade-left">
              <time className="font-mono italic">2024</time>
              <div className="text-lg font-black">
                C++ Developer For Competitive
              </div>
              Dalam konteks kompetisi akademik, berkontribusi pada proyek open
              source dengan C++ dapat mencakup pengembangan algoritma efisien,
              penyelesaian masalah teknis, atau inovasi perangkat lunak, yang
              dapat meningkatkan keterampilan teknis dan berpotensi memenangkan
              penghargaan atau pengakuan.
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="blue"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div
              className="timeline-start mb-10 md:text-end"
              data-aos="fade-right"
            >
              <time className="font-mono italic">2022</time>
              <div className="text-lg font-black">
                Network Engginer At Unggul Computer
              </div>
              <p>
                Sebagai Network Engineer di Toko Unggul Computer, peran Anda
                melibatkan merancang, mengelola, dan memelihara infrastruktur
                jaringan untuk memastikan konektivitas yang stabil dan aman.
                Anda juga menangani pemecahan masalah, konfigurasi perangkat,
                serta memastikan integritas dan efisiensi sistem jaringan toko.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
