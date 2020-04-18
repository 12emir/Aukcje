import Link from "next/link";
import React, { useEffect, useState } from "react";
import Button from "../components/Button";
const Header = () => {
  const [links, setLinks] = useState([
    { name: "Home", url: "/" },
    { name: "Live competitions", url: "/live-competitions" },
    { name: "How to play?", url: "/how-to" },
  ]);

  useEffect(() => {
    console.log(links);
  }, []);

  return (
    <div className='mr-4 flex py-4 justify-between'>
      <div className='flex items-center'>
        <Link href='/'>
          <h1 className='mr-8 font-black text-3xl text-secondary cursor-pointer '>
            Lottery
          </h1>
        </Link>

        {links.map((item) => {
          return (
            <div className='text-primary  tracking-wider text-sm mr-4'>
              <Link href={item.url} key={item.url}>
                {item.name}
              </Link>
            </div>
          );
        })}
      </div>
      <div className='flex items-center'>
        <Button primary style='mr-2' url='/sign-up' name='Sign up'></Button>
        <Button
          secondary
          style='bg-gradient-br-primary'
          url='/login'
          name='Login'
        ></Button>
      </div>
    </div>
  );
};

export default Header;
