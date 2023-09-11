export default function Terms_conditions() {
  const contents = [
    {
      heading: "Lorem ipsum",
      sub: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      points:
        "dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non ",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
    },
  ];
  return (
    <div className="font-['ClashDisplay']">
      <div className="md:w-full w-full text-left flex flex-col gap-3 md:pr-[10px]">
        {/* 1 */}
        <div>
          <div className="text-[26px]">{contents[0].heading}</div>
          <div>{contents[0].sub}</div>
        </div>

        {/* 2 */}
        <div>
          <div className="text-[26px]">{contents[0].heading}</div>
          <div>{contents[0].sub}</div>
        </div>

        {/* 3 */}
        <div className="flex flex-col gap-4">
          <div className="text-[16px]">{contents[0].heading}</div>

          {/* for desktop */}
          <div className="md:flex flex-col hidden marker:text-black">
            <li className="">{contents[0].points}</li>
            <li className="">{contents[0].points}</li>
            <li className="">{contents[0].points}</li>
          </div>

          {/* for mobile */}
          <div className="md:hidden flex flex-col marker:text-black gap-4">
            <div className="">{contents[0].points}</div>
            <div className="">{contents[0].points}</div>
            <div className="">{contents[0].points}</div>
          </div>
        </div>

        {/* 4 */}
        <div className="flex flex-col gap-4">
          <p>{contents[0].content}</p>
          <p>{contents[0].content}</p>
        </div>

        {/* 5 */}
        <div className="flex flex-col gap-4">
          <p className="text-[20px]">{contents[0].heading}</p>

          <div className="">
            <p>{contents[0].heading}</p>
            <p>{contents[0].content}</p>
          </div>
          <div className="">
            <p>{contents[0].heading}</p>
            <p>{contents[0].content}</p>
          </div>
          <div className="">
            <p>{contents[0].heading}</p>
            <p>{contents[0].content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
