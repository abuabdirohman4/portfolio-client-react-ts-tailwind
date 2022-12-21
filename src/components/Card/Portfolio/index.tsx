import React, { forwardRef } from "react";

type Props = {
  image: string;
  title: string;
  description: string;
  className: string;
  // ref: React.RefObject<HTMLSelectElement>;
};

const CardPortfolio = ({
  image,
  title = "Title",
  description = "Description",
  className = "",
}: // ref,
Props) => {
  return (
    <div
      className={`block flex-[0_0_calc(100%/3)] mr-0 my-1 w-full px-1 md:w-1/2 lg:my-4 lg:w-1/3 lg:px-4 ${className}`}
      // ref={ref}
    >
      <div className="overflow-hidden rounded-xl border border-gray-200">
        <a href="">
          <div className="m-4 overflow-hidden rounded-xl">
            <img
              alt="Placeholder"
              className="block h-auto w-full"
              src={image}
            />
          </div>
        </a>

        <header className="mb-4 px-4 leading-tight">
          <h1 className="text-lg">
            <a
              href=""
              className="font-semibold text-black no-underline hover:underline"
            >
              {title}
            </a>
          </h1>
          <span className="block text-sm font-light text-gray-500 no-underline">
            {description}
          </span>
        </header>
      </div>
    </div>
  );
};

// const CardPortfolio = forwardRef<null | HTMLDivElement>(
//   (
//     // {
//     //   image,
//     //   title = "Title",
//     //   description = "Description",
//     //   className = "",
//     // }: Props,
//     // ref

//     props: Props,
//     ref
//   ) => {
//     return (
//       <div
//         className={`my-1 w-full px-1 md:w-1/2 lg:my-4 lg:w-1/3 lg:px-4 ${className}`}
//         ref={ref}
//       >
//         <div className="overflow-hidden rounded-xl border border-gray-200">
//           <a href="">
//             <div className="m-4 overflow-hidden rounded-xl">
//               <img
//                 alt="Placeholder"
//                 className="block h-auto w-full"
//                 src={props.image}
//               />
//             </div>
//           </a>

//           <header className="mb-4 px-4 leading-tight">
//             <h1 className="text-lg">
//               <a
//                 href=""
//                 className="font-semibold text-black no-underline hover:underline"
//               >
//                 {props.title}
//               </a>
//             </h1>
//             <span className="block text-sm font-light text-gray-500 no-underline">
//               {props.description}
//             </span>
//           </header>
//         </div>
//       </div>
//     );
//   }
// );

export default CardPortfolio;
