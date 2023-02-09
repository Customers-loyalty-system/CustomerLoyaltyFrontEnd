import React from "react";

const Footer = () => {
  return (
    <footer class="pt-4 self-end ">
      <div class="w-full px-6 mx-auto">
        <div class="flex flex-wrap  justify-center -mx-3 ">
          <div class="w-full max-w-full px-3 mt-0 mb-6 shrink-0 lg:mb-0 lg:w-1/2 lg:flex-none">
            <div class="leading-normal text-center text-sm text-slate-500">
              © {new Date().getFullYear() + ", "}
              made  by
              <a
                href="http://localhost:3004"
                class="font-semibold text-slate-700"
              >
                 {" Bountiful"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;