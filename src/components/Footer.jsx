const Footer = () => {
  const footerLinks = [
    "Privacy Policy",
    "Terms of Use",
    "Service Policy",
    "Site Map",
  ];
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray text-xs">
            More ways to connect with us:{" "}
            <span className="underline text-blue hover:text-blue-600 transform transition-all ease-in">
              Follow our page on Facebook{" "}
            </span>
            or{" "}
            <span className="underline text-blue hover:text-yellow-400 transform transition-all ease-in">
              Leave us a review on our Google business profile
            </span>
          </p>
          <p className="font-semibold text-gray text-xs ">
            Or call <span className="text-blue-600">512 43 616 85</span>
          </p>
        </div>

        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray text-xs">
            Copright @ 2024{" "}
            <span className="text-blue-600">4A Towing services LLC.</span>
            All rights reserved.
          </p>
          <div className="flex">
            {footerLinks.map((link, i) => (
              <p key={link} className="font-semibold text-gray text-xs">
                {link}{" "}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2"> | </span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
