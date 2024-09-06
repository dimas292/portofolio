export default function Skill() {
  return (
    <div className="h-[400px] bg-gradient-to-t from-sky-500 to-indigo-500" id="skils">
      <h1 className="text-center text-3xl font-bold y pt-10 pb-10 text-white" data-aos="fade-up"> Skils</h1>

      <div class="glass p-10 justify-center items-center flex max-w-[90%] rounded-md mx-auto my-10">
        <div className="flex gap-4 justify-center items-center">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
              
              alt="c logo"
              className="max-h-[100px] max-w-[100px]"
            />
         
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
              className="max-h-[100px] max-w-[100px]"
              alt="cplusplus logo"
            />
       
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg"
              className="max-h-[100px] max-w-[100px]"
              alt="go logo"
            />
         
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
              className="max-h-[100px] max-w-[100px]"
              alt="postgresql logo"
            />
        </div>
      </div>
    </div>
  );
}
