const AppLogo = () => {
  return (
    <>
      <img
        src="/img/light-logo.svg"
        alt="logo"
        className="w-full h-auto block dark:hidden"
      />
      <img
        src="/img/dark-logo.svg"
        alt="logo"
        className="w-full h-auto hidden dark:block"
      />
    </>
  );
};

export default AppLogo;
