export default function Skeleton() {
    return (
      <>
        <div className="flex w-80 flex-col gap-6"> {/* Lebarkan container skeleton */}
          <div className="flex items-center gap-6">
            <div className="skeleton h-24 w-24 shrink-0 rounded-full"></div> {/* Besarkan skeleton bulat */}
            <div className="flex flex-col gap-6">
              <div className="skeleton h-6 w-32"></div> {/* Besarkan skeleton baris */}
              <div className="skeleton h-6 w-48"></div> {/* Besarkan skeleton baris */}
            </div>
          </div>
          <div className="skeleton h-48 w-full"></div> {/* Besarkan skeleton rectangle */}
        </div>
      </>
    );
  }
  