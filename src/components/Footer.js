import React from "react";

function Footer({ name, website, email, phone, bankAccount, bankName, bankHolderName }) {
  return (
    <div>
      <footer className="footer border-t-2 border-gray-300 pt-5">
        <ul className="flex  flex-wrap items-center justify-center">
          <li>
            <span className="font-bold">Your Name:</span> {name}
          </li>
          <li>
            <span className="font-bold">Your E-mail:</span> {email}
          </li>
          <li>
            <span className="font-bold">Phone No:</span> {phone}
          </li>
          <li>
            <span className="font-bold">Bank:</span> {bankName}
          </li>
          <li>
            <span className="font-bold">Account holder name:</span> {bankHolderName}
          </li>
          <li>
            <span className="font-bold">Acc Number:</span> {bankAccount}
          </li>
          <li>
            <span className="font-bold">Website:</span>{" "}
            <a href={website} target="_blank">
              {website}
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
