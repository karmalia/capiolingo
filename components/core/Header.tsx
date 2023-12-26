import React from "react";

type Props = {};

function Header({}: Props) {
  return (
    <div className='border-b-2 border-green-500  text-lg h-24 flex px-12 justify-between items-center'>
      <header className='text-3xl text-green-500'>Capio Lingo Demo</header>
    </div>
  );
}

export default Header;
